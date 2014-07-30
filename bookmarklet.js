(function() {
  // set these params to be what you want
  var params = {
    hank: 'awesome',
    thisBookmarklet: 'cool'
  };

  var addQueryParam = function (key, value, oldSearch) {
    var newSearch = '';
    var paramRegex = new RegExp('(&?' + key + '=)[^&]+');
    if (!value) {
      // empty string value clears the param entirely
      newSearch = oldSearch.replace(paramRegex,'');
    } else if (paramRegex.test(oldSearch)) {
      // change value if existing param
      newSearch = oldSearch.replace(paramRegex,'$1' + value);
    } else if (!oldSearch) {
      // just set if no existing params
      newSearch = key + '=' + value;
    } else {
      // append value
      newSearch = oldSearch + '&' + key + '=' + value;
    }
    return newSearch;
  };

  var setParams = function (params) {
    var search = window.location.search;
    for (key in params) {
      search = addQueryParam(key, params[key], search);
    }
    window.location.search = search;
  };

  var paramsExist = function (params){
    var exist = true;
    for (key in params) {
      exist = exist && window.location.search.indexOf(key) > -1;
    }
    return exist;
  };

  // toggle params
  if (paramsExist(params)) {
    var negaParams = {};
    for (key in params) {negaParams[key] = ''};
    setParams(negaParams);
  } else {
    setParams(params);
  }
})();
