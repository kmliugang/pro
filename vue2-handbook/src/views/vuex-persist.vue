<template>
    <div>
        <h3>vuex 数据持久化</h3>
        <div style="background:salmon;color:#fff">
            {{ userInfo }}

        </div>
        <button @click="changeUserInfo('u1')">修改用户数据{{ u1 }}</button>
        <button @click="changeUserInfo('u2')">修改用户数据{{ u2 }}</button>
        <button @click="changeUserInfo('u3')">修改用户数据{{ u3 }}</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            u1: {
                name: '云芝',
                age: 18
            },
            u2: {
                name: '焰灵姬',
                age: 18
            },
            u3: {
                name: '柳神',
                age: 18
            }
        }
    },
    computed: {
        userInfo() {
            return this.$store.state.userInfo
        }

    },
    methods: {
        changeUserInfo(val) {
            this.$store.dispatch('setUserInfo', this[val])
        }
    }
}
</script>

<style lang="scss" scoped>
button+button {
    margin-left: 12px;
    margin-top: 12px;

}

button {
    padding: 8px 12px;
    border: none;
    outline: 0;
    cursor: pointer;

    &:hover {
        background: #007aff;
        color: #fff;

    }

    &:focus {
        background: #007aff;
        color: #fff;
        opacity: 0.7;

    }

    &:active {
        background: salmon;
        color: #fff;
        opacity: 0.7;
    }

}
</style>