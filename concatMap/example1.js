const { timer, of } = require('rxjs')
const { concatMap, mergeMap, mapTo } = require('rxjs/operators')

// mergeMap subscribes immediately to inner observables
// that's why the later faster 1000 ms timer emits first
of(2000, 1000)
  .pipe(mergeMap(v => timer(v).pipe(mapTo(v))))
  .subscribe(v => console.log(`mergeMap: ${v}`))

// concatMap will wait for the previous completes
// then subscribe to the next observable
of(2000, 1000)
  .pipe(concatMap(v => timer(v).pipe(mapTo(v))))
  .subscribe(v => console.log(`concatMap: ${v}`))
