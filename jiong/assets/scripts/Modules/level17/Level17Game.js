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
        pig: {
            default: null,
            type: cc.Node
        },
        sun: {
            default: null,
            type: cc.Node
        },
        tang: {
            default: null,
            type: cc.Node
        },
        sha: {
            default: null,
            type: cc.Node
        },
        pigSpace: {
            default: null,
            type: cc.Node
        },
        sunSpace: {
            default: null,
            type: cc.Node
        },
        shaSpace: {
            default: null,
            type: cc.Node
        },
        pigSpace: {
            default: null,
            type: cc.Node
        },
        tangSpace: {
            default: null,
            type: cc.Node
        }
    },

    onLoad () {
        this.createBaseNodes();
        this.didShowAlertOnce = false;
    },

    start () {

    },

    update (dt) {

    },
});
