<template>
  <div class="all-wapper">
    <icpHeader />
    <div class="I1-main all-content">
      <div class="I1-mainWapper">
        <div class="I1-top">
          <div class="I1-title">招聘岗位</div>
          <div class="I1-content">
            <div class="I1-box" v-for="(item,index) in joinData" :key="index">
              <div>
                <span>职业：</span>
                <span>{{item.zy}}</span>
              </div>
              <div>
                <span>工作地：</span>
                <span>{{item.dd}}</span>
              </div>
              <div>
                <span>发布时间：</span>
                <span>{{item.time}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="I1-bottom">
          <div class="I1-title">行业资讯</div>
          <div class="I1-content">
            <a href="#" v-for="(item,index) in news" :key="index">
              <span>{{item.new}}</span>
              <span>{{item.time}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <icpFooter />
  </div>
</template>

<style lang="scss">
.all-wapper {
  height: 100%;
}
.all-content {
  min-height: calc(100% - 100px - 80px);
}
.I1-title{
    font-weight: 600;
    font-size: 18px;
}
.I1-main {
  background-color: #f7f7f7;
  padding:1px;
  .I1-mainWapper {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    padding: 80px 50px;
  }
  .I1-top {
    .I1-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .I1-box {
        width: 30%;
        margin-top: 30px;
        box-shadow: 0px 0px 15px -2px rgb(228, 228, 228);
        padding: 20px;
        background-color: #fff;
        & > div {
          margin-top: 10px;
          &:first-child {
            margin-top: 0;
          }
          span:first-child {
            width: 80px;
            text-align: right;
            display: inline-block;
          }
        }
      }
    }
  }
  .I1-bottom {
    margin-top: 80px;
    .I1-content {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      & > a {
        width: 49%;
        background-color: #fff;
        box-shadow: 0px 0px 15px -2px rgb(228, 228, 228);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin-top:20px;
      }
    }
  }
}
</style>

<script>
import icpHeader from "../../components/public/header/index";
import icpFooter from "../../components/public/footer/footer";

export default {
  data() {
    return {
      joinData: [
        {
          zy: "产品经理",
          dd: "杭州",
          time: "2019-09-17"
        },
        {
          zy: "UI设计师",
          dd: "杭州",
          time: "2019-09-17"
        },
        {
          zy: "数据工程师",
          dd: "杭州",
          time: "2019-09-17"
        },
        {
          zy: "JAVA工程师",
          dd: "杭州",
          time: "2019-09-17"
        },
        {
          zy: "IOS开发工程师",
          dd: "杭州",
          time: "2019-09-17"
        },
        {
          zy: "Android开发工程师",
          dd: "杭州",
          time: "2019-09-17"
        }
      ],
      news:[
          {
              new:"对情侣说的最甜蜜的话语",
              time:"09-26"
          },
          {
              new:"肉食系女生约了之后会发生什么呢？",
              time:"09-25"
          },
          {
              new:"对爱人说的话_表白的句子",
              time:"09-24"
          },
          {
              new:"相亲中的搞笑对话",
              time:"09-23"
          },
          {
              new:"女人让男人直冒冷汗的15句话",
              time:"09-22"
          },
          {
              new:"男和女生活中的19个差异，不得不服",
              time:"09-21"
          },
          {
              new:"对于同一件事，男女的感受差异很大",
              time:"09-20"
          },
          {
              new:"情人节已过，伤感依然无处不在",
              time:"09-19"
          },
          {
              new:"情侣日常，单身狗慎入",
              time:"09-18"
          },
          {
              new:"单身狗勿看：恋人10个温馨的体验",
              time:"09-17"
          }
      ]
    };
  },
  components: {
    icpHeader,
    icpFooter
  }
};
</script>