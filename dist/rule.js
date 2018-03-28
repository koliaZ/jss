'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodashForeach = require('lodash.foreach');

var _lodashForeach2 = _interopRequireDefault(_lodashForeach);

var PREFIX = '_';
var pxBlacklist = ['boxFlex', 'boxFlexGroup', 'columnCount', 'fillOpacity', 'flex', 'flexGrow', 'flexPositive', 'flexShrink', 'flexNegative', 'fontWeight', 'lineClamp', 'lineHeight', 'opacity', 'order', 'orphans', 'strokeOpacity', 'widows', 'zIndex', 'zoom'];

var Rule = (function () {
  function Rule(ruleName, styles, id) {
    _classCallCheck(this, Rule);

    this._name = ruleName;
    this._id = PREFIX + id;
    this._styles = styles;

    return this._id;
  }

  _createClass(Rule, [{
    key: 'stylesToString',
    value: function stylesToString(styles) {
      var _this = this;

      var selector = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

      var css = selector;
      css += '{';

      var followingCss = '';

      (0, _lodashForeach2['default'])(styles, function (value, key) {
        var type = typeof value;

        if (type === 'object') {
          var newSelector = selector;

          if (key.charAt(0) !== ':') {
            newSelector += ' ';
          }
          newSelector += key;

          followingCss += _this.stylesToString(value, newSelector);
        } else if (value !== false && value !== null) {
          var cssProperty = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
          var propertyValue = value;

          if (type === 'number' && pxBlacklist.indexOf(key) === -1) {
            propertyValue += 'px';
          }

          css += cssProperty + ':' + propertyValue + ';';
        }
      });

      css += '}';

      return css + followingCss;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.stylesToString(this._styles, '.' + this._id);
    }
  }]);

  return Rule;
})();

exports['default'] = Rule;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9ydWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs2QkFBb0IsZ0JBQWdCOzs7O0FBRXBDLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNuQixJQUFNLFdBQVcsR0FBRyxDQUNsQixTQUFTLEVBQ1QsY0FBYyxFQUNkLGFBQWEsRUFDYixhQUFhLEVBQ2IsTUFBTSxFQUNOLFVBQVUsRUFDVixjQUFjLEVBQ2QsWUFBWSxFQUNaLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBQ1QsT0FBTyxFQUNQLFNBQVMsRUFDVCxlQUFlLEVBQ2YsUUFBUSxFQUNSLFFBQVEsRUFDUixNQUFNLENBQ1AsQ0FBQzs7SUFFbUIsSUFBSTtBQUNYLFdBRE8sSUFBSSxDQUNWLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFOzBCQURoQixJQUFJOztBQUVyQixRQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUN0QixRQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDdkIsUUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7O0FBRXRCLFdBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztHQUNqQjs7ZUFQa0IsSUFBSTs7V0FTUix3QkFBQyxNQUFNLEVBQWlCOzs7VUFBZixRQUFRLHlEQUFHLEVBQUU7O0FBQ25DLFVBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztBQUNuQixTQUFHLElBQUksR0FBRyxDQUFDOztBQUVYLFVBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQzs7QUFFdEIsc0NBQVEsTUFBTSxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBSztBQUM5QixZQUFNLElBQUksR0FBRyxPQUFPLEtBQUssQ0FBQzs7QUFFMUIsWUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQ3JCLGNBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQzs7QUFFM0IsY0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtBQUN6Qix1QkFBVyxJQUFJLEdBQUcsQ0FBQztXQUNwQjtBQUNELHFCQUFXLElBQUksR0FBRyxDQUFDOztBQUVuQixzQkFBWSxJQUFJLE1BQUssY0FBYyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN6RCxNQUFNLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQzVDLGNBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDMUUsY0FBSSxhQUFhLEdBQUcsS0FBSyxDQUFDOztBQUUxQixjQUFJLElBQUksS0FBSyxRQUFRLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUN4RCx5QkFBYSxJQUFJLElBQUksQ0FBQztXQUN2Qjs7QUFFRCxhQUFHLElBQUksV0FBVyxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUcsR0FBRyxDQUFDO1NBQ2hEO09BQ0YsQ0FBQyxDQUFDOztBQUVILFNBQUcsSUFBSSxHQUFHLENBQUM7O0FBRVgsYUFBTyxHQUFHLEdBQUcsWUFBWSxDQUFDO0tBQzNCOzs7V0FFUSxvQkFBRztBQUNWLGFBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDMUQ7OztTQTlDa0IsSUFBSTs7O3FCQUFKLElBQUkiLCJmaWxlIjoicnVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC5mb3JlYWNoJztcblxuY29uc3QgUFJFRklYID0gJ18nO1xuY29uc3QgcHhCbGFja2xpc3QgPSBbXG4gICdib3hGbGV4JyxcbiAgJ2JveEZsZXhHcm91cCcsXG4gICdjb2x1bW5Db3VudCcsXG4gICdmaWxsT3BhY2l0eScsXG4gICdmbGV4JyxcbiAgJ2ZsZXhHcm93JyxcbiAgJ2ZsZXhQb3NpdGl2ZScsXG4gICdmbGV4U2hyaW5rJyxcbiAgJ2ZsZXhOZWdhdGl2ZScsXG4gICdmb250V2VpZ2h0JyxcbiAgJ2xpbmVDbGFtcCcsXG4gICdsaW5lSGVpZ2h0JyxcbiAgJ29wYWNpdHknLFxuICAnb3JkZXInLFxuICAnb3JwaGFucycsXG4gICdzdHJva2VPcGFjaXR5JyxcbiAgJ3dpZG93cycsXG4gICd6SW5kZXgnLFxuICAnem9vbSdcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvciAocnVsZU5hbWUsIHN0eWxlcywgaWQpIHtcbiAgICB0aGlzLl9uYW1lID0gcnVsZU5hbWU7XG4gICAgdGhpcy5faWQgPSBQUkVGSVggKyBpZDtcbiAgICB0aGlzLl9zdHlsZXMgPSBzdHlsZXM7XG5cbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBzdHlsZXNUb1N0cmluZyAoc3R5bGVzLCBzZWxlY3RvciA9ICcnKSB7XG4gICAgdmFyIGNzcyA9IHNlbGVjdG9yO1xuICAgIGNzcyArPSAneyc7XG5cbiAgICB2YXIgZm9sbG93aW5nQ3NzID0gJyc7XG5cbiAgICBmb3JFYWNoKHN0eWxlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICB2YXIgbmV3U2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuICAgICAgICBpZiAoa2V5LmNoYXJBdCgwKSAhPT0gJzonKSB7XG4gICAgICAgICAgbmV3U2VsZWN0b3IgKz0gJyAnO1xuICAgICAgICB9XG4gICAgICAgIG5ld1NlbGVjdG9yICs9IGtleTtcblxuICAgICAgICBmb2xsb3dpbmdDc3MgKz0gdGhpcy5zdHlsZXNUb1N0cmluZyh2YWx1ZSwgbmV3U2VsZWN0b3IpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gZmFsc2UgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY3NzUHJvcGVydHkgPSBrZXkucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHByb3BlcnR5VmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgcHhCbGFja2xpc3QuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIHByb3BlcnR5VmFsdWUgKz0gJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGNzcyArPSBjc3NQcm9wZXJ0eSArICc6JyArIHByb3BlcnR5VmFsdWUgKyAnOyc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjc3MgKz0gJ30nO1xuXG4gICAgcmV0dXJuIGNzcyArIGZvbGxvd2luZ0NzcztcbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHlsZXNUb1N0cmluZyh0aGlzLl9zdHlsZXMsICcuJyArIHRoaXMuX2lkKTtcbiAgfVxufVxuIl19