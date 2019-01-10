const { of } = require('rxjs')
const { last } = require('rxjs/operators')

of(1, 2, 3, 4, 5)
  .pipe(last())
  .subscribe(
    v => console.log('next', v),
    err => console.log('err', err),
    _ => console.log('completed')
  )
