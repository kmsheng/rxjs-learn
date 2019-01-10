const { of } = require('rxjs')
const { filter } = require('rxjs/operators')

of(1, 2, 3, 4, 5)
  .pipe(filter(v => v !== 4))
  .subscribe(console.log)
