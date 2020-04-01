<template>
    <div class="page4" :class="[showTime ? 'pageShow' : 'seepShow']">
        <div class="page_txt1">
            <img src="../assets/page_4_txt1.png" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page4",
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
    .page4{
        width: 100%;height:100%;position: relative;overflow: hidden;

        .page_txt1{
            width:221px;position:absolute;left:50%;top:50%;
            margin-left:-107px;margin-top:-320px;
        }
    }

    .seepShow{
        .page_txt1{
            animation: page_txt1_1 6s ease-in-out;
        }
        @keyframes page_txt1_1 {
            0%,5%{transform: translate(-20px,0);opacity:0}
            25%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
    .pageShow{
        .page_txt1{
            animation: page_txt1 6s ease-in-out;
        }
        @keyframes page_txt1 {
            0%,15%{transform: translate(-20px,0);opacity:0}
            35%{transform: translate(0,0);opacity:1}
            100% {transform: translate(0,0);}
        }
    }
</style>