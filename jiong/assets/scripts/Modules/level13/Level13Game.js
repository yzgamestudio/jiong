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
        part1: {
            default: null,
            type: cc.Node
        },
        part2: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.createBaseNodes();
        this.didShowAlertOnce = false;
    },

    update (dt) {
        let isSuccess = this.judgeSuccess();
        if (isSuccess && !this.didShowAlertOnce) {
            this.createAlert(null, '无穷大最大');
        }
    },

    judgeSuccess () {
        debugger;
        let vector = this.part1.position.sub(this.part2.position);
        if (Math.abs(vector.y) < 10 && Math.abs(Math.abs(vector.x) - this.part1.width) < 10) {
            return true;
        }
        return false;
    }
});
