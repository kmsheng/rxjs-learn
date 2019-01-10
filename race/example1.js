const { interval, race } = require('rxjs')
const { mapTo } = require('rxjs/operators')

race(
  interval(5000),
  interval(3000),
  interval(1000).pipe(mapTo('I am the fastest.')),
  interval(2000),
  interval(4000),
)
.subscribe(v => console.log(v))
