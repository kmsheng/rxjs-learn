const { interval } = require('rxjs')
const { bufferWhen } = require('rxjs/operators')

interval(1000)
  .pipe(bufferWhen(() => interval(3000)))
  .subscribe(console.log)
