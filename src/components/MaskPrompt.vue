<template>
    <transition name="mask" v-if="seepIndex == 1 && isMask">
        <div class="mask-prompt">
            <div class="mask_txt">
                <img src="../assets/mask_txt.png" />
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "MaskPrompt",
        data(){
            return{
                isMask : true
            }
        },
        computed: {
            ...mapGetters(['seepIndex']),
        },
        watch:{
            seepIndex(val){
                // console.log(val)
                setTimeout(()=>{
                    this.isMask = false
                },2000)
            }
        },
        mounted(){


        }
    }
</script>

<style lang="less" scoped>
    .mask-prompt{
        width:100%;height:100%;position:absolute;background:rgba(0,0,0,0.6);z-index:8888;
        .mask_txt{
            width:24px;position:absolute;left:50%;top:50%;margin-left:-12px;margin-top:-313px/2;
        }
    }

    .mask-enter-active, .mask-leave-active {
        transition: opacity 1s;
    }
    .mask-enter, .mask-leave-to {
        opacity: 0;
    }
</style>