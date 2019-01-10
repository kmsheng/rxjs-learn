const { timer } = require('rxjs')

// emits after three seconds
timer(3000).subscribe(console.log)
