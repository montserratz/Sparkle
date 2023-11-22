const Roupas = require('../models/Roupas');
const User = require('../models/User');
const sequelize = require('sequelize');

module.exports = class roupasController {
  // Create
  static createroupas(req, res) {
    console.log('Gato', req.session.userId);
    res.render('roupas/addroupas');
  }

  static async createroupasSave(req, res) {
    const look = {
      parte_cima: req.body.parte_cima,
      parte_baixo: req.body.parte_baixo,
      calcado: req.body.calcado,
      acessorio: req.body.acessorio,
      UserId: req.session.userId,
    };

    try {
      await Roupas.create(look);
    } catch (err) {
      console.log(err);
    }

    // const lookCriado = await Roupas.findOne({
    //   where: {
    //     parte_cima: req.body.parte_cima,
    //     parte_baixo: req.body.parte_baixo,
    //     calcado: req.body.calcado,
    //     acessorio: req.body.acessorio,
    //   },
    //   raw: true,
    // });

    // console.log(lookCriado);

    return res.redirect('/all-looks');
  }

  //Show
  static async showroupas(req, res) {
    const looks = await Roupas.findAll({
      order: sequelize.literal('createdAt DESC'),
      include: User,
      raw: true,
      nest: true,
    });

    // console.log(looks[1]);

    res.render('AllLooks', { looks });
  }

  // Delete
  static async deleteroupas(req, res) {
    await Roupas.destroy({ where: { id: req.body.id } });
    res.redirect('/roupas');
  }

  // Update
  static async updateroupas(req, res) {
    const lookCriado = await Roupas.findOne({
      where: { id: req.params.id },
      raw: true,
    });
    res.render('looks', { lookCriado });
  }

  static async updateroupasave(req, res) {
    console.log(req.body);

    await Roupas.update(req.body, { where: { id: req.params.id } });

    res.redirect('/all-looks');
  }

  // Done
  static async doneroupas(req, res) {
    const id = req.body.id;

    const roupas = await Roupas.findOne({ where: { id: id }, raw: true });

    const roupasupdate = {
      done: roupas.done === 0 ? true : false,
    };

    await Roupas.update(roupasupdate, { where: { id: id } });

    res.render('roupas/looks');
  }

  static showLooks(req, res) {
    res.render('roupas/updateroupas', { roupas });
  }
};
