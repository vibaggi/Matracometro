var express     = require('express')
var morgan      = require('morgan')
var bodyParser  = require('body-parser')
var cors        = require('cors')

var app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({'extended':'true'}))
app.use(bodyParser.json())
app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Orgin", "*")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")    
    next()
})

app.use(express.static('build'))

app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), function(){
    console.log("Express server running in "+ app.get('port') );
})

