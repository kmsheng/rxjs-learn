const { interval } = require('rxjs')
const { take, map, combineAll } = require('rxjs/operators')

const source = interval(1000).pipe(take(2));

const example = source.pipe(
  map(val => {
    return interval(1000).pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  }),
  combineAll()
)
.subscribe(console.log)
