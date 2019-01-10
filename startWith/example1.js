const { of } = require('rxjs')
const { startWith } = require('rxjs/operators')

const source = of('first', 'second')
source.pipe(startWith('wow'))
  .subscribe(console.log)
