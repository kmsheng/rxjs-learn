const { interval } = require('rxjs')
const { auditTime } = require('rxjs/operators')

interval(1000)
  .pipe(auditTime(3000))
  .subscribe(v => console.log(`value: ${v}`))
