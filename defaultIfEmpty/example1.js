const { of } = require('rxjs')
const { mergeMap, defaultIfEmpty } = require('rxjs/operators')

of(of(1), of(), of(null), of(undefined))
  .pipe(
    mergeMap(ob => ob.pipe(defaultIfEmpty('empty')))
  )
  .subscribe(console.log)
