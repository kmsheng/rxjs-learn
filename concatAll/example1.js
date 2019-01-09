const { of, interval } = require('rxjs')
const { concatAll, take, map } = require('rxjs/operators')

const obs1 = interval(1000).pipe(take(5));
const obs2 = interval(500).pipe(take(2));
const obs3 = interval(2000).pipe(take(1));

of(obs1, obs2, obs3).pipe(concatAll())
  .subscribe(console.log)
