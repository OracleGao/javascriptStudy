module.exports = function delayFunc(time, params) {
  return new Promise((reslove, reject) => {
    setTimeout(() => reslove(params), time)
  });
};
