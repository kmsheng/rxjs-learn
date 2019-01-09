const { of, interval } = require('rxjs')
const { take, map, combineAll } = require('rxjs/operators')

const example = of(1, 2).pipe(
  map(val => {
    return interval(val * 1000)
      .pipe(map(i => `every ${val} second: ${i}`))
  }),
  combineAll()
)
.subscribe(console.log)
