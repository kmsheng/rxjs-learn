const { of } = require('rxjs')
const { pairwise } = require('rxjs/operators')

of(1, 2, 3, 4, 5)
  .pipe(pairwise())
  .subscribe(v => console.log(v))
