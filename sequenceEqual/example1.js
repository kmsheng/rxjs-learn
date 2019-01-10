const { of } = require('rxjs')
const { sequenceEqual } = require('rxjs/operators')

// 1, 2, 3 === 1, 2, 3 ?
of(1, 2, 3).pipe(sequenceEqual(of(1, 2, 3)))
  .subscribe(console.log)

// 1, 2, 3 === 1, 1, 1 ?
of(1, 2, 3).pipe(sequenceEqual(of(1, 1, 1)))
  .subscribe(console.log)
