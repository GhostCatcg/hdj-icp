<template>
  <div>
    <icpHeader />
    <div class="I1-main">
        <div class="I1-top">
            <div class="I1-title">
                招聘岗位
            </div>
            <div class="I1-content">
                <div class="I1-box">
                    <div>
                        <span>职业：</span>
                        <span>产品经理</span>
                    </div>
                    <div>
                        <span>工作地：</span>
                        <span>杭州</span>
                    </div>
                    <div>
                        <span>发布时间：</span>
                        <span>2019/09/17</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <icpFooter />
  </div>
</template>



<script>
import icpHeader from "../../components/public/header/index";
import icpFooter from "../../components/public/footer/footer";

export default {
  components: {
    icpHeader,
    icpFooter
  }
};
</script>