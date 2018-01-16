var choo = require('choo')
var app = choo()

app.use(function (state, emitter) {
  state.broadcast = {}
  state.broadcast.key = ''

  emitter.on('broadcast:key:set', function (data) {
    state.broadcast.key = data
    emitter.emit('render')
  })
})

app.route('/', require('./home'))
app.route('/broadcast', require('./broadcast'))
app.route('/watch', require('./watch'))

document.body.appendChild(app.start())
