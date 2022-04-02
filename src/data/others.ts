import { syncOthers } from '@/api/lights'

export const OTHERS_KEY = 'others'

export type Other = {
  id: number
  value: boolean
  label: string
}

export const initialOthers = [
  {
    id: 1,
    value: false,
    label: 'Дорога'
  },
  {
    id: 2,
    value: false,
    label: 'Cтолба'
  },
  {
    id: 3,
    value: false,
    label: 'Машина'
  },
  {
    id: 4,
    value: false,
    label: 'Плафон'
  }
]

export const updateOthers = (others: Other[]) => {
  setOthers(others)
  syncOthers(others)
}

export const getOthers = (): Other[] => {
  return initialOthers
}

export const setOthers = (others: Other[]): void => {
  localStorage.setItem(OTHERS_KEY, JSON.stringify(others))
}
