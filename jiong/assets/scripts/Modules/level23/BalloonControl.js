// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0,
        mag: 10
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    start () {

    },

    update (dt) { },

    drop () {
        let moveToAction = cc.moveTo(2, cc.v2(this.node.x, - this.node.parent.height / 2 - this.node.height));
        this.node.runAction(moveToAction);
    },
}
});