"use strict";
HUD.HUDService = (function() {
  HUDService.prototype.app = null;

  HUDService.prototype.map = null;

  function HUDService(HUDApp) {
    this.app = HUDApp;
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
    return this.map[key] = value;
  };

  HUDService.prototype.get = function(key) {
    if (key in this.map) {
      return this.map[key];
    } else {
      return null;
    }
  };

  return HUDService;

})();
