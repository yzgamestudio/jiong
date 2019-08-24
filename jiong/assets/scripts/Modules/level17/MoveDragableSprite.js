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
    extends: require('DragableSprite'),

    properties: {
        dest: {
            default: null,
            type: cc.Node
        }
    },

    onload () {
        this.savePosition();
        this.listenTouch();
    },

    listenTouch: function () {
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            this.isTouch = true;
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            if (this.isTouch) {
                this.movePosition(event);
            }
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (t) {
            this.isTouch = false;
            this.toDestination();
        }, this);
    },

    toDestination () {
        let distance = this.node.position - this.dest.position;
        if (distance.mag() > 30) {
            this.node.position = this.intialPosition;
        } else {
            this.node.position = this.dest.position;
        }
    },

    savePosition () {
        this.intialPosition = this.node.position;
    }
});
