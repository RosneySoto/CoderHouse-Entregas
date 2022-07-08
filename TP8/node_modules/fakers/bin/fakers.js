#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package')
const fakers = require('..')

program
  .version(pkg.version)
  .usage('<method>')
  .on('--help', console.log)
  .parse(process.argv)
  .args.length || program.help()

const [ method ] = program.args

// TODO: Implement module cli
console.log(fakers[method]())
