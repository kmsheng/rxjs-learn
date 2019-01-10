const { of } = require('rxjs')
const { take } = require('rxjs/operators')

of(1, 2, 3, 4, 5)
  .pipe(take(2))
  .subscribe(console.log)
