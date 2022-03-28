import {Http} from "@capacitor-community/http";
import {Lights} from "@/data/lights";
import {getIpAddress} from "@/data/arduino";

export const syncLights = async (lights: Lights): Promise<void> => {
  const pixels: number[] = []
  Object.values(lights).forEach((cols: number[]) => {
    pixels.push(cols.reduce((sum: number, col: number) => {
      return sum + 2 ** col
    }, 0))
  })

  await Http.post( {
    url: `http://${getIpAddress()}:8090/pics`,
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    data: pixels.join(',') + ','
  })
}
