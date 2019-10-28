<template>
  <div class="all-wapper">
    <icpHeader />
    <div class="J1-main all-content">
      <!-- <div class="J1-con">
            <div class="J1-title">

            </div>
      </div>-->
      <img src="../../assets/img/job.png" alt />
      <div class="J1-con">
        <div class="J1-title">简历投递</div>
        <div class="J1-text">hr@hdouji.com</div>
      </div>
    </div>
    <icpFooter />
  </div>
</template>

<style lang="scss">
.J1-main {
    .J1-con{
        display: flex;
        margin:5rem 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
  img {
    width: 100%;
  }
  .J1-title {
    font-size: 20px;
    color: #0a0000;
    font-weight: 600;
  }
  .J1-text {
    font-size: 14px;
    color: #ff0000;
  }
}
</style>
<script>
export default {
  // data(){
  //     return {
  //         job:[
  //             {
  //               zw:"chanpin"
  //             }
  //         ]
  //     }
  // }
};
</script>
