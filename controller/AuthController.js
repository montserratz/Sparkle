const User = require('../models/User');
const bcrypt = require('bcryptjs');

const path = require('path'); // importando o core modules path
const basePath = path.join(__dirname, '..', 'views'); //pegando o "caminho" até a pasta templates

console.log(basePath);

module.exports = class UserController {
    static home(req, res) {
        res.render('home');
    }

    static async loginPost(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            req.flash('message', 'Usuario não encontrado');
            res.render('home');
            return;
        } else if (!bcrypt.compareSync(password, user.password)) {
            req.flash('message', 'Acesso negado');
            res.render('home');
            return;
        }

        req.session.userId = user.id;

        req.session.save(() => {
            res.redirect('/pagina-inicial');
        });
    }

    static register(req, res) {
        res.render('cadastrar');
    }

    static async registerPost(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        // verificar campos
        if (!password || !email || !name) {
            req.flash('message', 'Preencha todos os campos');
            res.render('cadastrar');
            return;
        } else if (email.indexOf('@') == -1 || email.indexOf('.com') == -1) {
            req.flash('message', 'Campo de email invalido');
            res.render('cadastrar');
            return;
        }

        // verificar se email já existe no banco de dados
        let emailExists = await User.findOne({ where: { email: email } });

        if (emailExists) {
            req.flash('message', 'Email já cadastrado!');
            res.render('cadastrar');
            return;
        }

        //criptografando password
        const salt = bcrypt.genSaltSync(10);
        const criptPassword = bcrypt.hashSync(password, salt);

        const user = {
            name,
            email,
            password: criptPassword,
        };

        try {
            await User.create(user);
            req.flash('message', 'Usuario cadastrado com sucesso!');
            res.redirect('/');
        } catch (error) {
            console.log(error);
        }
    }

    static logout(req, res) {
        req.session.destroy();
        res.redirect('/');
    }


};
