const { of } = require('rxjs')

of([1, 2, 3], 1, null, x => x)
  .subscribe(console.log)
