<style scoped lang="less">
    .demo-carousel {
        height: 700px;
        position: relative;
    }

    .container {
        width: 70%;
        margin: 15px auto;
        .content {
            .recommend {
                margin: 30px 0;
            }
        }
        .assist-bar {
            margin-left: 30px;
            margin-top: 10px;
            .card {
            }
        }
    }
</style>

<template>
    <Row class="container">
        <Col span="24" class="content">
            <Carousel autoplay loop :autoplay-speed="4000" :radiusDot="true">
                <CarouselItem v-for="(image,index) in rollingImages" :key="index">
                    <div class="demo-carousel">
                        <img v-bind:src="image.imageUrl" style="width: 100%">
                    </div>
                </CarouselItem>
            </Carousel>
            <ul class="recommend" style="list-style: none">
                <li v-for="upc in upcs" style="float:left;margin: 10px">
                    <a href="#" @click="toDetail(upc)">
                        <Card dis-hover>
                            <img :src="upc.mainImage"
                                 style="width: 270px"/>
                            <h3 style="text-align: center;color: #2a2d32d6">{{upc.abbr}}</h3>
                        </Card>
                    </a>
                </li>
            </ul>
        </Col>
    </Row>
</template>
<script>
    import * as axios from "axios";

    export default {
        data() {
            return {
                upcs: [],
                rollingImages: [
                    {
                        imageUrl: 'http://2019hk-image-server.oss-cn-shenzhen.aliyuncs.com/lunbo/lunbo1.jpg',
                    },
                    {
                        imageUrl: 'http://2019hk-image-server.oss-cn-shenzhen.aliyuncs.com/lunbo/lunbo2.jpg',
                    }, {
                        imageUrl: 'http://2019hk-image-server.oss-cn-shenzhen.aliyuncs.com/lunbo/lunbo3.jpg',
                    }
                ]
            }
        },
        methods: {
            toDetail(productId) {
                console.log(productId+"--------------")
                this.$router.push({name: 'detail', params: {id: productId}})
            },
            getProducts() {
                axios.get('http://localhost:15500/sys/upc/query/home').then(response => {
                    //console.log(response.data.result)
                    this.upcs = response.data.result
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },

        mounted() {
            this.getProducts();
            let data = {
                currentPage: "listing"
            }
            this.$emit("whichPage-ctpEvent", data)
        }

    }
</script>
