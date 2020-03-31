<template>
    <div class="page-box">
        <div class="page_txt" v-if="isRetrun">
            <slot></slot>
        </div>
        <div class="page_txt" v-show="seepIndex == 1" v-else>
            <slot></slot>
        </div>
        <div class="bg">
            <img :src="require('../assets/page_'+ pageBgSrc +'.jpg')" />
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "PageBox",
        props : {
            isRetrun : {
                type : Boolean,
                default : true
            },
            pageBgSrc : String,
        },
        computed: {
            ...mapGetters(['seepIndex']),
        },
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
    .page-box{
        width: 100%;position: relative;overflow: hidden;
        .page_txt{
            width:100%;height: 100%;position:absolute;z-index:88;
        }
        .bg{
            width: 100%;position: relative;z-index: 6;
            //top:50%;margin-top:-1470px/2;
        }
    }
</style>