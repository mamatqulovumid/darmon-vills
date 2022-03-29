export const IP_ADDRESS_KEY = 'ipAddress'

export const getIpAddress = (): string => {
  return localStorage.getItem(IP_ADDRESS_KEY) ?? '192.168.0.111'
}

export const setIpAddress = (address: string): void => {
  localStorage.setItem(IP_ADDRESS_KEY, address)
}
