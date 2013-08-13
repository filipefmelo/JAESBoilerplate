'use strict';

/* Directives */

JAESBoilerplateDirectives.
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
