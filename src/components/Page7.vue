<template>
    <div class="page7">
        <div class="btn_left">
            <img src="../assets/btn_left.png" />
        </div>
        <div class="btn_right">
            <img src="../assets/btn_right.png" />
        </div>

        <div class="page_txt">
            <div class="swiper-container" id="page-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../assets/page_bg7_txt1.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/page_bg7_txt2.png" />
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/page_bg7_txt3.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page7",
        props : {
            isRetrun : {
                type : Boolean,
                default : true
            }
        },
        data(){
            return{

            }
        },
        mounted(){
            this.$nextTick(()=>{
                let pageSwiper = new window.Swiper("#page-swiper", {
                    // direction: 'horizontal',
                    speed: 800,
                    spaceBetween: 30,
                    nextButton: '.btn_right',
                    prevButton: '.btn_left',
                    effect: 'fade'
                });
            })
        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
    .page7{
        width: 100%;height:100%;position: relative;overflow: hidden;

        .btn_left{
            width:69px;position:absolute;z-index:9999;
            margin-top:940px;left:20px;
        }
        .btn_right{
            width:69px;position:absolute;z-index:9999;
            margin-top:900px;margin-left:508px;
        }
        #page-swiper{
            width:606px;margin:0;z-index:88;
        }
        .page_txt{
            width:100%;position:absolute;z-index:88;
            margin-top:457px;
        }
    }
</style>