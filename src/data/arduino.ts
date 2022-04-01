import { Http } from '@capacitor-community/http'
import { HttpResponse } from '@capacitor-community/http'
import { BACKEND_API } from '@/data/api'

export const IP_ADDRESS_KEY = 'ipAddress'

export const getIpAddress = (): string => {
  return (localStorage.getItem(IP_ADDRESS_KEY) ?? '192.168.0.111').trim()
}

export const fetchIpAddress = (): Promise<HttpResponse> => {
  return Http.get({
    url: `http://${BACKEND_API}/ip-address`,
    method: 'GET'
  })
}

export const setIpAddress = (address: string): void => {
  localStorage.setItem(IP_ADDRESS_KEY, address)
}
