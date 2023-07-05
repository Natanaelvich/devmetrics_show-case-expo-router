import { StateStorage } from 'zustand/middleware'

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return console.log(`Persisting ${name} to ${value}`)
  },
  getItem: (name) => {
    const value = 'test'
    console.log(`Restoring ${name} to ${value}`)
    return value
  },
  removeItem: (name) => {
    return console.log(`Removing ${name}`)
  },
}

export default zustandStorage
