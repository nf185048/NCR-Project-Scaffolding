import { isComponentNode } from '@figma-plugin/helpers'

const printHeading = (str: string) => {
  console.log(
    `%c${str.toUpperCase()}`,
    "font-weight: bold, font-size: 24, opacity: .67, font-family: 'system-ui', sans-serif"
  )
  console.log(
    `%c${str
      .split('')
      .map(() => '=')
      .join('')}`,
    "font-weight: bold, font-size: 24, opacity: .67, font-family: 'system-ui', sans-serif"
  )
}

const printKeyValue = (key: string, value: string) => {
  console.log(`${key}: ${value}`)
}

export const print = {
  pair: printKeyValue,
  heading: printHeading
}

const findComponentKeys = (): void => {
  print.heading('Component Keys')
  figma.currentPage.findAll(isComponentNode).forEach(c => {
    if ('key' in c) {
      print.pair(c.name, c.key)
    }
  })
}

export const devHelpers = {
  findComponentKeys
}
