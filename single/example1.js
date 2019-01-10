const { from } = require('rxjs')
const { single } = require('rxjs/operators')

from([1, 2, 3])
  .pipe(single(v => v === 2))
  .subscribe(v => console.log(`single: ${v}`))

/*
 * // this will throw error -> Sequence contains more than one element
 * from([2, 2, 2])
 * .pipe(single(v => v === 2))
 * .subscribe(v => console.log(`single: ${v}`))
 */
