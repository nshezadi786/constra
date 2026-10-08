<template>
  <div class="body-inner">
    <router-view/>
    <!--------single-service-PAGE----->
    <section class="service-single p-0">
        <div class="container-fluid p-0">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="page-img">
                        <img src="@/assets/images/banner/banner1.jpg" alt="banner-1" class="img-fluid">
                        <div class="page-title">
                            <h3 class="text-center">SERVICE</h3>
                            <nav class="page-icon">
                                <ol class="breadcrumb d-flex justify-content-center" aria-label="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                    <li class="breadcrumb-item"><a href="">services</a></li>
                                    <li class="breadcrumb-item"><router-link to="/Service-Single">Single service</router-link></li>
                                </ol>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--------single-service-section-->
    <section class="service-single">
        <div class="container">
            <div class="row d-flex">
                <div class="col-xl-3 col-lg-4">
                    <div class="sidebar">
                        <div class="widget">
                            <h3 class="widget-title">SOLUTIONS</h3>
                            <ul class="nav service-menu">
                    <li><router-link to="/Service-Single">Home Construction</router-link> </li>
                   <li class="active"><router-link to="/Service-Single">Building Remodels</router-link></li>
                   <li><router-link to="/Service-Single">Interior Design</router-link></li>
                   <li><router-link to="/Service-Single">Exterior Design</router-link></li>
                    <li><router-link to="/Service-Single">Safety Management</router-link></li>
                   <li><router-link to="/Service-Single">Renovation</router-link></li>
                            </ul>
                        </div>
                        <div class="widget mt-3">
                            <div class="quote-item">
                                "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                ad
                                squid."
                            </div>
                            <div class="footer-item">
                                <img src="@/assets/images/clients/testimonial1.png" alt="clients" class="testimonials-tumbs">
                                <h3 class="quote-author pt-3">GABRIAL DENIS</h3>
                                <p class="quote-subtext">Chairman OKT,industries</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-4">
                    <div class="inner-content">
                        <h3 class="column-title fw-bold">BUILDING REMODELS</h3>
                        <div class="row d-flex">
                            <div class="col-md-12">
                                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    adipiscing erat eget risus
                                    sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a,
                                    sagittis accumsan
                                    ipsum. Pellentesque ultrices ultrices sapien.</p>
                                <p class="text-muted">Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa
                                    uada mi elementum elementum. , nec
                                    tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nulla commodo
                                    iaculis ligula, ac dapibus quam ornare ut. Praesent ac hendrerit sem, et tempus sem
                                </p>

                                <div class="gap-40"></div>

                                <div class="carousel slide" id="myCarousel" data-bs-ride="carousel">
                                    <div class="carousel-inner">
         <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>

              <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
                         <div class="carousel-item active">
                      <img src="@/assets/images/projects/project2.jpg" alt="slider-bg1" class="img-fluid">
                           </div>
                     <div class="carousel-item">
                     <img src="@/assets/images/projects/project1.jpg" alt="slider-bg2"
                             class="img-fluid  w-100">
                        </div>
                                    </div>
                                </div>
                                <div class="gap-40"></div>

         <div class="row mt-5">
                    <div class="col-md-6 ">
                 <h3 class="column-title-small">What Makes Us Different</h3>
               <p class="text-muted">Anim pariatur cliche reprehenderit, enim eiusmod high life
                 accusamus terry richardson ad squid. 3 wolf
                         moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                         nesciunt laborum eiusmod.
                      Consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin
                     pellentesque et non erat
                     tincidunt nunc posuere.</p>
                 <ul class="list-arrow list-unstyled text-muted">
              <li>Partnership Strategy tristique eleifend.</li>
                 <li>Opporutnity to work with amet elit a.</li>
                <li>Saving Time to Deal with commodo iaculis.</li>
               <li>Leadership skills to manage erat volutpat.</li>
                <li>Cut cost without sacrificing dolore magna.</li>
                 <li>Automate your business elis tristique.</li>                 
                         </ul>
                      </div>
                      <div class="col-md-6">
                    <h3 class="column-title-small">YOU SHOULD KNOW</h3>
                       <div class="accordion" id="faqaccordion">
                           <div class="card">
                         <div class="card-header">
                               <button class="btn btn-link btn-block text-left"
                               data-bs-toggle="collapse" data-bs-target="#collapseone">
                                    Does the law require head protection on construction sites?
                        </button>
                           </div>
                           <div id="collapseone" class="collapse" data-bs-parent="#faqaccordion">
                              <div class="card-body text-muted">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life
                              accusamus terry
                           richardson ad squid. 3 wolf
                            moon officia aute, non cupidata
                                                    </div>
                                                </div>
                                            </div>
                                            <br>

                                            <div class="accordion" id="faqaccordion">
                                                <div class="card">
                                                    <div class="card-header">
                                                        <button class="btn btn-link btn-block text-left"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseone">
                                                            What are the first aid requirements for sites?
                                                        </button>
                                                    </div>
                                                    <div id="collapseone" class="collapse"
                                                        data-bs-parent="#faqaccordion">
                                                        <div class="card-body text-muted">
                                                            Anemi nim veniam, quis nostrud exercitation ullamco laboris
                                                            nisi ut aliquip ex
                                                            ea com modo consequat.
                                                            Duis aute irure dolor in reprehenderit in voluptate velit
                                                            esse cillum dolore eu
                                                            fugiat nulla pariatur.
                                                            Excepteur sint occaecat cupid henderit in voluptate velit
                                                            esse cillu oris nisi
                                                            ut aliquip ex ea com
                                                            matat.
                                                        </div>
                                                    </div>
                                                </div>
                                                <br>

                                                <div class="accordion" id="faqaccordion">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <button class="btn btn-link btn-block text-left"
                                                                data-bs-toggle="collapse" data-bs-target="#collapseone">
                                                                What is an appointed person?
                                                            </button>
                                                        </div>
                                                        <div id="collapseone" class="collapse"
                                                            data-bs-parent="#faqaccordion">
                                                            <div class="card-body text-muted">
                                                                Lorem Ipsum is simply dummy text of the printing and
                                                                typesetting industry.
                                                                Lorem Ipsum has been the
                                                                industry’s standard dummy text ever since the 1500s,
                                                                when an unknown printer
                                                                took a galley of type and
                                                                scrambled it to make a type specimen book.

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
              <div class="row mt-5">
                <div class="col-lg-12 action text-md-right mt-5 mt-md-0">
                    <div class="action-box align-items-center d-flex justify-content-center">
                <h3 class="mb-0 me-auto">Interested with this service</h3>
                <router-link to="/contact" class="btn btn-dark fw-bold">REQUEST QUOTE</router-link>
              </div>
                                                

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</div>
    </template>

    <script>
export default{
    name:' ServiceSinglePage'
}
</script>
<style scoped>
.carousel-control-prev, 
.carousel-control-next {
    width: 60px !important; 
    height: 60px;
    background-image: none !important; 
    margin-top: 25%;
     background-color: rgba(0, 0, 0, 0.50) !important;
    display: flex;
    top: 18%;
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
</style>
