const { of, range, throwError } = require('rxjs')
const { mergeMap } = require('rxjs/operators')

range(1, 10)
  .pipe(
    mergeMap(v => {
      if (v === 5) {
        return throwError('error')
      }
      return of(v)
    })
  )
  .subscribe(
    v => console.log(v),
    err => console.log(err),
    v => console.log('completed')
  )
