import { Http } from "@capacitor-community/http";
import { Lights } from "@/data/lights";
import { getIpAddress } from "@/data/arduino";
import { COL } from '@/data/sections'
import { Other } from '@/data/others'

export const syncLights = async (lights: Lights): Promise<void> => {
  const matrixPixels: number[][] = [[], [], []]

  Object.values(lights).forEach((cols: number[]) => {
    const matrix: number[][] = [[], [], []]

    cols.forEach((col: number) => {
      if (col < COL.NINTH) {
        matrix[2].push(col)
      } else if (col > COL.SEVENTEENTH) {
        matrix[0].push(col - 16)
      } else {
        matrix[1].push(col - 8)
      }
    })

    matrixPixels[0].push(matrix[0].reduce((sum: number, result: number) => {
      return sum + 2 ** result
    }, 0))

    matrixPixels[1].push(matrix[1].reduce((sum: number, result: number) => {
      return sum + 2 ** result
    }, 0))


    matrixPixels[2].push(matrix[2].reduce((sum: number, result: number) => {
      return sum + 2 ** result
    }, 0))
  })

  await Http.post({
    url: `http://${getIpAddress()}:8090/pics`,
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    data: matrixPixels.map((pixels: number[]) => {
      return pixels.join(',') + ','
    }).join('|')
  })
}

export const syncOthers = async (others: Other[]): Promise<void> => {
  await Http.post({
    url: `http://${getIpAddress()}:8090/others`,
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    data: others.map(item => Number(item.value)).join(',') + ','
  })
}
