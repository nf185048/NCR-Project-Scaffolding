figma.showUI(__html__)

figma.ui.onmessage = msg => {
  if (msg.type === 'create-pages') {
    let IntroMaterial = figma.createPage()
    let Brainstorming = figma.createPage()
    let Research = figma.createPage()
    let UXInsights = figma.createPage()
    let UXFlows = figma.createPage()
    let UXWireframes = figma.createPage()
    let UIDesign = figma.createPage()
    let Cover = figma.currentPage
    let CoverFrame = figma.createFrame()
    let CoverHead = figma.createText()
    let CoverDesc = figma.createText()

    figma.currentPage.name = '⬜️ Cover'
    IntroMaterial.name = 'Intro Material'
    Brainstorming.name = 'Brainstorming'
    Research.name = 'Research'
    UXInsights.name = 'UX Insights'
    UXFlows.name = 'UX Flows'
    UXWireframes.name = 'UX Wireframes'
    UIDesign.name = 'UI Design'
    CoverFrame.name = 'Cover'

    Cover.appendChild(CoverFrame)
    CoverFrame.appendChild(CoverHead)
    CoverFrame.appendChild(CoverDesc)
    CoverFrame.resize(1240, 640)

    // This is how figma responds back to the ui
    figma.ui.postMessage({
      type: 'create-pages',
      message: `Created Pages`
    })
  }

  figma.closePlugin()
}
