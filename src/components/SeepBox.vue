<template>
    <div class="seep">
        <div class="seep_box">
            <div class="btn_seep" v-for="i in num" v-if="i > intId" :class="'btn_seep_' + i" @click="onClickHospital(i)">
                <div class="btn-hint" :class="'btn-hint' + i"></div>

                <transition name="seep">
                    <div :class="isClass" v-show="seepInt == i" >
                        <img :src="require('../assets/btn_seep_'+ i +'.png')" />
                    </div>
                </transition>

            </div>
        </div>

        <SeepDown v-if="isDown" />
        <div class="bg">
            <img :src="require('../assets/catalog_'+ bgSrc +'.jpg')" />
        </div>
    </div>
</template>

<script>
    import BtnHand from "./BtnHand";
    import { mapGetters } from 'vuex';
    export default {
        name: "SeepBox",
        components: {BtnHand},
        computed: {
            ...mapGetters(['seepIndex','pageIndex']),
        },
        props :{
            num : {
                type : Number,
                default: 4
            },
            intId : {
                type : Number,
                default: 0
            },
            bgSrc : String,
            isDown : {
                type : Boolean,
                default: true
            },
            isClass : String
        },
        data(){
            return{
                seepInt : 0,
                lastNum : 0,
            }
        },
        mounted(){

        },
        methods:{
            onClickHospital(index){
                this.lastNum = JSON.parse(JSON.stringify(this.seepInt));
                this.seepInt = index;

                // if (this.seepInt==this.lastNum) {
                //     this.$store.dispatch('setPageIndex',index)
                // }else {
                //     setTimeout(()=>{
                //         this.$store.dispatch('setPageIndex',index)
                //     },500)
                // }
                setTimeout(()=>{
                    this.$store.dispatch('setPageIndex',index)

                    setTimeout(()=>{
                        this.$store.dispatch('setHomeStyle',false)
                        this.seepInt = 0;
                    },1500)
                },500)


            }
        }
    }
</script>

<style lang="less" scoped>
    .seep-enter-active {
        transition: all 0.5s ease;
    }
    .seep-leave-active {
        transition: all 0.5s ease;
    }
    .seep-enter, .seep-leave-to{
        transform: translateX(10%);opacity:0;
    }
    .seep{
        width: 100%;height: 100%;position: relative;overflow: hidden;
        .seep_box{
            width:100%;height: 100%;position:absolute;z-index:88;
            .btn_seep{
                width:100%;position:absolute;top:50%;
                .txt_pic1{
                    width:469px;position:absolute;pointer-events:none;left:50%;margin-left:-469px/2;
                }
                .txt_pic2{
                    width:521px;position:absolute;pointer-events:none;left:50%;margin-left:-521px/2;
                }
                .txt_pic3{
                    width:599px;position:absolute;pointer-events:none;left:50%;margin-left:-599px/2;
                }
            }

            .btn-hint{
                width:100%;position:absolute;
                /*background:rgba(0,0,0,0.5);*/
            }

            .btn_seep_1{
                margin-top:-460px;
                .btn-hint1{
                    height:330px;margin-top:-190px;
                }
            }
            .btn_seep_2{
                margin-top:-210px;
                .btn-hint2{
                    height:270px;margin-top:-100px;
                }
            }
            .btn_seep_3{
                margin-top:75px;
                .btn-hint3{
                    height:270px;margin-top:-100px;
                }
            }
            .btn_seep_4{
                margin-top:385px;
                .btn-hint4{
                    height:390px;margin-top:-130px;
                }
            }
            .btn_seep_5{
                margin-top:-440px;
                .btn-hint5{
                    height:330px;margin-top:-190px;
                }
            }
            .btn_seep_6{
                margin-top:-160px;
                .btn-hint6{
                    height:420px;margin-top:-100px;
                }
            }
            .btn_seep_7{
                margin-top:305px;
                .btn-hint7{
                    height:510px;margin-top:-100px;
                }
            }

            .btn_seep_8{
                margin-top:-510px;
                .btn-hint8{
                    height:410px;margin-top:-190px;
                }
            }
            .btn_seep_9{
                margin-top:-160px;
                .btn-hint9{
                    height:440px;margin-top:-100px;
                }
            }
            .btn_seep_10{
                margin-top:305px;
                .btn-hint10{
                    height:510px;margin-top:-100px;
                }
            }
        }

        .bg{
            width: 100%;position: relative;z-index: 6;
            top:50%;margin-top:-1470px/2;
        }
    }
</style>