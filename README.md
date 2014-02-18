HUD.js
===

A HUD library for Javascript, which aims to be a bridge
for HTML5+Angular to be as useful for browser games
as flash for AAA games.

### Maintainer

[Jeffreyjw](https://github.com/jeffreyjw)

### Get Started

Add angular to your page

`<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular.js"></script>`
`<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.13/angular-route.js"></script>`

AFTER adding angular, add HUD

`<script src="hud.min.js"></script>`

You can check out `test/test0/index.html` for an example

### How to use

First thing we need to do is preparation of a config object

```javascript
var config = {
    "/": { controller: "MenuController", templateUrl: "main.html" },
    "/game": { controller: "GameHUDController", templateUrl: "gamehud.html" }
};
```

The idea is taken straight from angular: we specify the url which we will use
inside our HUD Controllers, the name of the controllers (not yet created) and urls
to html files which will be the look of our HUD/Menu systems. If you like, you can use
a single controller in multiple urls.

Then we create the main object:

```javascrpt
var hud = new HUD.Menu(config);
```

Now, we have the ability to create controllers using `hud.app`.
This is a standard angular controller.

```javascript
hud.app.controller("MenuController", ["$scope", "HUDService", function($scope, HUDService){
    $scope.setOption = function(){
        HUDService.set("option", "ok");
    };

    $scope.init = function(){ ... some init code... };
    $scope.init();
}]);
```

The HUDService is our bridge between HUD and rest of the page. To react on some variable change:

```javascript
hud.addEventListener('set', function(){ ... });
```

and if we don't want to react on every single change in HUDService, only for example after many changes
just to react for settings apply, use `HUDService.notifyChange()` in the controller, and
use `hud.addEventListener('notifyChange', function(){ ... });` in the rest of the code.

Last but not least, the HTML:

```
<div>
    <button ng-click="setOption()">Save</button>
</div>
```

### License

The MIT License (MIT)

Copyright (c) 2013 jeffreyjw

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
