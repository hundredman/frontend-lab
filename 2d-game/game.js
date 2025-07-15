class GameObject {
  constructor(element, x = 0, y = 0) {
    this.el = element;
    this.x = x;
    this.y = y;
    this.size = 40;
    this.updatePosition();
  }

  updatePosition() {
    this.el.style.left = this.x + "px";
    this.el.style.top = this.y + "px";
  }

  isCollidingWith(other) {
    return !(
      this.x + this.size <= other.x ||
      this.x >= other.x + other.size ||
      this.y + this.size <= other.y ||
      this.y >= other.y + other.size
    );
  }
}

class Player extends GameObject {
  constructor(element) {
    super(element);
    this.step = 10;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;

    // 경계 제한
    this.x = Math.max(0, Math.min(360, this.x));
    this.y = Math.max(0, Math.min(360, this.y));

    this.updatePosition();
  }
}

// 초기화
const player = new Player(document.getElementById("player"));
const enemy = new GameObject(document.getElementById("enemy"), 200, 200);

// 키보드 조작
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      player.move(0, -player.step);
      break;
    case "ArrowDown":
      player.move(0, player.step);
      break;
    case "ArrowLeft":
      player.move(-player.step, 0);
      break;
    case "ArrowRight":
      player.move(player.step, 0);
      break;
  }

  if (player.isCollidingWith(enemy)) {
    alert("💥 충돌 발생! 게임 종료!");
  }
});