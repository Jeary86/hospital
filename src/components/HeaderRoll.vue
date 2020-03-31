<template>
    <div class="header-roll">
        <div class="header-list show_move">
            <div class="pic">
                <img src="../assets/huaban.png" />
            </div>
        </div>

        <div class="header-list hide_move">
            <div class="pic">
                <img src="../assets/huaban.png" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderRoll"
    }
</script>

<style lang="less" scoped>
.header-roll{
    width:100%;position:absolute;z-index:9999;top:35px;height:100%;

    .header-list{
        width:100%;position:relative;height:100%;
        .pic{
            width:100%;position:absolute;height:100%;
        }
    }
    .show_move{
        animation: 8s show_move infinite linear;
    }
    @keyframes show_move {
        0% {
            transform: translate(0,0);
        }
        33%{
            transform: translate(-10px,33%) rotate(10deg);
        }
        66% {
            transform: translate(-5px,66%) rotate(5deg);
        }
        100% {
            transform: translate(0px,100%) rotate(0deg);
        }
    }
    .hide_move{
        animation: 8s hide_move infinite linear;
    }
    @keyframes hide_move {
        0% {
            transform: translate(-20px,-200%)rotate(10deg);
        }
        33% {
            transform: translate(-10px,-166%)rotate(5deg);
        }
        66% {
            transform: translate(-5px,-133%)rotate(0deg);
        }
        100% {
            transform: translate(0px,-100%)rotate(0deg);
        }
    }
}
</style>