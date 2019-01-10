const { of } = require('rxjs')
const { every } = require('rxjs/operators')

// are all numbers even ?
of(1, 2, 3)
  .pipe(every(v => v % 2 === 0))
  .subscribe(console.log)

// are all numbers integer ?
of(1, 2, 3)
  .pipe(every(v => Number.isInteger(v)))
  .subscribe(console.log)
