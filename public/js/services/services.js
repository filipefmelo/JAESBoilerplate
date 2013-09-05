'use strict';

/* Services */

JAESBoilerplateServices.
    value('version', '0.1');

JAESBoilerplateServices.
    service('TranslationSrvc', ['TranslationVal', '$locale', function (TranslationVal, $locale) {
        var self = this;
        var errorString = "i18n error: '@' not found"

        this.getTranslation = function (str, obj) {
            var dotNotation = $locale.id + "." + str;
            if(!obj) {
                return self.recompose(TranslationVal, dotNotation) || errorString.replace("@" ,dotNotation);
            } else {
                return self.replaceValues(self.recompose(TranslationVal, dotNotation) || errorString.replace("@" ,dotNotation), obj);
            }
        };

        self.recompose = function (obj, string) {
            var parts = string.split('.');
            var newObj = obj[parts[0]];
            if (parts[1]) {
                parts.splice(0, 1);
                var newString = parts.join('.');
                return this.recompose(newObj, newString);
            }
            return newObj;
        };

        self.replaceValues = function(str, obj) {
            if(obj) {
                var regex;
                for(var i in obj) {
                    regex = new RegExp("{{" + i + "}}", "g");
                    str = str.replace(regex, obj[i]);
                }
            }
            return str;
        }

        return this;
    }]);
