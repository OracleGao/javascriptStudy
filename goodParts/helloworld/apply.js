var statusCaller = {};

statusCaller.getStatus = function () {
  return this.status;
}

var statusObject = {
  status: 'A-OK'
};

var status = statusCaller.getStatus.apply(statusObject);
document.writeln('function apply: ' + status);
