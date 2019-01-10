const { of, timer, interval } = require('rxjs')
const { throttleTime } = require('rxjs/operators')

interval(100)
  .pipe(throttleTime(1000))
  .subscribe(console.log)
