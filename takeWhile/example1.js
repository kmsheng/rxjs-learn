const { interval, timer } = require('rxjs')
const { takeWhile } = require('rxjs/operators')

interval(1000)
  .pipe(takeWhile(v => v < 3))
  .subscribe(console.log)
