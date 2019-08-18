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
        triangle: {
            default: null,
            type: cc.Node
        }
    },

    onLoad () {
        this.createBaseNodes();
        this.didShowAlertOnce = false;
    },

    update (dt) {
        let success = this.judgeCombinationSuccess();
        if (success && !this.didShowAlertOnce) {
            this.createAlert(null, '组合起来就是五边形');
            this.didShowAlertOnce = true;
        }
    },

    judgeCombinationSuccess () {
        debugger;
        let vector = cc.v2(this.square.x - this.triangle.x, this.square.y - this.triangle.y);
        console.log(vector);
        if (Math.abs(vector.x) < 5 && Math.abs(vector.y) > 75 && Math.abs(vector.y) < 78) {
            return true;
        }
        return false;
    }

});
