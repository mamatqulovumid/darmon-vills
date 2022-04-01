import { syncOthers } from '@/api/lights'

export const OTHERS_KEY = 'others'

export type Other = {
  id: number
  value: boolean
  label: string
  image: string
}

export const initialOthers = [
  {
    id: 1,
    value: false,
    label: 'Дорога',
    image: 'https://www.freepnglogos.com/uploads/lamp-png/lamp-png-mrscats-deviantart-7.png'
  },
  {
    id: 2,
    value: false,
    label: 'Cтолба',
    image: 'https://www.freepnglogos.com/uploads/lamp-png/lamp-png-mrscats-deviantart-7.png'
  },
  {
    id: 3,
    value: false,
    label: 'Машина',
    image: 'https://www.freepnglogos.com/uploads/lamp-png/lamp-png-mrscats-deviantart-7.png'
  },
  {
    id: 4,
    value: false,
    label: 'Плафон',
    image: 'https://www.freepnglogos.com/uploads/lamp-png/lamp-png-mrscats-deviantart-7.png'
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
