<template>
   <!----top-info-bar-->
  <section class="top-info-bar container-fluid p-0">
    <div class="row g-0 align-items-center">
      
      <!-- Address Section -->
      <div class="col-lg-8 px-3">
        <div class="info-bar justify-content-center">
          <i class="fas fa-map-marker-alt me-2"></i>
          <span class="text-muted">9051 Constra Incorporate, USA</span>
        </div>
      </div>

      <!-- Social Icons Section -->
      <div class="col-lg-4 px-3">
      <ul class="social-icons d-flex list-unstyled m-0 gap-3 mt-2 ms-auto">
          <li><a href="https://facebook.com/themefisher" aria-label="facebook" target="_blank">
              <i class="fab fa-facebook-f"></i></a></li>
          <li><a href="https://twitter.com/themefisher" aria-label="twitter" target="_blank">
              <i class="fab fa-twitter"></i></a></li>
          <li><a href="https://instagram.com/themefisher" aria-label="instagram" target="_blank">
             <i class="fab fa-instagram"></i></a></li>
         <li><a href="https://github.com/themefisher/" aria-label="github" target="_blank">
              <i class="fab fa-github"></i></a></li>
        </ul>
      </div>

    </div>
  </section>
  
  <!-----logo--->
  <section class="logo-area p-0 mt-5 mb-5 bg-white">
    <div class="container-fluid">
      <div class="logo-area">
        <div class="row align-items-center">
          <div class="logo col-lg-3 mb-lg-0 text-center text-lg-left mb-md-5 col-md-6 col-sm-4">
            <a class="d-block" href="constra Template project.html">
             <img src="@/assets/images/logo.png" alt="constra">
            </a>
          </div>
          <!----header----->
          <div class="col-lg-9 header-right">
            <ul class="top-info-box">
              <li>
                <div class="info-box">
                  <div class="info-box-content">
                    <p class="info-box-title">Call Us</p>
                    <p class="info-box-subtitle">
                      (+9) 847-291-4353</p>
                  </div>
                </div>
              </li>

              <li>
                <div class="info-box">
                  <div class="info-box-content">
                    <p class="info-box-title">Email Us</p>
                    <p class="info-box-subtitle">
                      office@Constra.com</p>
                  </div>
                </div>
              </li>

              <li>
                <div class="info-box">
                  <div class="info-box-content">
                    <p class="info-box-title">Global Certificate</p>
                    <p class="info-box-subtitle">
                      ISO 9001:2017</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="header-quote ms-auto">
                   <router-link to="/contact" id="btn-quotes" class="btn btn-md border bg-text-white">Get A Quote </router-link>
                </div>
              </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-----navigation-bar-->
 <section class="header p-0" id="header" :class="{'fixed-top': isFixed }">
  <div class="site-navigation p-0">
    <div class="container">
      <div class="row d-flex">
        <div class="col-lg-12">
          <div class="nav navbar navbar-expand-lg navbar-light p-0">
          <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar"
    aria-controls="mynavbar" aria-expanded="false" aria-label="Toggle navigation"><span class="hamburger-lines">
        <span></span>
        <span></span>
        <span></span></span></button>

            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="nav navbar-nav"> 
                <!-- HOME -->
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link toggle" data-bs-toggle="dropdown">HOME <i class="fa fa-angle-down"></i></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/" class="dropdown-item" data-bs-dismiss="dropdown">Home One</router-link></li>
                    <li><router-link to="/home-two" class="dropdown-item" data-bs-dismiss="dropdown">Home Two</router-link></li>
                  </ul>
                </li>

                <!-- COMPANY -->
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link toggle" data-bs-toggle="dropdown">Company <i class="fa fa-angle-down"></i></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/about" class="dropdown-item" data-bs-dismiss="dropdown">About Us</router-link></li>
                    <li><router-link to="/people" class="dropdown-item" data-bs-dismiss="dropdown">Our People</router-link></li>
                    <li><router-link to="/testimonials" class="dropdown-item" data-bs-dismiss="dropdown">Testimonials</router-link></li>
                    <li><router-link to="/faq" class="dropdown-item" data-bs-dismiss="dropdown">FAQ</router-link></li>
                    <li><router-link to="/pricing" class="dropdown-item" data-bs-dismiss="dropdown">Pricing</router-link></li>
                  </ul>
                </li>

                <!-- PROJECTS -->
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link toggle" data-bs-toggle="dropdown">Projects<i class="fa fa-angle-down"></i></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/projects" class="dropdown-item" data-bs-dismiss="dropdown">project all</router-link></li>
                    <li><router-link to="/project-single" class="dropdown-item" data-bs-dismiss="dropdown">project single</router-link></li>
                  </ul>
                </li>

                <!-- SERVICES -->
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link toggle" data-bs-toggle="dropdown">Services<i class="fa fa-angle-down"></i></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/services" class="dropdown-item" data-bs-dismiss="dropdown">service all</router-link></li>
                    <li><router-link to="/service-single" class="dropdown-item" data-bs-dismiss="dropdown">service single</router-link></li>
                  </ul>
                </li>

                <!-- FEATURES -->
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link toggle" data-bs-toggle="dropdown">FEATURES<i class="fa fa-angle-down"></i></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/typography" class="dropdown-item" data-bs-dismiss="dropdown">typography</router-link></li>
                    <li><router-link to="/404" class="dropdown-item" data-bs-dismiss="dropdown">404</router-link></li>
                    <li class="nav-item dropdown dropdown-submenu">
                      <a href="#" class="nav-link toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                        parent menu <i class="fa fa-angle-right"></i></a>
                      <ul class="dropdown-menu">
                        <li><a href="#" class="dropdown-item">CHILD MENU 1</a></li>
                        <li><a href="#" class="dropdown-item">CHILD MENU 2</a></li>
                        <li><a href="#" class="dropdown-item">CHILD MENU 3</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                 <!-----------news---------->
      <li class="nav-item dropdown">
  <a href="#" class="nav-link toggle" 
     role="button" data-bs-toggle="dropdown" aria-expanded="false">News <i class="fa fa-angle-down"></i></a>

     <ul class="dropdown-menu">
    <li>
      <router-link to="/news-left-sidebar" class="dropdown-item">
        News-Left-Sidebar
      </router-link>
    </li>
    <li>
      <router-link to="/news-right-sidebar" class="dropdown-item">
        News-Right-Sidebar
      </router-link>
    </li>
    <li>
      <router-link to="/news-single" class="dropdown-item">
        News-Single
      </router-link>
    </li>
  </ul>
</li>
 <!-----------contact---------->
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link">contact</router-link>
                </li>
              </ul> 

              <!-- SEARCH BOX -->
              <div class="search-area ms-auto">
                <input type="checkbox" id="searchToggle" hidden>
                <label for="searchToggle" class="search-icon-toggle">
                  <span class="closeBtn">&times;</span>
                  <i class="fas fa-search search-icon"></i>
                </label>
                <div class="search-box">
                  <input type="text" placeholder="Type what you want and enter">
                </div>
              </div>

            </div> 
          </div>
        </div> 
      </div>
    </div> 
  </div> 
</section>
</template>

<script>

export default {
  name: 'HeaderPage',
    data() {
    return {
      isFixed: false 
    };
  },
  
  mounted() {
    window.addEventListener('scroll', () => {
      this.isFixed = window.scrollY > 180;
    });
  }
}

</script>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const dropdowns = document.querySelectorAll('.nav-item.dropdown');
  
  dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');
    const toggle = dropdown.querySelector('.toggle');

    if (menu && toggle) {
      dropdown.addEventListener('mouseenter', () => {
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
      });

      dropdown.addEventListener('mouseleave', () => {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
</script>
<style scoped>
/*-------------top-bar--------------------*/
.top-info-bar {
  width: 100%;
}

.top-info-bar .info-bar {
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Social Icons */
.top-info-bar .social-icons {
  display: flex;
  align-items: center;
  justify-content: flex-center;
  gap: 18px !important;
  margin: 0 !important;
  padding: 0;
  list-style: none;
}

.top-info-bar .social-icons li {
  margin: 0;
  padding: 0;
}

.top-info-bar .social-icons li i {
  color: #000;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;
}

.top-info-bar .social-icons li i:hover {
 color: #ffb600;
}


/* Tablet + Mobile */
@media (max-width: 991px) {

  .top-info-bar .info-bar {
    justify-content: center;
  }

  .top-info-bar .social-icons {
    justify-content: center;
    margin: 0 !important;
    padding: 8px 0;
  }
}

/* Small Mobile */
@media (max-width: 576px) {

  .top-info-bar .info-bar {
    font-size: 13px;
  }

  .top-info-bar .social-icons {
    gap: 15px !important;
  }

  .top-info-bar .social-icons li a {
    font-size: 14px;
  }
}
/*-------------navbar--------------------*/
.header{
    background: #23282d;
    z-index: 999;
}
.fixed{
  position: fixed;
  top: 30%;
}
/*---------toggle-button----------*/
.custom-toggler {
    width: 45px;
    height: 40px;

    padding: 8px;

    background-color: transparent !important;

    border: 1px solid rgba(255, 255, 255, 0.5) !important;

    border-radius: 3px;

    box-shadow: none !important;

    display: flex;
    align-items: center;
    justify-content: center;

    float: left;
}


/* 3 hamburger lines */

.hamburger-lines {
    width: 25px;
    height: 20px;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    align-items: center;
}


.hamburger-lines span {
    display: block;

    width: 25px;
    height: 2px;

    background-color: #fff;

    border-radius: 2px;
}


/* Hover */

.custom-toggler:hover {
    background-color: transparent !important;

    border-color: #fff !important;
}


/* Click / Focus */

.custom-toggler:focus {
    background-color: transparent !important;

    box-shadow: none !important;

    outline: none;
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
        padding: 6px 10px;
     
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
.search-area {
    position: relative;
    display: inline-block
}
.search-box{
  background-color: #303030;
  position: absolute;
  top: 35px;
    right: 15px;
    z-index: 10;
    padding: 10px;
    width: 300px;
    transition: .3s;
    display: none;
}
.closeBtn {
    display: none;
    cursor: pointer;
    font-size: 40px; 
    line-height: 1;
    color:#333333;
    padding: 5px;
}
.search-icon {
    cursor: pointer;
}
input{
  width: 280px;
  padding: 8px;
}
input#searchToggle:checked ~ .search-icon-toggle .search-icon {
    display: none; 
}

input#searchToggle:checked ~ .search-icon-toggle .closeBtn {
    display: block; 
}

.search-box {
    display: none;
}

input#searchToggle:checked ~ .search-box {
    display: block; 
}

#searchToggle:checked ~ .search-box{
    display: block;
}
.closeBtn {
    font-size: 25px;
    cursor: pointer;
}
input {
  background: #212121;
  border: none;
}
.search-icon{
    cursor: pointer;
}
.fas.fa-search {
        color:#999;
        font-size: 24px;
        margin-left: 10px;
    }
    @media (max-width: 991.98px) {
   
    .navbar-collapse .navbar-nav {
        text-align: left;
        align-items: flex-start;
        padding-right: 15px;
    }

    .dropdown-menu {
        text-align: right;
        border-top: none;
        border-right: 2px solid #ffb600;
    }
    .navbar-nav li {
        width: 100%; 
        margin-right: 0;
    }
}
@media (min-width: 768px) {
.search-icon{
   text-align: left;
        align-items: flex-start;
        padding-left: 20px;
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
}
@import "@/assets/css/style.css";
</style>
