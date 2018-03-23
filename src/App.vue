<template>
  <div>

    <header>
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <p class="main-logo pull-left">
              <a href="https://hk01.com/" v-on:click="click_link('logo')">
                <img class="logo-hk01news" src="assets/img/hk01news-logo.png" alt="01新聞">
              </a>
            </p>
            <h2 class="text-center">急症室輪候時間一覽</h2>
          </div>
        </div>
      </div>
    </header>

    <div class="main">
      <div class="container-fluid">
        <div class="row">
          <div class="map_cont text-center">

            <div class="map_base">
              <img src="assets/img/map_er.png">
              <p class="remark"><span class="star">*</span> 急症室服務時間為上午8時至晚上8時</p>
            </div>

            <div class="map_time">
              <div class="mtlbl tp_nethersole" v-bind:class="colorScale(tp_nethersole)"><span class="time" title="雅麗氏何妙齡那打素醫院"><span class="access">雅麗氏何妙齡那打素醫院</span> {{ tp_nethersole }}</span></div>
              <div class="mtlbl caritas" v-bind:class="colorScale(caritas)"><span class="time" title="明愛醫院"><span class="access">明愛醫院</span> {{ caritas }}</span></div>
              <div class="mtlbl kwong_wah" v-bind:class="colorScale(kwong_wah)"><span class="time" title="廣華醫院"><span class="access">廣華醫院</span> {{ kwong_wah }}</span></div>
              <div class="mtlbl north_district" v-bind:class="colorScale(north_district)"><span class="time" title="北區醫院"><span class="access">北區醫院</span> {{ north_district }}</span></div>
              <div class="mtlbl north_lantau" v-bind:class="colorScale(north_lantau)"><span class="time" title="北大嶼山醫院"><span class="access">北大嶼山醫院</span> {{ north_lantau }}</span></div>
              <div class="mtlbl princess_margaret" v-bind:class="colorScale(princess_margaret)"><span class="time" title="瑪嘉烈醫院"><span class="access">瑪嘉烈醫院</span> {{ princess_margaret }}</span></div>
              <div class="mtlbl pok_oi" v-bind:class="colorScale(pok_oi)"><span class="time" title="博愛醫院"><span class="access">博愛醫院</span> {{ pok_oi }}</span></div>
              <div class="mtlbl prince_wales" v-bind:class="colorScale(prince_wales)"><span class="time" title="威爾斯親王醫院"><span class="access">威爾斯親王醫院</span> {{ prince_wales }}</span></div>
              <div class="mtlbl eastern" v-bind:class="colorScale(eastern)"><span class="time" title="東區尤德夫人那打素醫院"><span class="access">東區尤德夫人那打素醫院</span> {{ eastern }}</span></div>
              <div class="mtlbl queen_elizabeth" v-bind:class="colorScale(queen_elizabeth)"><span class="time" title="伊利沙伯醫院"><span class="access">伊利沙伯醫院</span> {{ queen_elizabeth }}</span></div>
              <div class="mtlbl queen_mary" v-bind:class="colorScale(queen_mary)"><span class="time" title="瑪麗醫院"><span class="access">瑪麗醫院</span> {{ queen_mary }}</span></div>
              <div class="mtlbl ruttonjee" v-bind:class="colorScale(ruttonjee)"><span class="time" title="律敦治醫院"><span class="access">律敦治醫院</span> {{ ruttonjee }}</span></div>
              <div class="mtlbl cheung_chau" v-bind:class="colorScale(cheung_chau)"><span class="time" title="長洲醫院"><span class="access">長洲醫院</span> {{ cheung_chau }}</span></div>
              <div class="mtlbl tko" v-bind:class="colorScale(tko)"><span class="time" title="將軍澳醫院"><span class="access">將軍澳醫院</span> {{ tko }}</span></div>
              <div class="mtlbl tuen_mun" v-bind:class="colorScale(tuen_mun)"><span class="time" title="屯門醫院"><span class="access">屯門醫院</span> {{ tuen_mun }}</span></div>
              <div class="mtlbl tsw" v-bind:class="colorScale(tsw)"><span class="time" title="天水圍醫院"><span class="access">天水圍醫院</span> {{ tsw }}</span></div>
              <div class="mtlbl united_christian" v-bind:class="colorScale(united_christian)"><span class="time" title="基督教聯合醫院"><span class="access">基督教聯合醫院</span> {{ united_christian }}</span></div>
              <div class="mtlbl yan_chai" v-bind:class="colorScale(yan_chai)"><span class="time" title="仁濟醫院"><span class="access">仁濟醫院</span> {{ yan_chai }}</span></div>
            </div>

          </div>
        </div>
      </div>
    </div>


    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-12 text-center">
            <p class="last_update">最後更新：{{ update_time }}</p>
            <p>資料來源：醫院管理局</p>
            <p>最長等候時間顯示上限為8小時。以上數據是統計過去數小時其他病人的最長等候時間，只供參考，並非現時預計等候時間。</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
require('../assets/sass/style.scss')
// const _ = require('lodash/core')

window.G = {}
var code_map = {
  'NT-01': 'tp_nethersole',
  'KLN-01': 'caritas',
  'KLN-02': 'kwong_wah',
  'NT-02': 'north_district',
  'NT-03': 'north_lantau',
  'NT-06': 'princess_margaret',
  'NT-04': 'pok_oi',
  'NT-05': 'prince_wales',
  'HK-01': 'eastern',
  'KLN-03': 'queen_elizabeth',
  'HK-02': 'queen_mary',
  'HK-03': 'ruttonjee',
  'NT-07': 'cheung_chau',
  'NT-09': 'tko',
  'NT-10': 'tuen_mun',
  'NT-08': 'tsw',
  'KLN-04': 'united_christian',
  'NT-11': 'yan_chai'
}

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      update_time: '',
      hr: "小時",

      tp_nethersole: '',
      caritas: '',
      kwong_wah: '',
      north_district: '',
      north_lantau: '',
      princess_margaret: '',
      pok_oi: '',
      prince_wales: '',
      eastern: '',
      queen_elizabeth: '',
      queen_mary: '',
      ruttonjee: '',
      cheung_chau: '',
      tko: '',
      tuen_mun: '',
      tsw: '',
      united_christian: '',
      yan_chai: ''
    }
  },
  computed: {

  },
  methods: {
    randomToken () {
      return (new Date()).getTime()
    },
    colorScale(value) {
      var vm = this
      var colorS = ["low", "medium", "high", "severe", "nodata"]
      var color = "X"
      var val = parseInt(value.replace(vm.hr, "").replace(/[\<\>\~\s]/, "").trim(), 10)
      if (-1 !== value.indexOf('<')) {
        color = colorS[0]
      } else {
        switch (val) {
          case 1:
          case 2:
            color = colorS[0]
            break
          case 3:
          case 4:
          case 5:
            color = colorS[1]
            break
          case 6:
          case 7:
          case 8:
            color = colorS[2]
            break
          default:
            color = colorS[3]
            break
        }
      }
      return color
    },
    fetch_data () {
      var vm = this
      axios.get('https://cartastrophic.hk01.com/u.php?url=http://www.ha.org.hk/aedwt/data/aedWtData.json' + '?' + this.randomToken())
      .then(function (response) {
        var data = response.data;
        if (data.success === "Y") {
          vm.update_time = data.result.timeB5;
          vm.update_data(data.result.hospData)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    update_data (data) {
      var vm = this
      var i = 0;
      for (i = 0; i < data.length; i++) {
        vm[code_map[data[i]['seq']]] = data[i]['topWait'] + (('N/A' == data[i]['topWait']) ? '' : vm.hr)
      }
    },
    click_link (value) {
      this.$ga.event('click', 'button', value, 1);
    }
  },
  created: function () {
    window.G.vm = this
    window.G.vm.fetch_data()

    setInterval(function () {
      window.G.vm.fetch_data()
    }, 1000 * 60 * 5)
  }
}
</script>

<style>

</style>
