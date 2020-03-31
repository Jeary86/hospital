<template>
    <div class="page-matter2">
        <div class="btn_left btn_hand_left">
            <img src="../assets/btn_left1.png" />
        </div>
        <div class="btn_right btn_hand_right">
            <img src="../assets/btn_right1.png" />
        </div>
        <div class="swiper-container" id="matterPage2">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter2_4.png" />
                    </div>

                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter2_3.png" />
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter2_2.png" />
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter2_1.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageMatter2",
        mounted(){

            let swiperPage1 = new window.Swiper("#matterPage2", {
                nextButton: '.btn_right',
                prevButton: '.btn_left',
            });

        }
    }
</script>

<style lang="less" scoped>
.page-matter2{
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