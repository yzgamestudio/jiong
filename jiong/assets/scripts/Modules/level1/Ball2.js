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
        //监听触摸开始事件
        this.node.on(cc.Node.EventType.TOUCH_START, function (t) {
            //函数体内写事件发生时的事情
            //当触摸开始是打印以下字样
            console.log("触摸开始");
            this.game.createCross(this.node.position);
            this.playErrorSound();
        }, this);
        //监听作用域内触摸抬起事件
        this.node.on(cc.Node.EventType.TOUCH_ENDED, function (t) {
            console.log("触碰结束");
        }, this);
    },

    start () {

    },

    playErrorSound () {
        let audioManager = cc.find("Manager").getComponent("AudioManager");
        audioManager.playErrorSound();
    }

    // update (dt) {},
});
