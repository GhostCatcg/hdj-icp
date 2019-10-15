<template>
    <header>
        <ul>
            <li class="logo"><router-link :to="{name:'index'}">
                    <!-- <img src="@/assets/img/beianico.png" alt=""> -->
                    <span>豆印有限公司</span>
                </router-link></li>
            <li><router-link :to="{name:'homeLink'}">首页</router-link></li>
            <li><router-link :to="{name:'listLink'}">榜单</router-link></li>
            <li class="download"><a v-on:click="showD=!showD" href="javascript:;">下载客户端</a></li>
            <li><router-link :to="{name:'vipLink'}">VIP</router-link></li>
            <li><router-link :to="{name:'companyLink'}">公司介绍</router-link></li>
            <li class="more">
                <a href="javascript:;">更多<span> ﹀</span></a>
                <div class="morebox">
                    <!-- <router-link class="mv" :to="{name:'mvLink'}">MV</router-link> -->
                    <router-link class="singer" :to="{name:'singerLink'}">歌手</router-link>
                    <!-- <router-link class="song" :to="{name:'songlistLink'}">歌单</router-link> -->
                </div>
            </li>
            <li class="se">
                <input class="search" type="text" placeholder="找到你喜欢">
                <span class="icon-search">
                    <!-- <img src="@/assets/img/search.png" alt=""> -->
                </span>
            </li>
            <li class="user">
                <a v-on:click="showR=!showR" class="register">登陆</a>
                <span>|</span>
                <router-link :to="{name:'loginLink'}">注册</router-link>
                <router-link :to="{name:'loginLink'}" class="login">
                    <!-- <img src="@/assets/img/header.png" alt=""> -->
                </router-link>
            </li>
        </ul>

        <!-- <app-down v-bind:show = "showD" v-if="showD" v-on:success="success"></app-down>
        <app-register v-bind:show="showR" v-if="showR" v-on:re="re"></app-register> -->

    </header>
</template>


<script>


export default {
    
    methods:{
    success(res){
        this.showD=res
    },
    re(res){
        this.showR=res
        console.log(res)
    }
    },
    components:{
    },
    data(){
        return{
            showD:false,
            dialogCreate:'false',
            showR:false

        }
    }
}
</script>


<style lang="stylus" scoped>
    // 新代码
    header .logo
        img 
            width 30px
        span 
            font-size 18px
            letter-spacing 2px
        a:hover{
            color #909090
        }
    .user a
        cursor pointer

    header .more    
        position relative
        &:hover .morebox  
            display block

        .morebox
            display none    
            // top 50px
            position absolute
            z-index 9999
            background-color #181818
            width 100px
            text-align center 
            padding 3px 5px

            a
                display block
    /* 头部区域 */
    a{
        text-decoration: none;
    }
    header {
        background-color: #181818;
        padding:15px 0;
    }
    header ul{
        display: flex;
        font-size: 2rem;
        justify-content: center;
        margin-bottom: 0;
        font-weight: 500;
    }
    header ul li{
        margin:0 30px;
    }
    header ul li a{
        height: 100%;
        color:#909090;
        line-height: 38px;
    }
    header ul .user img{
        width: 100%;
        vertical-align: middle;
    }
    header ul li.fontcolor a{
        color:#7605C7;
    }
    header ul li a:hover{
        color:#7605C7;
    }

    header ul li .more span{
        vertical-align: sub;
    }
    header .search{
        border-radius: 20px;
        background-color: #333;
        color:#868686;
        padding:5px 20px;
    }
    header .icon-search img{
        vertical-align: unset;
    }
    header .se{
        position: relative;
    }
    header .icon-search{
        color:#868686;
        position: absolute;
        top: 0;
        right:20px;
        font-size: 3rem;
        cursor: pointer;
    }
    header .login{
        width: 40px;
        display: inline-block;
    }



</style>