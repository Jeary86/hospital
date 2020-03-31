<template>
    <div class="seep-down" :class="[isFixed ? '' : 'seep-fixed']">
        <img src="../assets/page_down.png" />
    </div>
</template>

<script>
    export default {
        name: "SeepDown",
        props : {
            isFixed : {
                type : Boolean,
                default: true
            }
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="less" scoped>
    .seep-down{
        width:50px;
        position:absolute;
        left:50%;margin-left:-50px/2;
        bottom:50px;
        animation: seep_down infinite 1.5s linear;
        z-index:99;
    }

    .seep-fixed{
        position:fixed;
    }

    @keyframes seep_down {
        0%{transform: translateY(30px);opacity:0}
        50%{transform: translateY(0);opacity:1}
        100% {transform: translateY(-30px);opacity:0}
    }
</style>