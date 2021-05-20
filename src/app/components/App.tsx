import * as React from 'react'
import '../styles/ui.css'
import { Pages } from '../../plugin/types'
import { Title } from 'react-figma-plugin-ds'

declare function require(path: string): any

const App = ({}) => {
  const brainstorming = () => (document.getElementById('brainstorming') as HTMLInputElement)?.checked
  const research = () => (document.getElementById('research') as HTMLInputElement)?.checked
  const uxInsights = () => (document.getElementById('uxInsights') as HTMLInputElement)?.checked
  const uxFlows = () => (document.getElementById('uxFlows') as HTMLInputElement)?.checked
  const uxWireframes = () => (document.getElementById('uxWireframes') as HTMLInputElement)?.checked
  const uiDesign = () => (document.getElementById('uiDesign') as HTMLInputElement)?.checked

  const onCreate = React.useCallback(() => {
    let pages: Pages = {
      brainstorming: brainstorming(),
      research: research(),
      uxInsights: uxInsights(),
      uxFlows: uxFlows(),
      uxWireframes: uxWireframes(),
      uiDesign: uiDesign()
    }

    parent.postMessage({ pluginMessage: { type: 'create-pages', pages } }, '*')
  }, [])

  const onCancel = React.useCallback(() => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }, [])

  const onDevHelper = React.useCallback(() => {
    parent.postMessage({ pluginMessage: { type: 'dev' } }, '*')
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
    <>
      <img src={require('../assets/logo.svg')} />
      <Title>NCR Project Scaffolding</Title>

      <div className='container'>
        <h3>Pages:</h3>
        <form>
          <input type='checkbox' id='brainstorming' /> Brainstorming <br />
          <input type='checkbox' id='research' /> Research <br />
          <input type='checkbox' id='uxInsights' /> UX Insights <br />
          <input type='checkbox' id='uxFlows' /> UX Flows <br />
          <input type='checkbox' id='uxWireframes' /> UX Wireframes <br />
          <input type='checkbox' id='uiDesign' /> UI Design <br />
        </form>
      </div>

      <div className='Buttongroup'>
        <button id='create' onClick={onCreate}>
          Create
        </button>
        <button id='create' onClick={onDevHelper}>
          Dev Helper
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </>
  )
}

export default App
