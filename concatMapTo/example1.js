const { timer, of } = require('rxjs')
const { concatMapTo, mapTo } = require('rxjs/operators')

of(1, 2)
  .pipe(concatMapTo(timer(1000).pipe(mapTo('done'))))
  .subscribe(v => console.log(`concatMapTo: ${v}`))
