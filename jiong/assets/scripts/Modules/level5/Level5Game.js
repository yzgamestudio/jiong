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
        rabbits: {
            default: [],
            type: cc.Node
        },
        titleNode: {
            default: null,
            type: cc.Node
        },
    },

    onLoad () {
        this.createBackAndTips();
        this.isShowingAlert = false; //在显示的时候不能再出现第二个
    },

    update (dt) {
        this.judgeOnSameHorizontal();
    },

    judgeOnSameHorizontal () {
        let count = 0;
        this.rabbits.forEach((value, key, array) => {

        });

        if (count >= this.rabbits.length) {
            this.showAlertOnce();
        }
    },

    showAlertOnce () {
        if (this.isShowingAlert) {
            return;
        }
        this.createAlert();
        this.isShowingAlert = true;
    }

});
