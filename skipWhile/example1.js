const { interval, of, from, Observable } = require('rxjs')
const { skipWhile } = require('rxjs/operators')

interval(1000)
  .pipe(skipWhile(v => v < 3))
  .subscribe(console.log)
