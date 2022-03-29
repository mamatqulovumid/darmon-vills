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
  SIXTEENTH,
  SEVENTEENTH,
  EIGHTEENTH,
  NINETEENTH,
  TWENTIETH,
  TWENTY_FIRST,
  TWENTY_SECOND,
  TWENTY_THIRD,
  TWENTY_FOURTH,
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
    name: 'H'
  }
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
  },
  {
    id: 3,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.THIRD
  },
  {
    id: 4,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.FOURTH
  },
  {
    id: 5,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.FIFTH
  },
  {
    id: 6,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.SIX
  },
  {
    id: 7,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.SEVENTH
  },
  {
    id: 8,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.EIGHTH
  },
  {
    id: 9,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.NINTH
  },
  {
    id: 10,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.TENTH
  },
  {
    id: 11,
    section_id: 1,
    row: ROW.FIRST,
    col: COL.ELEVENTH
  },
  {
    id: 12,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.TWELFTH
  },
  {
    id: 13,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.THIRTEENTH
  },
  {
    id: 14,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.FOURTEENTH
  },
  {
    id: 15,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.FIFTEENTH
  },
  {
    id: 16,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.SIXTEENTH
  },
  {
    id: 17,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.SEVENTEENTH
  },
  {
    id: 18,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.EIGHTEENTH
  },
  {
    id: 19,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.NINETEENTH
  },
  {
    id: 20,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.TWENTIETH
  },
  {
    id: 21,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.TWENTY_FIRST
  },
  {
    id: 22,
    section_id: 2,
    row: ROW.FIRST,
    col: COL.TWENTY_SECOND
  },
  {
    id: 23,
    section_id: 3,
    row: ROW.FIRST,
    col: COL.TWENTY_THIRD
  },
  {
    id: 24,
    section_id: 3,
    row: ROW.FIRST,
    col: COL.TWENTY_FOURTH
  },
  {
    id: 25,
    section_id: 3,
    row: ROW.SECOND,
    col: COL.FIRST
  },
  {
    id: 26,
    section_id: 3,
    row: ROW.SECOND,
    col: COL.SECOND
  },
  {
    id: 27,
    section_id: 3,
    row: ROW.SECOND,
    col: COL.THIRD
  },
  {
    id: 28,
    section_id: 3,
    row: ROW.SECOND,
    col: COL.FOURTH
  },
  {
    id: 29,
    section_id: 3,
    row: ROW.SECOND,
    col: COL.FIFTH
  },
  {
    id: 30,
    section_id: 3,
    row: ROW.SECOND,
    col: COL.SIX
  },
  {
    id: 31,
    section_id: 3,
    row: ROW.SECOND,
    col: COL.SEVENTH
  },
  {
    id: 32,
    section_id: 3,
    row: ROW.SECOND,
    col: COL.EIGHTH
  },
  {
    id: 33,
    section_id: 3,
    row: ROW.SECOND,
    col: COL.NINTH
  },
  {
    id: 34,
    section_id: 4,
    row: ROW.SECOND,
    col: COL.TENTH
  },
  {
    id: 35,
    section_id: 4,
    row: ROW.SECOND,
    col: COL.ELEVENTH
  },
  {
    id: 36,
    section_id: 4,
    row: ROW.SECOND,
    col: COL.TWELFTH
  },
  {
    id: 37,
    section_id: 4,
    row: ROW.SECOND,
    col: COL.THIRTEENTH
  },
  {
    id: 38,
    section_id: 4,
    row: ROW.SECOND,
    col: COL.FOURTEENTH
  },
  {
    id: 39,
    section_id: 4,
    row: ROW.SECOND,
    col: COL.FIFTEENTH
  },
  {
    id: 40,
    section_id: 4,
    row: ROW.SECOND,
    col: COL.SIXTEENTH
  },
  {
    id: 41,
    section_id: 4,
    row: ROW.SECOND,
    col: COL.SEVENTEENTH
  },
  {
    id: 42,
    section_id: 4,
    row: ROW.SECOND,
    col: COL.EIGHTEENTH
  },
  {
    id: 43,
    section_id: 4,
    row: ROW.SECOND,
    col: COL.NINETEENTH
  },
  {
    id: 44,
    section_id: 4,
    row: ROW.SECOND,
    col: COL.TWENTIETH
  },
  {
    id: 45,
    section_id: 5,
    row: ROW.SECOND,
    col: COL.TWENTY_FIRST
  },
  {
    id: 46,
    section_id: 5,
    row: ROW.SECOND,
    col: COL.TWENTY_SECOND
  },
  {
    id: 47,
    section_id: 5,
    row: ROW.SECOND,
    col: COL.TWENTY_THIRD
  },
  {
    id: 48,
    section_id: 5,
    row: ROW.SECOND,
    col: COL.TWENTY_FOURTH
  },
  {
    id: 49,
    section_id: 5,
    row: ROW.THIRD,
    col: COL.FIRST
  },
  {
    id: 50,
    section_id: 5,
    row: ROW.THIRD,
    col: COL.SECOND
  },
  {
    id: 51,
    section_id: 5,
    row: ROW.THIRD,
    col: COL.THIRD
  },
  {
    id: 52,
    section_id: 5,
    row: ROW.THIRD,
    col: COL.FOURTH
  },
  {
    id: 53,
    section_id: 5,
    row: ROW.THIRD,
    col: COL.FIFTH
  },
  {
    id: 54,
    section_id: 5,
    row: ROW.THIRD,
    col: COL.SIX
  },
  {
    id: 55,
    section_id: 5,
    row: ROW.THIRD,
    col: COL.SEVENTH
  },
  {
    id: 56,
    section_id: 6,
    row: ROW.THIRD,
    col: COL.EIGHTH
  },
  {
    id: 57,
    section_id: 6,
    row: ROW.THIRD,
    col: COL.NINTH
  },
  {
    id: 58,
    section_id: 6,
    row: ROW.THIRD,
    col: COL.TENTH
  },
  {
    id: 59,
    section_id: 6,
    row: ROW.THIRD,
    col: COL.ELEVENTH
  },
  {
    id: 60,
    section_id: 6,
    row: ROW.THIRD,
    col: COL.TWELFTH
  },
  {
    id: 61,
    section_id: 6,
    row: ROW.THIRD,
    col: COL.THIRTEENTH
  },
  {
    id: 62,
    section_id: 6,
    row: ROW.THIRD,
    col: COL.FOURTEENTH
  },
  {
    id: 63,
    section_id: 6,
    row: ROW.THIRD,
    col: COL.FIFTEENTH
  },
  {
    id: 64,
    section_id: 6,
    row: ROW.THIRD,
    col: COL.SIXTEENTH
  },
  {
    id: 65,
    section_id: 6,
    row: ROW.THIRD,
    col: COL.SEVENTEENTH
  },
  {
    id: 66,
    section_id: 6,
    row: ROW.THIRD,
    col: COL.EIGHTEENTH
  },
  {
    id: 67,
    section_id: 7,
    row: ROW.THIRD,
    col: COL.NINETEENTH
  },
  {
    id: 68,
    section_id: 7,
    row: ROW.THIRD,
    col: COL.TWENTIETH
  },
  {
    id: 69,
    section_id: 7,
    row: ROW.THIRD,
    col: COL.TWENTY_FIRST
  },
  {
    id: 70,
    section_id: 7,
    row: ROW.THIRD,
    col: COL.TWENTY_SECOND
  },
  {
    id: 71,
    section_id: 7,
    row: ROW.THIRD,
    col: COL.TWENTY_THIRD
  },
  {
    id: 72,
    section_id: 7,
    row: ROW.THIRD,
    col: COL.TWENTY_FOURTH
  },
  {
    id: 73,
    section_id: 7,
    row: ROW.FOURTH,
    col: COL.FIRST
  },
  {
    id: 74,
    section_id: 7,
    row: ROW.FOURTH,
    col: COL.SECOND
  },
  {
    id: 75,
    section_id: 7,
    row: ROW.FOURTH,
    col: COL.THIRD
  },
  {
    id: 76,
    section_id: 7,
    row: ROW.FOURTH,
    col: COL.FOURTH
  },
  {
    id: 77,
    section_id: 7,
    row: ROW.FOURTH,
    col: COL.FIFTH
  },
  {
    id: 78,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.SIX
  },
  {
    id: 79,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.SEVENTH
  },
  {
    id: 80,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.EIGHTH
  },
  {
    id: 81,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.NINTH
  },
  {
    id: 82,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.TENTH
  },
  {
    id: 83,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.ELEVENTH
  },
  {
    id: 84,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.TWELFTH
  },
  {
    id: 85,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.THIRTEENTH
  },
  {
    id: 86,
    section_id: 8,
    row: ROW.FOURTH,
    col: COL.FOURTEENTH
  }
]

export const getSections = () => sections;

export const getSection = (id: number): Section | undefined => {
  return sections.find((section => section.id === id))
}

export const getSectionHouses = (id: number): House[] => {
  return houses.filter(({ section_id }: House) => section_id === id)
}

export const getHouse = (id: number): House | undefined => {
  return houses.find((house => house.id === id))
}
