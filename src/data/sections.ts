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
  NINTH,
  TENTH,
  ELEVENTH,
  TWELFTH,
  THIRTEENTH,
  FOURTEENTH,
  FIFTEENTH,
  SIXTEENTH
}

export interface Area {
  id: number
  name: string
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
  area_id?: number
}

const areas: Area[] = [
  {
    id: 1,
    name: '450-500'
  },
  {
    id: 2,
    name: '500-550'
  },
  {
    id: 3,
    name: '550-600'
  },
  {
    id: 4,
    name: '600-650'
  },
  {
    id: 5,
    name: '650-700'
  },
  {
    id: 6,
    name: '700-750'
  },
  {
    id: 7,
    name: '750-800'
  },
  {
    id: 8,
    name: '>1000'
  }
]

const sections: Section[] = [
  {
    id: 1,
    name: 'A',
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
    name: 'H'
  },
  {
    id: 9,
    name: 'I'
  },
  {
    id: 10,
    name: 'J'
  },
  {
    id: 11,
    name: 'K'
  },
  {
    id: 12,
    name: 'L'
  }
];

const houses: House[] = [
  {
    id: 1,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.FIRST,
    area_id: 8
  },
  {
    id: 2,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.SECOND,
    area_id: 8
  },
  {
    id: 3,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.THIRD,
    area_id: 8
  },
  {
    id: 4,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.FOURTH,
    area_id: 8
  },
  {
    id: 5,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.SIX,
    area_id: 8
  },
  {
    id: 6,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.FIFTH,
    area_id: 3
  },
  {
    id: 7,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.SEVENTH,
    area_id: 5
  },
  {
    id: 8,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.EIGHTH,
    area_id: 4
  },
  {
    id: 9,
    section_id: 2,
    row: ROW.SECOND,
    col: COL.FIRST,
    area_id: 4
  },
  {
    id: 10,
    section_id: 2,
    row: ROW.SECOND,
    col: COL.SECOND,
    area_id: 3
  },
  {
    id: 11,
    section_id: 2,
    row: ROW.SECOND,
    col: COL.SIX,
    area_id: 4
  },
  {
    id: 12,
    section_id: 2,
    row: ROW.SECOND,
    col: COL.FIFTH,
    area_id: 6
  },
  {
    id: 13,
    section_id: 2,
    row: ROW.SECOND,
    col: COL.SEVENTH,
    area_id: 4
  },
  {
    id: 14,
    section_id: 2,
    row: ROW.SECOND,
    col: COL.EIGHTH,
    area_id: 4
  },
  {
    id: 15,
    section_id: 2,
    row: ROW.THIRD,
    col: COL.FIRST,
    area_id: 4
  },
  {
    id: 16,
    section_id: 3,
    row: ROW.THIRD,
    col: COL.FOURTH,
    area_id: 4
  },
  {
    id: 17,
    section_id: 3,
    row: ROW.THIRD,
    col: COL.FIFTH,
    area_id: 4
  },
  {
    id: 18,
    section_id: 3,
    row: ROW.THIRD,
    col: COL.SIX,
    area_id: 3
  },
  {
    id: 19,
    section_id: 3,
    row: ROW.THIRD,
    col: COL.SEVENTH,
    area_id: 3
  },
  {
    id: 20,
    section_id: 3,
    row: ROW.THIRD,
    col: COL.EIGHTH,
    area_id: 3
  },
  {
    id: 21,
    section_id: 3,
    row: ROW.FOURTH,
    col: COL.THIRD,
    area_id: 5
  },
  {
    id: 22,
    section_id: 3,
    row: ROW.FOURTH,
    col: COL.FOURTH,
    area_id: 5
  },
  {
    id: 23,
    section_id: 3,
    row: ROW.FOURTH,
    col: COL.FIFTH,
    area_id: 4
  },
  {
    id: 24,
    section_id: 3,
    row: ROW.FOURTH,
    col: COL.SIX,
    area_id: 4
  },
  {
    id: 25,
    section_id: 3,
    row: ROW.FOURTH,
    col: COL.SEVENTH,
    area_id: 4
  },
  {
    id: 26,
    section_id: 4,
    row: ROW.FIFTH,
    col: COL.FOURTH,
    area_id: 6
  },
  {
    id: 27,
    section_id: 4,
    row: ROW.FIFTH,
    col: COL.FIFTH,
    area_id: 5
  },
  {
    id: 28,
    section_id: 4,
    row: ROW.FIFTH,
    col: COL.SIX,
    area_id: 4
  },
  {
    id: 29,
    section_id: 4,
    row: ROW.FIFTH,
    col: COL.SEVENTH,
    area_id: 4
  },
  {
    id: 30,
    section_id: 4,
    row: ROW.FIFTH,
    col: COL.EIGHTH,
    area_id: 4
  },
  {
    id: 31,
    section_id: 4,
    row: ROW.SIX,
    col: COL.FIFTH,
    area_id: 6
  },
  {
    id: 32,
    section_id: 4,
    row: ROW.SIX,
    col: COL.SIX,
    area_id: 5
  },
  {
    id: 33,
    section_id: 4,
    row: ROW.SIX,
    col: COL.SEVENTH,
    area_id: 4
  },
  {
    id: 34,
    section_id: 4,
    row: ROW.SIX,
    col: COL.EIGHTH,
    area_id: 4
  },
  {
    id: 35,
    section_id: 4,
    row: ROW.SEVENTH,
    col: COL.FIRST,
    area_id: 4
  },
  {
    id: 36,
    section_id: 5,
    row: ROW.SEVENTH,
    col: COL.SIX,
    area_id: 7
  },
  {
    id: 37,
    section_id: 5,
    row: ROW.SEVENTH,
    col: COL.SEVENTH,
    area_id: 5
  },
  {
    id: 38,
    section_id: 5,
    row: ROW.SEVENTH,
    col: COL.EIGHTH,
    area_id: 4
  },
  {
    id: 39,
    section_id: 5,
    row: ROW.EIGHTH,
    col: COL.FIRST,
    area_id: 4
  },
  {
    id: 40,
    section_id: 5,
    row: ROW.EIGHTH,
    col: COL.SECOND,
    area_id: 4
  },
  {
    id: 41,
    section_id: 5,
    row: ROW.EIGHTH,
    col: COL.FIFTH,
    area_id: 6
  },
  {
    id: 42,
    section_id: 5,
    row: ROW.EIGHTH,
    col: COL.SIX,
    area_id: 2
  },
  {
    id: 43,
    section_id: 5,
    row: ROW.EIGHTH,
    col: COL.SEVENTH,
    area_id: 3
  },
  {
    id: 44,
    section_id: 5,
    row: ROW.EIGHTH,
    col: COL.EIGHTH,
    area_id: 3
  },
  {
    id: 45,
    section_id: 5,
    row: ROW.FIRST,
    col: COL.NINTH,
    area_id: 2
  },
  {
    id: 46,
    section_id: 6,
    row: ROW.FOURTH,
    col: COL.SIXTEENTH,
    area_id: 4
  },
  {
    id: 47,
    section_id: 6,
    row: ROW.FOURTH,
    col: COL.FIFTEENTH,
    area_id: 4
  },
  {
    id: 48,
    section_id: 6,
    row: ROW.FOURTH,
    col: COL.FOURTEENTH,
    area_id: 4
  },
  {
    id: 49,
    section_id: 7,
    row: ROW.SECOND,
    col: COL.THIRD,
    area_id: 5
  },
  {
    id: 50,
    section_id: 7,
    row: ROW.SECOND,
    col: COL.FOURTH,
    area_id: 6
  },
  {
    id: 51,
    section_id: 7,
    row: ROW.FOURTH,
    col: COL.THIRTEENTH,
    area_id: 6
  },
  {
    id: 52,
    section_id: 7,
    row: ROW.THIRD,
    col: COL.SECOND,
    area_id: 7
  },
  {
    id: 53,
    section_id: 7,
    row: ROW.THIRD,
    col: COL.THIRD,
    area_id: 7
  },
  {
    id: 54,
    section_id: 7,
    row: ROW.FOURTH,
    col: COL.TWELFTH,
    area_id: 7
  },
  {
    id: 55,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.FIRST,
    area_id: 5
  },
  {
    id: 56,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.SECOND,
    area_id: 5
  },
  {
    id: 57,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.EIGHTH,
    area_id: 4
  },
  {
    id: 58,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.ELEVENTH,
    area_id: 8
  },
  {
    id: 59,
    section_id: 8,
    row: ROW.FIFTH,
    col: COL.FIRST,
    area_id: 4
  },
  {
    id: 60,
    section_id: 8,
    row: ROW.FIFTH,
    col: COL.SECOND,
    area_id: 4
  },
  {
    id: 61,
    section_id: 8,
    row: ROW.FIFTH,
    col: COL.THIRD,
    area_id: 5
  },
  {
    id: 62,
    section_id: 9,
    row: ROW.SIX,
    col: COL.FOURTH,
    area_id: 4
  },
  {
    id: 63,
    section_id: 9,
    row: ROW.SIX,
    col: COL.THIRD,
    area_id: 4
  },
  {
    id: 64,
    section_id: 9,
    row: ROW.SIX,
    col: COL.SECOND,
    area_id: 4
  },
  {
    id: 65,
    section_id: 9,
    row: ROW.SIX,
    col: COL.FIRST,
    area_id: 5
  },
  {
    id: 66,
    section_id: 9,
    row: ROW.SEVENTH,
    col: COL.SECOND,
    area_id: 4
  },
  {
    id: 67,
    section_id: 9,
    row: ROW.SEVENTH,
    col: COL.THIRD,
    area_id: 4
  },
  {
    id: 68,
    section_id: 9,
    row: ROW.SEVENTH,
    col: COL.FOURTH,
    area_id: 4
  },
  {
    id: 69,
    section_id: 9,
    row: ROW.SEVENTH,
    col: COL.FIFTH,
    area_id: 5
  },
  {
    id: 70,
    section_id: 10,
    row: ROW.EIGHTH,
    col: COL.THIRD,
    area_id: 4
  },
  {
    id: 71,
    section_id: 10,
    row: ROW.EIGHTH,
    col: COL.FOURTH,
    area_id: 4
  },
  {
    id: 72,
    section_id: 10,
    row: ROW.THIRD,
    col: COL.TENTH,
    area_id: 4
  },
  {
    id: 73,
    section_id: 10,
    row: ROW.THIRD,
    col: COL.TWELFTH,
    area_id: 5
  },
  {
    id: 74,
    section_id: 10,
    row: ROW.FIRST,
    col: COL.TENTH,
    area_id: 3
  },
  {
    id: 75,
    section_id: 10,
    row: ROW.FIRST,
    col: COL.ELEVENTH,
    area_id: 4
  },
  {
    id: 76,
    section_id: 10,
    row: ROW.FIRST,
    col: COL.TWELFTH,
    area_id: 4
  },
  {
    id: 77,
    section_id: 10,
    row: ROW.FIRST,
    col: COL.THIRTEENTH,
    area_id: 5
  },
  {
    id: 78,
    section_id: 11,
    row: ROW.THIRD,
    col: COL.FOURTEENTH,
    area_id: 3
  },
  {
    id: 79,
    section_id: 11,
    row: ROW.FIRST,
    col: COL.FIFTEENTH,
    area_id: 4
  },
  {
    id: 80,
    section_id: 11,
    row: ROW.FIRST,
    col: COL.SIXTEENTH,
    area_id: 4
  },
  {
    id: 81,
    section_id: 11,
    row: ROW.SECOND,
    col: COL.NINTH,
    area_id: 5
  },
  {
    id: 82,
    section_id: 11,
    row: ROW.SECOND,
    col: COL.TENTH,
    area_id: 4
  },
  {
    id: 83,
    section_id: 11,
    row: ROW.SECOND,
    col: COL.ELEVENTH,
    area_id: 4
  },
  {
    id: 84,
    section_id: 11,
    row: ROW.SECOND,
    col: COL.TWELFTH,
    area_id: 4
  },
  {
    id: 85,
    section_id: 11,
    row: ROW.SECOND,
    col: COL.THIRTEENTH,
    area_id: 5
  },
  {
    id: 86,
    section_id: 12,
    row: ROW.THIRD,
    col: COL.THIRTEENTH,
    area_id: 1
  },
  {
    id: 87,
    section_id: 12,
    row: ROW.THIRD,
    col: COL.ELEVENTH,
    area_id: 3
  },
  {
    id: 88,
    section_id: 12,
    row: ROW.SECOND,
    col: COL.FIFTEENTH,
    area_id: 4
  },
  {
    id: 89,
    section_id: 12,
    row: ROW.SECOND,
    col: COL.SIXTEENTH,
    area_id: 4
  },
  {
    id: 90,
    section_id: 12,
    row: ROW.THIRD,
    col: COL.NINTH,
    area_id: 5
  }
]

export const getSections = () => sections;
export const getAreas = () => areas;
export const getHouses = () => houses;

export const getSection = (id: number): Section | undefined => {
  return sections.find(section => section.id === id)
}

export const getArea = (id: number): Area | undefined => {
  return areas.find(area => area.id === id)
}

export const getAreaHouses = (id: number): House[] => {
  return houses.filter(({ area_id }) => area_id === id)
}

export const getSectionHouses = (id: number): House[] => {
  return houses.filter(({ section_id }: House) => section_id === id)
}

export const getHouse = (id: number): House | undefined => {
  return houses.find((house => house.id === id))
}

export const getCols = (): number[] => {
  const cols: number[] = []

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Object.values(COL).forEach((col: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!isNaN(parseInt(col))) {
      cols.push(parseInt(col))
    }
  })

  return cols
}
