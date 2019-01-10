const { of, interval } = require('rxjs')
const { mergeAll, map, mapTo } = require('rxjs/operators')

of(1000, 2000, 3000)
  .pipe(
    map((v, i) => interval(v).pipe(mapTo(`${i} observable with ${v} interval`))),
    mergeAll()
  )
  .subscribe(v => {
    console.log(v)
    console.log('=====================')
  })
