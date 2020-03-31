<template>
    <div class="page-matter8">

        <div class="btn_left btn_hand_left">
            <img src="../assets/btn_left1.png" />
        </div>
        <div class="btn_right btn_hand_right">
            <img src="../assets/btn_right1.png" />
        </div>

        <div class="swiper-container" id="matterPage8">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter8_1.png" />
                    </div>

                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter8_2.png" />
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter8_3.png" />
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter8_4.png" />
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter8_5.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageMatter8",
        mounted(){

            let swiperPage1 = new window.Swiper("#matterPage8", {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 2,
                initialSlide: 1,
                nextButton: '.btn_right',
                prevButton: '.btn_left',
                // loop : true,
                coverflow: {
                    rotate: 0,
                    stretch: 0,
                    depth: 400,
                    modifier: 1,
                    slideShadows : false
                }

            });

        }
    }
</script>

<style lang="less" scoped>
.page-matter8{
    width:100%;position:absolute;z-index:88;margin-top:200px;
    .page-slide{
        width:581px;position:relative;left:50%;margin-left:-581px/2;
    }
    .btn_left,.btn_right{
        width:50px;position:absolute;z-index:99999;margin-top:180px;
    }

    .btn_left{
        left:10px;
    }
    .btn_right{
        right:10px;
    }
}
</style>