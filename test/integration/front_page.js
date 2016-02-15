var path = require('path')

module.exports = {
  'homepage has "You are doing Nothing" status' : function (browser) {
    browser
      .url( "file:" + path.join(__dirname, '../../' + 'dist/index.html') )
      .waitForElementVisible('body', 1000)
      .pause(1000)

    browser.assert.elementPresent('.phase')

    browser.expect.element('div.status').text.to.contain('You are doing nothing')

  }, 'you can start the timer' : function (browser) {
    // click the a start timer buttom
    // wait some
    // check the timer is right

    
    browser.end()
  }
}
