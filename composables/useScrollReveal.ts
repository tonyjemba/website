
export const useScrollReveal = (target:string,distance:string,origin:string,delay:number,duration:number):void => {
    const nuxtApp = useNuxtApp()
   
      nuxtApp.$ScrollReveal().reveal(target, {
    distance,
    origin,
    delay,
    duration,
    opacity: 0,
     cleanup: false,

  })
}