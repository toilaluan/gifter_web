const newsRouter = require('./news')
const loginRouter = require('./login')
function route(app){
    app.use('/login', loginRouter)

    app.use('/news', newsRouter)

    app.get('/', (req, res) => {
        res.render("home")
    })
}

module.exports = route;
