<template>
    <div>
        <div>
            <modal :show.sync="modals.picture"
                body-classes="p-0"
                modal-classes="modal-dialog-centered modal-sm"
                style="overflow-y:hidden;">
                <card type="secondary"
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0 mb-0">
                    <img slot="image" ref="imageshow" class="card-img-top" src="" alt="Receipt Image"/>
                    <h4 class=card-title>Filename - {{imagedata.name}}</h4>
                    <h5 class="card-footer" style="padding:0px;margin:0px"> 
                    <hr style="border-color: #2b3553;margin:5px 0px">
                    <di style="color:#b4b4bb" class="card-text">
                        {{imagedata.description}}
                    </di>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    <div class="text-center mt-4">
                        <base-button @click="modals.picture = false" class="btn btn-info btn-simple">Ok</base-button>
                    </div>
                    </h5>
                </card>
            </modal>
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
                        <label>Receipt</label>
                        <div>
                            <label class="btn btn-link btn-info">
                                <input  label="Browse receipt image"
                                        style="overflow:hidden;width: 0;"
                                        type="file"
                                        accept="image/x-png,image/jpeg"
                                        @change="upload($event.target.files)"
                                        />Browse File
                            </label>
                            <label class="col-6">
                                <div class="text-truncate" v-if="transaction.recipt">{{transaction.recipt}}</div>
                                <div v-else></div>
                            </label>
                        </div>
                        <!-- <base-input label="Type"
                                    type="ttype"
                                    placeholder="Enter Type"
                                    v-model="transaction.types"
                                    >
                        </base-input> -->
                        <base-input 
                            label="Type"
                            class="customselect"
                            v-model="transaction.types">
                            <select v-model="transaction.types" class="form-control" id="exampleFormControlSelect2">
                                <option style="color:black;font-family:Poppins,sans-serif">Wired</option>
                                <option style="color:black;font-family:Poppins,sans-serif">Direct</option>
                                <option style="color:black;font-family:Poppins,sans-serif">Others</option>
                            </select>
                        </base-input>
                        <label >DoB</label>
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
                        <base-button @click="CreateTransaction()" class="btn btn-success btn-simple" type="success">Create!</base-button>
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
                        <label>Receipt</label>
                        <div>
                            <label class="btn-primary rounded pt-1 pl-4 pr-4">
                                <input  label="Browse receipt image"
                                        style="overflow:hidden;width: 0;"
                                        type="file"
                                        accept="image/x-png,image/jpeg"
                                        @change="upload2($event.target.files)"
                                        />Chose File
                            </label>
                            <label class="col-6">
                                <div class="text-truncate" v-if="transaction2.recipt">{{transaction2.recipt}}</div>
                                <div v-else>Browse File</div>
                            </label>
                        </div>
                        <base-input 
                            label="Type"
                            class="customselect"
                            v-model="transaction2.types">
                            <select v-model="transaction2.types" class="form-control" id="exampleFormControlSelect2">
                                <option style="color:black;font-family:Poppins,sans-serif">Wired</option>
                                <option style="color:black;font-family:Poppins,sans-serif">Direct</option>
                                <option style="color:black;font-family:Poppins,sans-serif">Others</option>
                            </select>
                        </base-input>
                        <label >DoB</label>
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
            <base-button class="btn btn-warning btn-simple" @click="modals.CreateTransactionModal = true">
                Create new transaction
            </base-button>
            <el-table :data="pagedTableData">
                <el-table-column
                    min-width="200"
                    sortable
                    label="ID"
                    property="id"
                ></el-table-column>
                <el-table-column
                    min-width="200"
                    sortable
                    label="Transaction"
                    property="transaction"
                ></el-table-column>
                <el-table-column
                    min-width="150"
                    sortable
                    label="Recipt"
                    v-slot="scope"
                >
                    <label class="btn-link btn-info btn-sm" @click="showImage(scope)">{{reciptFormat(scope)}}</label>
                </el-table-column>
                <!-- <el-table-column
                    min-width="150"
                    sortable
                    label="Description"
                    property="description"
                ></el-table-column> -->
                <el-table-column
                    min-width="75"
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
                    min-width="100"
                    sortable
                    label="Action"
                    v-slot="scope"
                >
                <base-button style="margin-right:10px" @click="Edit(scope)" class="btn edit btn-link btn-icon btn-fab btn-warning btn-sm">
                    <i class="tim-icons icon-pencil"></i>
                </base-button>
                <base-button  @click="Delete(scope)" class="btn remove btn-link btn-icon btn-fab btn-danger btn-sm" >
                    <i class="tim-icons icon-trash-simple"></i>
                </base-button>
                </el-table-column>
            </el-table>
            <!-- <card-footer> -->
                <el-pagination layout="prev, pager, next" :total="this.tableData.length" @current-change="setPage">
                </el-pagination>
            <!-- </card-footer> -->
        </card>
    </div>    
</template>

<script>
import { Table, TableColumn,Pagination } from 'element-ui';
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
        [TableColumn.name]: TableColumn,
        [Pagination.name]:Pagination
    },
    data(){
        return{
            page: 1,
            pageSize: 10,
            imagedata:{
                name:null,
                extension:null,
                description:null
            },
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
                UpdateTransaction:false,
                picture:false
            },
            tableData: [],
        }
    },
    computed:{
        pagedTableData() {
            return this.tableData.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
        }
    },
    methods:{
        setPage (val) {
            this.page = val
        },
        showImage(scope){
            try {
                this.path = scope.row.recipt
                this.modals.picture = true;
                let img = new Image();
                img.src = this.path
                let format = String(scope.row.recipt).split("\\");
                let name = format[format.length-1]
                let extension = String(name).split(".");

                this.imagedata.extension = extension[extension.length-1]
                this.imagedata.name = name
                this.imagedata.description = String(scope.row.description)

                this.$refs.imageshow.src = require("@/assets/asset/"+name); 
            } catch (error) {
                this.$refs.imageshow.src = require("@/assets/notfound.jpg"); 
                this.$notify({
                    type: 'error',
                    title: 'Error occured!',
                    text: error
                })
            }
        },
        reciptFormat(scope){
            let format = String(scope.row.recipt).split("\\");
            return format[format.length-1];
        },
        async upload(event){
            this.$axios.setHeader("refresh_token",this.$cookies.get("refresh_token"))
            this.$axios.setHeader("user_id",this.$cookies.get("id"))
            let img = event[0]
            this.transaction.recipt = img.name
            if (Math.floor(img.size/1000000)<=25){
                let fd= new FormData()
                fd.append('image', img)
                await this.$axios.$post('/api/v1/manager/upload', fd).then((res)=>{
                    if(res.data){
                        this.transaction.recipt = res.data
                        this.$notify({
                            type: 'success',
                            title: 'Success upload!',
                            text: 'Image successfully uploaded!'
                        })
                    }else{
                        this.$notify({
                            type: 'error',
                            title: 'Failed to upload!',
                            text: res.message,
                            // data: {res:res}
                        })
                    }
                }).catch((err)=>{
                    if(!err.status){
                        this.$notify({
                            type: 'error',
                            title: 'Something unexpected has happend!',
                            text: err,
                        })
                    }
                })
            }else{
                this.$notify({
                    type: 'error',
                    title: 'Failed to upload!',
                    text: 'The specified ile is too large, the specified file size must be less than 2.5 Mb!'
                })
            }
        },
        async upload2(event){
            this.$axios.setHeader("refresh_token",this.$cookies.get("refresh_token"))
            this.$axios.setHeader("user_id",this.$cookies.get("id"))
            let img = event[0]
            this.transaction2.recipt = img.name
            if (Math.floor(img.size/1000000)<=25){
                let fd= new FormData()
                fd.append('image', img)
                await this.$axios.$post('/api/v1/manager/upload', fd).then((res)=>{
                    if(res.data){
                        this.transaction2.recipt = res.data
                        this.$notify({
                            type: 'success',
                            title: 'Success upload!',
                            text: 'Image successfully uploaded!'
                        })
                    }else{
                        this.$notify({
                            type: 'error',
                            title: 'Failed to upload!',
                            text: res.message,
                            // data: {res:res}
                        })
                    }
                }).catch((err)=>{
                    if(!err.status){
                        this.$notify({
                            type: 'error',
                            title: 'Something unexpected has happend!',
                            text: err,
                        })
                    }
                })
            }else{
                this.$notify({
                    type: 'error',
                    title: 'Failed to upload!',
                    text: 'The specified ile is too large, the specified file size must be less than 2.5 Mb!'
                })
            }
        },
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
            if(this.transaction2.userid||this.transaction2.transaction||this.transaction2.amount||this.transaction2.recipt||this.transaction2.description||this.transaction2.types||this.transaction2.time){
                this.$axios.setHeader("refresh_token",this.$cookies.get("refresh_token"))
                this.$axios.setHeader("user_id",this.$cookies.get("id"))
                this.transaction.userid=this.$cookies.get("id")
                await this.$axios.$put("/api/v1/manager/update",this.transaction2).then((res)=>{
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
<style>
.customselect.decorated{
    color: black;
}
</style>