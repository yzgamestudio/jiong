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
        sleep: {
            default: null,
            type: cc.Node
        },
        sleep2: {
            default: null,
            type: cc.Node
        },
        clock: {
            default: null,
            type: cc.Node
        }

    },

    onLoad () {
        this.createBaseNodes();
        this.didShowAlertOnce = false;
        this.listenTouch();
    },

    listenTouch () {
        this.sleep.on(cc.Node.EventType.TOUCH_START, function () {
            this.sleep.destroy();
        }, this);
        this.sleep2.on(cc.Node.EventType.TOUCH_START, function () {
            this.sleep2.destroy();
        }, this);
    },

    start () {

    },

    update (dt) {
        let isSuccess = this.judgeSuccess();
        if (isSuccess && !this.didShowAlertOnce) {
            this.createAlert(null, '小猪贪睡闹钟叫不醒');
            this.didShowAlertOnce = true;
        }
    },

    judgeSuccess () {
        if (!this.sleep.parent && !this.sleep2.parent) {
            return true;
        }
        return false;
    }
});