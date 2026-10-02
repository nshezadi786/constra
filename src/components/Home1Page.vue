<template>
    <div class="body-inner">
  <router-view/>
   <!---------carousel-slider-->
    <section class="carousel-slide p-0">
      <div class="container-fluid p-0">
        <div class="row align-items-center">
          <div class="col-md-12 col-sm-6">
            <div class="carousel slide banner-area" id="myCarousel" data-bs-ride="carousel">
                 <div class="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></button>
             <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
                 </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="@/assets/images/slider-main/bg1.jpg" alt="slider-bg1" class="img-fluid w-100">
                  <div class="carousel-caption slide-center" id="myCarousel">
                    <h2 class="text-center mb-lg-5">
                      17 years of excellence in
                    </h2>
                    <h3 class="bg-text-white mb-lg-5">
                      Construction industry
                    </h3>
                    <p class="mt-lg-0">
                      <router-link to="/services" id="btn-service" class="btn btn-warning btn-lg text-white">OUR SERVICES </router-link>
                      <router-link to="/contact" id="btn-contact" class="btn btn-lg text-white">CONTACT NOW </router-link>
                    </p>
                  </div>
                </div>


                <div class="carousel-item">
                  <img src="@/assets/images/slider-main/bg2.jpg" alt="slider-bg2" class="img-fluid  w-100">
                  <div class="carousel-caption slide-left" id="myCarousel">
                    <h4 class="fw-bold text-left text-lg-left mb-lg-5 fs-5">
                      World class Service
                    </h4>
                    <h2 class="text-start mb-lg-5">
                      When service matters
                    </h2>
                    <h3 class="bg-text-whitetext-left text-start mb-lg-5">
                      Your choice is simple
                    </h3>
                    <p class="mt-lg-0 text-lg-left text-start">
                     <router-link to="/services" id="service-btn" class="btn btn-lg text-white">OUR SERVICES </router-link>
                    </p>
                  </div>
                </div>


                <div class="carousel-item">
                  <img src="@/assets/images/slider-main/bg3.jpg" alt="slider-bg3" class="img-fluid  w-100">
                  <div class="carousel-caption slide-right" id="myCarousel">
                    <h2 class="text-end mb-lg-5">
                      Meet our engineers
                    </h2>
                    <h3 class="bg-text-white text-end mb-lg-5">
                      We believe sustainability
                    </h3>
                    <p class="mt-lg-0 text-end mb-lg-5 fs-5">
                      We deal with your failure that determines how you achieve success.
                    </p>
                    <p class="text-end mb-lg-5">
                      <router-link to="/contact" id="quote-btn" class="btn btn-warning btn-md text-white fw-bold">Get free
                        quote </router-link>
                    <router-link to="/about" id="learnmore-btn" class="btn btn-md text-white">LEARN MORE </router-link>
                    </p>
                  </div>
                </div>

                <button class="carousel-control-prev prev-icon" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </button>

                <button class="carousel-control-next next-icon" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </button>
              </div>

              <!-- Action Box -->
          <div class="action-box">

            <h3 class="quote">
              We understand your needs on construction
            </h3>

            <router-link to="/contact" class="btn btn-dark fw-bold btn-lg">REQUEST QUOTE</router-link>

          </div>
            
        
        
        </div>
          </div>
        </div>
      </div>
    </section>
  
    <!------FEARTURES-->
  <section id="ts-features" class="ts-features pb-0">
    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="col-lg-6">
          <div class="ts-intro">
            <h2 class="ts-title">About us</h2>
            <h3 class="ts-sub-title">We deliver landmark projects</h3>
            <p class="text-muted">
              We are a dedicated team focused on excellence and sustainable construction landmarks.
            </p>
          </div>

          <div class="gap-20"></div>

          <!-- Service Boxes--->
          <div class="row g-3">
            <div class="col-md-6 mb-4">
              <div class="ts-service-box d-flex align-items-center">
                <span class="ts-service-box-icon"><i class="fas fa-trophy"></i></span>
                <div class="ts-service-box-content ms-3">
                  <h3 class="ts-service-box-title mb-0">Reputation for Excellent</h3>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="ts-service-box d-flex align-items-center">
                <span class="ts-service-box-icon"><i class="fas fa-thumbs-up"></i></span>
                <div class="ts-service-box-content ms-3">
                  <h3 class="ts-service-box-title mb-0">We build partnerships</h3>
                </div>
              </div>
            </div>
            
            <!-- Row 2 of Services -->
            <div class="col-md-6 mb-4">
              <div class="ts-service-box d-flex align-items-center">
                <span class="ts-service-box-icon"><i class="fas fa-sliders-h"></i></span>
                <div class="ts-service-box-content ms-3">
                  <h3 class="ts-service-box-title mb-0">Guided by commitment</h3>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-4">
              <div class="ts-service-box d-flex align-items-center">
                <span class="ts-service-box-icon"><i class="fas fa-users"></i></span>
                <div class="ts-service-box-content ms-3">
                  <h3 class="ts-service-box-title mb-0">Team of professionals</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

  
        <div class="col-lg-6 mt-4 mt-lg-0">
          <h3 class="into-sub-title">Our values</h3>
          <p class="text-muted">Minim Austin 3 wolf moon scenester authentic street art literally.</p>
          <div class="accordion accordion-group" id="ourValuesAccordion">
            
            <!-- Safety -->
            <div class="card mb-2">
              <div class="card-header p-0">
                <button class="btn btn-block text-start w-100 shadow-none collapsed" 
                  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  Safety
                </button>
              </div>
              <div id="collapseOne" class="collapse show" data-bs-parent="#ourValuesAccordion">
                <div class="card-body text-muted">
                 "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      3 wolf moon officia aute, non cupidata"
                </div>
              </div>
            </div>

            <!-- Customer Service -->
            <div class="card mb-2">
              <div class="card-header p-0">
                <button class="btn btn-block text-start w-100 shadow-none collapsed" 
                  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  Customer Service
                </button>
              </div>
              <div id="collapseTwo" class="collapse" data-bs-parent="#ourValuesAccordion">
                <div class="card-body text-muted">
              "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      3 wolf moon officia aute, non cupidata"
                </div>
              </div>
            </div>
                <!------Integrity------>
               <div class="card mb-2">
              <div class="card-header p-0">
                <button class="btn btn-block text-start w-100 shadow-none collapsed" 
                  type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree">
                  Integrity
                </button>
              </div>
              <div id="collapsethree" class="collapse show" data-bs-parent="#ourValuesAccordion">
                <div class="card-body text-muted">
                 "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                      3 wolf moon officia aute, non cupidata"
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </section>

       <!---------facts-area---->
    <section class="facts bg-dark pt-5 pb-5">
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
    <section class="service-area  pb-0 pt-5" id="sevice-area">
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
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Inteer adipisicing
                  erat.</p>
              </div>
            </div>

            <div class="service-box d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon2.png" alt="service-icon2">
              </div>
              <div class="service-box-info">
                <h3 class="service-box-title"><a href="#">Buildings Remodals</a></h3>
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Inteer adipisicing
                  erat.</p>
              </div>
            </div>

            <div class="service-box d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon3.png" alt="service-icon3">
              </div>
              <div class="service-box-info">
                <h3 class="service-box-title"><a href="#">Interior Design</a></h3>
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Inteer adipisicing
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
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Inteer adipisicing
                  erat.</p>
              </div>
            </div>

            <div class="service-box d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon5.png" alt="service-icon5">
              </div>
              <div class="service-box-info">
                <h3 class="service-box-title"><a href="#">Renovation</a></h3>
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Inteer adipisicing
                  erat.</p>
              </div>
            </div>

            <div class="service-box d-flex">
              <div class="service-box-img">
                <img src="@/assets/images/icon-image/service-icon6.png" alt="service-icon6">
              </div>
              <div class="service-box-info">
                <h3 class="service-box-title"><a href="#">Safety Management</a></h3>
                <p class="service-box-content text-muted pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit Inteer adipisicing
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

     <button class="nav-link" id="nav-Insfrastructure-tab" data-bs-toggle="tab" data-bs-target="#nav-Insfrastructure" 
    type="button" role="tab" aria-controls="nav-Insfrastructure" aria-selected="false">INSFRASTRUCTURE</button>

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
               <div class="tab-pane fade" id="nav-Infrastructure" role="tabpanel" aria-labelledby="nav-Infrastructure-tab">
               </div>
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
                 <div class="tab-pane fade" id="nav-Healthcare" role="tabpanel" aria-labelledby="nav-Healthcare-tab">
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
    <section class="testimonial-section pt-5 pb-5">
      <div class="container p-0">
        <div class="row">
          <div class="col-lg-6">
            <h4 class="ts-title text-start mb-5">Testimonials</h4>
            <div id="testiCarousel" class="carousel slide" data-bs-ride="carousel">
               <div class="carousel-indicators">
                 <button type="button" data-bs-target="#testiCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
                <button type="button" data-bs-target="#testiCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#testiCarousel" data-bs-slide-to="2"></button>
                </div>
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
                        <h6 class="text-warning fw-bold mb-0 mt-3 fs-5">Gabriel Denis</h6>
                        <small class="text-muted">CHAIRMAN,OKT</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
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
                    <div class="d-flex mt-lg-0">
                      <img class="testimonial-thumb" src="@/assets/images/clients/testimonial2.png" alt="testimonial">
                      <div class="ms-3">
                        <h6 class="text-warning fw-bold mb-0 mt-3 fs-5">WELDON CASH</h6>
                        <small class="text-muted">CFO, FIRST CHOICE</small>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="carousel-item">
                  <div class="testi-box mb-4">
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
                      <img class="testimonial-thumb" src="@/assets/images/clients/testimonial3.png" alt="testimonial">
                      <div class="ms-3">
                        <h6 class="text-warning fw-bold mb-0 mt-3 fs-5">MINTAR PUCHAN</h6>
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
  name: 'Home1Page',

  mounted() {
    const counters = document.querySelectorAll(
      '.number-animation, .number-animation1, .number-animation2, .number-animation3'
    )

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('start-count')

            // Counting sirf ek baar chalegi
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.4
      }
    )

    counters.forEach((counter) => {
      observer.observe(counter)
    })
  }
}
</script>
<style>
html, body {
  overflow-x: hidden;
  max-width: 100%;
}
*{
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 26px;
  font-size: 15px
}
.body-inner {
    position: relative;
    overflow-y: hidden;
    overflow-x: hidden;
}
.container, .container-fluid{
    width: 100%;
   position: relative;
    margin-right: auto;
    margin-left: auto;
}
.row {
    display: flex;
    flex-wrap: wrap;
     margin-right: -15px;
    margin-left: -15px;
    justify-content: center;
}
.top-info-bar {
  background-color: #e1e5e9;
}
/* MAIN BANNER */

.banner-area {
    position: relative;
    width: 100%;
    margin-bottom: 75px;
    overflow: visible;
    color: #fff;
}


/* CAROUSEL */

.carousel-inner {
    width: 100%;
}

.carousel-item {
    position: relative;
    width: 100%;
    overflow: hidden;
}
@media (min-width: 768px) {
  .custom-toggler {
    display: none !important;
  }
   .navbar-menu {
        display: flex !important;
    }
}
/* BACKGROUND IMAGE */

.slider-image {
    display: block;
    width: 100%;
    height: 650px;
    object-fit: cover;
    object-position: center center;
}

.carousel-item::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
    z-index: 1;
    pointer-events: none;
}


/* CAPTION */

.carousel-caption {
    position: absolute;

    top: 50%;
    bottom: auto;

    width: 45%;

    padding: 0;
    margin: 0;

    transform: translateY(-50%);

    z-index: 5;

    color: #fff;

    text-transform: uppercase;
}

/* center SLIDES */
.carousel-caption.slide-center {
    left: auto;
    right: auto;

    text-align: center;
}
/* ONLY SLIDE 1 */

.carousel-inner .carousel-item:first-child .carousel-caption {
    position: absolute;

    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;

    width: 90%;
    max-width: 800px;

    transform: translate(-50%, -50%);

    text-align: center;

    margin: 0;
    padding: 0;

    z-index: 5;
}


/* Slide 1 heading */

.carousel-inner .carousel-item:first-child .carousel-caption h2 {
    text-align: center;

    margin: 0 0 20px;

    font-size: 32px;

    line-height: 1.2;
}


/* Slide 1 sub-heading */

.carousel-inner .carousel-item:first-child .carousel-caption h3 {
    text-align: center;

    margin: 0 0 30px;

    font-size: 48px;

    line-height: 1.2;
}


/* Slide 1 buttons */

.carousel-inner .carousel-item:first-child .carousel-caption p {
    display: flex;

    justify-content: center;

    align-items: center;

    flex-wrap: wrap;

    gap: 12px;

    margin: 0;

    text-align: center;
}


/* Slide 1 buttons */

.carousel-inner .carousel-item:first-child .carousel-caption p .btn {
    margin: 0 !important;

    min-width: 160px;
}

/* LEFT SLIDES */

.carousel-caption.slide-left {
    left: 12%;
    right: auto;

    text-align: left;
}


/* RIGHT SLIDE */

.carousel-caption.slide-right {
    left: auto;
    right: 12%;

    text-align: right;
}


/* HEADINGS */

.carousel-caption h2 {
    margin: 0 0 20px;

    font-family: Arial, Helvetica, sans-serif;

    font-size: 25px;
    line-height: 1.2;

    font-weight: 500;

    color: #fff;

    background: none;
}


.carousel-caption h3 {
    margin: 0 0 30px;

    font-size: 30px;
    line-height: 1.15;

    font-weight: 800;

    color: #fff;
}


.carousel-caption h4 {
    display: inline-block;

    margin: 0 0 20px;

    padding: 7px 12px;
     
    background-color: #f5b400;

    color: #fff;

    font-size: 18px;

    font-weight: 600;
}


/* DESCRIPTION */

.carousel-caption .description {
    margin: 0 0 30px;

    max-width: 600px;

    font-size: 18px;
    line-height: 1.6;

    color: #fff;
}


/* RIGHT DESCRIPTION */

.slide-right .description {
    margin-left: auto;
}


/* BUTTON AREA */

.carousel-buttons {
    display: flex;

    align-items: center;

    flex-wrap: wrap;

    gap: 12px;

    margin: 0;

    padding: 0;
}


/* RIGHT BUTTONS */

.slide-right .carousel-buttons {
    justify-content: flex-end;
}


/* ALL CAROUSEL BUTTONS */

.carousel-caption .btn {
    display: inline-flex;

    align-items: center;

    justify-content: center;

    min-height: 48px;

    padding: 11px 22px;

    border-radius: 0;

    border: 2px solid #f5b400;

    color: #fff;

    font-size: 14px;

    font-weight: 700;

    text-transform: uppercase;

    text-decoration: none;

    white-space: nowrap;

    transition: all 0.3s ease;
}


/* SERVICE BUTTON */

#btn-service {
  margin-right: 15px;
    background-color: #f5b400;
    color: #fff;
}

#btn-service:hover {
    background-color: #222;
    color: #ffb600;
    text-shadow: 0 0 5px #fff;
}


/* CONTACT BUTTON */

#btn-contact {
    background-color: transparent;
    color: #fff;
}

#btn-contact:hover {
    background-color: #f5b400;
    color: #fff;
}


/* SERVICE BUTTON 2 */

#service-btn {
    background-color: transparent;
    color: #fff;
}

#service-btn:hover {
    background-color: #f5b400;
    color: #fff;
}


/* QUOTE BUTTON */

#quote-btn {
    background-color: #f5b400;
    color: #fff;
}

#quote-btn:hover {
    background-color: #222;
    color: #fff;
}


/* LEARN MORE */

#learnmore-btn {
    background-color: transparent;
    color: #fff;
    margin-left: 10px;
}

#learnmore-btn:hover {
    background-color: #f5b400;
    color: #fff;
}


/* =====================================================
   TEXT ANIMATION
===================================================== */

.carousel-item h2,
.carousel-item h3,
.carousel-item h4,
.carousel-item p,
.carousel-item .carousel-buttons {

    opacity: 0;

    transition:
        opacity 0.5s ease,
        transform 0.5s ease;
}


.carousel-item h2 {
    transform: translateX(80px);
}


.carousel-item h3 {
    transform: translateX(-80px);
}


.carousel-item h4,
.carousel-item p,
.carousel-item .carousel-buttons {
    transform: translateY(30px);
}


.carousel-item.active h2,
.carousel-item.active h3,
.carousel-item.active h4,
.carousel-item.active p,
.carousel-item.active .carousel-buttons {

    opacity: 1;

    transform: translateX(0) translateY(0);
}


.carousel-item.active h2 {
    transition-delay: 0.1s;
}

.carousel-item.active h3 {
    transition-delay: 0.2s;
}

.carousel-item.active h4 {
    transition-delay: 0.2s;
}

.carousel-item.active p {
    transition-delay: 0.3s;
}

.carousel-item.active .carousel-buttons {
    transition-delay: 0.4s;
}

/* =====================================================
   INDICATORS
===================================================== */

.carousel-indicators {

    position: absolute;

    z-index: 25;

    left: 0;
    right: 0;

    bottom: 20px;

    margin: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 10px;
}


/* CIRCLE */

.carousel-indicators button {

    width: 11px !important;
    height: 11px !important;

    padding: 0 !important;

    margin: 0 !important;

    border: 0 !important;

    border-radius: 50% !important;

    background-color: #fff !important;

    opacity: 0.6 !important;

    flex: 0 0 11px !important;

    box-sizing: border-box !important;

    text-indent: -999px;

    transition: all 0.3s ease;
}


/* ACTIVE CIRCLE */

.carousel-indicators button.active {

    width: 13px !important;
    height: 13px !important;

    flex-basis: 13px !important;

    background-color: #f5b400 !important;

    opacity: 1 !important;

    border-radius: 50% !important;
}


/* =====================================================
   ACTION BOX
===================================================== */

.action-box {

    position: absolute;

    z-index: 30;

    left: 50%;

    bottom: -60px;

    transform: translateX(-50%);

    width: min(90%, 1100px);

    min-height: 100px;

    padding: 25px 35px;

    box-sizing: border-box;

    background-color: #f5b400;

    color: #fff;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 25px;
}


/* ACTION TEXT */

.action-box h3 {

    margin: 0;

    padding: 0;

    color: #fff;

    font-size: 25px;

    line-height: 1.3;

    font-weight: 700;
}


/* ACTION BUTTON */

.action-box .btn-dark {

    flex-shrink: 0;

    padding: 12px 22px;

    border: 1px solid #111;

    border-radius: 0;

    background-color: #111;

    color: #fff;

    font-size: 14px;

    font-weight: 700;

    text-transform: uppercase;

    white-space: nowrap;

    transition: all 0.3s ease;
}


.action-box .btn-dark:hover {

    background-color: #fff;

    color: #111;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 991px) {

    .slider-image {
        height: 550px;
    }


    .carousel-caption {
        width: 55%;
    }


    .carousel-caption .slide-right{
        left: 8%;
    }


.carousel-caption .slide-left {
        right: 8%;
    }


    .carousel-caption h2 {
        font-size: 25px;
    }


    .carousel-caption h3 {
        font-size: 38px;
    }


    .carousel-caption h4 {
        font-size: 16px;
    }


    .carousel-caption .description {
        font-size: 16px;
    }


    .carousel-control-prev {
        left: 15px;
    }


    .carousel-control-next {
        right: 15px;
    }


    .action-box {
        width: 88%;
        padding: 22px 25px;
    }


    .action-box h3 {
        font-size: 20px;
    }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 767px) {

    .banner-area {
        margin-bottom: 155px;
    }


    .slider-image {

        height: 520px;

        object-fit: cover;

        object-position: center center;
    }


    /* Caption */

    .carousel-caption,
    .carousel-caption.slide-center,
    .carousel-caption.slide-left,
    .carousel-caption.slide-right {

        top: 50%;

        left: 7%;
        right: 7%;

        width: auto;

        transform: translateY(-50%);

        text-align: left;
    }


    .carousel-caption h2 {

        font-size: 21px;

        line-height: 1.25;

        margin-bottom: 14px;
    }


    .carousel-caption h3 {

        font-size: 29px;

        line-height: 1.2;

        margin-bottom: 22px;
    }


    .carousel-caption h4 {

        font-size: 14px;

        margin-bottom: 14px;
    }


    .carousel-caption .description {

        font-size: 14px;

        line-height: 1.5;

        margin-bottom: 22px;
    }


    /* Buttons */

    .carousel-buttons,
    .slide-right .carousel-buttons {

        justify-content: flex-start;

        flex-direction: column;

        align-items: flex-start;

        gap: 10px;
    }


    .carousel-caption .btn {

        min-width: 155px;

        min-height: 44px;

        padding: 9px 15px;

        font-size: 13px;
    }


    /* Hide arrows on mobile */

    .carousel-control-prev,
    .carousel-control-next {

        display: none !important;
    }


    /* Indicators */

    .carousel-indicators {

        bottom: 18px;

        gap: 8px;
    }


    .carousel-indicators button {

        width: 9px !important;
        height: 9px !important;

        flex-basis: 9px !important;
    }


    .carousel-indicators button.active {

        width: 11px !important;
        height: 11px !important;

        flex-basis: 11px !important;
    }


    /* Action Box */

    .action-box {

        bottom: -130px;

        width: 90%;

        min-height: auto;

        padding: 20px 18px;

        flex-direction: column;

        justify-content: center;

        text-align: center;

        gap: 15px;
    }


    .action-box h3 {

        font-size: 18px;

        line-height: 1.35;
    }


    .action-box .btn-dark {

        width: 100%;

        max-width: 220px;

        padding: 11px 15px;

        font-size: 13px;
    }

}


/* =====================================================
   SMALL MOBILE
===================================================== */

@media (max-width: 480px) {

    .banner-area {
        margin-bottom: 155px;
    }


    .slider-image {

        height: 500px;

        object-position: center center;
    }


    .carousel-caption,
    .carousel-caption.slide-center,
    .carousel-caption.slide-left,
    .carousel-caption.slide-right {

        left: 6%;

        right: 6%;

        width: auto;
    }


    .carousel-caption h2 {

        font-size: 18px;

        margin-bottom: 12px;
    }


    .carousel-caption h3 {

        font-size: 24px;

        margin-bottom: 18px;
    }


    .carousel-caption h4 {

        font-size: 12px;

        padding: 6px 9px;
    }


    .carousel-caption .description {

        font-size: 13px;

        line-height: 1.45;
    }


    .carousel-caption .btn {

        min-width: 145px;

        min-height: 42px;

        font-size: 12px;

        padding: 8px 13px;
    }


    .action-box {

        bottom: -125px;

        width: 92%;

        padding: 18px 14px;
    }


    .action-box h3 {

        font-size: 16px;
    }

}


/* =====================================================
   VERY SMALL MOBILE
===================================================== */

@media (max-width: 360px) {

    .slider-image {
        height: 470px;
    }


    .carousel-caption h2 {
        font-size: 16px;
    }


    .carousel-caption h3 {
        font-size: 21px;
    }


    .carousel-caption .description {
        font-size: 12px;
    }


    .carousel-caption .btn {

        min-width: 135px;

        font-size: 11px;
    }


    .action-box {

        bottom: -130px;

        width: 94%;
    }


    .action-box h3 {

        font-size: 14px;
    }

}
.carousel-control-prev, 
.carousel-control-next {
    width: 60px !important; 
    height: 60px;
    background-image: none !important; 
    margin-top: 25%;
     background-color: rgba(0, 0, 0, 0.50) !important;
    display: flex;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1 !important; 
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.carousel-control-prev:hover, 
.carousel-control-next:hover {
    background-color: #f5b400 !important;
    width: 60px !important; 
}
.prev-icon,
.next-icon{
  margin-left: 50px;
  margin-right: 50px;
}

@media (min-width: 768px) {
  .custom-toggler {
    display: none !important;
  }
   .navbar-menu {
        display: none !important;
    }
}
/*-------------features--------------------*/
.ts-features {
  overflow-x: hidden;
  padding: 70px 0;
}

.ts-title {
  font-weight: 300;
  text-transform: uppercase;
  font-size: 18px;
  margin: 0;
}

.ts-sub-title, .into-sub-title {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 30px;
  color: #212121;
  margin: 10px 0;
}

.ts-service-box-icon i {
  font-size: 36px;
  color: #ffb600;
  font-weight: 900;

}
.ts-service-box-title {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
}

.accordion-group .card {
  border: 1px solid #eee;
}

.accordion-group .card-header .btn {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 13px 15px;
  border: none;
  background: #f9f9f9;
  position: relative;
}

.accordion-group .card-header .btn:hover {
  color: #f5b400;
}
.accordion-group .card-header .btn::after {
  content: '\f107';
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  float: right;
  transition: transform 0.3s;
}

.accordion-group .card-header .btn:not(.collapsed)::after {
  transform: rotate(180deg);
}
.gap-20 {
  height: 20px;
}

</style>

