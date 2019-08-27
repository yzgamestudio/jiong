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
        mother: {
            default: null,
            type: cc.Node,
        },
        son: {
            default: null,
            type: cc.Node
        },
        bg: {
            default: null,
            type: cc.Node
        }
    },

    onLoad () {
        this.createBaseNodes();
        this.didShowAlertOnce = false;
        this.bg.on(cc.Node.EventType.TOUCH_START, function (event) {
            let isSuccess = this.judgeSuccess(event);
            if (isSuccess) {
                this.createAlert(null, "老婆孩子一起救");
            }
        }, this);

    },

    start () {

    },

    judgeSuccess (event) {
        // 没有模拟器暂时不实现
        return false;
    }
});