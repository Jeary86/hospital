<template>
    <div class="page-container">
        <SeepDown :isFixed="false" v-show="isDown" />
        <div class="swiper-container" id="page-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <page-box pageBgSrc="bg1" v-if="pageIndex == 1">
                        <Page1 />
                    </page-box>

                    <page-box pageBgSrc="bg2" v-if="pageIndex == 2">
                        <Page2 />
                    </page-box>

                    <page-box pageBgSrc="bg3" v-if="pageIndex == 3">
                        <Page3 />
                    </page-box>

                    <page-box pageBgSrc="bg4" v-if="pageIndex == 4">
                        <Page4 />
                    </page-box>

                    <page-box pageBgSrc="bg5" v-if="pageIndex == 5">
                        <Page5 />
                    </page-box>

                    <page-box pageBgSrc="bg6" v-if="pageIndex == 6">
                        <Page6 />
                    </page-box>

                    <page-box pageBgSrc="bg7" v-if="pageIndex == 7">
                        <Page7 />
                    </page-box>

                    <page-box pageBgSrc="bg8" v-if="pageIndex == 8">
                        <Page8 />
                    </page-box>

                    <page-box pageBgSrc="bg9" v-if="pageIndex == 9">
                        <Page9 />
                    </page-box>

                    <page-box pageBgSrc="bg10" v-if="pageIndex == 10">
                        <Page10 />
                    </page-box>

                    <BtnReturn />


                    <div class="page-container">

                        <PageMatter1 v-if="pageIndex == 1" />
                        <PageMatter2 v-if="pageIndex == 2" />
                        <PageMatter4 v-if="pageIndex == 4" />
                        <PageMatter7 v-if="pageIndex == 7" />
                        <PageMatter8 v-if="pageIndex == 8" />
                        <PageMatter9 v-if="pageIndex == 9" />

                        <div class="bg" v-for="(item,index) in picData[pageIndex-1].src" :key="index">
                            <img :src="item" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-scrollbar"></div>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Data from '../config/data.js';
    export default {
        name: "PageContainer",
        computed: {
            ...mapGetters(['pageIndex']),
        },
        data(){
            return{
                pageId : this.pageIndex -1,
                isDown : true,
                picData : Data.data
            }
        },
        mounted(){
            let t = this;
            t.$nextTick(()=>{
                let pageContainer = new window.Swiper("#page-container", {
                    scrollbar: '.swiper-scrollbar',
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    mousewheelControl: true,
                    freeMode: true,
                    roundLengths : true, //防止文字模糊
                    onSetTranslate : function(swiper, translate) {
                        if (translate > -(swiper.virtualSize - swiper.height -200)) {
                            t.isDown = true;
                        }else {
                            t.isDown = false;
                        }
                    }
                });
            })
        },
        created(){

        },
        destroyed(){

        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
.page-container{
    width:100%;height:100%;position:absolute;z-index:999;
    .swiper-container {
        height: 100%;
    }
    .swiper-slide {
        height: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .page-container{
        width:100%;position:relative;z-index:88;
        .bg{
            width:100%;position:relative;z-index:6;
        }
    }
}
</style>