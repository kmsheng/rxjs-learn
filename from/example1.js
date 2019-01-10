const { from } = require('rxjs')

// from array
from([1, 2, 3])
  .subscribe(console.log)

// from promise
from(new Promise(resolve => setTimeout(_ => resolve('resolved'), 1000)))
  .subscribe(console.log)

// from string
from('string')
  .subscribe(console.log)

// from Map
const map = new Map()
map.set('key1', 'value1')
map.set('key2', 'value2')

from(map)
  .subscribe(console.log)
