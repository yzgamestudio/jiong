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
    extends: cc.Component,

    properties: {
        dogNode: {
            default: null,
            type: cc.Node
        },
        alert: {
            default: null,
            type: cc.Prefab
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.dogVisble = true;
        this.schedule(function () {
            // 这里的 this 指向 component
            this.showOrHiddenDog();
        }, 1.5);
    },

    start () {

    },

    showOrHiddenDog: function () {
        if (this.dogVisble) {
            this.dogNode.opacity = 0;
        }
        else {
            this.dogNode.opacity = 255;
        }
        this.dogVisble = !this.dogVisble;

    },

    createAlert: function () {
        let alertNode = cc.instantiate(this.alert);
        this.node.addChild(alertNode);
        let alertComponent = alertNode.getComponent('Alert');
        alertComponent.cotent = '点击它才对';
        alertComponent.nextLevelName = 'level3';
        alertComponent.updateContent();
    },

    // update (dt) {},
});
