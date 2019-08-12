// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

let BaseLevel = cc.Class({
    extends: cc.Component,

    properties: {
        alert: {
            default: null,
            type: cc.Prefab
        },
        backPrefab: {
            default: null,
            type: cc.Prefab
        },
        tipsPrefab: {
            default: null,
            type: cc.Prefab
        },
        nextLevelName: ''
    },

    createBackAndTips () {
        this.createBack();
        this.createTips();
    },

    createAlert: function (e, content) {
        let alertNode = cc.instantiate(this.alert);
        this.node.addChild(alertNode);
        let alertComponent = alertNode.getComponent('Alert');
        alertComponent.cotent = content;
        alertComponent.nextLevelName = this.nextLevelName;
        alertComponent.updateContent();
    },

    createCross: function (position) {
        let crossNode = cc.instantiate(this.crossPrefab);
        this.node.addChild(crossNode);
        crossNode.setPosition(position);
        setTimeout(() => { crossNode.destroy() }, 500);
    },

    createBack: function () {
        let backNode = cc.instantiate(this.backPrefab);
        backNode.on('click', this.loadHome, this);
        this.node.addChild(backNode);
    },

    createTips: function () {
        let tipsNode = cc.instantiate(this.tipsPrefab);
        tipsNode.on('click', this.loadAd, this);
        this.node.addChild(tipsNode);
    },

    loadAd: function () {
        console.log('播放广告');
    },

    loadHome: function () {
        cc.director.loadScene("home");
    }


});