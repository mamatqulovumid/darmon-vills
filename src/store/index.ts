import { createStore } from 'vuex'
import { getEmptyLights, getLights, Lights, setLights } from '@/data/lights'
import { getEmptyOthers, Other, setOthers } from '@/data/others'
import { getCols, House, ROW } from '@/data/sections'
import { syncLights, syncOthers } from '@/api/lights'

type StateType = {
  lights: Lights
  others: Other[]
}

const store = createStore({
  state () {
    return {
      lights: {} as Lights,
      others: [] as Other[]
    }
  },
  getters: {
    houseState: (state: StateType) => (house: House) => {
      const lights: Lights = state.lights

      return lights[house.row] && lights[house.row].includes(house.col)
    }
  },
  mutations: {
    SET_LIGHTS (state: StateType, lights: Lights) {
      setLights(lights)
      syncLights(lights)
      state.lights = lights
    },
    SET_OTHERS (state: StateType, others: Other[]) {
      setOthers(others)
      syncOthers(others)
      state.others = others
    }
  },
  actions: {
    setInitialLights ({ commit }) {
      const lights: Lights = getLights()
      Object.keys(ROW).forEach(row => {
        if (!isNaN(parseInt(row)) && !(row in lights)) {
          lights[parseInt(row)] = []
        }
      })
      commit('SET_LIGHTS', lights)
    },
    updateLights ({ commit }, lights: Lights) {
      commit('SET_LIGHTS', lights)
    },
    setInitialOthers ({ commit }) {
      commit('SET_OTHERS', getEmptyOthers())
    },
    updateOthers ({ commit }, others: Other[]) {
      commit('SET_OTHERS', others)
    },
    async turnOnLight ({ commit, state }, flat: House): Promise<void> {
      const lights: Lights = { ...state.lights }
      if (!(flat.row in lights)) {
        lights[flat.row] = []
      }
      if (!lights[flat.row].includes(flat.col)) {
        lights[flat.row].push(flat.col)
      }

      commit('SET_LIGHTS', lights)
    },
    async turnOffLight ({ commit, state }, house: House): Promise<void> {
      const lights: Lights = { ...state.lights }
      const row: number[] = lights[house.row]
      if (row && row.includes(house.col)) {
        lights[house.row] = row.filter(col => col !== house.col)
      }

      commit('SET_LIGHTS', lights)
    },
    testByRow ({ commit }, rows: string[], checkCol = false, cols: number[] = []) {
      const lights: Lights = getEmptyLights()

      Object.keys(lights).forEach((row: string) => {
        if (rows.includes(row)) {
          getCols().forEach((col: number) => {
            if (checkCol) {
              if (cols.includes(col)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                lights[row].push(col)
              }
            } else {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              lights[row].push(col)
            }
          })
        }
      })

      commit('SET_LIGHTS', lights)
    }
  }
})

export default store
