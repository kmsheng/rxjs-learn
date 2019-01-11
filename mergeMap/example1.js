const { of, timer } = require('rxjs')
const { mergeMap, tap } = require('rxjs/operators')

of(2000, 1000)
  .pipe(mergeMap(v => {

    const o = timer(v)
    const func = o.subscribe.bind(o)

    o.subscribe = (...args) => {
      console.log(`observable ${v} has been subscribed`)
      return func(...args)
    }

    return o
  }))
  .subscribe(console.log)

/**
 * NOTE: mergeMap will immediately subscribe all the observables
 *
 * observable 2000 has been subscribed
 * observable 1000 has been subscribed
 * 0
 * 0
 */
