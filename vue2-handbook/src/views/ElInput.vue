<template>
    <div km-el-input>
        <el-input style="width:200px" v-model="input" placeholder="请输入内容" v-on:mouseenter.native="handleMouseEvt"
            @mouseleave.native="handleMouseEvt2" @focus="handleFocus"></el-input>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: ''
        }
    },
    methods: {
        handleMouseEvt(evt) {
            // console.log('enter');
        },
        handleFocus() {
            // console.log('focus');
        },
        handleMouseEvt2() {
            // console.log('leave');

        }

    }
}
</script>

<style lang="scss" scoped>
[km-el-input] {
    background: rgba(46, 139, 87, 0.5);
    height: 100vh;
    padding: 12px;
}
</style>