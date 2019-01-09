const { of, timer, merge } = require('rxjs')
const { mapTo } = require('rxjs/operators')

const first = timer(1000).pipe(mapTo('first'))
const second = timer(2000).pipe(mapTo('second'))
const third = timer(3000).pipe(mapTo('third'))

merge(third, second, first)
  .subscribe(console.log)
