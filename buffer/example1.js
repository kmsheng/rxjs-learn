const { of, timer, interval } = require('rxjs')
const { buffer } = require('rxjs/operators')

interval(100)
  .pipe(buffer(timer(1000)))
  .subscribe(console.log)
