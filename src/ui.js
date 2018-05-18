'use strict'
const { h, Text } = require('ink')
const SelectInput = require('ink-select-input')
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/shirayee'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/shirayee'
  },
  {
    label: 'HelloWork',
    url: 'https://www.hellowork.go.jp/'
  },
  {
    label: 'My favorite meme video 💯💯💯yee💯💯💯',
    url: 'https://www.youtube.com/watch?v=q6EoRBvdVPQ'
  },
  {
    label: 'Quit',
    action() {
      process.exit()
    }
  }
]

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>my name is shirayee.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
