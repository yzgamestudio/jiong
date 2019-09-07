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
        wall: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.saveInitalPosition();

    },

    update (dt) {
        // if (this.y != this.wall.y) {
        //     this.wall.y = this.y;
        // }
        // if (this.x > this.wall.y) {
        //     this.wall.x = this.x;
        // }
    },

    onEnable: function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
    },

    onDisable: function () {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    },

    saveInitalPosition () {
        this.x = this.wall.x;
        this.y = this.wall.y;
    },


});
