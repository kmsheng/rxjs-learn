const { interval, timer, Observable } = require('rxjs')
const { debounce, take } = require('rxjs/operators')

const superFastClicks = interval(200).pipe(take(10))

superFastClicks
  .pipe(debounce(() => timer(1000)))
  .subscribe(console.log)
