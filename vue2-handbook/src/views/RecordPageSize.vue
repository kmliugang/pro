<template>
    <div>
        <el-table :data="filterData" style="width: 100%" border stripe :highlight-current-row="true" height="400px">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>

        <div style="text-align: center;margin: 16px 0;">
            <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
                @current-change="handleCurrentChange" :current-page.sync="currentPage">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [],
            total: 1000,
            pageSize: 30,
            currentPage: 1
        }
    },
    computed: {
        filterData() {
            return this.tableData.slice((this.currentPage - 1) * 30, this.currentPage * 30)
        }
    },
    created() {
        console.log(this.$route.query);
        this.$route.query.pageNum ? this.currentPage = +this.$route.query.pageNum : void (0);
        let i = 0;
        for (let item of Array(1000)) {
            this.tableData.push({
                date: '2016-05-02' + '=>' + (i + 1),
                name: '王小虎' + (i + 1),
                address: '上海市普陀区金沙江路' + '1518' + '__' + (i + 1) + ' 弄'
            });
            i++;
        }

    },
    methods: {
        handleCurrentChange(val) {
            this.currentPage = val;
            // 页面无刷新，修改URL
            // this.$router.push(this.$route.path + '?pageNum=' + val)
            this.$router.replace(this.$route.path + '?pageNum=' + val)
        }
    }
}
</script>

<style lang="scss" scoped>
*>div{
    background: rgb(0, 142, 143);
}
</style>