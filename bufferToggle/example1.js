const { interval } = require('rxjs')
const { bufferToggle } = require('rxjs/operators')

interval(100)
  .pipe(bufferToggle(
    interval(1000),
    () => interval(2000)
  ))
  .subscribe(console.log)
