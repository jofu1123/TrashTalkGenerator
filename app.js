// 載入modules
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyPaser = require('body-parser')
const trashTalkGenerator = require('./trashtalk_generator')
const userList = require('./user.json')

// set port
const port = 3000

// set engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set use body-parser
app.use(bodyPaser.urlencoded({ extended: true }))

// set route
app.get('/', (req, res) => {
  res.render('index', { userList: userList.results })
})

app.post('/', (req, res) => {
  const options = req.body
  const trashtalk = trashTalkGenerator(options)

  // 保留checked
  userList.results.forEach(item => {
    delete item.isChecked
    if (item.career === options.career) {
      item.isChecked = "on"
    }
  })
  res.render('index', { trashtalk, userList: userList.results })
})

// start exprss server
app.listen(port, () => {
  console.log(`This is started for http://localhost:${port}`)
})