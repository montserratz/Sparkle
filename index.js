const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
const conn = require('./db/conn');
const exphbs = require('express-handlebars');
const path = require('path'); // importando o core modules path
const basePath = path.join(__dirname, 'views'); //pegando o "caminho" até a pasta templates
// models
const Roupa = require('./models/Roupas');
const User = require('./models/User');

// routes
const authRoutes = require('./router/authRouter');

const roupasRoutes = require('./router/roupasRoutes');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static('public'));

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// session middleware
app.use(
  session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),

    cookie: {
      secure: false,
      maxAge: 360000,
      httpOnly: true,
    },
  })
);

// flahs messages
app.use(flash());

// set session to res
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }

  next();
});

app.use(express.static('public'));

app.use('/', authRoutes);

app.use(roupasRoutes);

app.use('/pagina-inicial', (req, res) => {
  res.render('pagina_inicial');
});

app.use('/pecadecima', (req, res) => {
  res.render('pecadecima');
});
app.use('/pecadebaixo', (req, res) => {
  res.render('pecadebaixo');
});
app.use('/calssado', (req, res) => {
  res.render('calcados');
});
app.use('/acessorio', (req, res) => {
  res.render('acessorio');
});

app.use((req, res) => {
  res.status(404).render('404');
});

conn
  .sync({force: true})
  .then(() => {
    app.listen(port);
  })
  .catch((error) => {
    console.log('app não funcionando', error);
  });
