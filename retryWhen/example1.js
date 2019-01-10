const { throwError, of, interval } = require('rxjs')
const { retryWhen, mergeMap, delay } = require('rxjs/operators')

interval(1000)
  .pipe(
    mergeMap(v => {
      if (v === 3) {
        throw 'error thrown for 3'
      }
      return of(v)
    }),
    retryWhen(err => {
      // err is Subject
      return err.pipe(delay(2000))
    })
  )
  .subscribe(
    v => console.log('next', v),
    err => console.log('err', err),
    _ => console.log('completed')
  )
