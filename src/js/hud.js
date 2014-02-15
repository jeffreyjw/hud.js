"use strict";
var HUD;

HUD = HUD || {};

"use strict";
HUD.HUDService = (function() {
  HUDService.prototype.app = null;

  HUDService.prototype.map = null;

  HUDService.prototype.events = null;

  function HUDService(HUDApp) {
    this.app = HUDApp.app;
    this.events = {
      set: [],
      notifyChange: []
    };
    this.map = {};
    this._createService();
  }

  HUDService.prototype._createService = function() {
    var self;
    self = this;
    return this.app.service('HUDService', [
      function() {
        return self;
      }
    ]);
  };

  HUDService.prototype.set = function(key, value) {
    this.map[key] = value;
    return this._callEventListeners("set");
  };

  HUDService.prototype.notifyChange = function() {
    return this._callEventListeners("notifyChange");
  };

  HUDService.prototype.get = function(key) {
    if (key in this.map) {
      return this.map[key];
    } else {
      return null;
    }
  };

  HUDService.prototype._callEventListeners = function(event) {
    var listener, _i, _len, _ref, _results;
    _ref = this.events[event];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      listener = _ref[_i];
      _results.push(listener());
    }
    return _results;
  };

  HUDService.prototype.addEventListener = function(event, listener) {
    return this.events[event].push(listener);
  };

  return HUDService;

})();

"use strict";
HUD.Menu = (function() {
  Menu.prototype.app = null;

  Menu.prototype.config = null;

  Menu.prototype.service = null;

  function Menu(config) {
    this.config = config;
    this._createApp();
    this._createService();
    this._configureApp();
  }

  Menu.prototype._createApp = function() {
    return this.app = angular.module('HUDApp', ['ngRoute']);
  };

  Menu.prototype._createService = function() {
    return this.service = new HUD.HUDService(this);
  };

  Menu.prototype.addEventListener = function(event, listener) {
    return this.service.addEventListener(event, listener);
  };

  Menu.prototype.set = function(key, value) {
    return this.service.set(key, value);
  };

  Menu.prototype.get = function(key) {
    return this.service.get(key);
  };

  Menu.prototype._configureApp = function() {
    var _this = this;
    return this.app.config([
      "$routeProvider", function($routeProvider) {
        var url;
        for (url in _this.config) {
          $routeProvider.when(url, _this.config[url]);
        }
        return $routeProvider.otherwise({
          redirectTo: "/"
        });
      }
    ]);
  };

  return Menu;

})();
