<template>
    <div class="seep-end">
        <div class="pic_list" v-if="seepIndex == 4 && isSeep">
            <transition-group appear name="my" tag="ul">
                <li v-for="(item,index) in txtList" :key="item.id" :data-index="index">
                    <img :src="item.src" />
                </li>
            </transition-group>
        </div>

        <div class="bg">
            <img src="../assets/catalog_pic4.jpg" />
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "SeepEnd",
        data(){
            return {
                timer:null,
                isSeep : true,
                txtList:[],
                dataTxt : [{
                    id:1,
                    src:require('../assets/seep_end1.png')
                },{
                    id:2,
                    src:require('../assets/seep_end2.png')
                },{
                    id:3,
                    src:require('../assets/seep_end3.png')
                },{
                    id:4,
                    src:require('../assets/seep_end4.png')
                },{
                    id:5,
                    src:require('../assets/seep_end5.png')
                },{
                    id:6,
                    src:require('../assets/seep_end6.png')
                },]
            }
        },
        computed: {
            ...mapGetters(['seepIndex']),
        },
        watch :{
            seepIndex(val){
                if (val == 4){
                    this.txtList = [];
                    this.dataTxt.filter((item, index) => {
                        this.timer = setTimeout(() => {
                            this.txtList.push(item)
                        }, index * 300)
                    });
                    console.log(val);
                }
            }
        },
        mounted(){

        }
    }
</script>

<style lang="less" scoped>
.seep-end{
    width: 100%;height: 100%;position: relative;overflow: hidden;

    .pic_list{
        width:399px;position:absolute;z-index:88;
        left:50%;margin-left:-399px/2;
        top:50%;margin-top:-(6*100px)/2;
        li {
            width: 100%;position:relative;height:80px;
        }

    }

    .my-enter,
    .my-leave-to {
        transform: translateY(35px);
        opacity: 0;
    }
    .my-enter-active,
    .my-leave-active {
        transition: all 1s ease;
    }

    .bg{
        width: 100%;position: relative;z-index: 6;
        top:50%;margin-top:-1470px/2;
    }
}
</style>