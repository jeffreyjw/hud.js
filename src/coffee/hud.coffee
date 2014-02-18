"use strict"

class HUD.Menu

  app: null
  config: null
  service: null
  element: null
  appName: null

  # The config object description
  # {
  #   url: { templateUrl: tmplUrl, controller: ctrlUrl }, ...
  # }
  constructor: (element, config) ->
    this.element = element
    this.config = config
    this.appName = "HUDApp"

    this._createApp()
    this._createService()
    this._configureApp()


  _createApp: () ->
    this.app = angular.module(this.appName, [ 'ngRoute' ])


  run: () ->
    angular.bootstrap(this.element, [ this.appName ])


  _createService: () ->
    this.service = new HUD.HUDService(this)


  addEventListener: (event, listener) ->
    this.service.addEventListener(event, listener)


  removeEventListener: (event, listener) ->
    this.service.removeEventListener(event, listener)


  clearEventListeners: (event) ->
    this.service.clearEventListeners(event)


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