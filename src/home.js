var html = require('choo/html')

module.exports = home

function home (state, emit) {
  return html`
    <div>
      <h1>hypervision-browser</h1>
      <h3><a href="/broadcast">broadcast</a></h3>
      <h3><a href="/watch">watch</a></h3>
      <br /><br />
      <h3><a href="https://github.com/louiscenter/hypervision-browser/">** instructions **</a></h3>
    </div>
  `
}
