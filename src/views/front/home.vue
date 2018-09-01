<style scoped lang="less">
    .demo-carousel {
        height: 350px;
    }

    .container {
        padding: 10px 50px 0 70px;
        .content {
            .recommend {
                margin: 30px 0;
            }
        }
        .assist-bar {
            margin-left: 30px;
            .card {
            }
        }
    }

</style>

<template>
    <Row class="container">
        <Col span="17" class="content">
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
            <h1 style="margin-top: 20px">&nbsp;&nbsp;&nbsp;&nbsp;# Recommend article</h1>
            <ul class="recommend" style="list-style: none">
                <li>
                    <Card dis-hover style="margin: 10px 10px">
                        <h2>[情感]我喜欢你</h2>
                        <strong>我其实真的超喜欢你的</strong>
                        <div style="margin-top: 20px">
                            2018年9月2号
                        </div>
                    </Card>
                </li>
                <li>
                    <Card dis-hover style="margin: 10px 10px">
                        <h2>[情感]我喜欢你</h2>
                        <strong>我其实真的超喜欢你的</strong>
                        <div style="margin-top: 20px">
                            2018年9月2号
                        </div>
                    </Card>
                </li>
                <li>
                    <Card dis-hover style="margin: 10px 10px">
                        <h2>[情感]我喜欢你</h2>
                        <strong>我其实真的超喜欢你的</strong>
                        <div style="margin-top: 20px">
                            2018年9月2号
                        </div>
                    </Card>
                </li>
                <li>
                    <Card dis-hover style="margin: 10px 10px">
                        <h2>[情感]我喜欢你</h2>
                        <strong>我其实真的超喜欢你的</strong>
                        <div style="margin-top: 20px">
                            2018年9月2号
                        </div>
                    </Card>
                </li>
                <li>
                    <Card dis-hover style="margin: 10px 10px">
                        <h2>[情感]我喜欢你</h2>
                        <strong>我其实真的超喜欢你的</strong>
                        <div style="margin-top: 20px">
                            2018年9月2号
                        </div>
                    </Card>
                </li>
                <li>
                    <Card dis-hover style="margin: 10px 10px">
                        <h2>[情感]我喜欢你</h2>
                        <strong>我其实真的超喜欢你的</strong>
                        <div style="margin-top: 20px">
                            2018年9月2号
                        </div>
                    </Card>
                </li>
            </ul>
        </Col>
        <Col span="6" class="assist-bar">
            <Card :bordered="false" class="card">
                <p slot="title">No border title</p>
                <p>Content of no border type. Content of no border type. Content of no border type. Content of no border
                    type. </p>
            </Card>
            <Card :bordered="false" style="margin-top: 50px">
                <p slot="title">No border title</p>
                <p>Content of no border type. Content of no border type. Content of no border type. Content of no border
                    type. </p>
            </Card>
        </Col>
        <BackTop></BackTop>
    </Row>
</template>
<script>
    export default {
        data() {
            return {
                value2: 0,
            }
        },
        methods: {},

        mounted() {
            let data = {
                currentPage: "listing"
            }
            this.$emit("whichPage-ctpEvent", data)
        }

    }
</script>
