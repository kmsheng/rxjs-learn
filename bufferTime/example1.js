const { interval } = require('rxjs')
const { buffer, bufferTime } = require('rxjs/operators')

interval(100)
  .pipe(bufferTime(1000))
  .subscribe(console.log)

/* probably the same as...
interval(100)
  .pipe(buffer(interval(1000)))
  .subscribe(console.log)
*/
