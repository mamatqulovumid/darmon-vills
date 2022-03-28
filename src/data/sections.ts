export enum ROW {
  FIRST = 0,
  SECOND,
  THIRD,
  FOURTH,
  FIFTH,
  SIX,
  SEVENTH,
  EIGHTH,
}

export enum COL {
  FIRST = 0,
  SECOND,
  THIRD,
  FOURTH,
  FIFTH,
  SIX,
  SEVENTH,
  EIGHTH,
}

export interface Section {
  id: number
  name: string
}

export interface House {
  id: number
  section_id: number
  col: number
  row: number
}

const sections: Section[] = [
  {
    id: 1,
    name: 'A'
  },
  {
    id: 2,
    name: 'B'
  },
  {
    id: 3,
    name: 'C'
  },
  {
    id: 4,
    name: 'D'
  },
  {
    id: 5,
    name: 'E'
  },
  {
    id: 6,
    name: 'F'
  },
  {
    id: 7,
    name: 'G'
  },
  {
    id: 8,
    name: 'G'
  },
  {
    id: 9,
    name: 'G'
  },
  {
    id: 10,
    name: 'Others'
  },
];

const houses: House[] = [
  {
    id: 1,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.FIRST
  },
  {
    id: 2,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.SECOND
  }
]

export const getSections = () => sections;

export const getSection = (id: number): Section | undefined => {
  return sections.find((section => section.id === id))
}

export const getSectionHouses = (id: number): House[] => {
  return houses.filter(({section_id}: House) => section_id === id)
}

export const getHouse = (id: number): House | undefined => {
  return houses.find((house => house.id === id))
}