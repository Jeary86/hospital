<template>
    <div class="page9" :class="[showTime ? 'pageShow' : 'seepShow']">
        <div class="page_txt1">
            <img src="../assets/page_9_txt1.png" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page9",
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
    .page9{
        width: 100%;height:100%;position: relative;overflow: hidden;

        .page_txt1{
            width:235px;position:absolute;top:50%;
            margin-left:258px;margin-top:-245px;
        }
    }

    .seepShow{
        .page_txt1{
            animation: page_txt1_1 6s ease-in-out;
        }
        @keyframes page_txt1_1 {
            0%,5%{transform: translate(0px,0);opacity:0}
            35%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
    .pageShow{
        .page_txt1{
            animation: page_txt1 6s ease-in-out;
        }
        @keyframes page_txt1 {
            0%,15%{transform: translate(0px,0);opacity:0}
            45%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
</style>