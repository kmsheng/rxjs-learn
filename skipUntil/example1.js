const { interval, of, from, Observable } = require('rxjs')
const { skipUntil } = require('rxjs/operators')

const thisThing = new Observable(observer => {
  setTimeout(() => observer.next('oops'), 3000)
})

// this will skip until observable thisThing emit the first value
interval(1000)
  .pipe(skipUntil(thisThing))
  .subscribe(console.log)
