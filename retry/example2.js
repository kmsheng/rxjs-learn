const { from, throwError, of, interval, timer } = require('rxjs')
const { retry, mergeMap } = require('rxjs/operators')

function fakeFetch() {
  console.log('called')
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('error'), 2000)
  })
}

of(true)
  .pipe(
    mergeMap(() => fakeFetch()),
    retry(2)
  )
  .subscribe(
    v => console.log('next', v),
    err => console.log('err', err),
    _ => console.log('completed')
  )
