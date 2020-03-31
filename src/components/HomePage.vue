<template>
    <div class="HomePage">
        <HeaderRoll />
        <div class="seep-box show_seep">
            <div class="seep-pic1">
                <img src="../assets/page_pic1.png"/>
            </div>
            <div class="seep-pic2">
                <img src="../assets/page_pic2.png"/>
            </div>
            <div class="seep-txt1">
                <img src="../assets/page_txt1.png"/>
            </div>
            <div class="seep-txt2">
                <img src="../assets/page_txt2.png"/>
            </div>
            <div class="seep-txt3">
                <img src="../assets/page_txt3.png"/>
            </div>
            <SeepDown />
        </div>
        <div class="bg">
            <img src="../assets/page1_bg.jpg" />
        </div>
    </div>
</template>

<script>
    import HeaderRoll from "./HeaderRoll";
    import SeepDown from "./SeepDown";
    export default {
        name: "HomePage",
        components: {SeepDown, HeaderRoll},
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
    .HomePage{
        width: 100%;height: 100%;position: relative;overflow: hidden;

        .seep-box{
            width:100%;height: 100%;position:absolute;z-index:88;

            .seep-pic1{
                width:100%;position:absolute;
                z-index:88;
                top:50%;margin-top:-270px;
            }
            .seep-pic2{
                width:100%;position:absolute;
                z-index:66;
                top:50%;margin-top:-360px;
            }

            .seep-txt1{
                width:185px;position:absolute;
                left:50%;margin-left:-170px/2;
                top:50%;margin-top:140px;
                z-index:99;
            }
            .seep-txt2{
                width:136px;position:absolute;
                left:260px;top:50%;margin-top:-550px;
                z-index:99;
            }
            .seep-txt3{
                width:74px;position:absolute;
                left:410px;
                top:50%;margin-top:-310px;
                z-index:99;
            }
        }

        .show_seep{


            .seep-pic1{
                animation: seep-pic1 6s ease-in-out;
            }

            @keyframes seep-pic1 {
                0%,5%{transform: translateY(60px) scale(1.1);}
                25%{transform: translateY(0px) scale(1);}
                100% {transform: translateY(0px);}
            }

            .seep-txt1{
                animation: seep-txt1 6s ease-in-out;
            }

            @keyframes seep-txt1 {
                0%,20%{transform: scale(1.5);opacity:0}
                40%{transform: scale(1);opacity:1}
                100% {transform: scale(1);opacity:1}
            }

            .seep-pic2{
                animation: seep-pic2 6s ease-in-out;
            }

            @keyframes seep-pic2 {
                0%,30%{transform: translateY(20px);opacity:0}
                45%{transform: translateY(0px); opacity:1}
                100% {transform: translateY(0px);}
            }

            .seep-txt2{
                animation: seep-txt2 6s ease-in-out;
            }

            @keyframes seep-txt2 {
                0%,20%{transform: translateX(30px);opacity:0}
                35%{transform: translateX(0);opacity:1}
                100% {transform: translateX(0);opacity:1}
            }

            .seep-txt3{
                animation: seep-txt3 6s ease-in-out;
            }

            @keyframes seep-txt3 {
                0%,20%{transform: translateY(-30px);opacity:0}
                35%{transform: translateY(0);opacity:1}
                100% {transform: translateY(0);opacity:1}
            }
        }

        .bg{
            width: 100%;position: relative;z-index: 6;top:50%;margin-top:-(1470px/2);
        }
    }
</style>