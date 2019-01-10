const { Observable } = require('rxjs')
const { mapTo } = require('rxjs/operators')

const source = Observable.create(observer => {
  observer.next('hello')
  observer.next('world')
  observer.complete()
})

source.subscribe(
  v => console.log(v),
  err => console.log(err),
  () => console.log('completed')
)
