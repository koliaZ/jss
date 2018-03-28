'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodashForeach = require('lodash.foreach');

var _lodashForeach2 = _interopRequireDefault(_lodashForeach);

var _rulesSet = require('./rules-set');

var _rulesSet2 = _interopRequireDefault(_rulesSet);

var Stylesheet = (function () {
  function Stylesheet() {
    _classCallCheck(this, Stylesheet);

    this._rulesSets = [];
  }

  _createClass(Stylesheet, [{
    key: 'hasUpdated',
    value: function hasUpdated() {
      var hasUpdated = false;

      if (this.updated) {
        this.updated = false;
        hasUpdated = true;
      }

      return hasUpdated;
    }
  }, {
    key: 'createRules',
    value: function createRules(rules) {
      var rulesSet = this.createRulesGet(rules);
      return rulesSet.getRulesMap();
    }
  }, {
    key: 'createRulesGet',
    value: function createRulesGet(rules) {
      var rulesSet = new _rulesSet2['default'](rules);
      this._rulesSets.push(rulesSet);

      this.updated = true;

      return rulesSet;
    }
  }, {
    key: 'onRemove',
    value: function onRemove(id) {
      var _this = this;

      (0, _lodashForeach2['default'])(this._rulesSets, function (rulesSet, key) {
        if (rulesSet.id === id) {
          _this._rulesSets.splice(key, 1);
        }
      });
      this.updated = true;
    }
  }, {
    key: 'update',
    value: function update() {
      this.updated = true;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var css = '';

      (0, _lodashForeach2['default'])(this._rulesSets, function (ruleSet) {
        css += ruleSet.toString();
      });

      return css;
    }
  }]);

  return Stylesheet;
})();

exports['default'] = Stylesheet;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9zdHlsZXNoZWV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs2QkFBb0IsZ0JBQWdCOzs7O3dCQUVmLGFBQWE7Ozs7SUFFYixVQUFVO0FBQ2pCLFdBRE8sVUFBVSxHQUNkOzBCQURJLFVBQVU7O0FBRTNCLFFBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0dBQ3RCOztlQUhrQixVQUFVOztXQUtsQixzQkFBRztBQUNaLFVBQUksVUFBVSxHQUFHLEtBQUssQ0FBQzs7QUFFdkIsVUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3JCLGtCQUFVLEdBQUcsSUFBSSxDQUFDO09BQ25COztBQUVELGFBQU8sVUFBVSxDQUFDO0tBQ25COzs7V0FFVyxxQkFBQyxLQUFLLEVBQUU7QUFDbEIsVUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QyxhQUFPLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMvQjs7O1dBRWMsd0JBQUMsS0FBSyxFQUFFO0FBQ3JCLFVBQU0sUUFBUSxHQUFHLDBCQUFhLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLFVBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUUvQixVQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7QUFFcEIsYUFBTyxRQUFRLENBQUM7S0FDakI7OztXQUVRLGtCQUFDLEVBQUUsRUFBRTs7O0FBQ1osc0NBQVEsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUs7QUFDMUMsWUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtBQUN0QixnQkFBSyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQztPQUNGLENBQUMsQ0FBQztBQUNILFVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ3JCOzs7V0FFTSxrQkFBRztBQUNSLFVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ3JCOzs7V0FFUSxvQkFBRztBQUNWLFVBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQzs7QUFFYixzQ0FBUSxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQUMsT0FBTyxFQUFLO0FBQ3BDLFdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7T0FDM0IsQ0FBQyxDQUFDOztBQUVILGFBQU8sR0FBRyxDQUFDO0tBQ1o7OztTQW5Ea0IsVUFBVTs7O3FCQUFWLFVBQVUiLCJmaWxlIjoic3R5bGVzaGVldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC5mb3JlYWNoJztcblxuaW1wb3J0IFJ1bGVzU2V0IGZyb20gJy4vcnVsZXMtc2V0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVzaGVldCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9ydWxlc1NldHMgPSBbXTtcbiAgfVxuXG4gIGhhc1VwZGF0ZWQgKCkge1xuICAgIGxldCBoYXNVcGRhdGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy51cGRhdGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgIGhhc1VwZGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNVcGRhdGVkO1xuICB9XG5cbiAgY3JlYXRlUnVsZXMgKHJ1bGVzKSB7XG4gICAgY29uc3QgcnVsZXNTZXQgPSB0aGlzLmNyZWF0ZVJ1bGVzR2V0KHJ1bGVzKTtcbiAgICByZXR1cm4gcnVsZXNTZXQuZ2V0UnVsZXNNYXAoKTtcbiAgfVxuXG4gIGNyZWF0ZVJ1bGVzR2V0IChydWxlcykge1xuICAgIGNvbnN0IHJ1bGVzU2V0ID0gbmV3IFJ1bGVzU2V0KHJ1bGVzKTtcbiAgICB0aGlzLl9ydWxlc1NldHMucHVzaChydWxlc1NldCk7XG5cbiAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJ1bGVzU2V0O1xuICB9XG5cbiAgb25SZW1vdmUgKGlkKSB7XG4gICAgZm9yRWFjaCh0aGlzLl9ydWxlc1NldHMsIChydWxlc1NldCwga2V5KSA9PiB7XG4gICAgICBpZiAocnVsZXNTZXQuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMuX3J1bGVzU2V0cy5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBjc3MgPSAnJztcblxuICAgIGZvckVhY2godGhpcy5fcnVsZXNTZXRzLCAocnVsZVNldCkgPT4ge1xuICAgICAgY3NzICs9IHJ1bGVTZXQudG9TdHJpbmcoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cbn1cbiJdfQ==