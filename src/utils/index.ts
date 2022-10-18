export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}
// import { Service } from '@src/types'
import { nanoid } from 'nanoid'

export const minMemory = 1024 // 1 Mi
export const minStorage = 5 * 1024 // 5 Mi
export const maxMemory = 512 * 1024 ** 3 // 512 Gi
export const maxGroupMemory = 1024 * 1024 ** 3 // 1024 Gi
export const maxStorage = 32 * 1024 ** 4 // 32 Ti

export const memoryUnits = [
  { id: 3, suffix: 'Mb', value: 1000 ** 2 },
  { id: 4, suffix: 'Mi', value: 1024 ** 2 },
  { id: 5, suffix: 'GB', value: 1000 ** 3 },
  { id: 6, suffix: 'Gi', value: 1024 ** 3 }
]

export const storageUnits = [
  { id: 3, suffix: 'Mb', value: 1000 ** 2 },
  { id: 4, suffix: 'Mi', value: 1024 ** 2 },
  { id: 5, suffix: 'GB', value: 1000 ** 3 },
  { id: 6, suffix: 'Gi', value: 1024 ** 3 },
  { id: 7, suffix: 'TB', value: 1000 ** 4 },
  { id: 8, suffix: 'Ti', value: 1024 ** 4 }
]

export const persistentStorageTypes = [
  { id: 1, className: 'beta1', name: 'hdd' },
  { id: 2, className: 'beta2', name: 'ssd' },
  { id: 3, className: 'beta3', name: 'NVMe' }
]

export const protoTypes = [
  { id: 1, name: 'http' },
  // { id: 2, name: "https" },
  { id: 3, name: 'tcp' }
]

export const defaultService: unknown = {
  id: nanoid(),
  title: 'service-1',
  image: '',
  profile: {
    cpu: 0.1,
    ram: 512,
    ramUnit: 'Mi',
    storage: 1,
    storageUnit: 'Gi',
    hasPersistentStorage: false,
    persistentStorage: 10,
    persistentStorageUnit: 'Gi',
    persistentStorageParam: {
      name: 'data',
      type: 'beta2',
      mount: ''
    }
  },
  expose: [
    {
      id: nanoid(),
      port: 80,
      as: 80,
      proto: 'http',
      global: true,
      to: [],
      accept: []
    }
  ],
  command: { command: '', arg: '' },
  env: [],
  placement: {
    name: 'dcloud',
    pricing: {
      amount: 1000
    },
    signedBy: {
      anyOf: [],
      allOf: []
    },
    attributes: []
  },
  count: 1
}
