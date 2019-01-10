const { throwError, of, interval } = require('rxjs')
const { retry, mergeMap } = require('rxjs/operators')

interval(1000)
  .pipe(
    mergeMap(v => {
      if (v === 5) {
        return throwError('dead when value is 5')
      }
      return of(v)
    }),
    retry(2)
  )
  .subscribe(
    v => console.log('next', v),
    err => console.log('err', err),
    _ => console.log('completed')
  )
