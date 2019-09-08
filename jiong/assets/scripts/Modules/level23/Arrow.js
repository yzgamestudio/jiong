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

    },

    shoot () {
        if (!this.didShoot) {
            let moveToAction = cc.moveTo(2, cc.v2(this.node.x, this.node.parent.height / 2 + this.node.height));
            this.node.runAction(moveToAction);
            this.didShoot = true;
        }
    },

    onEnable: function () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;

    },

    onDisable: function () {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;

    },

    start () {

    },

    update (dt) {

    },

    onCollisionEnter: function (other, self) {
        if (cc.Intersection.rectRect(self.world.aabb, other.world.aabb)) {
            let blinkAction = cc.blink(2, 10);
            other.node.runAction(blinkAction);
        }

    }

});
