<template>
 <div class="body-inner">
<router-view/>
    <!--------news right-sidebar--PAGE----->
    <section class="news-right-sidebar p-0">
        <div class="container-fluid p-0">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="page-img">
                        <img src="@/assets/images/banner/banner1.jpg" alt="banner-1" class="img-fluid">
                        <div class="page-title">
                            <h3 class="text-center">NEWS</h3>
                            <nav class="page-icon">
                                <ol class="breadcrumb d-flex justify-content-center" aria-label="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                    <li class="breadcrumb-item"><a href="">news</a></li>
                                    <li class="breadcrumb-item"><router-link to="/news-right-sidebar">News-right-sidebar</router-link></li>
                                </ol>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!---------news-section--------->
    <section class="news-right-sidebar">
        <div class="container">
        <div class="row d-flex">
        <div class="col-lg-8 order-lg-0 order-1 mb-5 mb-lg-0">
            <div class="post">
             <div class="post-media post-img">
                <img src="@/assets/images/news/news1.jpg" alt="post-img" class="img-fluid">
             </div>
             <div class="post-body mt-3">
                <span class="author-name"><i class="far fa-user"></i>Admin</span>
                <span class="post-cat"><i class="fa-solid fa-folder-open"></i>News</span>
                <span class="post-meta-date"><i class="far fa-calendar"></i>June,14 2016</span>
                <span class="post-comment"><i class="far fa-comment"></i>03 Comments</span>
             </div>
             <div class="entry-header">
             <h4 class="entry-title fs-5 fw-bold mt-3">
                We Just Completes $17.6 million Medical Clinic in Mid-Missouri
             </h4>
            </div>
                  <div class="entry-content">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur ...</p>
                  </div>
                  <div class="post-footer">
                    <a href="#" class="btn btn-warning">Continue Reading</a>
                  </div>
            </div>
<hr>
            <div class="post">
             <div class="post-media news-video-box">
               <span>Sorry,<br>This video does not exist.</span>
             </div>
             <div class="post-body mt-3">
                <span class="author-name"><i class="far fa-user"></i>Admin</span>
                <span class="post-cat"><i class="fa-solid fa-folder-open"></i>News</span>
                <span class="post-meta-date"><i class="far fa-calendar"></i>June,14 2016</span>
                <span class="post-comment"><i class="far fa-comment"></i>03 Comments</span>
             </div>
             <div class="entry-header">
             <h4 class="entry-title fs-5 fw-bold mt-3">
               Thandler Airport Water Reclamation Facility Expansion Project Named
             </h4>
            </div>
                  <div class="entry-content">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur ...</p>
                  </div>
                  <div class="post-footer">
                    <a href="#" class="btn btn-warning">Continue Reading</a>
                  </div>
            </div>

          <hr>
           <div class="post">
             <div class="post-media post-img">
                <img src="@/assets/images/news/news3.jpg" alt="post-img" class="img-fluid">
             </div>
             <div class="post-body mt-3">
                <span class="author-name"><i class="far fa-user"></i>Admin</span>
                <span class="post-cat"><i class="fa-solid fa-folder-open"></i>News</span>
                <span class="post-meta-date"><i class="far fa-calendar"></i>June,14 2016</span>
                <span class="post-comment"><i class="far fa-comment"></i>03 Comments</span>
             </div>
             <div class="entry-header">
             <h4 class="entry-title fs-5 fw-bold mt-3">
               Silicon Bench and Cornike Begin Construction of Large-Scale Solar Facilities
                  for Trade
             </h4>
            </div>
                  <div class="entry-content">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur ...</p>
                  </div>
                  <div class="post-footer">
                    <a href="#" class="btn btn-warning">Continue Reading</a>
                  </div>
            </div>
            <div class="gap-20"></div>
            <hr>
                           <nav>
            <ul class="pagination mt-5">
                <li class="page-item"><a href="#" class="page-link">
                    <i class="fa fa-angle-double-left"></i></a></li>
                  <li class="page-item"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                      <li class="page-item"><a href="#" class="page-link">3</a></li>
                        <li class="page-item"><a href="#" class="page-link">
                            <i class="fa fa-angle-double-right"></i>
                        </a></li>
            </ul>
        </nav>

        </div>

        <div class="col-lg-4 order-0 order-lg-0">
        <div class="sidebar sidebar-left">
            <div class="widget">
            <h3 class="widget-title">RECENT POSTS</h3>
            <div class="recent-posts">
                <ul class="list-unstyled">
                    <li class="d-flex align-items-center">
                        <div class="post-img">
                            <a href="#"><img src="@/assets/images/news/news1.jpg" alt="news1" class="post-img"></a>
                        </div>
                        <div class="entry-title">
                            <h3>We Just Completes $17.6 Million Medical Clinic
                                In Mid-missouri</h3>
                        </div>
                    </li>
                </ul>
            </div>
            <hr>

            <div class="recent-posts">
                <ul class="list-unstyled">
                    <li class="d-flex align-items-center">
                        <div class="post-img">
                            <a href="#"><img src="@/assets/images/news/news2.jpg" alt="news1" class="post-img"></a>
                        </div>
                        <div class="entry-title">
                            <h3>Thandler Airport Water Reclamation Facility
                                Expansion Project Named</h3>
                        </div>
                    </li>
                </ul>
            </div>
            <hr>

            <div class="recent-posts">
                <ul class="list-unstyled">
                    <li class="d-flex align-items-center">
                        <div class="post-img">
                            <a href="#"><img src="@/assets/images/news/news3.jpg" alt="news3" class="post-img"></a>
                        </div>
                        <div class="entry-title">
                            <h3>Silicon Bench And Cornike Begin Construction
                                Solar Facilities</h3>
                        </div>
                    </li>
                </ul>
            </div>
            
        
            <div class="widget mt-5">
            <h3 class="widget-title">Catagories</h3>
            <div class="recent-posts">
                <ul class="list-unstyled nav-tabs">
                       <li><a href="#">CONSTRUCTION</a></li>
                       <li><a href="#">COMMERCIAL</a></li>
                      <li> <a href="#">BUILDINGS</a></li>
                       <li><a href="#">SAFETY</a></li>
                       <li><a href="#">STRUCTURE</a></li>
                </ul>
            </div>

              <div class="widget mt-5">
            <h3 class="widget-title">ARCHIEVES</h3>
            <div class="recent-posts">
                <ul class="list-unstyled nav-tabs">
                    <li><a href="#">February,2016</a></li>
                       <li><a href="#">January,2016</a></li>
                       <li><a href="#">December,2015</a></li>
                     <li><a href="#">November,2015</a></li>
                      <li><a href="#">October,2015</a></li>
                </ul>
            </div>

             <div class="widget mt-5">
            <h3 class="widget-title">TAGS</h3>
            <div class="widget-tags">
                <ul class="list-unstyled">
                    <li><a href="#">CONSTRUCTION</a></li>
                       <li><a href="#">DESIGN</a></li>
                       <li><a href="#">PROJECT</a></li>
                     <li><a href="#">BUILDING</a></li>
                      <li><a href="#">FINANCE</a></li>
                       <li><a href="#">SAFETY</a></li>
                        <li><a href="#">CONTRACTING</a></li>
                         <li><a href="#">PLANNING</a></li>
                </ul>
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
    name:'news-right-sidebar'
}
</script>