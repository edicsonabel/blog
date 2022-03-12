export const mainColors = {
  primary: '#4ECDC4',
  secondary: '#EEF36A',
  light: '#F5F3F5',
  dark: '#242325',
  blue_dark: '#001021',
  gray_dark: '#3C4043',
  black: '#000a14'
}

const arrColors = Object.keys(mainColors)

const objRes = {}

for (let i = 0; i < arrColors.length; i++) {
  for (let j = 0; j < arrColors.length; j++) {
    if (i !== j) {
      const key = `${arrColors[i]}_to_${arrColors[j]}`
      const value = { light: mainColors[arrColors[i]], dark: mainColors[arrColors[j]] }
      objRes[key] = value
    }
  }
}

export const toColors = objRes
