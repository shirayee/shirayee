#!/usr/bin/env node
import { h, render } from 'ink'
import meow from 'meow'
import ui from './ui'

meow(`
  Usage
    $ shirayee
`)

render(h(ui))
