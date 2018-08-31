<style scoped>
    .layout-footer-center{
        margin-bottom: 0;
        text-align: center;
        background-color: #fff;
        border-top: #dddee1 1px solid;
    }
    .header-color{
        background-color: #fff;
        border-bottom: #dddee1 1px solid;
    }
    .content-pozition-center{
        text-align: center;
    }
    .header-title-font{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        color: #657180;
        font-size: 14px;
    }

    .content-height{
        height: 830px;
    }
</style>
<template>
    <Layout>
        <Header class="header-color">
            <Row type="flex" align="middle" justify="center" class="content-pozition-center header-title-font">
                <Col span="4">
                    <router-link to="/login" style="">干货</router-link>
                </Col>
                <Col span="4">
                    <router-link to="/login" style="">问答</router-link>
                </Col>
                <Col span="8" style="align-items: center;display: flex;justify-content: center;">
                    <img src="../images/logo_main.png" style="height: 36px;"/>
                </Col>
                <Col span="4">
                    <router-link to="/login" style="">登录</router-link>
                </Col>
                <Col span="4">
                    <router-link to="/login" style="">注册</router-link>
                </Col>
            </Row>
        </Header>
        <Content class="content-height">
            <router-view @whichPage-ctpEvent="ctpEvent"></router-view>
        </Content>
        <Footer class="layout-footer-center" >2017-2018 &copy; iokfine 世界改变代码!</Footer>
    </Layout>
</template>
<script>
    export default {
        data(){
            return{
                value2: 0
            }
        },
        methods:{
            ctpEvent(data){
                switch ( data.currentPage){
                    case 'listing':{

                        break
                    }
                    case 'material':{

                        break
                    }
                }
            }
        },
        mounted(){

        }
    }
</script>