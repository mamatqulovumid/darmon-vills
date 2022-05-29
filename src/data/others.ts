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
    label: 'CтолбЫ'
  },
  {
    id: 3,
    value: false,
    label: 'Машины'
  },
  {
    id: 4,
    value: false,
    label: 'Светильники'
  }
]

export const getEmptyOthers = (): Other[] => {
  return initialOthers
}

export const getFilledOthers = (): Other[] => {
  return [...initialOthers].map(other => ({
    ...other,
    value: true
  }))
}

export const setOthers = (others: Other[]): void => {
  localStorage.setItem(OTHERS_KEY, JSON.stringify(others))
}
