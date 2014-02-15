"use strict"

class HUD.Menu

  app: null
  config: null
  service: null

  # The config object description
  # {
  #   url: { templateUrl: tmplUrl, controller: ctrlUrl }, ...
  # }
  constructor: (config) ->
    this.config = config

    this._createApp()
    this._createService()
    this._configureApp()


  _createApp: () ->
    this.app = angular.module('HUDApp', [ 'ngRoute' ])


  _createService: () ->
    this.service = new HUD.HUDService(this)


  set: (key, value) ->
    this.service.set(key, value)


  get: (key) ->
    return this.service.get(key)


  _configureApp: () ->
    this.app.config(["$routeProvider", ($routeProvider) =>
      for url of this.config
        $routeProvider.when(url, this.config[url])

      $routeProvider.otherwise({ redirectTo: "/" })
    ])