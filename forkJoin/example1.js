const { of, forkJoin } = require('rxjs')
const { delay } = require('rxjs/operators')

const one$ = of('one').pipe(delay(1000))
const two$ = of('two').pipe(delay(2000))

forkJoin(one$, two$)
  .subscribe(console.log)
