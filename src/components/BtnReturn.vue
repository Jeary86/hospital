<template>
    <div class="btn-return" @click="onClickReturn">
        <img src="../assets/btn_return.png" />
    </div>
</template>

<script>
    export default {
        name: "BtnReturn",
        mounted(){

        },
        methods:{
            onClickReturn(){
                // this.$store.dispatch('setPageIndex',0)
                // this.$store.dispatch('setHomeStyle',true)

                this.$store.dispatch('setIsPraise',true)
            }
        }
    }
</script>

<style lang="less" scoped>
.btn-return{
    width:135px;position:absolute;z-index:888;
    left:50%; bottom:40px;margin-left:-135px/2;
}
</style>