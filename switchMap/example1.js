const { interval, of, timer } = require('rxjs')
const { switchMap, mapTo } = require('rxjs/operators')

// only resolve the last one, ignore the previous ones
of(3000, 2000, 1000)
  .pipe(switchMap(v => timer(v).pipe(mapTo(v))))
  .subscribe(console.log)
