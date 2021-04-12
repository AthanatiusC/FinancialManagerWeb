<template>
    <div>
        <card card-body-classes="table-full-width">
            <h4 slot="header" class="card-title">Transaction Table</h4>
            <base-button block type="default" class="col-md-3 mb-3" @click="modals.modal3 = true">
                Add new Transaction
            </base-button>
            <el-table :data="tableData">
            <el-table-column
                min-width="150"
                sortable
                label="Name"
                property="name"
            ></el-table-column>
            <el-table-column
                min-width="150"
                sortable
                label="Country"
                property="country"
            ></el-table-column>
            <el-table-column
                min-width="150"
                sortable
                label="City"
                property="city"
            ></el-table-column>
            <el-table-column
                min-width="150"
                sortable
                align="right"
                header-align="right"
                label="Salary"
                property="salary"
            ></el-table-column>
            </el-table>
        </card>
    </div>    
</template>