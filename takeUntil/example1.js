const { interval, timer } = require('rxjs')
const { takeUntil } = require('rxjs/operators')

interval(1000)
  .pipe(takeUntil(timer(3000)))
  .subscribe(console.log)
