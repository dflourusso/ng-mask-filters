(function() {
  var Formats, NgMaskCep, NgMaskCnpj, NgMaskCpf, NgMaskCpfCnpj, NgMaskFilters, NgMaskFone, NgMaskPlaca, NgStringMask;

  NgMaskFilters = (function() {
    function NgMaskFilters() {
      return [];
    }

    return NgMaskFilters;

  })();

  angular.module('ng-mask-filters', new NgMaskFilters());

  NgStringMask = (function() {
    function NgStringMask() {
      return function(format) {
        return new StringMask(format);
      };
    }

    return NgStringMask;

  })();

  angular.module('ng-mask-filters').factory('NgStringMask', [NgStringMask]);

  Formats = (function() {
    function Formats() {
      return {
        'cpf': '000.000.000-00',
        'cnpj': '00.000.000/0000-00',
        'fone': '(00) 90000-0000',
        'cep': '00.000-000',
        'placa': 'UUU-0000'
      };
    }

    return Formats;

  })();

  angular.module('ng-mask-filters').constant('FORMATS', Formats());

  NgMaskCep = (function() {
    function NgMaskCep(NgStringMask, FORMATS) {
      return function(input) {
        return NgStringMask(FORMATS.cep).apply(input);
      };
    }

    return NgMaskCep;

  })();

  angular.module('ng-mask-filters').filter('ngMaskCep', ['NgStringMask', 'FORMATS', NgMaskCep]);

  NgMaskCnpj = (function() {
    function NgMaskCnpj(NgStringMask, FORMATS) {
      return function(input) {
        return NgStringMask(FORMATS.cnpj).apply(input);
      };
    }

    return NgMaskCnpj;

  })();

  angular.module('ng-mask-filters').filter('ngMaskCnpj', ['NgStringMask', 'FORMATS', NgMaskCnpj]);

  NgMaskCpf = (function() {
    function NgMaskCpf(NgStringMask, FORMATS) {
      return function(input) {
        return NgStringMask(FORMATS.cpf).apply(input);
      };
    }

    return NgMaskCpf;

  })();

  angular.module('ng-mask-filters').filter('ngMaskCpf', ['NgStringMask', 'FORMATS', NgMaskCpf]);

  NgMaskCpfCnpj = (function() {
    function NgMaskCpfCnpj(NgStringMask, FORMATS) {
      var clear, format;
      clear = function(input) {
        return ("" + input).replace(/\D/g, '');
      };
      format = function(input) {
        if (clear(input).length === 14) {
          return FORMATS.cnpj;
        } else {
          return FORMATS.cpf;
        }
      };
      return function(input) {
        return NgStringMask(format(input)).apply(input);
      };
    }

    return NgMaskCpfCnpj;

  })();

  angular.module('ng-mask-filters').filter('ngMaskCpfCnpj', ['NgStringMask', 'FORMATS', NgMaskCpfCnpj]);

  NgMaskFilters = (function() {
    function NgMaskFilters(NgStringMask) {
      return function(input, format) {
        return NgStringMask(format).apply(input);
      };
    }

    return NgMaskFilters;

  })();

  angular.module('ng-mask-filters').filter('ngMaskFilters', ['NgStringMask', NgMaskFilters]);

  NgMaskFone = (function() {
    function NgMaskFone(NgStringMask, FORMATS) {
      return function(input) {
        return NgStringMask(FORMATS.fone).apply(input);
      };
    }

    return NgMaskFone;

  })();

  angular.module('ng-mask-filters').filter('ngMaskFone', ['NgStringMask', 'FORMATS', NgMaskFone]);

  NgMaskPlaca = (function() {
    function NgMaskPlaca(NgStringMask, FORMATS) {
      return function(input) {
        return NgStringMask(FORMATS.placa).apply(input);
      };
    }

    return NgMaskPlaca;

  })();

  angular.module('ng-mask-filters').filter('ngMaskPlaca', ['NgStringMask', 'FORMATS', NgMaskPlaca]);

}).call(this);
