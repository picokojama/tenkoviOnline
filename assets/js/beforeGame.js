module.exports = function beforeGame(stage) {
    var text = new createjs.Text("Čekanje na drugog igrača...", "35px Arial", "blue");
    text.x = 250;
    text.y = 100;
    text.textAlign = "center";
    stage.addChild(text);

    var bitmap = new createjs.Bitmap("img/waiting.png");
    bitmap.x = 250;
    bitmap.y = 300;
    bitmap.regX = 24;
    bitmap.regY = 24;
    stage.addChild(bitmap);
    bitmap.addEventListener('tick', function() {
        bitmap.rotation += 5;
    });
}