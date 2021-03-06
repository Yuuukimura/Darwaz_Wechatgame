// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        StartButton:
            {
                default:null,
                type:cc.Button,
            }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // this.StartButton=this.node.getComponent(cc.Button);

        // 预加载
        cc.director.preloadScene("GameScene", function () {
            cc.log("game scene preloaded");
        });

        if(this.StartButton!=null)
        {
            var clickEvent=new cc.Component.EventHandler();
            clickEvent.target=this.node;
            clickEvent.component="StartSceneManager";
            clickEvent.handler="onStartButtonClick";
            clickEvent.customEventData="Start Game";
            this.StartButton.clickEvents.push(clickEvent);
        }
    },
    
    onStartButtonClick(event, customEventData)
    {
        console.log("Game_Start");
        cc.director.loadScene('GameScene');
    }
    // update (dt) {},
});
