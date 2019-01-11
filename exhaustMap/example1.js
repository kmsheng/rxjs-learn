const { interval, of, timer } = require('rxjs')
const { exhaustMap, mapTo } = require('rxjs/operators')

// only resolve the first one, ignore the rest
of(3000, 2000, 1000)
  .pipe(exhaustMap(v => timer(v).pipe(mapTo(v))))
  .subscribe(console.log)
