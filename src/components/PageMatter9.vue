<template>
    <div class="page-matter9">
        <div class="btn_left btn_hand_left">
            <img src="../assets/btn_left1.png" />
        </div>
        <div class="btn_right btn_hand_right">
            <img src="../assets/btn_right1.png" />
        </div>
        <div class="swiper-container" id="matterPage9">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/pic_matter9_1.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="../assets/pic_matter9_2.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="../assets/pic_matter9_3.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageMatter9",
        mounted(){

            let swiperPage1 = new window.Swiper("#matterPage9", {
                speed: 800,
                spaceBetween: 30,
                nextButton: '.btn_right',
                prevButton: '.btn_left',
                effect: 'fade'
            });

        }
    }
</script>

<style lang="less" scoped>
.page-matter9{
    width:100%;position:absolute;z-index:88;margin-top:2px;
    /*.page-slide{*/
        /*width:499px;position:relative;margin-left:-60px;*/
    /*}*/
    .btn_left,.btn_right{
        width:50px;position:absolute;z-index:99999;margin-top:700px;
    }

    .btn_left{
        left:10px;
    }
    .btn_right{
        right:10px;
    }
}
</style>