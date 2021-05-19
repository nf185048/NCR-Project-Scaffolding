import * as React from 'react'
import '../styles/ui.css'
import { Pages } from '../../plugin/types'

declare function require(path: string): any

const App = ({}) => {
  // function printChecked() {
  //   var items = document.getElementsByName('acs')
  //   var selectedItems = ''
  //   for (var i = 0; i < items.length; i++) {
  //     if (items[i].type == 'checkbox' && items[i].checked == true) selectedItems += items[i].value + '\n'
  //   }
  //   alert(selectedItems)
  // }

  const onCreate = React.useCallback(() => {
    let pages: Pages = {
      introMaterial: false,
      brainstorming: false,
      research: false,
      uxInsights: false,
      uxFlows: false,
      uxWireframes: false,
      uiDesign: false
    }

    parent.postMessage({ pluginMessage: { type: 'create-pages' }, pages }, '*')
  }, [])

  const onCancel = React.useCallback(() => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }, [])

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = event => {
      const { type, message } = event.data.pluginMessage
      if (type === 'create-pages') {
        console.log(`Figma Says: ${message}`)
      }
    }
  }, [])

  return (
    <div>
      <img src={require('../assets/logo.svg')} />
      <h2>NCR Project Scaffolding</h2>
      <h6>Pages:</h6>
      <input type='checkbox' value='introMaterial' />
      introMaterial <br />
      <input type='checkbox' value='brainStorming' />
      brainStorming <br />
      <input type='checkbox' value='research' />
      research <br />
      <button id='create' onClick={onCreate}>
        Create
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default App
