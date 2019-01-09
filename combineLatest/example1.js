const { combineLatest, from } = require('rxjs')

const observables = [3000, 1000, 5000].map((time, i) => {
  const p = new Promise(resolve => {
    setTimeout(() => resolve(`observable ${i} resolved`), time)
  });
  return from(p)
})

combineLatest(...observables)
  .subscribe(console.log)
