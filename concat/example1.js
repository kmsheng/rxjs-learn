const { of } = require('rxjs')
const { concat } = require('rxjs/operators')

of(1, 2, 3).pipe(concat(of(4, 5, 6)))
  .subscribe(console.log)
