"use strict"

class HUD.HUDService

  app: null
  map: null

  constructor: (HUDApp) ->
    this.app = HUDApp.app
    this.map = {}
    this._createService()


  _createService: () ->
    self = this

    this.app.service('HUDService', [ () ->
      return self
    ])


  set: (key, value) ->
    this.map[key] = value

  get: (key) ->
    if key of this.map
      return this.map[key]
    else
      return null