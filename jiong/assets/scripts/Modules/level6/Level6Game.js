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
    extends: require('BaseLevelGame'),
    properties: {
        bananaNode: {
            default: null,
            type: cc.Node
        },
    },

    onLoad () {
        this.createBackAndTips();
        this.judgeFiveTouch();
    },

    start () {

    },

    judgeFiveTouch () {
        this.count = 0;
        this.bananaNode.on(cc.Node.EventType.TOUCH_START, function (t) {
            this.count++;
            if (this.count === 5) {
                this.createAlert(null, '香蕉皮不是香蕉哦');
            }
        }, this);

    }
});
