import {House} from "@/data/sections";
import {syncLights} from "@/api/lights";

export const LIGHTS_KEY = 'lights'

export type Lights = Record<number, number[]>

export const turnOnLight = async (flat: House): Promise<void> => {
  const lights: Lights = getLights()
  if (!(flat.row in lights)) {
    lights[flat.row] = []
  }
  if (!lights[flat.row].includes(flat.col)) {
    lights[flat.row].push(flat.col)
  }
  await updateLights(lights)
}

export const turnOffLight = async (house: House): Promise<void> => {
  const lights: Lights = getLights()
  const row: number[] = lights[house.row]
  if (row && row.includes(house.col)) {
    lights[house.row] = row.filter(col => col !== house.col)
  }
  await updateLights(lights)
}

export const getHouseState = (house: House): boolean => {
  const lights: Lights = getLights()

  return lights[house.row] && lights[house.row].includes(house.col)
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
