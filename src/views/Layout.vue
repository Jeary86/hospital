<template>
    <div class="Layout">
        <MaskPrompt />
        <ShareMask />
        <transition name="page">
            <PageContainer v-if="pageIndex != 0" />
        </transition>

        <transition name="fade">
            <!--mode="out-in"-->
            <Loading v-if="loaderName === 'loading'"  />
            <Home v-if="loaderName === 'home'" v-show="homeStyle" />
        </transition>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'
    import PageContainer from "../components/PageContainer";
    import ShareMask from "../components/ShareMask";
    export default {
        name: "Layout",
        components: {ShareMask, PageContainer},
        computed: {
            ...mapGetters(['loaderName','seepIndex','pageIndex','homeStyle']),
        },
        watch : {
            loaderName(val){
                console.log(val)
            },
        },
        mounted(){

        }
    }
</script>

<style lang="less" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.8s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .page-enter-active {
        transition: all 2s ease;
    }
    .page-leave-active {
        transition: all 0.8s ease;
    }
    .page-enter, .page-leave-to{
        /*transform: translateY(100%);*/
        opacity:0;
    }

</style>
