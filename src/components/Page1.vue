<template>
    <div class="page1 " :class="[showTime ? 'pageShow' : 'seepShow']">
        <div class="page_txt1">
            <img src="../assets/page_1_txt1.png" />
        </div>
        <div class="page_txt2">
            <img src="../assets/page_1_txt2.png" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page1",
        props : {
            showTime : {
                type : Boolean,
                default : true
            },
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
    .page1{
        width: 100%;height:100%;position: relative;overflow: hidden;

        .page_txt1{
            width:69px;position:absolute;left:50%;top:50%;
            margin-left:-105px;margin-top:-430px;
        }
        .page_txt2{
            width:69px;position:absolute;left:50%;top:50%;
            margin-left:35px;margin-top:-430px;
        }
    }

    .seepShow{
        .page_txt1{
            animation: page_txt1_1 6s ease-in-out;
        }
        @keyframes page_txt1_1 {
            0%,5%{transform: translate(0,-20px);opacity:0}
            20%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
        .page_txt2{
            animation: page_txt2_1 6s ease-in-out;
        }
        @keyframes page_txt2_1 {
            0%,12%{transform: translate(0px,-20px);opacity:0}
            27%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }

    .pageShow{
        .page_txt1{
            animation: page_txt1 6s ease-in-out;
        }
        @keyframes page_txt1 {
            0%,15%{transform: translate(0,-20px);opacity:0}
            30%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
        .page_txt2{
            animation: page_txt2 6s ease-in-out;
        }
        @keyframes page_txt2 {
            0%,22%{transform: translate(0px,-20px);opacity:0}
            37%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }

</style>