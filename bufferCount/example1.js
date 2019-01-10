const { of } = require('rxjs')
const { bufferCount } = require('rxjs/operators')

of(1, 2, 3, 4, 5, 6, 7)
  .pipe(bufferCount(2))
  .subscribe(console.log)
