<template>
    <div>
        <div>
            <modal :show.sync="modals.CreateTransactionModal"
               body-classes="p-0"
               modal-classes="modal-dialog-centered modal-sm"
               style="overflow-y:hidden;">
                <card 
                    type="secondary"
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0 mb-0">
                    <div class="text-center">
                        <h4 class="card-title">Create new Transaction</h4>
                    </div>
                    <form @submit.prevent>
                        <base-input label="Name"
                                    type="tname"
                                    placeholder="Enter Name"
                                    v-model="transaction.transaction"
                                    >
                        </base-input>
                        <base-input label="Amount (Rp)"
                                    type="tamount"
                                    placeholder="Enter Amount"
                                    v-model="transaction.amount"
                                    >
                        </base-input>
                        <base-input label="Recipt"
                                    type="trecipt"
                                    placeholder="Enter Recipt"
                                    v-model="transaction.recipt"
                                    >
                        </base-input>
                        <base-input label="Type"
                                    type="ttype"
                                    placeholder="Enter Type"
                                    v-model="transaction.types"
                                    >
                        </base-input>
                        <template>
                            <base-input>
                            <el-date-picker 
                                v-model="transaction.time"
                                label="Date Time"
                                type="datetime"
                                placeholder="Select date and time"
                                :formatter="timeFormat">
                            </el-date-picker>
                            </base-input>
                        </template>
                        <base-input label="Description"
                                    type="tdesc"
                                    placeholder="Enter Description">
                                    <textarea v-model="transaction.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </base-input>
                    </form>
                    <div class="text-center mt-4">
                        <base-button @click="CreateTransaction()" type="success">Create!</base-button>
                    </div>
                </card>
            </modal>
            <modal :show.sync="modals.UpdateTransaction"
               body-classes="p-0"
               modal-classes="modal-dialog-centered modal-sm"
               style="overflow-y:hidden;">
                <card 
                    type="secondary"
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0 mb-0">
                    <div class="text-center">
                        <h4 class="card-title">Update Transaction {{transaction2.id}}</h4>
                    </div>
                    <form @submit.prevent>
                        <base-input label="Name"
                                    type="tname"
                                    placeholder="Enter Name"
                                    v-model="transaction2.transaction"
                                    >
                        </base-input>
                        <base-input label="Amount (Rp)"
                                    type="tamount"
                                    placeholder="Enter Amount"
                                    v-model="transaction2.amount"
                                    >
                        </base-input>
                        <base-input label="Recipt"
                                    type="trecipt"
                                    placeholder="Enter Recipt"
                                    v-model="transaction2.recipt"
                                    >
                        </base-input>
                        <base-input label="Type"
                                    type="ttype"
                                    placeholder="Enter Type"
                                    v-model="transaction2.types"
                                    >
                        </base-input>
                        <template>
                            <base-input>
                            <el-date-picker 
                                v-model="transaction2.time"
                                label="Date Time"
                                type="datetime"
                                placeholder="Select date and time"
                                :formatter="timeFormat">
                            </el-date-picker>
                            </base-input>
                        </template>
                        <base-input label="Description"
                                    type="tdesc"
                                    placeholder="Enter Description">
                                    <textarea v-model="transaction2.description" class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
                        </base-input>
                    </form>
                    <div class="text-center mt-4">
                        <base-button @click="UpdateTransaction()" type="success">Update!</base-button>
                    </div>
                </card>
            </modal>
        </div>
        <card card-body-classes="table-full-width">
            <h4 slot="header" class="card-title">Transaction Table</h4>
            <base-button type="primary" @click="modals.CreateTransactionModal = true">
                Create new transaction
            </base-button>
            <el-table :data="tableData">
                <el-table-column
                    min-width="150"
                    sortable
                    label="ID"
                    property="id"
                ></el-table-column>
                <el-table-column
                    min-width="150"
                    sortable
                    label="Transaction"
                    property="transaction"
                ></el-table-column>
                <el-table-column
                    min-width="150"
                    sortable
                    label="Recipt"
                    property="recipt"
                ></el-table-column>
                <el-table-column
                    min-width="150"
                    sortable
                    label="Description"
                    property="description"
                ></el-table-column>
                <el-table-column
                    min-width="150"
                    sortable
                    label="Type"
                    property="types"
                ></el-table-column>
                <el-table-column
                    min-width="150"
                    sortable
                    label="Amount"
                    property="amount"
                    :formatter="toCurrencyString"
                ></el-table-column>
                <el-table-column
                    min-width="150"
                    sortable
                    label="Time"
                    property="time"
                    :formatter="timeFormat"
                ></el-table-column>
                <el-table-column
                    min-width="150"
                    sortable
                    label="Action"
                    v-slot="scope"
                >
                <base-button style="margin-right:10px" @click="Edit(scope)" round icon type="info">
                    <i class="tim-icons icon-pencil"></i>
                </base-button>
                <base-button round icon type="danger" @click="Delete(scope)" >
                    <i class="tim-icons icon-trash-simple"></i>
                </base-button>
                </el-table-column>
            </el-table>
        </card>
    </div>    
</template>

<script>
import { Table, TableColumn } from 'element-ui';
import Modal from '@/components/Modal'
import {DatePicker, TimeSelect} from 'element-ui'
import moment from 'moment'

export default {
    async fetch(){
        this.$axios.setHeader("refresh_token",this.$cookies.get("refresh_token"))
        this.$axios.setHeader("user_id",this.$cookies.get("id"))
        await this.$axios.$get(`/api/v1/manager/history/${this.$cookies.get("id")}`).then((data)=>{
            this.tableData = data.data
        })
    },
    components: {
        [DatePicker.name]: DatePicker,
        [TimeSelect.name]: TimeSelect,
        [Modal.name]:Modal,
        [Table.name]: Table,
        [TableColumn.name]: TableColumn
    },
    data(){
        return{
            transaction:{
                userid:null,
                transaction:null,
                amount:null,
                recipt:null,
                description:null,
                types:null,
                time:null
            },
            transaction2:{
                userid:null,
                transaction:null,
                amount:null,
                recipt:null,
                description:null,
                types:null,
                time:null
            },
            modals:{
                CreateTransactionModal:false,
                UpdateTransaction:false
            },
            tableData: [],
        }
    },
    methods:{
        async CreateTransaction(){
            if(this.transaction.userid||this.transaction.transaction||this.transaction.amount||this.transaction.recipt||this.transaction.description||this.transaction.types||this.transaction.time){
                this.$axios.setHeader("refresh_token",this.$cookies.get("refresh_token"))
                this.$axios.setHeader("user_id",this.$cookies.get("id"))
                this.transaction.userid=this.$cookies.get("id")
                console.log(this.transaction)
                await this.$axios.$post("/api/v1/manager/insert",this.transaction).then((res)=>{
                    if(res.data.id){
                        this.$notify({
                            type: 'success',
                            title: 'Transaction successfully created!',
                            text: 'Refreshing Table..'
                        })
                        this.modals.CreateTransactionModal = false
                        this.$fetch()
                    }else{
                        this.$notify({
                            type: 'error',
                            title: 'Create transaction failed!',
                            text: res.message,
                            // data: {res:res}
                        })
                    }
                }).catch((err)=>{
                    if(!err.status){
                        this.$notify({
                            type: 'error',
                            title: 'Create transaction failed!',
                            text: err,
                        })
                    }
                })
            }else{
                this.$notify({
                    type: 'error',
                    title: 'Please fill all the required input!',
                    text: 'Try again..'
                })
            }
        },
        async UpdateTransaction(){
            if(this.transaction.userid||this.transaction.transaction||this.transaction.amount||this.transaction.recipt||this.transaction.description||this.transaction.types||this.transaction.time){
                this.$axios.setHeader("refresh_token",this.$cookies.get("refresh_token"))
                this.$axios.setHeader("user_id",this.$cookies.get("id"))
                this.transaction.userid=this.$cookies.get("id")
                await this.$axios.$put("/api/v1/manager/update",this.transaction).then((res)=>{
                    if(res.data){
                        this.$notify({
                            type: 'success',
                            title: 'Transaction successfully updated!',
                            text: 'Refreshing Table..'
                        })
                        this.modals.UpdateTransaction = false
                        this.$fetch()
                    }else{
                        this.$notify({
                            type: 'error',
                            title: 'Update transaction failed!',
                            text: res.message,
                        })
                    }
                }).catch((err)=>{
                    if(!err.status){
                        this.$notify({
                            type: 'error',
                            title: 'Update transaction failed!',
                            text: err,
                        })
                    }
                })
            }else{
                this.$notify({
                    type: 'error',
                    title: 'Please fill all the required input!',
                    text: 'Try again..'
                })
            }
        },
        timeFormat(row,column){
            return moment(row[column.property]).format("YYYY MMM DD")
        },toCurrencyString(row,column){
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(row[column.property])
        },Edit(scope){
            this.modals.UpdateTransaction = true
            this.transaction2 = scope.row
        },async Delete(scope){
            this.transaction = scope.row
            this.$axios.setHeader("refresh_token",this.$cookies.get("refresh_token"))
            this.$axios.setHeader("user_id",this.$cookies.get("id"))
            this.transaction.userid=this.$cookies.get("id")
            await this.$axios.$delete(`/api/v1/manager/delete/${this.transaction.id}`).then((res)=>{
                if(res.data){
                    this.$notify({
                        type: 'success',
                        title: 'Delete Success!',
                        text: 'Refreshing Table..'
                    })
                    this.modals.UpdateTransaction = false
                    this.$fetch()
                }else{
                    this.$notify({
                        type: 'error',
                        title: 'Delete failed!',
                        text: res.message,
                    })
                }
            }).catch((err)=>{
                if(!err.status){
                    this.$notify({
                        type: 'error',
                        title: 'Delete failed!',
                        text: err,
                    })
                }
            })
        }
    }
}
</script>