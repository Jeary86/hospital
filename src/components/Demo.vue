<template>
    <div class="Demo">
        <div class="swiper-container" id="demoSwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/page3_pic1.jpg" />
                </div>
            </div>
            <!-- Add Scroll Bar -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Demo",
        mounted(){

            this.$nextTick(()=>{
                var swiper = new window.Swiper("#demoSwiper", {
                    scrollbar: '.swiper-scrollbar',
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    mousewheelControl: true,
                    freeMode: true,
                    roundLengths : true, //防止文字模糊
                });
            })

        }
    }
</script>

<style lang="less" scoped>
.Demo{
    width:100%;height:100%;position:absolute;z-index:9999;background:#bab9b9;
    .swiper-container {
        height: 100%;
    }
    .swiper-slide {
        height: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
}
</style>