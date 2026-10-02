<template>
   <div class="body-inner">
<router-view/>
  <!--------pricing--PAGE----->
  <section class="pricing p-0">
    <div class="container-fluid p-0">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="page-img">
            <img src="@/assets/images/banner/banner1.jpg" alt="banner-1" class="img-fluid">
            <div class="page-title">
              <h3 class="text-center">PRICING</h3>
              <nav class="page-icon">
                <ol class="breadcrumb d-flex justify-content-center" aria-label="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                  <li class="breadcrumb-item"><a href="#">Company</a></li>
                  <li class="breadcrumb-item"><router-link to="/pricing">Pricing</router-link></li>
                </ol>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-----------pricing-section------->
    <section class="pricing">
        <div class="container">
            <div class="row d-flex">
                 <div class="col-12 mb-5">
            <h2 class="section-title">GRAB THE PACKAGES</h2>
            <h3 class="section-sub-title">PRICING</h3>
          </div>
        </div>
        <div class="row d-flex">
                <div class="col-lg-4 col-md-6">
                    <div class="pricing-box">
                        <div class="pricing-header">
                            <div class="pricing-name">
                                <h3>BUILDING REMODELS</h3>
                                <h2>
                                    <div class="pricing-price">
                                        <span class="curreny fs-1">$</span>
                                        <strong>89.9</strong>
                                        <small>/MONTH</small>
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>

                  
                   <div class="pricing-features mt-lg-0 mt-0">
    <ul class="list-unstyled">
        <li><h4 class="text-muted">Project Management for Owners</h4></li>
        <li><h4 class="text-muted">Pre-construction feasibility</h4></li>
        <li><h4 class="text-muted">On-site representation</h4></li>
        <li><h4 class="text-muted">Quality control inspections</h4></li>
        <li><h4 class="text-muted">Schedule claim preparation/defense</h4></li>
        <li><h4 class="text-muted">Project phasing development</h4></li>
        <li><h4><a href="#" class="btn btn-dark mt-3 mb-3">ORDER NOW</a></h4></li>
    </ul>
</div>
                     </div>

                          <div class="col-lg-4 col-md-6">
                    <div class="pricing-box-2 bg-warning">
                        <div class="pricing-header">
                            <div class="pricing-name">
                                <h3>RENNOVATION</h3>
                                <h2>
                                    <div class="pricing-price">
                                        <span class="curreny fs-1">$</span>
                                        <strong>179.9</strong>
                                        <small>/MONTH</small>
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>

                   
                   <div class="pricing-featured mt-lg-0 mt-0">
    <ul class="list-unstyled">
        <li><h4 class="text-muted">Project Management for Owners</h4></li>
        <li><h4 class="text-muted">Pre-construction feasibility</h4></li>
        <li><h4 class="text-muted">On-site representation</h4></li>
        <li><h4 class="text-muted">Quality control inspections</h4></li>
        <li><h4 class="text-muted">Schedule claim preparation/defense</h4></li>
        <li><h4 class="text-muted">Project phasing development</h4></li>
        <li><h4><a href="#" class="btn btn-warning mt-3 mb-3">ORDER NOW</a></h4></li>
    </ul>
</div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="pricing-box">
                        <div class="pricing-header">
                            <div class="pricing-name">
                                <h3>HOME CONSTRUCTION</h3>
                                <h2>
                                    <div class="pricing-price">
                                        <span class="curreny fs-1">$</span>
                                        <strong>27.9</strong>
                                        <small>/MONTH</small>
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>

                   <div class="pricing-features mt-lg-0 mt-0">
    <ul class="list-unstyled">
        <li><h4 class="text-muted">Project Management for Owners</h4></li>
        <li><h4 class="text-muted">Pre-construction feasibility</h4></li>
        <li><h4 class="text-muted">On-site representation</h4></li>
        <li><h4 class="text-muted">Quality control inspections</h4></li>
        <li><h4 class="text-muted">Schedule claim preparation/defense</h4></li>
        <li><h4 class="text-muted">Project phasing development</h4></li>
        <li><h4><a href="#" class="btn btn-dark mt-3 mb-3">ORDER NOW</a></h4></li>
    </ul>
</div>
                </div>
                 </div>
            </div>
    </section>
</div>
    </template>
    <script>

export default {
  name: 'pricingPage',
}
</script>
<style scoped>
/*---------------pricing-page------*/

.pricing-features ul > li h4{
    font-size: 15px;
    margin-left: 15%;
    padding: 0px;
     background-color: #f4f4f4;
}
.pricing-features ul > li h4 a{
    margin-left: 20%;
}
.pricing-featured ul > li h4{
     font-size: 15px;
    margin-left: 15%;
    padding: 0px;
}
.pricing-featured ul > li h4 a{
     margin-left: 20%;
}
.pricing-features ul > li h4{
    font-size: 15px;
    margin-left: 15%;
    padding: 0px;
     background-color: #f4f4f4;
     color:rgb(102, 97, 97);
}
.pricing-features ul > li h4 a{
    margin-left: 20%;
}
.pricing-featured ul > li h4{
     font-size: 15px;
    margin-left: 15%;
    padding: 0px;
}
.pricing-featured ul > li h4 a{
     margin-left: 20%;
}

</style>