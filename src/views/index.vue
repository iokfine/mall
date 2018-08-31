<style scoped lang="less">

</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="12">
                <Row type="flex" justify="center" align="middle">
                    <Col>
                        <img src="../images/logo.png">
                    </Col>
                </Row >
                <Row type="flex" justify="center" align="middle">
                    <Button type="ghost" @click="handleStart">Start Work</Button>
                </Row>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart () {
                this.$router.push({name:'main'})
            },
            tips(){
                this.$Notice.success({
                    title: 'Weleome to iokfine',
                    desc:  'Now ,You Can Enjoy the App~ Thank you. '
                })
            }
        },
        mounted(){
            this.tips();
        }
    }
</script>
