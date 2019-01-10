const { interval, Observable } = require('rxjs')
const { debounceTime, take } = require('rxjs/operators')

const superFastClicks = interval(200).pipe(take(10))

superFastClicks
  .pipe(debounceTime(1000))
  .subscribe(console.log)
