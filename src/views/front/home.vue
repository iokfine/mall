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
                <li v-for="article in articles">
                    <Card dis-hover style="margin: 10px 10px">
                        <h2><a>[{{article.type}}]</a>&nbsp;&nbsp;{{article.title}}</h2>
                        <strong>{{article.content}}</strong>
                        <div style="margin-top: 20px">
                            {{article.time}}
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
                articles: [
                    {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url:''
                    } , {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url:''
                    } , {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url:''
                    } , {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url:''
                    } , {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url:''
                    } , {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url:''
                    } , {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url:''
                    } ,

                ]
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
