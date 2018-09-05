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

    }

</style>

<template>
    <Row class="container" type="flex" justify="center">
        <Col span="20" class="content">
            <Card dis-hover style="margin: 10px 10px;height: 560px" title="# About Me">
                <p>
                    我是一个来自火星的男人
                </p>
            </Card>
        </Col>
    </Row>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {},

        mounted() {

        }

    }
</script>
