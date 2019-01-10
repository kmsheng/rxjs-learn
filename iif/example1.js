const { iif, interval, of } = require('rxjs')
const { mergeMap } = require('rxjs/operators')

const true$ = of('true')
const false$ = of('false')

interval(1000)
  .pipe(mergeMap(v => iif(
    () => (v % 2) === 0,
    true$,
    false$
  )))
  .subscribe(console.log)

// another way of writing this behavior
/*
interval(1000)
  .pipe(mergeMap(v => (v % 2) === 0 ? true$ : false$))
  .subscribe(console.log)
*/
