# Ng Mask Filters

A simple implementation to apply a filter with mask in a AngularJs application

---
### Installation

    $ bower install ng-mask-filters --save

### Usage

Include the plugin in your application:

```html
<script src="../dist/ng-mask-filters.js"></script>`
```

And then include the *AngularJs* module:

```javascript
angular.module('app', ['ng-mask-filters']);
```

### Usage

Only add the filter:

```html
  <div>Phone Number: {{'554433224455' | ngMaskFone }}</div>
```
> Result: "Phone Number: +55 (44) 3322-4455"


Options available

* ngMaskCep
* ngMaskCnpj
* ngMaskCpf
* ngMaskCpfCnpj
* ngMaskFone
* ngMaskPlaca

For another filters use `ngMaskFilters` with the format

```html
  <div>Phone Number: {{'554433224455' | ngMaskFilters:'+00 (00) 0000-0000'}}</div>
```
> Result: "Phone Number: +55 (44) 3322-4455"

### References

This plugin uses the [**string-mask**](https://github.com/the-darc/string-mask) project, open it to see the available options.

### Author

[Daniel Fernando Lourusso](http://dflourusso.com.br)

### Contributors

[Marcos Paliari](https://github.com/paliari)
