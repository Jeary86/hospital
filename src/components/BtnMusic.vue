<template>
    <div class="btn-music" @click="onClickMusic">
        <img :src="[isMusic ? musicSrc[0] : musicSrc[1]]" />
    </div>
</template>

<script>
    export default {
        name: "BtnMusic",
        data(){
            return{
                isMusic : true,
                musicSrc : [require('../assets/music_on.png'),require('../assets/music_off.png')]
            }
        },
        methods:{
            onClickMusic(){
                this.isMusic = !this.isMusic;
                if (this.isMusic) {
                    console.log('打开');
                    document.getElementById("bgMusic").play();
                }else {
                    console.log('关闭');
                    document.getElementById("bgMusic").pause();
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.btn-music{
    width:70px;position:absolute;z-index:999;right:10px;top:10px;
}
</style>