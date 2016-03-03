(function() {
  var NgMaskFilters, NgStringMask;

  NgMaskFilters = (function() {
    function NgMaskFilters() {
      return [];
    }

    return NgMaskFilters;

  })();

  angular.module('ng-mask-filters', new NgMaskFilters());

  NgMaskFilters = (function() {
    function NgMaskFilters(NgStringMask) {
      return function(input, format) {
        return NgStringMask(format).apply(input);
      };
    }

    return NgMaskFilters;

  })();

  angular.module('ng-mask-filters').filter('ngMaskFilters', ['NgStringMask', NgMaskFilters]);

  NgStringMask = (function() {
    function NgStringMask() {
      return function(format) {
        return new StringMask(format);
      };
    }

    return NgStringMask;

  })();

  angular.module('ng-mask-filters').factory('NgStringMask', [NgStringMask]);

}).call(this);
