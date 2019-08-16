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

    },

    start () {
        this.scaleAction();
    },

    scaleAction () {
        let scaleAction1 = cc.scaleTo(0.5, 0.8);
        let scaleAction2 = cc.scaleTo(0.5, 1.2);
        this.action = cc.repeatForever(cc.sequence(scaleAction1, scaleAction2));
        this.node.runAction(this.action);
    }
});
