<style scoped>
    .demo-carousel{
        height: 200px;
    }
</style>

<template>
    <div>
        <Carousel autoplay v-model="value2" loop>
            <CarouselItem>
                <div class="demo-carousel" style="background-color: #19be6b;"></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel" style="background-color: #1c2438;"></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel" style="background-color: #ff9900;"></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel" style="background-color: #ed3f14;"></div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                value2: 0
            }
        },
        methods:{

        },

        mounted(){
            let data = {
                currentPage:"listing"
            }
            this.$emit("whichPage-ctpEvent",data)
        }

    }
</script>
