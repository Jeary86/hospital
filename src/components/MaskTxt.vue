<template>
    <transition name="mask" v-if="isPraise">
        <div class="mask-txt">
            <div class="mask_pic">
                <img src="../assets/mask_pic.png" />
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "MaskTxt",
        computed: {
            ...mapGetters(['isPraise']),
        },
        watch :{
            isPraise(val){
                if (val){
                    setTimeout(()=>{
                        this.$store.dispatch('setIsPraise',false)
                        this.$store.dispatch('setPageIndex',0)
                    },2000)
                    this.$store.dispatch('setHomeStyle',true)
                }
            }
        },
        mounted(){

        }
    }
</script>

<style lang="less" scoped>
    .mask-txt{
        width:100%;height:100%;position:fixed;background:rgba(0,0,0,0.6);z-index:8888;
        .mask_pic{
            width:375px;position:absolute;left:50%;top:50%;margin-left:-375px/2;margin-top:-63px/2;
        }
    }
    .mask-enter-active, .mask-leave-active {
        transition: opacity 0.8s;
    }
    .mask-enter, .mask-leave-to {
        opacity: 0;
    }
</style>