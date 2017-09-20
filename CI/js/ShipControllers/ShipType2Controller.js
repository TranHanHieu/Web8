class ShipType2Controller extends ShipController{
  constructor(x, y, spriteSuffix, configs){
    super(
      x,
      y,
      `Spaceship2${spriteSuffix}.png`,
      configs
    );

    this.configs.SHIP_SPEED = 200;
    this.configs.COOLDOWN = 500;
  }

  fire(){
    // new BulletType1Controller(
    //   this.sprite.x,
    //   this.sprite.y,
    //   {}
    // );
  }
}
