const api = require('api.bundle')
const vendor = require('vendor.bundle')
const _ = require('lodash')

console.log('api.test() =', api.test())
console.log('_.get() = ', _.get({myVar: 'hello from node'}, 'myVar'))


