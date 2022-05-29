import { COL, ROW } from "@/data/sections";

export const LIGHTS_KEY = 'lights'

export type Lights = Record<number, number[]>

export const getLights = (): Lights => {
  return JSON.parse(localStorage.getItem(LIGHTS_KEY) ?? '{}') as Lights
}

export const setLights = (lights: Lights): void => {
  localStorage.setItem(LIGHTS_KEY, JSON.stringify(lights))
}

export const getFilledLights = (): Lights => {
  const lights: Lights = {}

  Object.keys(ROW).forEach(row => {
    if (!isNaN(parseInt(row))) {
      lights[parseInt(row)] = Object.keys(COL)
        .filter(col => !isNaN(parseInt(col)))
        .map(col => parseInt(col))
    }
  })

  return lights
}

export const getEmptyLights = (): Lights => {
  const lights: Lights = {
    ...getLights()
  }

  for (const row in lights) {
    lights[row] = []
  }

  return lights
}
