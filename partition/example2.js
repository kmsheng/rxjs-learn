const { from, of } = require('rxjs')
const { partition, concatMap, catchError } = require('rxjs/operators')

const promises = [true, false, true, false].map(v => {
  return new Promise((resolve, reject) => {
    if (v) {
      resolve({success: true, data: 'data'})
    }
    else {
      reject({success: false, message: 'error'})
    }
  })
})

const [success, fail] = from(promises).pipe(
  concatMap(v => from(v).pipe(catchError(err => of(err)))),
  partition(v => v.success)    // partition needs to be a sync function
)

success.subscribe(console.log)
// { success: true, data: 'data' }
// { success: true, data: 'data' }
