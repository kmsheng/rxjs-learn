const { empty } = require('rxjs')

empty().subscribe({
  next: _ => console.log('next'),
  complete: _ => console.log('complete')
})
