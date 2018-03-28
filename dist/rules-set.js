'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodashForeach = require('lodash.foreach');

var _lodashForeach2 = _interopRequireDefault(_lodashForeach);

var _rule = require('./rule');

var _rule2 = _interopRequireDefault(_rule);

var RULESET_ID = 0;

var RulesSet = (function () {
  function RulesSet(rules) {
    _classCallCheck(this, RulesSet);

    this.id = (RULESET_ID++).toString(16);
    this.update(rules);
  }

  _createClass(RulesSet, [{
    key: 'update',
    value: function update(rules) {
      var _this = this;

      this._rules = [];
      this._map = {};
      var count = 0;
      (0, _lodashForeach2['default'])(rules, function (styles, ruleName) {
        var rule = new _rule2['default'](ruleName, styles, _this.id + (count++).toString(16));
        _this._rules.push(rule);
        _this._map[ruleName] = rule._id;
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      // this.trigger('remove');
    }
  }, {
    key: 'getRulesMap',
    value: function getRulesMap() {
      return this._map;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var css = '';

      (0, _lodashForeach2['default'])(this._rules, function (rule) {
        css += rule.toString();
      });

      return css;
    }
  }]);

  return RulesSet;
})();

exports['default'] = RulesSet;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9ydWxlcy1zZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzZCQUFvQixnQkFBZ0I7Ozs7b0JBRW5CLFFBQVE7Ozs7QUFFekIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDOztJQUVFLFFBQVE7QUFDZixXQURPLFFBQVEsQ0FDZCxLQUFLLEVBQUU7MEJBREQsUUFBUTs7QUFFekIsUUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLFVBQVUsR0FBRSxDQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QyxRQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQ3BCOztlQUprQixRQUFROztXQU1wQixnQkFBQyxLQUFLLEVBQUU7OztBQUNiLFVBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLFVBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2YsVUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2Qsc0NBQVEsS0FBSyxFQUFFLFVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBSztBQUNuQyxZQUFJLElBQUksR0FBRyxzQkFBUyxRQUFRLEVBQUUsTUFBTSxFQUFHLE1BQUssRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFFLENBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7QUFDMUUsY0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLGNBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7T0FDaEMsQ0FBQyxDQUFDO0tBQ0o7OztXQUVNLGtCQUFHOztLQUVUOzs7V0FFVyx1QkFBRztBQUNiLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7O1dBRVEsb0JBQUc7QUFDVixVQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7O0FBRWIsc0NBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLElBQUksRUFBSztBQUM3QixXQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO09BQ3hCLENBQUMsQ0FBQzs7QUFFSCxhQUFPLEdBQUcsQ0FBQztLQUNaOzs7U0FqQ2tCLFFBQVE7OztxQkFBUixRQUFRIiwiZmlsZSI6InJ1bGVzLXNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JFYWNoIGZyb20gJ2xvZGFzaC5mb3JlYWNoJztcblxuaW1wb3J0IFJ1bGUgZnJvbSAnLi9ydWxlJztcblxudmFyIFJVTEVTRVRfSUQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlc1NldCB7XG4gIGNvbnN0cnVjdG9yIChydWxlcykge1xuICAgIHRoaXMuaWQgPSAoUlVMRVNFVF9JRCsrKS50b1N0cmluZygxNik7XG4gICAgdGhpcy51cGRhdGUocnVsZXMpO1xuICB9XG5cbiAgdXBkYXRlIChydWxlcykge1xuICAgIHRoaXMuX3J1bGVzID0gW107XG4gICAgdGhpcy5fbWFwID0ge307XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICBmb3JFYWNoKHJ1bGVzLCAoc3R5bGVzLCBydWxlTmFtZSkgPT4ge1xuICAgICAgdmFyIHJ1bGUgPSBuZXcgUnVsZShydWxlTmFtZSwgc3R5bGVzLCAodGhpcy5pZCArIChjb3VudCsrKS50b1N0cmluZygxNikpKTtcbiAgICAgIHRoaXMuX3J1bGVzLnB1c2gocnVsZSk7XG4gICAgICB0aGlzLl9tYXBbcnVsZU5hbWVdID0gcnVsZS5faWQ7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIC8vIHRoaXMudHJpZ2dlcigncmVtb3ZlJyk7XG4gIH1cblxuICBnZXRSdWxlc01hcCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICB2YXIgY3NzID0gJyc7XG5cbiAgICBmb3JFYWNoKHRoaXMuX3J1bGVzLCAocnVsZSkgPT4ge1xuICAgICAgY3NzICs9IHJ1bGUudG9TdHJpbmcoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cbn1cbiJdfQ==