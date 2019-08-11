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
        levelButtons: {
            default: [],
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.updateLevelButtonStatus();
        this.hideBackButton();
        this.hideTipButton();
    },

    loadLevel (event, customData) {
        let level = 'level' + customData;
        cc.director.loadScene(level);

    },

    hideBackButton () {
        let backNode = cc.find("back");
        backNode.opacity = 0;
    },

    hideTipButton () {
        let tipsNode = cc.find("tips");
        tipsNode.opacity = 0;
    },

    updateLevelButtonStatus () {
        let levelManager = cc.find("Manager").getComponent("LevelManager");
        let levelAccessable = levelManager.levelAccessable();
        debugger;
        this.levelButtons.forEach((value, index, array) => {
            if (index + 1 <= levelAccessable) {
                value.interactable = true;
            } else {
                value.interactable = false;
            }
        });
    }
});
