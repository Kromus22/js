const spy = (x) => {

  const wrapper = (...args) => {
    wrapper.calls.push(args);
    return x.apply(this, args);
  }

  wrapper.calls = [];
  return wrapper;
}