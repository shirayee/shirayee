#!/usr/bin/env node
'use strict'
const { h, render } = require('ink')
const meow = require('meow')
const importJsx = require('import-jsx')

meow(`
  Usage
    $ shirayee
`)

const ui = importJsx('./ui')

render(h(ui))
