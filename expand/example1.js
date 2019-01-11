const { of } = require('rxjs')
const { expand, take } = require('rxjs/operators')

// expand operator is not really an intuitive naming...
// behaves like recursive function
of(1).pipe(
  expand(v => {
    console.log('v', v)
    return of(v + 1)
  }),
  take(10)
)
.subscribe(console.log)
