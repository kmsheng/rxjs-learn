const { of } = require('rxjs')
const { skip } = require('rxjs/operators')

of(1, 2, 3, 4, 5)
  .pipe(skip(2))
  .subscribe(console.log)
