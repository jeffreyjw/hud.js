"use strict"

class HUD.HUD

  app: null
  config: null

  # The config object description
  # {
  #   url: { templateUrl: tmplUrl, controller: ctrlUrl }, ...
  # }
  constructor: (config) ->
    this.config = config

    this._createApp()
    this._configureApp()


  _createApp: () ->
    this.app = angular.module('HUDApp', [])


  _configureApp: () ->
    this.app.config(["$routeProvider", ($routeProvider) =>
      for url of this.config
        $routeProvider.when(url, this.config[url])

      $routeProvider.otherwise({ redirectTo: "/" })
    ])