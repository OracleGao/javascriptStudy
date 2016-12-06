#promise
manage async event state

##states(internal 'PromiseState'):
fullfilled: f of promise.then(f)
rejected: r of promise.then(f, r)
pending: neither fulfilled nor rejected
##fates(resolving functions):
resolved: has been fulfilled or rejected or follow another promise
unresolved: not resolved

resolved is recursive.

##refs:
  https://developers.google.com/web/fundamentals/getting-started/primers/promises#promise-terminology
  https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md

