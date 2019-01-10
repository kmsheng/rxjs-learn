const { interval } = require('rxjs')
const { withLatestFrom, map } = require('rxjs/operators')

const slow$ = interval(5000)
const fast$ = interval(1000)

// Also provide the last value from another observable.
slow$.pipe(withLatestFrom(fast$))
  .subscribe(([slow, fast]) => {
    console.log('slow', slow, 'fast', fast)
  })
