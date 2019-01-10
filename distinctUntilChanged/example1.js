const { of } = require('rxjs')
const { distinctUntilChanged } = require('rxjs/operators')

of(1, 2, 2, 2, 3)
  .pipe(distinctUntilChanged())
  .subscribe(console.log)
