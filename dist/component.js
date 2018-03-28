'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesheet = require('./stylesheet');

var _stylesheet2 = _interopRequireDefault(_stylesheet);

var JSS = (function (_Component) {
  _inherits(JSS, _Component);

  function JSS() {
    _classCallCheck(this, JSS);

    _get(Object.getPrototypeOf(JSS.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(JSS, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.stylesheet.hasUpdated();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: this.props.stylesheet.toString() } });
    }
  }]);

  return JSS;
})(_react.Component);

exports['default'] = JSS;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQStCLE9BQU87Ozs7MEJBRWYsY0FBYzs7OztJQUVoQixHQUFHO1lBQUgsR0FBRzs7V0FBSCxHQUFHOzBCQUFILEdBQUc7OytCQUFILEdBQUc7OztlQUFILEdBQUc7O1dBRUEsK0JBQUMsU0FBUyxFQUFFO0FBQ2hDLGFBQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUMxQzs7O1dBRU0sa0JBQUc7QUFDUixhQUFPLDRDQUFPLHVCQUF1QixFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFDLEFBQUMsR0FBRyxDQUFDO0tBQ3ZGOzs7U0FSa0IsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTdHlsZXNoZWV0IGZyb20gJy4vc3R5bGVzaGVldCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTUyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlIChuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gbmV4dFByb3BzLnN0eWxlc2hlZXQuaGFzVXBkYXRlZCgpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0aGlzLnByb3BzLnN0eWxlc2hlZXQudG9TdHJpbmcoKX19IC8+O1xuICB9XG59XG4iXX0=