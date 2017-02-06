const lodash = require('lodash')

function test() {
    return lodash.get({ myVar: 'Hello from test' }, 'myVar');
}

module.exports = {
    test
}
