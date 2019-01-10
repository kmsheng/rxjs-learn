const { interval, timer, of } = require('rxjs')
const { withLatestFrom, map, concatAll, mapTo } = require('rxjs/operators')

const tick$ = interval(1000)
const sequence$ = of(500, 1000, 300, 2000).pipe(
  map(v => timer(v).pipe(mapTo(v))),
  concatAll()
)

tick$.pipe(withLatestFrom(sequence$))
  .subscribe(console.log)
