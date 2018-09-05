<style scoped>
    .layout-footer-center {
        margin-bottom: 0;
        text-align: center;
        background-color: #fff;
        border-top: #dddee1 1px solid;
    }

    .header-color {
        background-color: #fff;
        border-bottom: #dddee1 1px solid;
    }

    .content-pozition-center {
        text-align: center;
    }

    .header-title-font {
        color: #657180;
        font-size: 14px;
    }

</style>
<template>
    <Layout>
        <Header class="header-color">
            <Row type="flex" class="content-pozition-center header-title-font">
                <Col span="4" style="display: flex;justify-content: center;align-items: center">
                    <img src="../images/logo_main.png" style="height: 36px;cursor:pointer"/>
                </Col>
                <Col span="2">
                    <router-link :to="{name:'home'}">Home</router-link>
                </Col>
                <Col span="2">
                    <router-link :to="{name:'essay'}">Essay</router-link>
                </Col>
                <Col span="2">
                    <router-link :to="{name:'aboutMe'}">About Me</router-link>
                </Col>
                <Col span="2">
                    <router-link :to="{name:'advice'}">Advice</router-link>
                </Col>
                <Col span="2">
                    <a href="https://github.com/iokfine/personal-website">
                        <Icon type="logo-github"/>
                        Github</a>
                </Col>
                <Col span="5">
                </Col>
                <Col span="5" style="display: flex;align-items: center;">
                    <Input search enter-button placeholder="search content..."/>
                </Col>
            </Row>
        </Header>
        <Content>
            <router-view @whichPage-ctpEvent="ctpEvent"></router-view>
        </Content>
        <Footer class="layout-footer-center">2017-2018 &copy; iokfine 世界改变代码!</Footer>
        <BackTop></BackTop>
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