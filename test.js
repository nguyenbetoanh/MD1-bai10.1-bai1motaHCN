class Rectangle {
    x;
    y;
    width;
    height;
    color;
    dienTich;
    chuVi;

    constructor(x, y, width, height, color,dienTich, chuVi) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.dienTich = dienTich;
        this.chuVi = chuVi;
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getHeight() {
        return this.height;
    }

    setHeight(heigth) {
        this.height = heigth;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    setDienTich(dienTich) {
        this.dienTich = dienTich;
    }

    getDienTich() {
        return this.width* this.height
    }

    setChuVi(chuVi) {
        this.chuVi = chuVi;
    }

    getChuVi(chuVi) {
        return (this.width+this.height)/2
    }

    drawRectangle(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = color;
        ctx.stroke()
    }
}