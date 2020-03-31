<template>
    <div class="page10" :class="[showTime ? 'pageShow' : 'seepShow']">
        <div class="page_txt1">
            <img src="../assets/page_10_txt1.png" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page10",
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
    .page10{
        width: 100%;height:100%;position: relative;overflow: hidden;

        .page_txt1{
            width:292px;position:absolute;top:50%;left:50%;
            margin-left:-292px/2;margin-top:228px;
        }
    }

    .seepShow{
        .page_txt1{
            animation: page_txt1_1 6s ease-in-out;
        }
        @keyframes page_txt1_1 {
            0%,5%{transform: translate(0px,30px);opacity:0}
            35%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
    .pageShow{
        .page_txt1{
            animation: page_txt1 6s ease-in-out;
        }
        @keyframes page_txt1 {
            0%,15%{transform: translate(0px,30px);opacity:0}
            45%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
</style>