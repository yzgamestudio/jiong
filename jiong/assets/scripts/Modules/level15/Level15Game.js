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
        square: {
            default: null,
            type: cc.Node
        },
    },

    start () {

    },

    onLoad () {
        this.createBaseNodes();
        this.didShowAlertOnce = false;
    },

    update (dt) {
        let isSuccess = this.judgeSuccess();
        if (isSuccess && !this.didShowAlertOnce) {
            this.didShowAlertOnce = true;
            this.createAlert(null, "移除屏幕就是长方形")
        }
    },

    judgeSuccess () {
        let left = this.square.x - this.square.width * 0.5;
        let right = this.square.x + this.square.width * 0.5;
        let top = this.square.y - this.square.height * 0.5;
        let bottom = this.square.y + this.square.height * 0.5;
        if (left < - this.node.width * 0.5 || right > this.node.width * 0.5
            || top < - this.node.height * 0.5 || bottom > this.node.height * 0.5) {
            return true;
        }
        return false;
    }
});
