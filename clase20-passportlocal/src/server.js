
// _________________________ passport _______________________________
const passport = require('passport')
const { initializePassport } = require('./config/passport.config.js')

app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/c58070',
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        ttl: 150000
    }),
    secret: 'p@L@BR@s3CR3T@',
    resave: true,
    saveUninitialized: true
}))
// nuevo de passport local ____________________________
initializePassport()
app.use(passport.initialize())
app.use(passport.session())



