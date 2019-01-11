const { from } = require('rxjs')
const { groupBy, mergeMap } = require('rxjs/operators')

const cards = [
  { suit: 'clubs', number: 5 },
  { suit: 'hearts', number: 2 },
  { suit: 'clubs', number: 4 },
  { suit: 'clubs', number: 3 },
  { suit: 'diamonds', number: 6 },
  { suit: 'hearts', number: 1 },
  { suit: 'diamonds', number: 7 }
];

const observables = []

from(cards)
  .pipe(
    groupBy(card => card.suit),
    mergeMap(group => {
      group.subscribe(v => console.log(`${group.key} observable: `, v))
      return group
    })
  )
  .subscribe(_ => {})
