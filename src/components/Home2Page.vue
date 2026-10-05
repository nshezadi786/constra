<template>
 <div class="body-inner">
  <router-view/>
    <!----top-info-bar-->
    <section class="top-info-bar container-fluid p-0">
    <div class="row g-0 align-items-center">
      
      <!--Address Section -->
      <div class="col-lg-8 px-3">
        <div class="info-bar justify-content-center">
          <i class="fas fa-map-marker-alt me-2"></i>
          <span class="text-muted">9051 Constra Incorporate, USA</span>
        </div>
      </div> 

      <!-- Social Icons Section -->
      <div class="col-lg-4 px-3">
        <ul class="social-icons d-flex list-unstyled m-0 gap-3 mt-2 ms-auto">
                <li><a href="https://facebook.com/themefisher"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/themefisher"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://instagram.com/themefisher"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://github.com/themefisher/"><i class="fab fa-github"></i></a></li>
        </ul>
      </div>

    </div>
  </section>

    <!-----navigation-bar-->
   <section class="header-two p-0" id="header" :class="{'fixed-top': isFixed }">
<nav class="navbar navbar-expand-lg bg-light navbar-dark p-0">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/home-two">
            <img src="@/assets/images/logo.png" alt="constra" style="width:auto; height: 35px;" class="img-fluid">
          </router-link>
          <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
    aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation"><span class="hamburger-lines">
        <span></span>
        <span></span>
        <span></span></span></button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav header-menu ms-auto">
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
                    <li><router-link to="/team" class="dropdown-item" data-bs-dismiss="dropdown">Our People</router-link></li>
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
                    <li><router-link to="/Service-Single" class="dropdown-item" data-bs-dismiss="dropdown">service single</router-link></li>
                  </ul>
                </li>

                <!-- FEATURES -->
                <li class="nav-item dropdown">
                  <a href="#" class="nav-link toggle" data-bs-toggle="dropdown">FEATURES<i class="fa fa-angle-down"></i></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/typography" class="dropdown-item" data-bs-dismiss="dropdown">typography</router-link></li>
                    <li><router-link to="/404" class="dropdown-item" data-bs-dismiss="dropdown">404</router-link></li>
                    <li class="nav-item dropdown dropdown-submenu">
                      <a href="#" class="nav-link toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">parent menu
                        <i class="fa fa-angle-right"></i></a>
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
    <a href="#" class="nav-link toggle"  data-bs-toggle="dropdown">News <i class="fa fa-angle-down"></i></a>
      <ul class="dropdown-menu">
    <li><router-link to="/news-left-sidebar" class="dropdown-item" data-bs-dismiss="dropdown">News-Left-Sidebar</router-link></li>
    <li><router-link to="/news-right-sidebar" class="dropdown-item" data-bs-dismiss="dropdown">News-Right-Sidebar</router-link></li>
    <li><router-link to="/news-single" class="dropdown-item" data-bs-dismiss="dropdown">News-Single</router-link></li>
  </ul>
</li>
  <!--------------contact---------->
      
      <li class="nav-item"><router-link to="/contact" class="nav-link">contact</router-link></li>
        </ul> 

            <div class="header-quote">
              <router-link to="/contact" id="btn-quotes" class="btn btn-md border bg-text-white">Get A Quote</router-link>
            </div>

          </div>
          </div>
      </nav>
    </section>
    <!---------------home-two-page------------->
    <section class="carousel-slide p-0">
  <div class="container-fluid p-0">
    <!-- Row 1: Carousel -->
    <div class="row align-items-center">
      <div class="col-md-12 col-12">
        <div class="carousel slide banner-area" id="myCarousel" data-bs-ride="carousel">
          <div class="carousel-inner">
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>

            <!-- Slide 1 -->
            <div class="carousel-item active">
              <img src="@/assets/images/slider-main/bg4.jpg" alt="slider-bg4" class="img-fluid w-100">
              <div class="carousel-caption">
                <div class="container slider-main">
                  <div class="slider-box">
                    <div class="box-slider-text">
                      <h2 class="slider-title">17 years of excellence in</h2>
                      <h3 class="slider-subtitle">Construction industry</h3>
                      <p class="slider-description">You have ideas, goals, and dreams...</p>
                      <p class="mt-lg-0">
                        <router-link to="/services" class="btn btn-warning text-white">OUR SERVICES</router-link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <img src="@/assets/images/slider-main/bg5.jpg" alt="slider-bg5" class="img-fluid w-100">
              <div class="carousel-caption">
                <div class="container slider-main">
                  <div class="slider-box">
                    <div class="box-slider-text">
                      <h2 class="slider-title">When Service Matters</h2>
                      <h3 class="slider-subtitle">YOUR CHOICE IS SIMPLE</h3>
                      <p class="slider-description">You have ideas, goals, and dreams...</p>
                      <p class="mt-lg-0">
                        <router-link to="/about" class="btn btn-warning text-white">KNOW US</router-link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>

    <!-- -Action Box -->
    <div class="container-fluid bg-dark mt-n5 position-relative">
      <div class="row">
        <div class="col-lg-12 action text-md-right p-4">
          <div class="d-flex align-items-center justify-content-center">
            <h2 class="mb-0 me-auto text-white">We understand your needs on construction</h2>
            <router-link to="/contact" class="btn btn-warning fw-bold btn-lg">REQUEST QUOTE </router-link>
          </div>
        </div>
      </div>
    </div>

  </div> 
</section>

    <!---------service-single----------->
    <section class="project-area mt-5 pt-5 pb-5">
      <div class="container mt-lg-0">
        <div class="row d-flex pt-5">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="latest-post">
               <router-link to="/Service-Single">
                <img src="@/assets/images/news/news1.jpg" alt="img" class="img-fluid">
               </router-link>
            </div>
            <div class="d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon1.png" alt="service-img" class="img-fluid">
              </div>
              <div class="post-content mt-3 text-start">
                <h4 class="post-title"><a href="service-single.html">Zero Harm Everyday
                    Mid-Missouri</a></h4>
                <p>You have ideas, goals, and dreams.
                  We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor
                  suscipit.
                </p>
                 <router-link to="/Service-Single" class="d-inline-block learn more" aria-label="service-details">
                  <i class="fa fa-caret-right"></i>LEARN MORE</router-link>
              </div>
            </div>
          </div>


          <div class="col-lg-4 col-md-6 mb-4">
            <div class="latest-post">
               <router-link to="/Service-Single">
                <img src="@/assets/images/services/service2.jpg" alt="img" class="img-fluid">
               </router-link>
            </div>
            <div class="d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon2.png" alt="service-img" class="img-fluid">
              </div>
              <div class="post-content mt-3 text-start">
                <h4 class="post-title"><a href="service-single.html">
                    Virtual Construction</a></h4>
                <p>You have ideas, goals, and dreams.
                  We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor
                  suscipit.
                </p>
                <router-link to="/Service-Single" class="d-inline-block learn more" aria-label="service-details">
                  <i class="fa fa-caret-right"></i>LEARN MORE</router-link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="latest-post">
                <router-link to="/Service-Single">
                <img src="@/assets/images/services/service3.jpg" alt="img" class="img-fluid">
                </router-link>
            </div>
            <div class="d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon3.png" alt="service-img" class="img-fluid">
              </div>
              <div class="post-content mt-3 text-start">
                <h4 class="post-title"><a href="service-single.html">
                    Build To Last</a></h4>
                <p>You have ideas, goals, and dreams.
                  We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor
                  suscipit.
                </p>
                 <router-link to="/Service-Single" class="d-inline-block learn more" aria-label="service-details">
                  <i class="fa fa-caret-right"></i>LEARN MORE</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!---------facts-area---->
    <section class="facts bg-dark">
      <div class="container-fluid p-0">

        <div class="row  align-items-center text-center">
          <div class="col-md-3 col-sm-6 ts-fact-area mt-3">
            <div class="ts-fact-img">
              <img src="@/assets/images/icon-image/fact1.png" alt="fact1">
            </div>
            <div class="ts-fact-content">
              <div class="ts-fact-">
                <h2 class="ts-fact-num text-white fw-bold mt-3 number-animation"></h2>
                <p class="ts-fact-title mb-0">Total Projects</p>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 ts-fact-area mt-3">
            <div class="ts-fact-img">
              <img src="@/assets/images/icon-image/fact2.png" alt="fact2">
            </div>
            <div class="ts-fact-content">
              <div class="ts-fact">
                <h2 class="ts-fact-num text-white fw-bold mt-3 number-animation1"></h2>
                <p class="ts-fact-title mb-0">Staff Members</p>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 ts-fact-area mt-3">
            <div class="ts-fact-img">
              <img src="@/assets/images/icon-image/fact3.png" alt="fact3">
            </div>
            <div class="ts-fact-content">
              <div class="ts-fact">
                <h2 class="ts-fact-num text-white fw-bold mt-3 number-animation2"></h2>
                <p class="ts-fact-title mb-0">Hours Of Work</p>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 ts-fact-area mt-3">
            <div class="ts-fact-img">
              <img src="@/assets/images/icon-image/fact4.png" alt="fact4">
            </div>
            <div class="ts-fact-content">
              <div class="ts-fact">
                <h2 class="ts-fact-num text-white fw-bold mt-3 number-animation3"></h2>
                <p class="ts-fact-title mb-0">Countries Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!----SERVICE-AREA--->
    <section class="service-area  pb-0" id="sevice-area">
      <div class="container p-0">
        <div class="row align-items-center mb-5">
          <div class="col-12">
            <h2 class="section-title">We are Specialists In</h2>
            <h3 class="section-sub-title">What We do</h3>
          </div>
        </div>
        <!---service-icons-->
        <div class="row align items-center">
          <div class="col-lg-4 col-md-7">
            <div class="service-box d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon1.png" alt="service-icon1">
              </div>
              <div class="service-box-info">
                <h3 class="service-box-title"><a href="#">Home Construction</a></h3>
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Inteer adipisicing
                  erat.</p>
              </div>
            </div>

            <div class="service-box d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon2.png" alt="service-icon2">
              </div>
              <div class="service-box-info">
                <h3 class="service-box-title"><a href="#">Buildings Remodals</a></h3>
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Inteer adipisicing
                  erat.</p>
              </div>
            </div>

            <div class="service-box d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon3.png" alt="service-icon3">
              </div>
              <div class="service-box-info">
                <h3 class="service-box-title"><a href="#">Interior Design</a></h3>
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Inteer adipisicing
                  erat.</p>
              </div>
            </div>
          </div>
          <!-------service-img------>
          <div class="col-lg-4 text-center mt-1">
            <img src="@/assets/images/services/service-center.jpg" class="img-fluid" alt="service-center">
          </div>
          <!-------service-img--end---->
          <div class="col-lg-4 mt-3">
            <div class="service-box d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon4.png" alt="service-icon4">
              </div>
              <div class="service-box-info">
                <h3 class="service-box-title"><a href="#">Experior Design</a></h3>
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Inteer adipisicing
                  erat.</p>
              </div>
            </div>

            <div class="service-box d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon5.png" alt="service-icon5">
              </div>
              <div class="service-box-info">
                <h3 class="service-box-title"><a href="#">Renovation</a></h3>
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Inteer adipisicing
                  erat.</p>
              </div>
            </div>

            <div class="service-box d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon6.png" alt="service-icon6">
              </div>
              <div class="service-box-info">
                <h3 class="service-box-title"><a href="#">Safety Management</a></h3>
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit
                  Inteer adipisicing
                  erat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!------------PROJECT-ALL-AREA---------->
  <section class="projects-area2 solid-bg">
  <div class="container mt-lg-0 p-0">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="section-title">Work Of Excellence</h2>
        <h3 class="section-sub-title">Recent Projects</h3>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-lg-12">
<nav>
    <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" 
    type="button" role="tab" aria-controls="nav-all" aria-selected="true">SHOW ALL</button>

    <button class="nav-link" id="nav-commercial-tab" data-bs-toggle="tab" data-bs-target="#nav-commercial"
     type="button" role="tab" aria-controls="nav-commercial" aria-selected="false">COMMERCIAL</button>

    <button class="nav-link" id="nav-education-tab" data-bs-toggle="tab" data-bs-target="#nav-education" 
    type="button" role="tab" aria-controls="nav-education" aria-selected="false">EDUCATION</button>

     <button class="nav-link" id="nav-Goverment-tab" data-bs-toggle="tab" data-bs-target="#nav-Goverment" 
    type="button" role="tab" aria-controls="nav-Goverment" aria-selected="false">GOVERMENT</button>

     <button class="nav-link" id="nav-Infrastructure-tab" data-bs-toggle="tab" data-bs-target="#nav-Infrastructure"
  type="button" role="tab" aria-controls="nav-Infrastructure" aria-selected="false">INFRASTRUCTURE</button>

     <button class="nav-link" id="nav-Residential-tab" data-bs-toggle="tab" data-bs-target="#nav-Residential" 
    type="button" role="tab" aria-controls="nav-Residential" aria-selected="false">RESIDENTIAL</button>

     <button class="nav-link" id="nav-Healthcare-tab" data-bs-toggle="tab" data-bs-target="#nav-Healthcare" 
    type="button" role="tab" aria-controls="nav-Healthcare" aria-selected="false">HEALTHCARE</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab"> 
           <div class="image-overlay-container">
              <img src="@/assets/images/projects/project3.jpg" alt="Commercial Project 1" class="img-fluid" />
                  <div class="overlay-text">
                <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">TNT East facility</h3>
                  <p class="project-cat">
                 <router-link to="/project-single">Goverment</router-link>
                </p>
               </div>
            </div>
              <div class="image-overlay-container">
              <img src="@/assets/images/projects/project4.jpg" alt="infrastructure Project 4" class="img-fluid" />
                 <div class="overlay-text">
                <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Narrriot Headquarters</h3>
                  <p class="project-cat">
                     <router-link to="/project-single">Infrastructure</router-link>
                </p>
               </div>
            </div>
             <div class="image-overlay-container">
               <img src="@/assets/images/projects/project5.jpg" alt="Education Project 2" class="img-fluid" />
                <div class="overlay-text">
                <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Kalas Matrorial</h3>
                  <p class="project-cat">
                    <router-link to="/project-single">Infrastructure</router-link>
                </p>
               </div>
             </div>
             <div class="image-overlay-container">
              <img src="@/assets/images/projects/project1.jpg" alt="Project 4" class="img-fluid" />
              <div class="overlay-text">
              <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Capital Teltway Buildings</h3>
                  <p class="project-cat">
                    <router-link to="/project-single">Commercial,Interior</router-link>
                </p>
               </div>
            </div>
             <div class="image-overlay-container">
              <img src="@/assets/images/projects/project6.jpg" alt="Residential project 5" class="img-fluid" />
               <div class="overlay-text">
                 <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Ancraft Avenue House</h3>
                  <p class="project-cat">
                    <router-link to="/project-single">Residential</router-link>
                </p>
               </div>
            </div>
             <div class="image-overlay-container">
              <img src="@/assets/images/projects/project2.jpg" alt="Healthcare Project 6" class="img-fluid" />
              <div class="overlay-text">
                 <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Ghum Touch Hospital</h3>
                 <p class="project-cat">
                   <router-link to="/project-single">Healthcare</router-link>
                </p>
               </div>
            </div>
          </div>
           <!------------commercial-tab----------------------->
  <div class="tab-pane fade" id="nav-commercial" role="tabpanel" aria-labelledby="nav-commercial-tab"> 
    <div class="image-overlay-container">
              <img src="@/assets/images/projects/project3.jpg" alt="Commercial Project 1" class="img-fluid" />
                  <div class="overlay-text">
                <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">TNT East facility</h3>
                  <p class="project-cat">
                   <router-link to="/project-single">Goverment</router-link>
                </p>
               </div>
            </div>
          </div>
           <!------------education-tab----------------------->
  <div class="tab-pane fade" id="nav-education" role="tabpanel" aria-labelledby="nav-education-tab">
       <div class="image-overlay-container">
              <img src="@/assets/images/projects/project4.jpg" alt="infrastructure Project 4" class="img-fluid" />
                 <div class="overlay-text">
                <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Narrriot Headquarters</h3>
                  <p class="project-cat">
                   <router-link to="/project-single">Infrastructure</router-link>
                </p>
               </div>
            </div>
              <div class="image-overlay-container">
               <img src="@/assets/images/projects/project5.jpg" alt="Education Project 2" class="img-fluid" />
                <div class="overlay-text">
                <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Kalas Matrorial</h3>
                  <p class="project-cat">
                  <router-link to="/project-single">Infrastructure</router-link>
                </p>
               </div>
             </div>
          </div>
                   <!------------goverment-tab----------------------->
              <div class="tab-pane fade" id="nav-Goverment" role="tabpanel" aria-labelledby="nav-Goverment-tab">
                 <div class="image-overlay-container">
              <img src="@/assets/images/projects/project1.jpg" alt="goverment Project 3" class="img-fluid" />
              <div class="overlay-text">
              <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Capital Teltway Buildings</h3>
                  <p class="project-cat">
                   <router-link to="/project-single">Commercial,Interiors</router-link>
                </p>
               </div>
            </div>
              </div>
               <!--------infrastructure-tab----------->
      <div class="tab-pane fade" id="nav-Infrastructure" role="tabpanel" aria-labelledby="nav-Infrastructure-tab">
                  <div class="image-overlay-container">
              <img src="@/assets/images/projects/project3.jpg" alt="Commercial Project 1" class="img-fluid" />
                  <div class="overlay-text">
                <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">TNT East facility</h3>
                  <p class="project-cat">
                 <router-link to="/project-single">Goverment</router-link>
                </p>
               </div>
            </div>
              <div class="image-overlay-container">
              <img src="@/assets/images/projects/project4.jpg" alt="infrastructure Project 4" class="img-fluid" />
                 <div class="overlay-text">
                <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Narrriot Headquarters</h3>
                  <p class="project-cat">
                     <router-link to="/project-single">Infrastructure</router-link>
                </p>
               </div>
            </div>
            <div class="image-overlay-container">
               <img src="@/assets/images/projects/project5.jpg" alt="Education Project 2" class="img-fluid" />
                <div class="overlay-text">
                <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Kalas Matrorial</h3>
                  <p class="project-cat">
                  <router-link to="/project-single">Infrastructure</router-link>
                </p>
               </div>
             </div>
            </div>
                 <!------------residental-tab----------------------->
                <div class="tab-pane fade" id="nav-Residential" role="tabpanel" aria-labelledby="nav-Residential-tab">
                   <div class="image-overlay-container">
              <img src="@/assets/images/projects/project6.jpg" alt="Residential project 5" class="img-fluid" />
               <div class="overlay-text">
                 <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Ancraft Avenue House</h3>
                  <p class="project-cat">
                  <router-link to="/project-single">Residential</router-link>
                </p>
               </div>
            </div>
                </div>
                 <!------------health-tab----------------------->
                 <div class="tab-pane fade" id="nav-Healthcare" role="tabpanel" aria-labelledby="nav-Healthcare-tab">
                    <div class="image-overlay-container">
              <img src="@/assets/images/projects/project1.jpg" alt="goverment Project 3" class="img-fluid" />
              <div class="overlay-text">
              <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Capital Teltway Buildings</h3>
                  <p class="project-cat">
                   <router-link to="/project-single">Commercial,Interiors</router-link>
                </p>
               </div>
            </div>
                  
                  <div class="image-overlay-container">
              <img src="@/assets/images/projects/project2.jpg" alt="Healthcare Project 6" class="img-fluid" />
              <div class="overlay-text">
                 <div class="gallery-icon-top-right">
                  <i class="fa fa-plus"></i>
                </div>
                 <h3 class="project-title">Ghum Touch Hospital</h3>
                 <p class="project-cat">
                <router-link to="/project-single">Residential</router-link>
                </p>
               </div>
            </div>
                 </div>
</div>
  </div>
    </div>
     <div class="col-12 mt-3">
            <div class="general-text-button text-center">
             <router-link to="/projects" class="btn btn-warning btn-lg">VIEW ALL PROJECTS</router-link>
            </div>
          </div>
  </div>
</section>

    <!------TESTIMONIALS-carousel----->
    <section class="testimonial-section">
      <div class="container p-0">
        <div class="row">
          <div class="col-lg-6">
            <h4 class="ts-title text-start mb-5">Testimonials</h4>
            <div id="testiCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner d-flex ts-carousel-inner">
                <div class="carousel-item active">
                  <div class="testi-box mb-4">
                    <div class="quote-icon text-start">
                      <span class="quote-text text-muted">
                        Question ran over her cheek When she reached the first hills of the Italic Mountains, she had a
                        last
                        view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and
                        the
                        subline of her own road.
                      </span>
                    </div>
                    <div class="d-flex">
                      <img src="@/assets/images/clients/testimonial1.png" alt="testimonial" class="img-fluid">
                      <div class="ms-3">
                        <h6 class="text-warning fw-bold mb-0 mt-3">Gabriel Denis</h6>
                        <small class="text-muted">Chairman, OKT</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="testi-box">
                    <div class="quote-icon text-start">
                      <span class="quote-text text-muted mt-lg-0">
                        Question ran over her cheek When she reached the first hills of the Italic Mountains, she had a
                        last
                        view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and
                        the
                        subline of her own road.
                      </span>
                    </div>
                    <div class="d-flex  mt-lg-0">
                      <img class="testimonial-thumb" src="images/clients/testimonial2.png" alt="testimonial">
                      <div class="ms-3">
                        <h6 class="text-warning fw-bold mb-0 mt-3">WELDON CASH</h6>
                        <small class="text-muted">CFO, FIRST CHOICE</small>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="carousel-item">
                  <div class="testi-box">
                    <div class="quote-icon text-start">
                      <span class="quote-text text-muted mt-lg-0">
                        Question ran over her cheek When she reached the first hills of the Italic Mountains, she had a
                        last
                        view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and
                        the
                        subline of her own road.
                      </span>
                    </div>
                    <div class="d-flex  mt-lg-0">
                      <img class="testimonial-thumb" src="images/clients/testimonial3.png" alt="testimonial">
                      <div class="ms-3">
                        <h6 class="text-warning fw-bold mb-0 mt-3">MINTAR PUCHAN</h6>
                        <small class="text-muted">DIRECTOR,AKT</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-------clients-->
          <div class="col-lg-6 clients mt-lg-0 mt-5">
            <h3 class="column-title fw-bold mb-3 text-start">Happy Clients</h3>
            <div class="row all clients d-flex">

              <div class="col-sm-4  col-6">
                <figure class="clients-logo d-flex"><a href="#">
                    <img src="@/assets/images/clients/client1.1.png" alt="clients-logo" class="img-fluid"></a>
                </figure>
              </div>

              <div class="col-sm-4  col-6">
                <figure class="clients-logo d-flex"><a href="#">
                    <img src="@/assets/images/clients/client2.png" alt="clients-logo" class="img-fluid"></a>
                </figure>
              </div>

              <div class="col-sm-4  col-6">
                <figure class="clients-logo d-flex"><a href="#">
                    <img src="@/assets/images/clients/client3.png" alt="clients-logo" class="img-fluid"></a>
                </figure>
              </div>

              <div class="col-sm-4  col-6">
                <figure class="clients-logo d-flex"><a href="#">
                    <img src="@/assets/images/clients/client4.png" alt="clients-logo" class="img-fluid"></a>
                </figure>
              </div>

              <div class="col-sm-4  col-6">
                <figure class="clients-logo d-flex"><a href="#">
                    <img src="@/assets/images/clients/client5.png" alt="clients-logo" class="img-fluid"></a>
                </figure>
              </div>

              <div class="col-sm-4  col-6">
                <figure class="clients-logo d-flex"><a href="#">
                    <img src="@/assets/images/clients/client6.png" alt="clients-logo" class="img-fluid"></a>
                </figure>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!------ACTION-BOX------>
    <section class="box-section mt-lg-0">
      <div class="container-fluid">
        <div class="row align-items-stretch d-flex">
          <div class="col-lg-4 p-3" style="background-color:#ffb600;">
            <div class="subscribe-action-box mt-2">
              <h3 class="text-dark fw-bold text-center">Can we help?</h3>
              <h3 class="text-white text-center">(+9)847-291-4353</h3>
            </div>
          </div>

          <div class="col-lg-8 bg-dark">
            <div class="row d-flex jusyify-content-end">
              <div class="col-md-4 text-start">
                <div class="ts-news mt-4">
                  <h2 class="text-white">Newsletter Sign-up</h2>
                  <h3 class="text-white">Latest updates and news</h3>
                </div>
              </div>

              <div class="col-md-8 mb-3">
                <form action="#" method="post" class="mt-4 p-4 newsletter-form">
                  <div class="input-group">
                    <input type="email" name="email" class="form-control" placeholder="your email and hit enter"
                      aria-label="your email and hit enter">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!----project-area----->
   <section class="project-area mt-5 pt-5 pb-5">
      <div class="container mt-lg-0">
        <div class="row">
          <div class="col-lg-12 align-items-center">
            <h2 class="section-title">Work Of Excellence</h2>
            <h3 class="section-sub-title">Recent Projects</h3>
          </div>
        </div>
        <div class="row pt-5">
          <div class="col-lg-4 col-md-6 mb-4">
            <!-- First project item -->
            <div class="latest-post">
              <router-link to="/Service-Single">
                <img src="@/assets/images/news/news1.jpg" alt="img" class="img-fluid">
              </router-link>
            </div>
            <div class="post-content mt-3 text-start">
              <h4 class="post-title"><router-link to="/Service-Single"> We Just Completes $17.6 millions Medical Clinic in
                  Mid-Missouri </router-link></h4>
              <div class="post-update text-start">
                <span class="post-item-date">
                  <i class="fa fa-clock-o"></i>"July 20,2017"
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <!-- Second project item -->
            <div class="latest-post">
             <router-link to="/Service-Single">
                <img src="@/assets/images/news/news2.jpg" alt="img" class="img-fluid">
             </router-link>
            </div>
            <div class="post-content mt-3 text-start">
              <h4 class="post-title"><router-link to="/Service-Single">
                  Thandler airpot water reclamation facility eaxpansion proect named
              </router-link></h4>
              <div class="post-update text-start">
                <span class="post-item-date text-start">
                  <i class="fa fa-clock-o"></i>"June 17,2017"
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <!-- third project item -->
            <div class="latest-post">
              <router-link to="/Service-Single">
                <img src="@/assets/images/news/news3.jpg" alt="img" class="img-fluid">
              </router-link>
            </div>
            <div class="post-content mt-3 text-start">
              <h4 class="post-title"><router-link to="/Service-Single">
                  Silicon benc and cornike begin construction solar facilities
              </router-link></h4>
              <div class="post-update text-start">
                <span class="post-item-date">
                  <i class="fa fa-clock-o"></i>"Aug 13,2017"
                </span>
              </div>
            </div>
          </div>
          <div class="col-12 mt-3">
            <div class="general-text-button text-center">
              <router-link to="/news-left-sidebar" class="btn btn-warning btn-lg">SEE ALL POSTS </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    </template>

   <script>
export default {
  name: 'Home2Page',

  data() {
    return {
      isFixed: false
    };
  },

  mounted() {

    // Navbar fixed on scroll
    window.addEventListener('scroll', () => {
      this.isFixed = window.scrollY > 50;
    });

    // Counter animation when section comes into view
    const counters = document.querySelectorAll(
      '.number-animation, .number-animation1, .number-animation2, .number-animation3'
    );

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            entry.target.classList.add('start-count');

            // Counting sirf ek baar chalegi
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.4
      }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  }
};
</script>
<style scoped>
/*-------------top-bar--------------------*/

.top-info-bar {
  width: 100%;
  background-color: #e1e5e9;
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
/*------toggle-button-----*/
@media (max-width: 768px) {
  .row {
    flex-direction: column;
    text-align: center;
    padding: 10px 0;
  }
  .justify-content-center {
    margin-top: 5px;
  }
  .top-info-bar {
  background-color: #ebebeb;
  padding: 5px 0;
}
.social-icons {
  display: flex;
  list-style: none;
  gap: 15px;
  padding: 0;
}
@media (max-width: 576px) {
  .info-bar span {
    font-size: 12px;
  }
}

}
.custom-toggler {
    width: 45px;
    height: 40px;

    padding: 8px;

    background-color: transparent !important;

    border: 1px solid #000 !important;

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

    background-color: #000;

    border-radius: 2px;
}


/* Hover */

.custom-toggler:hover {
    background-color: transparent !important;

    border-color: #000 !important;
}


/* Click / Focus */

.custom-toggler:focus {
    background-color: transparent !important;

    box-shadow: none !important;

    outline: none;
}
@media (max-width: 768px) {
  .custom-toggler {
    display: flex !important;
      align-items: center !important;
    flex-wrap: nowrap !important;
    justify-content: center !important;
       white-space: nowrap !important;
  }
}
/* =========================
   NAVBAR RESPONSIVE
   1024px - 858px
========================= */

@media (max-width: 1024px) and (min-width: 858px) {

  .navbar-nav {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }

  .navbar-nav .nav-item {
    white-space: nowrap;
  }

  .navbar-nav .nav-link {
    white-space: nowrap;
    padding-left: 5px !important;
    padding-right: 5px !important;
    font-size: 12px;
  }

  .navbar-collapse {
    display: flex !important;
    align-items: center;
  }

  .navbar-nav {
    margin-left: auto;
    margin-right: auto;
  }
}
@media (max-width: 1024px) and (min-width: 858px) {

  .navbar-nav .nav-link {
    display: flex;
    align-items: center;
  }

  .navbar-nav .nav-link i,
  .navbar-nav .nav-link .fa,
  .navbar-nav .nav-link .fas {
    position: relative;
    top: 1px;
  }

}
@media (max-width: 1024px) and (min-width: 858px){
  .header-quote{
    padding: 0;
    margin: 0;
   white-space: nowrap;
    padding-left: 5px !important;
    padding-right: 5px !important;
    font-size: 12px;
  }
}
/* 
/* =========================
   ACTION / QUOTE SECTION
========================= */

.action {
  padding: 30px !important;
}

.action .d-flex {
  width: 100%;
}

.action h2 {
  font-size: 28px;
  line-height: 1.3;
  font-weight: 600;
  margin: 0;
}

.action .btn {
  white-space: nowrap;
  padding: 12px 25px;
  border-radius: 3px;
}


/* =========================
   TABLET
========================= */

@media (max-width: 991px) {

  .action {
    padding: 25px !important;
  }

  .action h2 {
    font-size: 24px;
  }

  .action .btn {
    font-size: 15px;
    padding: 11px 20px;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 767px) {

  .action {
    padding: 25px 20px !important;
  }

  .action .d-flex {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .action h2 {
    font-size: 21px;
    line-height: 1.4;
    width: 100%;
  }

  .action h2.me-auto {
    margin-right: 0 !important;
  }

  .action .btn {
    font-size: 14px;
    padding: 10px 20px;
  }
}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 576px) {

  .action {
    padding: 22px 15px !important;
  }

  .action h2 {
    font-size: 19px;
  }

  .action .btn {
    font-size: 13px;
    padding: 10px 18px;
  }
} 
/* Carousel image responsive */
#myCarousel .carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
@media (max-width: 767px) {
  #myCarousel .carousel-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
}
#myCarousel .carousel-item {
  overflow: hidden;
}

@media (max-width: 767px) {
  #myCarousel .carousel-item {
    height: 250px;
  }
}
</style>
