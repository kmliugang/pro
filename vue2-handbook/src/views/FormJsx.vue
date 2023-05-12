
<script>
// 深入数据对象 可以查看在jsx  中标签上各属性的具体写法
// https://v2.cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1
export default {
    props: {
        formList: {
            type: Array,
            default: () => ([
                {
                    node: 'input',
                    type: 'textarea',
                    label: '用户姓名',
                    value: '',
                    default: '',
                    key: 'username',
                    placeholder: '请输入',
                    attrs: {
                        clearable: true,
                        "dadad12312": 'asdas',
                        autoComplete: 'off',
                    }

                }
            ])
        }

    },
    data() {
        return {
            ruleForm: {
                name: '',
                region: '',
                delivery: '',
                type: '',
                resource: '',
                desc: ''

            },
            rules: {
                name: [
                    { required: true }
                ]
            },
            ruleFormRef: 'ruleFormRef'
        }
    },
    created() {
        this.ruleForm = {};
        this.formList.forEach(v => {
            this.$set(this.ruleForm, v.key, v.value || v.default);
        });
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        submitFormNative(e) {
            e.preventDefault();
        }
    },
    render() {

        //     <el-form-item>
        //         <el-button type="primary" vOn:click={()=>this.submitForm('ruleFormRef')}>立即创建</el-button>
        //         <el-button vOn:click={()=>this.resetForm('ruleFormRef')}> 重置</el-button>
        //     </el-form-item >
        let nodes = [];

        nodes = <el-form label-width="auto" label-position='left' vOn:submit_native={this.submitFormNative}>
            {
                this.formList.map(item => {
                    return (
                        <el-form-item label={item.label} prop={item.key} >
                            <el-input
                                vModel={this.ruleForm[item.key]}
                                props={{ ...item.attrs }}
                                type={item.type}
                                placeholder={item.placeholder}
                                attrs={{ ...item.attrs }}
                            >
                            </el-input>
                        </el-form-item>
                    )
                })
            }
        </el-form>
        return nodes
    }
}
</script>

<style lang="scss" scoped></style>