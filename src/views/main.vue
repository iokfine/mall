<style scoped>
    .layout-footer-center {
        margin-bottom: 0;
        text-align: center;
        background-color: #fff;
        border-top: #dddee1 1px solid;
    }

    .header-color {
        background-color: #ffffff;
        border-bottom: #dddee1 1px solid;
    }

    .content-pozition-center {
        text-align: center;
        width: 70%;
        margin: 0 auto;
    }

    .header-title-font {
        color: #222;
        font-size: 14px;
    }

    ul {
        list-style: none;
    }

    ul > li {
        float: left;
        margin-right: 25px;
    }

</style>
<template>
    <Layout>
        <div style="min-width: 1200px">
            <Header class="header-color">
                <Row type="flex" class="content-pozition-center header-title-font">
                    <Col :lg="6" style="display: flex;justify-content: center;align-items: center">
                        <img src="https://2019hk-image-server.oss-cn-shenzhen.aliyuncs.com/logo/putulogo.png"
                             style="height: 36px;cursor:pointer"/>
                    </Col>
                    <Col :lg="6">
                        <router-link :to="{name:'home'}" style="color: black;font-size: 16px">Product</router-link>
                    </Col>
                    <Col :lg="6">
                        <router-link :to="{name:'aboutMe'}" style="color: black;font-size: 16px">About</router-link>
                    </Col>
                    <Col :lg="6" style="display: flex;justify-content: center;align-items: center">
                        <img src="https://2019hk-image-server.oss-cn-shenzhen.aliyuncs.com/logo/cart7.png"
                             style="height: 36px;cursor:pointer"/>
                    </Col>
                </Row>
            </Header>
            <Content>
                <router-view @whichPage-ctpEvent="ctpEvent"></router-view>
            </Content>
            <Footer class="layout-footer-center">Copyright © 2019 Patu</Footer>
            <BackTop></BackTop>
        </div>
    </Layout>
</template>
<script>
    export default {
        data() {
            return {
                value2: 0
            }
        },
        methods: {
            ctpEvent(data) {
                switch (data.currentPage) {
                    case 'listing': {

                        break
                    }
                    case 'material': {

                        break
                    }
                }
            }
        },
        mounted() {

        }
    }
</script>