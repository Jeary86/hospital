<template>
    <div class="home">
        <BtnMusic />
        <div class="swiper-container" id="swiperPage">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <HomePage />
                </div>
                <!--<div class="swiper-slide">-->
                    <!--&lt;!&ndash;swiper-no-swiping&ndash;&gt;-->
                    <!--<Details :pageId="5" />-->
                <!--</div>-->
                <div class="swiper-slide">
                    <SeepBox :bgSrc="'pic1'" isClass="txt_pic1" />
                </div>
                <div class="swiper-slide">
                    <SeepBox :bgSrc="'pic2'" :intId="4" :num="7" isClass="txt_pic2" />
                </div>
                <div class="swiper-slide">
                    <SeepBox :bgSrc="'pic3'" :intId="7" :num="10" isClass="txt_pic3" />
                </div>
                <div class="swiper-slide">
                    <SeepEnd />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data(){
          return{
              mySwiper : null,
          }
        },
        mounted() {
            this.loaderSwiper();
        },
        methods : {
            loaderSwiper(){
                let t = this;
                t.mySwiper = new window.Swiper("#swiperPage", {
                    direction: 'vertical',
                    speed: 500,
                    height: window.innerHeight,
                    // allowSwipeToPrev : false,
                    // onSlideChangeEnd onSlideChangeStart
                    onSlideChangeEnd:function (swiper) {
                        // console.log(swiper.activeIndex)
                        t.$store.dispatch('setSeepIndex',swiper.activeIndex)

                        // if (swiper.activeIndex == 0){
                        //     t.mySwiper.lockSwipeToPrev();
                        // }else {
                        //     t.mySwiper.unlockSwipeToPrev();
                        // }
                        //
                        // if (swiper.activeIndex == swiper.slides.length-1){
                        //     t.mySwiper.lockSwipeToNext();
                        // }else {
                        //     t.mySwiper.unlockSwipeToNext();
                        // }
                    }
                });
            }
        },
        components: {}
    }
</script>

<style lang="less" scoped>
    .home{
        width: 100%;height: 100%;position: absolute;overflow: hidden;
    }
</style>
