var allTestFiles = [];
var TEST_REGEXP = /(test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\/js\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

//Phantom doesn't support function.bind so this polyfill gets around that. -JC
Function.prototype.bind = Function.prototype.bind || function (thisp) {
    var fn = this;
    return function () {
        return fn.apply(thisp, arguments);
    };
};

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/js',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
