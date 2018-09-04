<style scoped lang="less">
    .container {
        .content {
            margin-top: 15px;

        }
    }

</style>

<template>
    <div>
        <Row class="container" type="flex" justify="center">
            <Col span="17" class="content">
                <Card :bordered="false">
                    <p slot="title">Help Me</p>
                    <Form>
                        <FormItem>
                            <Input type="textarea" :rows="4" placeholder="Enter something..."/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">Submit</Button>
                            <Button style="margin-left: 8px">Reset</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card :bordered="false" style="margin-top: 20px">
                    <p slot="title">History</p>
                    <ul class="recommend" style="list-style: none">
                        <li v-for="message in messages">
                            <Card dis-hover style="margin: 10px 10px">
                                <Row>
                                    <Col span="2">
                                        <Avatar style="background-color: #87d068" icon="ios-person" size="large"/>
                                    </Col>
                                    <Col span="22">
                                        <Card :title="message.userName" dis-hover :bordered="false">
                                            <a href="#" slot="extra">
                                                {{message.time}}
                                            </a>
                                        </Card>
                                        <div>
                                            {{message.message}}
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </li>
                    </ul>
                </Card>
                <Card dis-hover style="margin:10px 0 10px 0;text-align: center" >
                    <Page :total="100" prev-text="Previous" next-text="Next" page-size="20"/>
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
                        userName: 'jx',
                        time: '2019.10.1',
                        message: '我好喜欢您',
                    }, {
                        userName: 'ss',
                        time: '2019.10.1',
                        message: '我好喜欢您',
                    }, {
                        userName: 'dd',
                        time: '2019.10.1',
                        message: '我好喜欢您',
                    }, {
                        userName: 'ff',
                        time: '2019.10.1',
                        message: '我好喜欢您',
                    },
                ]
            }
        }
    }
</script>
