<template>
    <transition name="mask" v-if="isShare">
        <div class="share-mask" @click="onClickCloseShare">
            <div class="share_pic">
                <img src="../assets/share_pic.png" />
            </div>
        </div>
    </transition>

</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "ShareMask",
        computed: {
            ...mapGetters(['isShare']),
        },
        methods:{
            onClickCloseShare(){
                this.$store.dispatch('setIsShare',false);
            }
        }
    }
</script>

<style lang="less" scoped>
    .share-mask{
        width:100%;height:100%;position:fixed;background:rgba(0,0,0,0.6);z-index:8888;
        .share_pic{
            width:96px;position:absolute;right:10px;top:30px;
        }
    }
</style>