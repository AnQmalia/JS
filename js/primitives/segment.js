class Segment {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  equals(seg) {
    if (!seg) return false;
    return this.includes(seg.p1) && this.includes(seg.p2);
  }

  includes(point) {
    if (!point) return false;
    if (typeof this.p1?.equals === "function" && this.p1.equals(point)) return true;
    if (typeof this.p2?.equals === "function" && this.p2.equals(point)) return true;
    return (
      (this.p1 && this.p2 && this.p1.x === point.x && this.p1.y === point.y) ||
      (this.p1 && this.p2 && this.p2.x === point.x && this.p2.y === point.y)
    );
  }

  draw(ctx, { width = 2, color = "black", dash = [] } = {}) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.setLineDash(dash);
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}
