<template>
<HeaderPage v-if="!$route.meta.hideHeader" :isFixed="isFixed"/>
<router-view :key="$route.fullPath"></router-view> 
<FooterPage/>
</template>
<script>
import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';
import { scrollToTop, initScrollEffects } from './script.js';



export default {
  name: 'App',
  components:{
   HeaderPage,
   FooterPage,
  },
   data() {
    return {
      isFixed: false,
      isVisible: false,
      headerHeight: 0,
      destroyScroll: null
    };
  },
  methods: {
    goTop() {
      scrollToTop();
    }
  },
  mounted() {
    this.destroyScroll = initScrollEffects((data) => {
      this.isFixed = data.isFixed;
      this.isVisible = data.isVisible;
      this.headerHeight = data.height;
    });
  },
  beforeUnmount() {
    if (this.destroyScroll) this.destroyScroll();
  },
}
</script>
<style>
#app {
  margin-top: 0px; 
}
.header-two .navbar-nav .nav-link {
    color: #333 !important;
    font-weight: 700 !important;
    text-transform: uppercase;
}
.header-two .navbar-nav .nav-link:hover,
.header-two .dropdown-item:hover {
    color: #ffb600 !important;
    background: transparent !important;
}
.header-two .dropdown-menu {
    border-top: 3px solid #ffb600 !important;
    padding: 0 15px !important;
    border-radius: 0 !important;
    display: none;
}
.header-two .dropdown-item {
    border-bottom: 1px solid #eeeeee !important;
    padding: 12px 0 !important;
    font-size: 12px !important;
    text-transform: uppercase;
    font-weight: 700;
}
.header-two .dropdown-item li{
  font-family: "Montserrat", sans-serif;
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    padding: 15px 0;
    letter-spacing: 0.3px;
}
.header-two .dropdown-menu li:last-child .dropdown-item {
    border-bottom: 0 !important;
}

@media (min-width: 992px) {
    .header-two .nav-item.dropdown:hover > .dropdown-menu {
        display: block !important;
        margin-top: 0 !important;
    }
  }
    @media (min-width: 768px) {
    .header-two .nav-item.dropdown:hover > .dropdown-menu {
        display: block !important;
        margin-top: 0 !important;
    }
}
@media (min-width: 567px) {
    .header-two .nav-item.dropdown:hover > .dropdown-menu {
        display: block !important;
        margin-top: 0 !important;
    }
  }
.header{
    background: #23282d;
    z-index: 999;
}
.fixed{
  position: fixed;
  top: 30%;
}
.navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, .5);
    border-color: rgba(255, 255, 255, .1);
}
.navbar-toggler{
    margin:10px 0;
    padding: 6px;
    border-radius: 0;
    font-size: 1rem;
}
.header-two .navbar-toggler {
    float: left;
}
.navbar-toggler-icon {
    display: inline-block;
    width:2em;
    height: 2em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
}
.navbar-nav{
    padding-left: 0;
    margin-bottom: 0px;
    display: flex;
}
.navbar-nav{
    position: relative;
    flex-wrap: wrap;
    display: flex;
    padding: 1rem 1rem;
}
.navbar-nav li{
  margin-right: 2px;
}
.navbar-nav li a{
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
}
.navbar-nav li a:hover{
    color: #ffb600;
}
li.active > a {
    color: #ffb600 !important;
}
@media(max-width:1200px){
    ul.navbar-nav > li > a i {
        float: right;
     
    }
@media (min-width: 992px) {
    .nav-item.dropdown:hover .dropdown-menu {
        display: block;
        margin-top: 0;
    }
}

    .dropdown-menu {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    }
}
.dropdown-menu li a{
    text-decoration: none;
}
ul.dropdown-menu{
    text-align: left;
    background: #fff;
    z-index: 100;
    min-width: 200px;
    border-radius: 0;
    border: 0;
    border-top: 2px solid #ffb600;
    padding: 0 20px;
    margin: 0;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}
.dropdown-menu a {
    background:none;
}
.dropdown-menu li a {
    font-family: "Montserrat", sans-serif;
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    padding: 15px 0;
    letter-spacing: 0.3px;
    border-bottom: 1px solid #e5e5e5;
    color: #333333;
}
.dropdown-menu li{
 text-transform: uppercase;
}
.dropdown-menu li :hover{
  background-color: #fff;
    color: #ffb600;
}
.dropdown-submenu {
    position: relative;
}
.dropdown-submenu > .dropdown-menu {
    top: 0;
    left: 100%; 
    margin-top: -1px;
    margin-left: 0px;
}
.dropdown-submenu:hover > .dropdown-menu {
    display: block;
}

</style>