function curryPartial(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return function continueCurriyng(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}
