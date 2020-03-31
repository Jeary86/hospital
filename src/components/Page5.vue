<template>
    <div class="page5" :class="[showTime ? 'pageShow' : 'seepShow']">
        <div class="page_txt1">
            <img src="../assets/page_5_txt1.png" />
        </div>
        <div class="page_txt2">
            <img src="../assets/page_5_txt2.png" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page5",
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
    .page5{
        width: 100%;height:100%;position: relative;overflow: hidden;

        .page_txt1{
            width:21px;position:absolute;top:50%;
            margin-left:322px;margin-top:-420px;
        }
        .page_txt2{
            width:21px;position:absolute;top:50%;
            margin-left:402px;margin-top:-420px;
        }
    }

    .seepShow{
        .page_txt1{
            animation: page_txt1_1 6s ease-in-out;
        }
        @keyframes page_txt1_1 {
            0%,5%{transform: translate(0px,-30px);opacity:0}
            25%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
        .page_txt2{
            animation: page_txt2_1 6s ease-in-out;
        }
        @keyframes page_txt2_1 {
            0%,15%{transform: translate(0px,-30px);opacity:0}
            35%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
    .pageShow{
        .page_txt1{
            animation: page_txt1 6s ease-in-out;
        }
        @keyframes page_txt1 {
            0%,15%{transform: translate(0px,-30px);opacity:0}
            35%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
        .page_txt2{
            animation: page_txt2 6s ease-in-out;
        }
        @keyframes page_txt2 {
            0%,25%{transform: translate(0px,-30px);opacity:0}
            45%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
</style>