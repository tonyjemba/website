import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawerStore', {
  state: () => {
    return {
      isOpen: false,
    }
  },
  getters: {
    drawerStatus(): boolean {
      return this.isOpen
    },
  },
  actions: {
    changeStatus() {
      console.log('clicked')
      this.isOpen = !this.isOpen
    },

  },
})

