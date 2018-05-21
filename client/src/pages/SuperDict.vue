<template>
  <div>

    <div class="logo">
      <div class="name">SUPER DICTIONARY</div>
      <div class="img logo_rotate">
        <img src="img/logo.png" alt="">
      </div>
    </div>
    <div class="noExtension hide" id="noExtension">
      NOTE: Please install <a target="_blank" href="https://github.com/ChengOrangeJu/WebExtensionWallet">WebExtensionWallet</a>  to use SUPER DICTIONARY
    </div>
    <div class="search">
      <input id="search_value" type="text">
      <button @click="onSubmit">submit</button>
    </div>
    <div class="search">

      <button @click="onSearch">search</button>
    </div>

    <div class="result_success hide">
      <div id=search_banner></div>
      <p id=search_result> wait for content </p>
      <div class="author">
        <i><p> Author:</p> <p id=search_result_author> dasdajkajksdhjasdkjahdkjad</p></i>
      </div>
    </div>

    <div class="result_faile hide">
      Failed to find related information. Do you want to <button id="add">add</button> infromation for "<i id="result_faile_add">asd</i>"?
    </div>

    <div class="add_banner hide">
      <input type="text" id="add_value" placeholder="input contents for your keyword">
      <button @click="onSubmit">submit</button>
    </div>

  </div>
</template>
<script>

import NebPay from 'nebpay.js'
import nebulas from 'nebulas'

export default {
  components: {
//    StatsCard,
//    ChartCard
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      dappAddress: 'n1exFH19cJbzVDhTnb2DaoRKztZFJn4efvV'
    }
  },
  methods: {
    onSearch() {
      console.log('search');
      var Account = nebulas.Account;
      var neb = new nebulas.Neb();
      neb.setRequest(new nebulas.HttpRequest("https://testnet.nebulas.io"));
      var from = Account.NewAccount().getAddressString();

      var value = "0";
      var nonce = "0"
      var gas_price = "1000000"
      var gas_limit = "2000000"
      var callFunction = "get";
      var callArgs = "[\"" + 'abc'+ "\"]"; //in the form of ["args"]
      var contract = {
        "function": callFunction,
        "args": callArgs
      }

      neb.api.call(from,this.dappAddress,value,nonce,gas_price,gas_limit,contract).then(function (resp) {
//        this.cbSearch(resp)
        console.log("response of search: " + JSON.stringify(resp))
      }).catch(function (err) {
        //cbSearch(err)
        console.log("error:" + err.message)
      })

    },
    onSubmit() {
      console.log('submit');
      var nebPay = new NebPay();

      var to = this.dappAddress;
      var value = "0";
      var callFunction = "save"
      var callArgs = ["abc","def"]
//      var callArgs = "[\"" + $("#search_value").val() + "\",\"" + $("#add_value").val() + "\"]"
      var serialNumber = nebPay.call(to, value, callFunction, callArgs, {    //使用nebpay的call接口去调用合约,
        listener: this.cbPush        //设置listener, 处理交易返回信息
      });

      console.log('serialnum', serialNumber);
    },
    cbPush(resp) {
      console.log("response of push: " + JSON.stringify(resp))
    },
    cbSearch(resp) {
      console.log("response of search: " + JSON.stringify(resp))
    }


  }
};
</script>
<style>
  /*.logo {*/
    /*width: 60%;*/
    /*height: 500px;*/
    /*margin: auto;*/
  /*}*/

  /*.name {*/
    /*text-align: center;*/
    /*font-size: 66px;*/
    /*text-shadow: 3px 5px grey, 1px 1px #333;*/
  /*}*/

  /*.img {*/
    /*width: 48%;*/
    /*height: 53%;*/
    /*margin: auto;*/
    /*margin-top: 38px;*/
  /*}*/

  /*.img img {*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/

  /*.search {*/
    /*width: 80%;*/
    /*height: 100px;*/
    /*margin: auto;*/
  /*}*/

  /*.noExtension {*/
    /*width: 60%;*/
    /*height: 100px;*/
    /*margin: auto;*/
    /*font-size: 23px;*/
  /*}*/

  /*#search_value {*/
    /*width: 80%;*/
    /*height: 50px;*/
    /*box-shadow: 3px 5px grey, 1px 1px #333;*/
  /*}*/

  /*.search button {*/
    /*width: 18%;*/
    /*height: 50px;*/
    /*margin-left: 6px;*/
    /*box-shadow: 3px 5px grey, 1px 1px #333;*/
  /*}*/

  /*@keyframes rotate {*/
    /*0% { transform:rotateY(0deg);}*/
    /*25% { transform:rotateY(180deg);}*/
    /*50% { transform:rotateY(0deg);}*/
    /*75% { transform:rotateY(180deg);}*/
    /*100% { transform:rotateY(0deg);}*/
  /*}*/

  /*.logo_rotate {*/
    /*!**/
    /*animation: rotate 10s infinite;*/
    /*animation-fill-mode: forwards;*/
    /*animation-timing-function: linear;*/
        /**!*/
    /*!*  当动画结束时，让<div>元素保留上一个关键帧的样式值 *!*/
  /*}*/

  /*.result_success {*/
    /*width: 60%;*/
    /*margin: auto;*/
    /*font-size: 22px*/
  /*}*/

  /*.result_faile{*/
    /*width: 60%;*/
    /*margin: auto;*/
    /*font-size: 22px*/
  /*}*/

  /*.add_banner{*/
    /*width: 80%;*/
    /*margin: auto;*/
  /*}*/

  /*.add_banner input{*/
    /*width: 80%;*/
    /*height: 50px;*/
    /*box-shadow: 3px 5px grey, 1px 1px #333;*/
  /*}*/

  /*.add_banner button{*/
    /*width: 18%;*/
    /*height: 50px;*/
    /*margin-left: 6px;*/
    /*box-shadow: 3px 5px grey, 1px 1px #333;*/
  /*}*/

  /*#search_banner{*/
    /*font-size: 50px;*/
    /*border-bottom: 1px solid black;*/
  /*}*/



  .hide{
    display: none;
  }

  /*.contenner{*/
    /*background: url("img/bg.jpg");*/
    /*height: 1500px;*/
  /*}*/

  .author{
    text-align: right;
  }
  .author p{
    display: inline-block;
    font-size: 18px;
  }
</style>
