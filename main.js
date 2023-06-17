class Car {
    constructor(x, y, scale) {
        this.x = x;
        this.y = y;
        this.scale = scale;

        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = document.body.clientWidth * 2;
        this.canvas.height = document.body.clientHeight * 2;
        this.ctx.scale(2,2);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.draw(0);
    }

    draw(degree) {
        const width = 200 * this.scale;
        const height = 100 * this.scale;
        const wheelWith = 40 * this.scale;
        const wheelHeight = 7 * this.scale;

        //본체
        this.ctx.beginPath();
        this.ctx.translate(this.x+width/2, this.y+height/2);
        this.ctx.rotate(degree * Math.PI / 180);
        this.ctx.translate(0-(this.x+width/2), 0-(this.y+height/2));
        this.ctx.fillStyle = 'tomato';
        this.ctx.fillRect(this.x, this.y, width, height);

        //루프
        this.ctx.fillStyle = 'coral';
        const roofX = this.x+width*0.12;
        const roofY= this.y+width*0.08;
        const roofWidth = width*0.6;
        const roofeHeight= height*0.65;
        this.ctx.fillRect(roofX, roofY, roofWidth, roofeHeight);
        
        //바퀴
        this.ctx.fillStyle = 'black';

        //오른쪽 아래 바퀴
        let wheelX = this.x + width*0.6;
        let wheelY = this.y + height;
        this.ctx.fillRect(wheelX, wheelY, wheelWith, wheelHeight);
        
        //왼쪽 아래 바퀴
        wheelX = this.x + width*0.1;
        wheelY = this.y + height;
        this.ctx.fillRect(wheelX, wheelY, wheelWith, wheelHeight);
        
        //오른쪽 위 바퀴
        wheelX = this.x + width*0.6;
        wheelY = this.y - wheelHeight;
        this.ctx.fillRect(wheelX, wheelY, wheelWith, wheelHeight);

        //왼쪽 위 바퀴
        wheelX = this.x + width*0.1;
        wheelY = this.y - wheelHeight;
        this.ctx.fillRect(wheelX, wheelY, wheelWith, wheelHeight);
    }
}

let = car = new Car(50, 50, 1);
