"use strict"

class HUD.HUDService

  app: null
  map: null
  events: null

  constructor: (HUDApp) ->
    this.app = HUDApp.app
    this.events = {
      set: []
      notifyChange: []
    }
    this.map = {}
    this._createService()


  _createService: () ->
    self = this

    this.app.service('HUDService', [ () ->
      return self
    ])


  set: (key, value) ->
    this.map[key] = value
    this._callEventListeners("set")


  notifyChange: () ->
    this._callEventListeners("notifyChange")


  get: (key) ->
    if key of this.map
      return this.map[key]
    else
      return null


  _callEventListeners: (event) ->
    for listener in this.events[event]
      listener()


  addEventListener: (event, listener) ->
    this.events[event].push(listener)


  removeEventListener: (event, listener) ->
    index = this.events[event].indexOf(listener)
    this.events[event].splice(index, 1)


  clearEventListeners: (event) ->
    this.events[event] = []