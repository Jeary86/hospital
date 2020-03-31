<template>
    <div class="page6" :class="[showTime ? 'pageShow' : 'seepShow']">
        <div class="page_txt1">
            <img src="../assets/page_6_txt1.png" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page6",
        props : {
            showTime : {
                type : Boolean,
                default : true
            }
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
    .page6{
        width: 100%;height:100%;position: relative;overflow: hidden;

        .page_txt1{
            width:263px;position:absolute;top:50%;left:50%;
            margin-left:-263px/2;margin-top:-322px;
        }
    }

    .seepShow{
        .page_txt1{
            animation: page_txt1_1 6s ease-in-out;
        }
        @keyframes page_txt1_1 {
            0%,5%{transform: translate(0,20px);opacity:0}
            30%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
    .pageShow{
        .page_txt1{
            animation: page_txt1 6s ease-in-out;
        }
        @keyframes page_txt1 {
            0%,15%{transform: translate(0,20px);opacity:0}
            40%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
</style>