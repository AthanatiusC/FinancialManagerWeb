<template>
    <div class="row">
    <!-- Big Chart -->
    <div class="col-12">
      <card type="chart">
        <template slot="header">
          <div class="row">
            <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
              <h5 class="card-category">Total transactions made</h5>
              <h2 class="card-title">History</h2>
            </div>
            <!-- <div class="col-sm-6 d-flex d-sm-block">
              <div
                class="btn-group btn-group-toggle"
                :class="isRTL ? 'float-left' : 'float-right'"
                data-toggle="buttons"
              >
                <label
                  v-for="(option, index) in bigLineChartCategories"
                  :key="option.name"
                  class="btn btn-sm btn-primary btn-simple"
                  :class="{ active: bigLineChart.activeIndex === index }"
                  :id="index"
                >
                  <input
                    type="radio"
                    @click="initBigChart(index)"
                    name="options"
                    autocomplete="off"
                    :checked="bigLineChart.activeIndex === index"
                  />
                  <span class="d-none d-sm-block">{{ option.name }}</span>
                  <span class="d-block d-sm-none">
                    <i :class="option.icon"></i>
                  </span>
                </label>
              </div>
            </div> -->
          </div>
        </template>
        <div class="chart-area">
          <line-chart
            style="height: 100%"
            ref="bigChart"
            :chart-data="bigLineChart.chartData"
            :gradient-colors="bigLineChart.gradientColors"
            :gradient-stops="bigLineChart.gradientStops"
            :extra-options="bigLineChart.extraOptions"
          >
          </line-chart>
        </div>
      </card>
    </div>
    <div class="col-4">
      <card class="text-center">
        <h4 class="card-title">Total Life spending:</h4>
        <h2 class="card-title">{{TotalSpending}}</h2>
      </card>
    </div>
    <div class="col-4">
      <card class="text-center">
        <h4 class="card-title">This Month spending:</h4>
        <h2 class="card-title">{{TotalMonthSpending}}</h2>
      </card>
    </div>
    <div class="col-4">
      <card class="text-center">
        <h4 class="card-title">Today's spending:</h4>
        <h2 class="card-title">{{TodaySpending}}</h2>
      </card>
    </div>

    
    <!-- <div class="col-lg-5">
      <card type="tasks" :header-classes="{ 'text-right': isRTL }">
        <template slot="header" class="d-inline">
          <h6 class="title d-inline">Tasks (5)</h6>
          <p class="card-category d-inline">Today</p>

          <base-dropdown
            menu-on-right=""
            tag="div"
            title-classes="btn btn-link btn-icon"
            class="float-right"
          >
            <i slot="title" class="tim-icons icon-settings-gear-63"></i>
            <a class="dropdown-item" href="#pablo"> Action </a>
            <a class="dropdown-item" href="#pablo"> Another action </a>
            <a class="dropdown-item" href="#pablo"> Something else </a>
          </base-dropdown>
        </template>
        <div class="table-full-width table-responsive">
          <task-list></task-list>
        </div>
      </card>
    </div> -->
    <div class="col-12">
      <card card-body-classes="table-full-width">
        <h4 slot="header" class="card-title">Transaction Table</h4>
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
        </el-table>
      </card>
    </div>
  </div>
</template>


<script>
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import * as chartConfigs from '@/components/Charts/config';
import TaskList from '@/components/Dashboard/TaskList';
import config from '@/config';
import { Table, TableColumn } from 'element-ui';
import moment from 'moment'
import axios from '@/node_modules/axios/index'

let bigChartData = [[0,0,0,0,0,0,0,0,0,0,0,0]]
let bigChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
let bigChartDatasetOptions = {
  fill: true,
  borderColor: config.colors.primary,
  borderWidth: 2,
  borderDash: [],
  borderDashOffset: 0.0,
  pointBackgroundColor: config.colors.primary,
  pointBorderColor: 'rgba(255,255,255,0)',
  pointHoverBackgroundColor: config.colors.primary,
  pointBorderWidth: 20,
  pointHoverRadius: 4,
  pointHoverBorderWidth: 15,
  pointRadius: 4,
}

export default {
  name: 'dashboard',
  middleware:'authentication',
  components: {
    LineChart,
    BarChart,
    TaskList,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  async fetch(){
      this.$axios.setHeader("refresh_token",this.$cookies.get("refresh_token"))
      this.$axios.setHeader("user_id",this.$cookies.get("id"))
      await this.$axios.$get(`/api/v1/manager/history/${this.$cookies.get("id")}`).then((data)=>{
          this.tableData = data.data
      })
  },
  data () {
    return {
      transactions:null,
      tableData: [],
    };
  },
  computed: {
    TotalMonthSpending(){
      var groupedTransaction = {};
      this.tableData.forEach((transaction) => {
          var month = moment(transaction.time).month();
          groupedTransaction[month] = groupedTransaction[month] || [];
          groupedTransaction[month].push(transaction);
      });
      var total=0
      if(groupedTransaction[moment(moment.now()).month()]){
        groupedTransaction[moment(moment.now()).month()].forEach((transaction) => {
          total += parseInt(transaction.amount)
        });
      }
      
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total)
    },
    TotalSpending(){
      var total=0
      this.tableData.forEach((transaction) => {
        total += parseInt(transaction.amount)
      });
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total)
    },TodaySpending(){
      var groupedTransaction = {};
      this.tableData.forEach((transaction) => {
          var day = moment(transaction.time).date();
          console.log(day)
          groupedTransaction[day] = groupedTransaction[day] || [];
          groupedTransaction[day].push(transaction);
      });
      var total=0
      console.log("DATE  ="+moment(moment.now()).date())
      if(groupedTransaction[moment(moment.now()).date()]){
        groupedTransaction[moment(moment.now()).date()].forEach((transaction) => {
          total += parseInt(transaction.amount)
        });
      }
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total)
    },
    bigLineChart(){
        var groupedTransaction = {};
        this.tableData.forEach((transaction) => {
            var month = moment(transaction.time).month();
            groupedTransaction[month] = groupedTransaction[month] || [];
            groupedTransaction[month].push(transaction);
        });
        var datas = [[]];
        for (let index = 0; index < moment(moment.now()).month()+1; index++) {
          if(groupedTransaction[index]){
            datas[0].push(groupedTransaction[index].length)
          }else{
            datas[0].push(0)
          }
        }
        var data = {activeIndex: 0,
        chartData: {
          datasets: [{
            ...bigChartDatasetOptions,
            data: datas[0]
          }],
          labels: bigChartLabels
        },
        extraOptions: chartConfigs.purpleChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: []}
        return data
    },
    enableRTL () {
      return this.$route.query.enableRTL;
    },
    isRTL () {
      return this.$rtl.isRTL;
    },
    bigLineChartCategories () {
      return [{ name: 'Accounts', icon: 'tim-icons icon-single-02' }, {
        name: 'Purchases',
        icon: 'tim-icons icon-gift-2'
      }, { name: 'Sessions', icon: 'tim-icons icon-tap-02' }];
    }
  },
  methods: {
    initBigChart (index) {
      let chartData = {
        datasets: [{
          ...bigChartDatasetOptions,
          data: bigChartData[index]
        }],
        labels: bigChartLabels
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },timeFormat(row,column){
        return moment(row[column.property]).format("YYYY MMM DD")
    },toCurrencyString(row,column){
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(row[column.property])
    }
  },
  mounted () {
    this.initBigChart(0);
  }
}
</script>
