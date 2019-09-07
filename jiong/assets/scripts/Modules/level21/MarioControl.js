// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

let MoveDirection = {
    Down: 1,
    Right: 2,
    JumpRight: 3 //右边走同时跳
};


cc.Class({
    extends: cc.Component,

    properties: {
        xSpeed: 0,
        ySpeed: 0,
        accelerate: 0,
        direction: MoveDirection.Down
    },


    start () {
    },

    update (dt) {
        let deltaX = this.xSpeed * dt;
        this.node.x += deltaX;

        this.ySpeed += this.accelerate * dt;
        let deltaY = this.ySpeed * dt;
        console.log(this.ySpeed);
        if (this.ySpeed <= 0 && this.direction == MoveDirection.JumpRight) {
            this.changeMoveDirection(MoveDirection.Down);
        }
        this.node.y += deltaY;
    },

    onCollisionEnter: function (other, self) {
        if (this.isOnWall(other, self)) {
            this.changeMoveDirection(MoveDirection.Down);
        }
        if (this.isOnGround(other, self)) {
            this.changeMoveDirection(MoveDirection.Right);
        }

    },

    onCollisionExit: function (other, self) {
        if (this.direction != MoveDirection.JumpRight) {
            this.changeMoveDirection(MoveDirection.Down);
        }

    },

    // onCollisionStay: function (other, self) {

    // },


    isOnGround (other, self) {
        var world = self.world;
        // 碰撞组件的 aabb 碰撞框
        var aabb = world.aabb;

        var world2 = other.world;
        // 碰撞组件的 aabb 碰撞框
        var aabb2 = world2.aabb;
        if (aabb.yMax >= aabb2.yMin) {
            return true;
        }
        return false;
    },

    isOnWall (other, self) {
        // var world = self.world;
        // // 碰撞组件的 aabb 碰撞框
        // var aabb = world.aabb;

        // var world2 = other.world;
        // // 碰撞组件的 aabb 碰撞框
        // var aabb2 = world2.aabb;
        // if (aabb.xMax >= aabb2.xMin) {
        //     return true;
        // }
        return false;
    },

    changeMoveDirection (direction) {
        if (direction == MoveDirection.Right) {
            this.ySpeed = 0;
            this.xSpeed = 300;
        }
        if (direction == MoveDirection.Down) {
            this.ySpeed = -200;
            this.xSpeed = 0;
            this.accelerate = 0;
        }
        else if (direction == MoveDirection.JumpRight) {
            this.xSpeed = 300;
            this.ySpeed = 600;
            this.accelerate = -1000;
        }
        this.direction = direction;
    },

    jumpButtonDidPressed () {
        if (this.direction == MoveDirection.Right) {
            this.changeMoveDirection(MoveDirection.JumpRight);
        }
    }


});
