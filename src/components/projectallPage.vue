<template>
<div class="body-inner">
   <router-view/>
     <!-------PROJECT-ALL-PAGE----->
  <section class="PROJECTS p-0">
    <div class="container-fluid p-0">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="page-img">
            <img src="@/assets/images/banner/banner1.jpg" alt="banner-1" class="img-fluid">
            <div class="page-title">
              <h3 class="text-center">PROJECTS</h3>
              <nav class="page-icon">
                <ol class="breadcrumb d-flex justify-content-center" aria-label="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                  <li class="breadcrumb-item"><a href="">PROJECTS</a></li>
                  <li class="breadcrumb-item"><router-link to="/projects">Project All</router-link></li>
                </ol>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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
 type="button"  role="tab" aria-controls="nav-Infrastructure" aria-selected="false">INFRASTRUCTURE</button>


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


         <div class="tab-pane fade" id="nav-Insfrastructure" role="tabpanel" aria-labelledby="nav-Insfrastructure-tab">
         <div class="image-overlay-container">
        <img src="@/assets/images/projects/project4.jpg" alt="Infrastructure Project 4" class="img-fluid" />
        <div class="overlay-text">
          <h3 class="project-title">Narrriot Headquarters</h3>
          <p class="project-cat">Infrastructure</p>
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
</div>

</template>
<script>
export default{
    name:'projectallPage'
}
</script>
