import { defineStore } from 'pinia'
import type { Cards } from './interface'

export const useCardStore = defineStore('data', {
  state: () => ({
    card: {
      0: {
        type: '',
        details: ''
      },
      1: {
        type1: '',
        details1: '',
        type2: '',
        details2: ''
      },
      2: {
        type: '',
        details: ''
      }
    } as Cards
  }),

  actions: {
    async fill() {
      try {
        const module = await import('@/stores/data.json')
        const data = module.default as Cards

        this.card = data
      } catch (error) {
        console.error('Failed to load data: ', error)
      }
    }
  }
})
