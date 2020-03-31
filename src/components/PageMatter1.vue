<template>
    <div class="page-matter1">
        <div class="btn_left btn_hand_left">
            <img src="../assets/btn_left1.png" />
        </div>
        <div class="btn_right btn_hand_right">
            <img src="../assets/btn_right1.png" />
        </div>
        <div class="swiper-container" id="matterPage1">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter1_1.png" />
                    </div>

                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter1_2.png" />
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter1_3.png" />
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="page-slide">
                        <img src="../assets/pic_matter1_4.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageMatter1",
        mounted(){

            let swiperPage1 = new window.Swiper("#matterPage1", {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 2,
                initialSlide: 1,
                nextButton: '.btn_right',
                prevButton: '.btn_left',
                // loop : true,
                coverflow: {
                    rotate: 50,
                    stretch: 20,
                    depth: 100,
                    modifier: 1,
                    slideShadows : false
                }

            });

        }
    }
</script>

<style lang="less" scoped>
.page-matter1{
    width:100%;position:absolute;z-index:88;margin-top:120px;
    .page-slide{
        width:499px;position:relative;margin-left:-60px;
    }
    .btn_left,.btn_right{
        width:50px;position:absolute;z-index:99999;margin-top:300px;
    }

    .btn_left{
        left:10px;
    }
    .btn_right{
        right:10px;
    }
}
</style>