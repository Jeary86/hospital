<template>
    <div class="page-matter4">
        <div class="btn_left btn_hand_left">
            <img src="../assets/btn_left1.png" />
        </div>
        <div class="btn_right btn_hand_right">
            <img src="../assets/btn_right1.png" />
        </div>
        <div class="swiper-container" id="matterPage4">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter4_1.jpg" />
                    </div>

                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter4_2.jpg" />
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter4_3.jpg" />
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter4_4.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageMatter4",
        mounted(){

            let swiperPage1 = new window.Swiper("#matterPage4", {
                nextButton: '.btn_right',
                prevButton: '.btn_left',
                allowSwipeToPrev : false,
                onSlideChangeStart : function (swiper) {
                    // allowSwipeToPrev
                    // console.log(swiper.activeIndex)

                    if (swiper.activeIndex == 0){
                        swiperPage1.lockSwipeToPrev();
                    }else {
                        swiperPage1.unlockSwipeToPrev();
                    }

                    if (swiper.activeIndex == swiper.slides.length-1){
                        swiperPage1.lockSwipeToNext();
                    }else {
                        swiperPage1.unlockSwipeToNext();
                    }
                }
            });

        }
    }
</script>

<style lang="less" scoped>
.page-matter4{
    width:100%;position:absolute;z-index:88;margin-top:2px;
    /*.page-slide{*/
        /*width:499px;position:relative;margin-left:-60px;*/
    /*}*/
    .btn_left,.btn_right{
        width:50px;position:absolute;z-index:99999;margin-top:500px;
    }

    .btn_left{
        left:10px;
    }
    .btn_right{
        right:10px;
    }
}
</style>