<template>
    <div id="app">
        <FlipEquipment @screen="screenChange" />
        <Layout v-if="isScreen" />

        <audio id="bgMusic" :src="audioSrc" preload="auto" autoplay="autoplay" loop></audio>
    </div>
</template>

<script>
    import Loading from "./components/Loading";
    import Layout from "./views/Layout";

    export default {
        name: 'app',
        data(){
          return{
              isScreen : true,
              share : '',
              audioSrc: require('./music/bgm.mp3'),
          }
        },
        mounted(){
            document.body.addEventListener('touchmove', function (e) {
                e.preventDefault();
            }, {passive: false});

            document.addEventListener("WeixinJSBridgeReady", function() {
                document.getElementById("bgMusic").play();
                setTimeout(()=>{
                    // document.getElementById("bgMusic").pause();
                },10)
            }, false);
        },
        methods:{
            screenChange(e){
                this.isScreen = e
            }
        },
        components: {Layout, Loading},
    }
</script>

<style scoped lang="less">
    #app {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow:hidden;
        color: #2c3e50;
    }
</style>
