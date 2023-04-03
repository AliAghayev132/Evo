import Entity from "./Entity.js";
export default class Player extends Entity {
    initAnimations() {
        this._animationComponent.addAnimation("run", 120, 80, 0, 0, 9, 0, 2.5);
        this._animationComponent.addAnimation("idle", 120, 80, 0, 1, 9, 0, 4);
    }

    constructor(width, height, x, y) {
        super(width, height, x, y);
        this.createAnimationComponent();
        this.createMovementComponent(14.0, 3.0, 60.0);
        this.createHitboxComponent(22, 40, 0, 276, 43, 40, "yellow");
        this.initAnimations();
    }
    updateAnimation(dt) {
        if (this._movementComponent.getVelocityX() > 0) {
            if (this._shape.getFlip() != 1) {
                this.flipTexture();
                this._shape.setOrigin();
            }
            this._animationComponent.playAnimation("run", dt, this._animationRect);
        } else if (this._movementComponent.getVelocityX() < 0) {
            if (this._shape.getFlip() == 1) {
                this.flipTexture(-1);
                this._shape.setOrigin(-10, 0);
            }
            this._animationComponent.playAnimation("run", dt, this._animationRect);
        } else {
            this._animationComponent.playAnimation("idle", dt, this._animationRect);
        }
    }
    update(dt) {
        super.update(dt);
        this.updateAnimation(dt);
    }
    render() {
        super.render();
    }
}