import { defineStore } from 'pinia'

export const useIconInterval = defineStore('iconInterval', {
  state: () => {
    return { interval: 1 }
  },
  // changes interval every after 5 seconds
  actions: {
    changeInterval() {
        let i = 1;
  setInterval(():void => {
    this.interval = i
    i++;
    if (i > 4) {
      i = 1;
    }
  }, 1000);
    },
  },
})
