const { timer, of } = require('rxjs')
const { tap, mapTo, share } = require('rxjs/operators')

const source = of(1, 2, 3)

const sub1 = source.subscribe(v => console.log(`sub1: ${v}`))
const sub2 = source.subscribe(v => console.log(`sub2: ${v}`))
/**
 * sub1: 1
 * sub1: 2
 * sub1: 3
 * sub2: 1
 * sub2: 2
 * sub2: 3
 */

setTimeout(() => {
  const shared = source.pipe(share())
  shared.subscribe(v => console.log(`shared: ${v}`))
  /**
   * shared: 1
   * shared: 2
   * shared: 3
   */
}, 3000)
