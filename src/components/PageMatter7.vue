<template>
    <div class="page-matter7">
        <div class="btn_left1">
            <img src="../assets/btn_left.png" />
        </div>
        <div class="btn_right1">
            <img src="../assets/btn_right.png" />
        </div>
        <div class="page-slide">
            <div class="swiper-container" id="matterPage7">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../assets/pic_matter7_1.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/pic_matter7_2.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/pic_matter7_3.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/pic_matter7_4.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/pic_matter7_5.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/pic_matter7_6.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/pic_matter7_7.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/pic_matter7_8.png" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "PageMatter7",
        mounted(){

            let swiperPage1 = new window.Swiper("#matterPage7", {
                speed: 500,
                spaceBetween: 30,
                nextButton: '.btn_right1',
                prevButton: '.btn_left1',
                effect: 'fade'
            });

        }
    }
</script>

<style lang="less" scoped>
.page-matter7{
    width:100%;position:absolute;z-index:88;margin-top:2px;
    .page-slide{
        width:412px;position:relative;margin-top:218px;margin-left:147px;
    }
    .btn_left1,.btn_right1{
        width:69px;position:absolute;z-index:99999;
    }

    .btn_left1{
        left:116px;margin-top:530px;
    }
    .btn_right1{
        right:147px;margin-top:496px;
    }
}
</style>