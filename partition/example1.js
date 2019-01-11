const { interval } = require('rxjs')
const { partition } = require('rxjs/operators')

const [evens, odds] = interval(1000).pipe(partition(v => v % 2 === 0))

evens.subscribe(console.log)
// 0 2 4 6 8 ...
