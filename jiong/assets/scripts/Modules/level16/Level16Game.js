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
        match: {
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
            this.createAlert(null, '1+1 = 2')
            this.didShowAlertOnce = true;
        }
    },

    judgeSuccess () {
        console.log(this.match.x, this.match.y);
        if (this.match.x > - 187 && this.match.x < -111 &&
            this.match.y > 150 && this.match.y < 255) {
            return true;
        }
        return false;
    }
});
