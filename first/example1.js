const { of } = require('rxjs')
const { first } = require('rxjs/operators')

of(1, 2, 3, 4, 5)
  .pipe(first())
  .subscribe(console.log)
