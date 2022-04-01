import { Http, HttpResponse } from "@capacitor-community/http";
import { BACKEND_API } from '@/data/api'

export type HouseInfo = {
  id: number
  is_sold: boolean
  description: string
  images: string[]
}

export const getHouseInfo = async (house: number): Promise<HttpResponse> => {
  return await Http.get({
    url: `http://${BACKEND_API}/houses/${house}`,
    method: 'GET'
  })
}
