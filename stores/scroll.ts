import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
  state: () => {
    return { fromTop:0, scrollUp:false, iconsInHeroVisible: true }
  },
   actions: {
        updateIconsInHeroVisible(value:boolean){
            this.iconsInHeroVisible = value
        }
    }
})
