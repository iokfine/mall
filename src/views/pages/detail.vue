<style scoped lang="less">
    .demo-carousel {
        height: 350px;
        position: relative;
    }

    .container {
        width: 50%;
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
                <img :src="info.mainImage" width="456px"/>
            </Col>
            <Col span="11" offset="1" class="content">
                <h3 style="font-size: 24px;margin-top: 20px">{{info.title}}</h3>
                <h1 style="font-size: 36px;margin-top: 20px">{{info.prise}}</h1>
                <Divider/>
                <p style="font-size: 18px;">UPC: {{info.upc}}</p>
                <ul style="font-size: 18px;margin-top: 10px">
                    <li v-for="(item,index) in info.items" :key="index">{{item.value}}</li>
                </ul>
            </Col>
        </Row>
        <Divider/>
        <ul>
            <li style="text-align: center"><img src="http://www.patudesign.com/patuImages/526942813604143650.jpg" style="width: 600px;"/></li>
            <li style="text-align: center"><img src="http://www.patudesign.com/patuImages/526942813604143650.jpg" style="width: 600px;"/></li>
            <li style="text-align: center"><img src="http://www.patudesign.com/patuImages/526942813604143650.jpg" style="width: 600px;"/></li>
            <li style="text-align: center"><img src="http://www.patudesign.com/patuImages/526942813604143650.jpg" style="width: 600px;"/></li>
            <li style="text-align: center"><img src="http://www.patudesign.com/patuImages/526942813604143650.jpg" style="width: 600px;"/></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                 info:"",
            }
        },
        methods: {
            toDetail() {
                this.$router.push({name: 'detail'})
            }

        },

        mounted() {
            let data = {
                currentPage: "listing"
            }
            this.$emit("whichPage-ctpEvent", data)
            let info = this.$route.params.id;
            if(info === undefined){
               this.$router.push({name:'home'})
            }
            this.info =  this.$route.params.id;

        }

    }
</script>
