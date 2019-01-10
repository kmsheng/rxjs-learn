const { interval } = require('rxjs')

// emits every 1 second
const source = interval(1000)
  .subscribe(console.log)
