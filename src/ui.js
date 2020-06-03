import { h, Text, Component } from 'ink'
import SelectInput from 'ink-select-input'
import opn from 'opn'

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
    url: 'https://twitter.com/macoplz'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/shirayee'
  },
  {
    label: 'Quit',
    action () {
      process.exit()
    }
  }
]

class Ui extends Component {
  render () {
    return (
      <div>
        <br />
        <div>
          <Text>my name is shirayee.</Text>
        </div>
        <br />
        <SelectInput items={items} onSelect={handleSelect} />
      </div>
    )
  }
}

export default Ui
