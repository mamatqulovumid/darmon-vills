import {Flat} from "@/data/sections";
import {syncLights} from "@/api/lights";

export const LIGHTS_KEY = 'lights'

export type Lights = Record<number, number[]>

export const turnOnLight = async (flat: Flat): Promise<void> => {
  const lights: Lights = getLights()
  if (!(flat.row in lights)) {
    lights[flat.row] = []
  }
  if (!lights[flat.row].includes(flat.col)) {
    lights[flat.row].push(flat.col)
  }
  await updateLights(lights)
}

export const turnOffLight = async (flat: Flat): Promise<void> => {
  const lights: Lights = getLights()
  const row: number[] = lights[flat.row]
  if (row && row.includes(flat.col)) {
    lights[flat.row] = row.filter(col => col !== flat.col)
  }
  await updateLights(lights)
}

export const getFlatState = (flat: Flat): boolean => {
  const lights: Lights = getLights()

  return lights[flat.row] && lights[flat.row].includes(flat.col)
}

export const updateLights = async (lights: Lights): Promise<void> => {
  await syncLights(lights)
  setLights(lights)
}

export const getLights = (): Lights => {
  return JSON.parse(localStorage.getItem(LIGHTS_KEY) ?? '{}') as Lights
}

export const setLights = (lights: Lights): void => {
  localStorage.setItem(LIGHTS_KEY, JSON.stringify(lights))
}
