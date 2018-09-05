<style scoped lang="less">
    .container {
        .content {
            margin-top: 15px;
        }
    }

    ul {
        list-style: none
    }

    .message-header {
        height: 30px;
    }
</style>

<template>
    <div>
        <Row class="container" type="flex" justify="center">
            <Col span="17" class="content">
                <Card :bordered="false" dis-hover>
                    <p slot="title">Tell Me About Tt, Thank You</p>
                    <Form>
                        <FormItem>
                            <Input type="textarea" :rows="4" v-model="messageForm" placeholder="Enter something..."/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="submitMessage">Submit</Button>
                            <Button style="margin-left: 8px" @click="messageForm = ''">Clean</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card :bordered="false" style="margin-top: 20px" dis-hover>
                    <p slot="title">Message Board</p>
                    <ul>
                        <li v-for="message in messages">
                            <Card dis-hover style="margin: 10px 10px">
                                <Row>
                                    <Col span="2">
                                        <Avatar :style="message.icon" size="large">{{message.userName}}</Avatar>
                                    </Col>
                                    <Col span="22">
                                        <div class="message-header">
                                            <p style="float: left">
                                                <Time :time="message.time"/>
                                            </p>
                                        </div>
                                        <div>
                                            {{message.message}}
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </li>
                    </ul>
                </Card>
                <Card dis-hover style="margin:10px 0 10px 0;text-align: center">
                    <Page :total="100" prev-text="Previous" next-text="Next" :page-size="20"/>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                messages: [
                    {
                        userName: 'hjj',
                        time: 1536161533989,
                        message: '玩徐徐,我会加油的,祝你和柳细菌性福!',
                        icon: 'background:#f56a00'
                    },
                    {
                        userName: 'wxx',
                        time: 1535151533989,
                        message: '黄金星,你好厉害啊,我好喜欢你,加油~',
                        icon: 'background:#7265e6'
                    }
                ],
                messageForm: '',
            }
        },
        methods: {
            submitMessage() {
                if (this.messageForm.length !== 0) {
                    this.messages.push({
                        userName: 'wxx',
                        time: new Date(),
                        message: this.messageForm,
                        icon: 'background:'+this.getRandomColor(),
                    })
                }else{
                    this.$Message.error('no data to submit!')
                }
            },
            getRandomColor(){
                let colorValue="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
                let colorArray = colorValue.split(",");
                let color="#";
                for(let i=0;i<6;i++){

                    color+=colorArray[Math.floor(Math.random()*16)];
                }
                return color;
            }
        }
    }
</script>
