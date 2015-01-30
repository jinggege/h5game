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
            this._curABlockInfo = this.mapData.creatActiveBlock();
            this.addChild(this._curABlockInfo.getBody());
            this._timer = new egret.Timer(500);
            this.addEvent();
            this._timer.start();
        }

        private addEvent():void{
            manage.EventManage.instance().addListener(mevent.EventType.N_CHANGE_DIRECTION,this.changeDirctionHandler);
            this._timer.addEventListener(egret.TimerEvent.TIMER, this.enterFrame, this);
        }

        private enterFrame():void{
            this._curABlockInfo.updata();
            this._curcheckL = this._curABlockInfo.getCheckList();
            this.checkHit("down")
        }

        //砖块模型里的形状更新到场景中
        private  updateToScene():void{
            var brickX = 0,brickY = 0;
            for(var i:number = 0; i<this._curcheckL.length;i++){
                brickX = this._curcheckL[i].getCol();
                brickY = this._curcheckL[i].getRow();
                this.blockDic[brickX.toString()+brickY].setBlockInfo(new data.BlockInfo(brickX,brickY,1));
            }
        }


        //检测碰撞
        private  checkHit(moveType:string):boolean{
            var brickX = 0,brickY = 0;
            var isHit:boolean =false;
            for(var i:number = 0; i<this._curcheckL.length;i++){
                brickX = this._curcheckL[i].getCol();
                brickY = this._curcheckL[i].getRow();

                switch(moveType){
                    case "left":
                        isHit = this.checkCell(brickX-1,brickY,'hitL');
                        break;
                    case "right":
                        isHit = this.checkCell(brickX+1,brickY,'hitR');
                        break;
                    case "down":
                        isHit = this.checkCell(brickX,brickY+1,'hitD');
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
                    if(j<0){
                        return true;
                    }
                    break;
                case "hitR":
                    if(j >= config.GameConfig.MAP_MAX_COL){
                        return true;
                    }
                    break;
                case "hitD":
                    if(i>= config.GameConfig.STAGE_MAIN_WIDTH){
                        return true;
                    }
                    break;
                default :
                    break;
            }

            if(this.blockDic[i.toString()+j].getBlockInfo().getBlock() == 1){
                return true;
            }

            return false;
        }

        private changeDirctionHandler(event:mevent.NoticeData):void{

            util.Console.log([event.data]);
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


        public getLevel():string{
            return config.UIKey.UI_LEVEL_2;
        }

        public close():void{

        }

        public destroy():void{

        }
    }
}