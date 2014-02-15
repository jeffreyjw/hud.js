(function(){

    var config = {
        "/": { controller: "MainCtrl", templateUrl: "views/main.html" },
        "/second": { controller: "MainCtrl", templateUrl: "views/second.html" }
    };

    var hud = new HUD.Menu(config);
    hud.addEventListener("notifyChange", function(){
        console.log(hud.get("go"));
    });

    window.MY = hud;

})();