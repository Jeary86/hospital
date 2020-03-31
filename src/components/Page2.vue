<template>
    <div class="page2" :class="[showTime ? 'pageShow' : 'seepShow']">
        <div class="page_txt1">
            <img src="../assets/page_2_txt1.png" />
        </div>
        <div class="page_txt2">
            <img src="../assets/page_2_txt2.png" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page2",
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
    .page2{
        width: 100%;height:100%;position: relative;overflow: hidden;

        .page_txt1{
            width:198px;position:absolute;left:50%;top:50%;
            margin-left:-198px/2;margin-top:-378px;
        }
        .page_txt2{
            width:312px;position:absolute;left:50%;top:50%;
            margin-left:-312px/2;margin-top:-270px;
        }

    }
    .seepShow{
        .page_txt1{
            animation: page_txt1_1 6s ease-in-out;
        }
        @keyframes page_txt1_1 {
            0%,5%{transform: translate(0,-20px);opacity:0}
            25%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
        .page_txt2{
            animation: page_txt2_1 6s ease-in-out;
        }
        @keyframes page_txt2_1 {
            0%,15%{transform: translate(0px,-20px);opacity:0}
            35%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
    .pageShow{
        .page_txt1{
            animation: page_txt1 6s ease-in-out;
        }
        @keyframes page_txt1 {
            0%,15%{transform: translate(0,-20px);opacity:0}
            35%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
        .page_txt2{
            animation: page_txt2 6s ease-in-out;
        }
        @keyframes page_txt2 {
            0%,25%{transform: translate(0px,-20px);opacity:0}
            40%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
</style>