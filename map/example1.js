const { of } = require('rxjs')
const { map } = require('rxjs/operators')

of(1, 2, 3)
  .pipe(map(v => `number ${v}`))
  .subscribe(console.log)
