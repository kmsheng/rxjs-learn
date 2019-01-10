const { throwError, of } = require('rxjs')
const { catchError } = require('rxjs/operators')

// throw and catch myself
throwError('omg')
  .pipe(catchError(v => of(v)))
  .subscribe(
    v => console.log('next', v),
    err => console.log('err?', err)
  )
