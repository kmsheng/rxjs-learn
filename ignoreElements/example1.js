const { of } = require('rxjs')
const { ignoreElements } = require('rxjs/operators')

of(1, 2, 3, 4, 5)
  .pipe(ignoreElements())
  .subscribe(
    v => console.log('next', v),
    err => console.log('err', err),
    _ => console.log('completed')
  )
