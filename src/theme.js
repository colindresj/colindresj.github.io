import { createContext } from 'react'

const sizes = {
  bPoint: 600,
  padding: 60,
}

export const themes = {
  dark: {
    accentColor: '#fbebad',
    bgColor: '#060606',
    textColor: '#eee',
    favicon: 'favicon-dark',
    ...sizes,
  },

  light: {
    accentColor: '#3e54fa',
    bgColor: '#fff',
    textColor: '#000',
    favicon: 'favicon-light',
    ...sizes,
  },
}

export default createContext({ themes })
