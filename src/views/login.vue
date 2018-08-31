<template>
    <Row type="flex" justify="center" align="middle" class="login">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <Col style="width: 300px">
            <Row class="header">
                <img src="../images/logo.png" width="300" style="margin-top: 50px;"/>
            </Row>
            <Row>
                <FormItem prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="Username" size="large" clearable style="width: 300px">
                            <span slot="prepend">
                                <Icon :size="18" type="person"></Icon>
                            </span>
                        </Input>
                    </FormItem>
                <FormItem prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="Password" size="large" clearable style="width: 300px">
                            <span slot="prepend">
                                <Icon :size="16" type="locked"></Icon>
                            </span>
                        </Input>
                    </FormItem>
            </Row>
            <Row type="flex" justify="space-between" style="margin-bottom: 10px">
                <Checkbox size="large">自动登录</Checkbox>
                <a class="forget-pass" @click="tips">忘记密码</a>
            </Row>
            <Row>
                <FormItem>
                    <Button type="primary" style="width: 300px" @click="handleSubmit('formInline')" size="large" long>Login</Button>
                </FormItem>
            </Row>
        </Col>
        </Form>
    </Row>

</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            tips(){
                this.$Notice.info({
                    title: '别说了',
                    desc: '我爱你'
                });
            }
        }
    }
</script>
<style scoped>
    .login{
        height: 500px;
    }
    .header{
        text-align: center;
    }

</style>