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

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.listenTouch();
    },

    start () {

    },

    listenTouch: function () {
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            this.isTouch = true;
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            if (this.isTouch) {
                this.movePosition(event);
            }
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (t) {
            this.isTouch = false;
        }, this);
    },

    movePosition: function (event) {
        let delta = event.getDelta();
        this.node.x = this.node.x + delta.x;
        if (this.node.x >= this.node.parent.width * 0.5) {
            this.node.x = this.node.parent.width * 0.5;
        }
        if (this.node.x - this.node.width <= -this.node.parent.width * 0.5) {
            this.node.x = -this.node.parent.width * 0.5 + this.node.width;
        }
    }

});
