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
    extends: require('BaseLevel'),

    properties: {
        ball1: {
            default: null,
            type: cc.Node,
        },
        ball2: {
            default: null,
            type: cc.Node,
        },
        ball3: {
            default: null,
            type: cc.Node,
        },
        eye: {
            default: null,
            type: cc.Node,
        },
        crossPrefab: {
            default: null,
            type: cc.Prefab
        },
        alert: {
            default: null,
            type: cc.Prefab
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this.showBackButton();

        this.ball1.getComponent('Ball1').game = this;
        this.ball2.getComponent('Ball2').game = this;
        this.ball3.getComponent('Ball3').game = this;
        this.eye.getComponent('Eye').game = this;
    },

    start () {

    },

    // update (dt) {},
});
