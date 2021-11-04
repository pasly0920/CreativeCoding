import { WaveGroup } from "./wavegroup.js";

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        
        this.waveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2); // 높이, 넓이 각각 2배 

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate(t){
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.waveGroup.draw(this.ctx);
        
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    let app = new App();
    console.log(app.waveGroup.totalWaves);
    //이 안에서 wave와 관련된 것들을 control 




    
};

