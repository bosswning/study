var app = new Vue({
    el : "#hello-vue",
    data : {
        name: "bossw",
        job: "web",
        age: 31,
        website: "http://wwww.baidu.com",
        websiteTag: "<a href='http://wwww.baidu.com'>web开发</a>",
        x:0,
        y:0
    },methods:{
        greet:function(time){
            return "Good" + ' '+ time + ' '+ this.name + "!";
        },
        add:function(inc){
            this.age += inc
        },
        subtract:function(dec){
            this.age -= dec
        },
        updateXY:function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})


/*
* el ：element 需要获取的元素，一定html中的根元素
* data：用于数据的存储
* methods: 用于存储各种方法
* data-bingding：给属性绑定对应的值
*/