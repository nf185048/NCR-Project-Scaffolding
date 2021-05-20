import { devHelpers } from './helpers'

figma.showUI(__html__, {
  height: 350,
  width: 400
})

figma.ui.onmessage = msg => {
  if (msg.type === 'dev') devHelpers.findComponentKeys()
  if (msg.type === 'create-pages') createPages(msg)
  if (msg.type === 'cancel') figma.closePlugin()
}

// const helper = async () => {
//   const introComponent = await figma.importComponentByKeyAsync(INTRO)
//   let clonedComponent = introComponent.createInstance()
//   let frame = figma.createFrame()
//   frame.constrainProportions = false
//   clonedComponent.children.map(c => {
//     frame.appendChild(c.clone())
//   })

//   return frame
// }

const createPages = async msg => {
  // testing with exporting components

  // let introMaterial = figma.createPage()
  let introMaterial = figma.currentPage
  introMaterial.name = '📄 INTRO MATERIAL ――'

  if (msg.pages.brainstorming) {
    let brainstorming = figma.createPage()
    let sketches = figma.createPage()
    let moodboard = figma.createPage()
    brainstorming.name = '🚀 BRAINSTORMING SESSIONS ――'
    sketches.name = 'Mock Ups & Sketches'
    moodboard.name = 'Moodboard'
  }
  if (msg.pages.research) {
    let research = figma.createPage()
    let prototypes = figma.createPage()
    research.name = '🔎 RESEARCH ――'
    prototypes.name = 'Prototypes'
  }
  if (msg.pages.uxInsights) {
    let uxInsights = figma.createPage()
    let books = figma.createPage()
    let graphs = figma.createPage()
    let personas = figma.createPage()
    let uxJourneyMap = figma.createPage()
    uxInsights.name = '💡 UX INSIGHTS ――'
    books.name = 'Books'
    graphs.name = 'Graphs'
    personas.name = 'Personas'
    uxJourneyMap.name = 'UX Journey Map'
  }
  if (msg.pages.uxFlows) {
    let uxScope = figma.createPage()
    let uxUserFlow = figma.createPage()
    uxScope.name = '📌 UX SCOPE ――'
    uxUserFlow.name = 'UX User Flow'
  }
  if (msg.pages.uxWireframes) {
    let uxWireframes = figma.createPage()
    let wireframesPrototypes = figma.createPage()
    uxWireframes.name = '✏️ UX WIREFRAMES ――'
    wireframesPrototypes.name = 'UX Wireframes & Prototypes'
  }
  if (msg.pages.uiDesign) {
    let uiDesign = figma.createPage()
    let styleGuide = figma.createPage()
    uiDesign.name = '🎨 UI DESIGN ――'
    styleGuide.name = 'UI Style Guide'
  }

  // This is how figma responds back to the ui
  figma.ui.postMessage({
    type: 'create-pages',
    message: `Created Pages`
  })
}
