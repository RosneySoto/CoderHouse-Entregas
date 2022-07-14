/*
  ## Mock.Random

  工具类，用于生成各种随机数据。
*/

const basic = require('./basic')
const date = require('./date')
const image = require('./image')
const color = require('./color')
const text = require('./text')
const name = require('./name')
const web = require('./web')
const address = require('./address')
const helper = require('./helper')
const misc = require('./misc')

module.exports = Object.assign({}, basic, date, image, color, text, name, web, address, helper, misc)
