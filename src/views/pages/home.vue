<style scoped lang="less">
    .demo-carousel {
        height: 350px;
        position: relative;
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
            margin-top: 10px;
            .card {
            }

        }
    }

</style>

<template>
    <Row class="container">
        <Col span="17" class="content">
            <Carousel autoplay loop :autoplay-speed="4000" :radiusDot="true">
                <CarouselItem v-for="(image,index) in rollingImages" :key="index">
                    <div class="demo-carousel">
                        <img v-bind:src="image.imageUrl" style="width: 100%">
                        <h1 style="color: white;position: absolute;bottom: 20px;left: 15px">{{image.desc}}</h1>
                    </div>
                </CarouselItem>
            </Carousel>
            <h1 style="margin-top: 20px">&nbsp;&nbsp;&nbsp;&nbsp;# Recommend article</h1>
            <ul class="recommend" style="list-style: none">
                <li v-for="article in articles">
                    <Card dis-hover style="margin: 10px 10px">
                        <h2><a>[{{article.type}}]</a>&nbsp;&nbsp;<a>{{article.title}}></a></h2>
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
    </Row>
</template>
<script>
    export default {
        data() {
            return {
                articles: [
                    {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url: ''
                    },
                    {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url: ''
                    },
                    {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url: ''
                    },
                    {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url: ''
                    },
                    {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url: ''
                    },
                    {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url: ''
                    },
                    {
                        type: 'JAVA',
                        title: '深入理解JVM',
                        content: 'JVM的深入理解,java虚拟机的运行时内存的分配,以及java虚拟机的各种虚拟机的了解和发展史,更体现了强大的垃圾回收机制...',
                        author: 'nicolas',
                        time: '2018.09.01',
                        url: ''
                    },

                ],
                rollingImages: [
                    {
                        desc: '未来是机器人的时代,人工智能将取代程序员!',
                        imageUrl: 'https://inews.gtimg.com/newsapp_ls/0/5140163087_870492/0',

                    },
                    {
                        desc: '联通电信深陷合并旋涡，改革逻辑再现加加减减？',
                        imageUrl: 'https://inews.gtimg.com/newsapp_ls/0/5142239759_294195/0',
                    }
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
