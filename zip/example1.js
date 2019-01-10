const { of, zip, interval } = require('rxjs')
const { delay, take, mapTo } = require('rxjs/operators')

const first = of(1, 2, 3)
const second = of(4, 5, 6, 7)

zip(first, second)
  .subscribe(console.log)
