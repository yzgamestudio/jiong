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
        mario: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.didShowAlertOnce = false;

    },

    update (dt) {
        if (this.isSuccess() && !this.didShowAlertOnce) {
            this.didShowAlertOnce = true;
            this.createAlert(null, 'good job');
        }
    },


    isSuccess () {
        if (this.mario.x > this.node.x + this.node.width * 0.5) {
            return true;
        }
        else {
            return false;
        }
    }


});
