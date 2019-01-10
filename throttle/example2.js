const { of, timer, interval } = require('rxjs')
const { throttle } = require('rxjs/operators')

// incrementally increase the delay time
const superFastClicks = interval(1000)
  .pipe(throttle(i => new Promise(resolve => {
    setTimeout(resolve, i * 1000)
  })))
  .subscribe(console.log)
