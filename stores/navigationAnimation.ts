import { defineStore } from 'pinia'

export const useNavigationAnimation = defineStore('navigationAnimationStore', {
  state: () => {
    return {
      isDone: false,
    }
  },
  getters: {
    status(): boolean {
      return this.isDone
    },
  },
  actions: {
    changeStatus() {
      this.isDone = true
    },

  },
})
