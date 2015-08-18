var createSubclass = require('./../utils/create_subclass');

module.exports = createSubclass(createjs.Container, 'Hero', {
    initialize: HeroInitialize
});

function HeroInitialize(x, y) {
    createjs.Container.prototype.initialize.apply(this, arguments);

    this.x = x;
    this.y = y;
}