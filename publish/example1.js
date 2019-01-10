const { interval } = require('rxjs')
const { publish, tap } = require('rxjs/operators')

const source = interval(1000)
const example = source.pipe(
  tap(_ => console.log('do something')),
  publish()
)

// sub1 and sub2 will share the `tap` function
const sub1 = example.subscribe(v => console.log(`subscriber one: ${v}`))
const sub2 = example.subscribe(v => console.log(`subscriber two: ${v}`))

setTimeout(() => {
  example.connect()
}, 5000)
