<style scoped lang="less">
    .demo-carousel {
        height: 350px;
        position: relative;
    }
    .container {
        width: 70%;
        margin: 15px auto;
        .content {
            .recommend {
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
    <div class="container">
        <Row>
            <Col span="12" class="content">
                <img :src="info.mainImage" width="100%"/>
            </Col>
            <Col span="11" offset="1" class="content">
                <h3 style="font-size: 24px;margin-top: 20px">{{info.title}}</h3>
                <h1 style="font-size: 36px;margin-top: 20px">{{info.prise}}</h1>
                <Divider/>
                <p style="font-size: 18px;" v-if="info.showUpc">UPC: {{info.upc}}</p>
                <ul style="font-size: 18px;margin-top: 10px">
                    <li v-for="(item,index) in info.items" :key="index">{{item.value}}</li>
                </ul>
            </Col>
        </Row>
        <Divider/>
        <ul style="text-align: center;list-style: none">
            <li v-for="imageUrl in info.otherImages"><img :src="imageUrl" style="width: 600px;"/></li>
        </ul>
        <div style="width: 100%;text-align: center">
            <img v-if="info.showUpc" :src="info.upcUrl" style="width: 600px;"/>
        </div>
    </div>
</template>
<script>
    import * as axios from "axios";
    export default {
        data() {
            return {
                 info:{},
            }
        },
        methods: {
            toDetail() {
                this.$router.push({name: 'detail'})
            }

        },
        created(){
            let id = this.$route.query.product;
            axios.get(`http://www.patudesign.com/sys/sys/upc/${id}`).then(response => {
                //console.log(response.data.result)
                this.info = response.data.result
            }).catch(function (error) {
                console.log(error);
            });
            console.log(id)
        },
        mounted() {
        }

    }
</script>
