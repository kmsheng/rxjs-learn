const { Subject, interval } = require('rxjs')
const { take, tap, multicast, mapTo } = require('rxjs/operators')

const source = interval(2000).pipe(take(5))

const example = source.pipe(
  tap(() => console.log('Side Effect #1')),
  mapTo('Result!')
)

const multi = example.pipe(multicast(_ => new Subject()))

const sub1 = multi.subscribe(v => console.log(`sub1 ${v}`))
const sub2 = multi.subscribe(v => console.log(`sub2 ${v}`))
multi.connect()
