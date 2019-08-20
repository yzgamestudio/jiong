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
        matches: {
            default: [],
            type: cc.Node,
        },
        shouldMoveMatch: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.createBaseNodes();
        this.saveInitalPosition();
    },

    start () {

    },

    update (dt) {
        let isSuccess = this.judgeSuccess();
        if (isSuccess) {
            this.createAlert(null, '4-4=1-1');
        }
    },

    saveInitalPosition () {
        this.initailPositions = [];
        this.matches.forEach((value, index, array) => {
            this.initailPositions.push(value.position);
        });

    },

    recoverInitalPosition () {
        this.matches.forEach((value, index, array) => {
            value.position = this.initailPositions[index];
        });
    },

    judgeSuccess () {
        let x = this.shouldMoveMatch.x;
        let y = this.shouldMoveMatch.y;
        if (x > 220 && x < 250 && y < 50 && y > -10) {
            return true;
        }
        return false;
    }

});
