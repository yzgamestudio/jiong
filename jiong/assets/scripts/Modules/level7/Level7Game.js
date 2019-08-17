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
        pubbles: {
            default: [],
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.createBackAndTips();
        this.showAlertOnce = false;;
    },

    start() {

    },

    update(dt) {
        let isCoincide = this.judgeCoincide();
        if (isCoincide && !this.showAlertOnce) {
            this.createAlert(null, '气泡放在一起最大了');
            this.showAlertOnce = false;
        }
    },

    judgeCoincide() {
        let isCoincide = true;
        for (let i = 0; i < this.pubbles.length; i++) {
            let pubble = this.pubbles[i];
            for (let j = i + 1; j < this.pubbles.length; j++) {
                let otherPubble = this.pubbles[j];
                let vector = cc.v2(pubble.x - otherPubble.x, pubble.y - otherPubble.y);
                console.log(vector.mag());
                if (vector.mag() > 60) {
                    isCoincide = false;
                }
            }
        }
        return isCoincide;
    }


});
