const { of, timer, interval } = require('rxjs')
const { throttle } = require('rxjs/operators')

const superFastClicks = interval(100)
  .pipe(throttle(_ => timer(1000)))
  .subscribe(console.log)
