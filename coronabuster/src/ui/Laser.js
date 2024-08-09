import Phaser from "phaser";
export default class Laser extends Phaser.Physics.Arcade.Sprite {
  //--> This class is used to create objects of type sprite
  //--------> There are 3 methods created in this class (fire, die, update). Complete it by moving on to the next stage!
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.setScale(2);
  }

  fire(x, y) {
    this.setPosition(x, y - 50); //---------> The x and y values ​​will be set when this method is called
    this.setActive(true);
    this.setVisible(true);
  }
  die() {
    this.destroy();
  }

  update(time) {
    this.setVelocityY(-200); //-----> Object moving up
    if (this.y < -10) {
      this.die(); //-----> If the object crosses the upper limit, then it will be disappear
    }
  }
}
