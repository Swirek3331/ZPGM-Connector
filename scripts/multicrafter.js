const altanic-furnace = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "altanic-furnace", [
    /*default form for each recipes. You can change values.
    {
        input:{
            items:[],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
            liquids:[],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
            power:0,
        },
        output:{
            items:[],
            liquids:[],
            power:0,
        },
        craftTime:80,
    },*/
    {
        input: {
            items: ["altanic-ironore/1"],
            power: 0.5,
        },
        output: {
            items: ["altanic-zelazo/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["coal/1", "sand/2"],
            power: 0.5,
        },
        output: {
            items: ["silicon/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["coal/2", "altanic-ironore/1"],
            power: 1.5,
        },
        output: {
            items: ["altanic-stal/1"],
        },
        craftTime: 90
    },
    {
        input: {
            items: ["lead/1", "sand/1"],
            power: 0.5,
        },
        output: {
            items: ["metaglass/1"],
        },
        craftTime: 30
    },
    {
        input: {
            items: ["altanic-quartz/4"],
            powet: 1
        },
        output: {
            items: ["silicon/1"], 
        },
        craftTime: 90
    },
    {
        input: {
            items: ["metaglass/20", "titanium/10"],
            powet: 4
        },
        output: {
            items: ["z.p.g.m._mod-butelka/10"], 
        },
        craftTime: 300
    }, 
], {
    /*you can customize block here. ex) load()*/
},
    /*this is Object constructor. This way is much better than literal way{a:123}
    you can replace this with {} if you don't want to modify entity*/
    function Extra() {
        /*you can use customUpdate=function(){}. this function excuted before update()
        also this.draw=function(){}
        you can customize entity here.
        ex)
        this._myProp=0;
        this.getMyProp=function(){
            return this._myProp;
        };
        this.setMyProp=function(a){
            this._myProp=a;
        };*/
    });
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/
//using example without .json file. I don't recommand this way because you can't use mod item as requirements.
altanic-furnace.localizedName = "Electric Furnace";
altanic-furnace.description = "Electir Furnace use power to smelt items";
altanic-furnace.itemCapacity = 20;
altanic-furnace.size = 2;
altanic-furnace.health = 250;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
altanic-furnace.dumpToggle = true;