<template>
    <div id="loading">
        <!--<b>这是一个loading</b>-->
        <div class="loading_pic">
            <img src="../assets/loading.png" />
        </div>
        <p>{{number}}%</p>
        <div class="bg"><img src="../assets/loading_bg.jpg" /> </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Loading",
        data(){
            return{
                number:0,
            }
        },
        computed: {
            ...mapGetters(['loaderName']),
        },
        mounted(){
            this.loaderComplete()
        },
        methods:{
            loaderComplete() {
                let t = this;
                const imgArray = []
                const loadFiles = require('../loadFiles.json');

                Array.from(loadFiles).forEach(item =>{
                    let name = item.substring(0, item.indexOf("."));
                    let path = require('../assets/' + item);
                    imgArray.push({id:name,src:path})
                });

                // console.log(imgArray)

                global.loadQueue = new window.createjs.LoadQueue();
                global.loadQueue.on("complete", t.handleComplete, t);
                global.loadQueue.on("progress", t.handleFileProgress,t);
                global.loadQueue.loadManifest(imgArray);
            },
            handleFileProgress(e){
                let percent = e.progress * 100 | 0;
                this.number = percent;
                // console.log(percent)
            },
            handleComplete(){
                console.log("加载完成...")
                // window.wx.ready(() => {
                //     document.getElementById("bgMusic").play()
                // });
                this.$store.dispatch('setLoaderName','home')
            }
        }
    }
</script>

<style lang="less" scoped>
    #loading{
        width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 8888; display: block;overflow: hidden;
        p{
            color: #FFF;position:absolute;top:50%;text-align: center; margin-top: 0px;z-index: 999;font-size: 35px;width:100%;
        }
        .loading_pic{
            width:229px;position:absolute;z-index:88;
            left:50%;margin-left:-(229px/2);bottom:130px;
        }
        .bg{
            width: 100%;position: absolute;z-index:1;top:50%;margin-top:-823px;
        }
    }
</style>
