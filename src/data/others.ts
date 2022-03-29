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
    label: 'Светафоры'
  },
  {
    id: 2,
    value: false,
    label: 'Бордюры'
  },
  {
    id: 3,
    value: false,
    label: 'Фонтаны'
  },
  {
    id: 4,
    value: false,
    label: 'Элемент 1'
  },
  {
    id: 5,
    value: false,
    label: 'Элемент 2'
  },
  {
    id: 6,
    value: false,
    label: 'Элемент 3'
  },
]

export const updateOthers = (others: Other[]) => {
  setOthers(others)
  syncOthers(others)
}

export const getOthers = (): Other[] => {
  const others = localStorage.getItem(OTHERS_KEY)
  if (others) {
    return JSON.parse(others) as Other[]
  }
  return initialOthers
}

export const setOthers = (others: Other[]): void => {
  localStorage.setItem(OTHERS_KEY, JSON.stringify(others))
}
