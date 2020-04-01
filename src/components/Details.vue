<template>
    <div class="details">
        <SeepDown v-show="isDown" />
        <div class="swiper-container" id="details-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <page-box pageBgSrc="bg1" v-if="pageId == 1" :isRetrun="isShow">
                        <Page1 :showTime="false" />
                    </page-box>

                    <page-box pageBgSrc="bg2" v-if="pageId == 2" :isRetrun="isShow">
                        <Page2 :showTime="false" />
                    </page-box>

                    <page-box pageBgSrc="bg3" v-if="pageId == 3" :isRetrun="isShow">
                        <Page3 :showTime="false" />
                    </page-box>

                    <page-box pageBgSrc="bg4" v-if="pageId == 4" :isRetrun="isShow">
                        <Page4 :showTime="false" />
                    </page-box>

                    <page-box pageBgSrc="bg5" v-if="pageId == 5" :isRetrun="isShow">
                        <Page5 :showTime="false" />
                    </page-box>

                    <page-box pageBgSrc="bg6" v-if="pageId == 6" :isRetrun="isShow">
                        <Page6 :showTime="false" />
                    </page-box>

                    <page-box pageBgSrc="bg7" v-if="pageId == 7">
                        <Page7 />
                    </page-box>

                    <page-box pageBgSrc="bg8" v-if="pageId == 8" :isRetrun="isShow">
                        <Page8 :showTime="false" />
                    </page-box>

                    <page-box pageBgSrc="bg9" v-if="pageId == 9" :isRetrun="isShow">
                        <Page9 :showTime="false" />
                    </page-box>

                    <page-box pageBgSrc="bg10" v-if="pageId == 10" :isRetrun="isShow">
                        <Page10 :showTime="false" />
                    </page-box>

                    <!--<BtnReturn />-->
                    <div class="page-container">

                        <PageMatter1 v-if="pageId == 1" />
                        <PageMatter2 v-if="pageId == 2" />
                        <PageMatter4 v-if="pageId == 4" />
                        <PageMatter7 v-if="pageId == 7" />
                        <PageMatter8 v-if="pageId == 8" />
                        <PageMatter9 v-if="pageId == 9" />

                        <div class="bg" v-for="(item,index) in picData[pageId-1].src" :key="index">
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
    import Data from '../config/data.js';
    export default {
        name: "Details",
        props :{
            pageId : 0,
        },
        data(){
            return{
                isDown : true,
                isShow : true,
                picData : Data.data
            }
        },
        mounted(){
            let t = this;
            t.$nextTick(()=>{
                console.log(this.pageId)
                let detailsSwiper = new window.Swiper("#details-swiper", {
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
        methods:{
            windowScroll(e){
                // let scrollTop = e.srcElement.scrollHeight - e.srcElement.clientHeight - e.srcElement.scrollTop;
                // // console.log(scrollTop,e.srcElement.scrollTop);
                // if (scrollTop > 200){
                //     this.isDown = true;
                // }else {
                //     this.isDown = false;
                // }
            }
        }
    }
</script>

<style lang="less" scoped>
    .details{
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
            width:100%;position:relative;
            .bg{
                width:100%;position:relative;z-index:6;
            }
        }

    }

</style>