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
        minus: {
            default: null,
            type: cc.Node,
        },
        plus: {
            default: null,
            type: cc.Node,
        },
        carNum: {
            default: null,
            type: cc.Node
        }
    },


    onLoad () {
        this.createBackAndTips();

    },

    plusCarNum () {
        let label = this.carNum.getComponent("cc.Label");
        label.string = String(parseInt(label.string) + 1);
        if (parseInt(label.string) > 100) {
            label.string = '100';
        }
        if (parseInt(label.string) === 87) {
            this.createAlert(null, '原来要倒过来看啊');
        }
    },

    minusNum () {
        let label = this.carNum.getComponent("cc.Label");
        label.string = parseInt(label.string) - 1;
        if (parseInt(label.string) < 0) {
            label.string = '0';
        }
        if (parseInt(label.string) === 87) {
            this.createAlert(null, '原来要倒过来看啊');
        }
    }
});
