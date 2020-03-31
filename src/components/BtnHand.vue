<template>
    <div class="btn-hand">
        <div class="btn-hand1"></div>
        <div class="btn-hand2 show_hand"></div>
        <div class="btn-hand2 hide_hand"></div>
    </div>
</template>

<script>
    export default {
        name: "BtnHand"
    }
</script>

<style lang="less" scoped>
.btn-hand{
    position:relative;
    width: 80px;
    pointer-events:none;
    .btn-hand1{
        width:30px;height:30px;background:#FFF;position:absolute;z-index:99;
        border-radius: 50%;margin-left:10px;margin-top:10px;
    }

    .btn-hand2{
        width:50px;height:50px;position:absolute;z-index:88;
        border: 4px solid #FFF;
        border-radius: 100%;
    }

    .show_hand{
        animation: 1s show_hand infinite linear;
    }

    @keyframes show_hand {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.4);opacity:0;
        }
    }

    .hide_hand{
        animation: 1s hide_hand infinite linear;
    }

    @keyframes hide_hand {
        0% {
            transform: scale(0.2);opacity:0;
        }
        100% {
            transform: scale(1);opacity:1;
        }
    }
}
</style>