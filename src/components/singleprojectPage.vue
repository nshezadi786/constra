<template>
<div class="body-inner">
  <router-view/>
  <!--------single-project-PAGE----->
  <section class="aboutsus p-0">
    <div class="container-fluid p-0">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="page-img">
            <img src="@/assets/images/banner/banner1.jpg" alt="banner-1" class="img-fluid">
            <div class="page-title">
              <h3 class="text-center">PROJECT</h3>
              <nav class="page-icon">
                <ol class="breadcrumb d-flex justify-content-center" aria-label="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                  <li class="breadcrumb-item"><a href="">PROJECT</a></li>
                  <li class="breadcrumb-item"><router-link to="/project-single">Project single</router-link></li>
                </ol>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-----------------single-projects-->
<section class="carousel-slider">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8">
            <div class="carousel slide" id="myCarousel" data-bs-ride="carousel">
              <div class="carousel-inner">
                  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </button>
                <div class="carousel-item active">
                  <img src="@/assets/images/projects/project5.jpg" alt="slider-bg1" class="img-fluid">
                </div>


                <div class="carousel-item">
                  <img src="@/assets/images/projects/project4.jpg" alt="slider-bg2" class="img-fluid  w-100">
                  </div>
                </div>
            </div>
          </div>

          <div class="col-lg-4 mt-5 mt-lg-0 text-start">
             <h3 class="column-title mt-0 mb-2">CAPITAL TELTWAY BUILDINGS</h3>
             <p class="text-muted">Morbi turpis nisl, auctor ut nisl vel, pellentesque euismod nunc nunc accumsan imperdiet.</p>
             <ul class="project-info list-unstyled text-start">
              <li>
                <p class="project-info-title">Architect</p>
                <p class="project-info-content text-muted">Dlarke Pelli Incorp</p>
             </li>
             <li>
                <p class="project-info-title">Location</p>
                <p class="project-info-content text-muted">McLean, VA</p>
             </li>
             <li>
                <p class="project-info-title">Size</p>
                <p class="project-info-content text-muted">65,000 SF</p>
             </li>
             <li>
                <p class="project-info-title">Year Completed</p>
                <p class="project-info-content text-muted">2015</p>
             </li>
             <li>
                <p class="project-info-title">Categories</p>
                <p class="project-info-content text-muted">Commercial, Interiors</p>
             </li>
             <li>
                <p class="project-link">
                    <router-link to=/project-single class="btn btn-warning" data-bs-target="_blank">VIEW PROJECT</router-link>
                </p>
             </li>
             </ul>
          </div>
        </div>
      </div>
</section>
  </div>

</template>
<script>
export default{
    name:'singleprojectPage'
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

    