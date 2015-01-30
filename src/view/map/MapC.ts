/**
 * Created by xushuwei on 15/1/27.
 */
module view.map
{
    export class MapC extends MapV implements i.IUIControl
    {

        private _timer:egret.Timer;
        private _curABlockInfo:data.ActiveBlockInfo;
        private _curcheckL:Array<data.CheckPoint>;
        public constructor(){
            super();
            this.init();
        }

        public init():void{

        }

        public open():void{
            this.createBrick();
            this._timer = new egret.Timer(500);
            this.addEvent();
            this._timer.start();
        }

        public createBrick():void{
            this._curABlockInfo = this.mapData.creatActiveBlock();
            this.addChild(this._curABlockInfo.getBody());
        }

        private addEvent():void{
            manage.EventManage.instance().addListener(mevent.EventType.N_CHANGE_DIRECTION,this.changeDirctionHandler);
            this._timer.addEventListener(egret.TimerEvent.TIMER, this.enterFrame, this);
        }

        private enterFrame():void{
            this._curABlockInfo.updata();
            this._curcheckL = this._curABlockInfo.getCheckList();

            var str:string = "";
            var col:string = "";

            for(var i:number =0; i<this._curcheckL.length; i++){

                str+=" "+this._curcheckL[i].getRow();
                col += " "+this._curcheckL[i].getCol();
            }

            this.checkHit("down")
        }




        //检测碰撞
        private  checkHit(moveType:string):boolean{
            var brickRow = 0,brickCol = 0;
            var isHit:boolean =false;
            for(var i:number = 0; i<this._curcheckL.length;i++){
                brickRow = this._curcheckL[i].getRow();
                brickCol = this._curcheckL[i].getCol();

                switch(moveType){
                    case "left":
                        isHit = this.checkCell(brickRow,brickCol-1,'hitL');
                        break;
                    case "right":
                        isHit = this.checkCell(brickRow,brickCol+1,'hitR');
                        break;
                    case "down":

                        isHit = this.checkCell(brickRow+1,brickCol,'hitD');
                        //触底
                        if(isHit) {
                            this.floor();
                        }
                        break;
                    default :
                        break;
                }

                if(isHit){
                    return true;
                }
            }

            return isHit
        }



        //检测该单元格是否可以移动
        private checkCell(i:number,j:number, hitType:string):boolean{
            switch (hitType){
                case "hitL":
                    if(j<0 || this.blockDic[i.toString()+j] == null){
                        return true;
                    }
                    break;
                case "hitR":
                    if(j >= config.GameConfig.MAP_MAX_COL || this.blockDic[i.toString()+j] == null){
                        return true;
                    }
                    break;
                case "hitD":
                    if(i>= config.GameConfig.MAP_MAX_ROW || this.blockDic[i.toString()+j] == null){
                        return true;
                    }
                    break;
                default :
                    break;
            }

            if(this.blockDic[i.toString()+j].block == 1){
                return true;
            }

            return false;
        }

        private floor():void{
            this._curABlockInfo.setIsDie(true);
            this.updateToScene();
            this._curABlockInfo.destroy();
            this.checkLine();
            this.createBrick();
            this.checkGameOver();//j检测游戏结束
        }

        //检测消除行
        private checkLine():void{
            var canClear:boolean = false;
            for(var i:number = config.GameConfig.MAP_MAX_ROW-1; i>=0; i--){
                canClear = true;
                for(var j:number = 0; j<config.GameConfig.MAP_MAX_COL; j++){
                    if(this.blockDic[i.toString()+j].block !=1){
                        canClear = false;
                        break;
                    }
                }
                if(canClear){
                    this.clearLine(i);
                    i++;
                }
            }
        }

        //消除行操作
        private clearLine(index:number):void{
            for(var j:number = 0; j<config.GameConfig.MAP_MAX_COL; j++){
                this.blockDic[index.toString()+j].block = 0;
            }

            for(var i:number = index-1; i>=0; i--){
                for(var j:number = 0; j<config.GameConfig.MAP_MAX_COL; j++){
                    if(this.blockDic[i.toString()+j].block == 1){
                        this.blockDic[(i+1).toString()+j].block = 1;
                        this.blockDic[i.toString()+j].block = 0;
                    }
                }
            }
        }

        //砖块模型里的形状更新到场景中
        private  updateToScene():void{
            var brickX = 0,brickY = 0;
            for(var i:number = 0; i<this._curcheckL.length;i++){
                brickX = this._curcheckL[i].getRow();
                brickY = this._curcheckL[i].getCol();
                this.blockDic[brickX.toString()+brickY].block = 1;
            }
        }

        private changeDirctionHandler(event:mevent.NoticeData):void{
            switch (event.data){

                case config.GameConfig.DIR_LEFT:

                    break;
                case config.GameConfig.DIR_RIGT:

                    break;
                case config.GameConfig.DIR_TURN:

                    break;
                case config.GameConfig.DIR_DOWN:

                    break;
            }
        }

        //检测游戏结束
        private checkGameOver():void{
            var isLost:boolean = false;
            for(var i:number = 3; i >= 0; i--){
                for(var j:number = 0; j<config.GameConfig.MAP_MAX_COL;j++){
                    if(this.blockDic[i.toString()+j].block == 1){
                        isLost = true;
                    }
                }
            }

            if(isLost){
                // gameOver 重新开始
                this._timer.stop();
                this._timer.removeEventListener(egret.TimerEvent.TIMER, this.enterFrame, this);
            }
        }



        public getLevel():string{
            return config.UIKey.UI_LEVEL_2;
        }

        public close():void{

        }

        public destroy():void{

        }
    }
}