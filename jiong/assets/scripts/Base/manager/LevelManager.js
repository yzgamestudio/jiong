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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.persisitNode();
    },

    start () {

    },

    persisitNode () {
        if (!this.node._persistNode) {
            cc.game.addPersistRootNode(this.node);
        }
    },

    levelAccessable: function () {
        let levelAccessable = cc.sys.localStorage.getItem('levelAccessable');
        if (!levelAccessable) {
            cc.sys.localStorage.setItem('levelAccessable', 1);
            return 1;
        } else {
            return levelAccessable;
        }
    },

    updateLevel: function (levelAccessable) {
        cc.sys.localStorage.setItem('levelAccessable', levelAccessable);
    }
});
