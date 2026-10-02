<template>
    <div class="body-inner">
<router-view/>
  <!--------news-single-PAGE----->
  <section class="news-single p-0">
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
                  <li class="breadcrumb-item"><router-link to="/news-single">News-single</router-link></li>
                </ol>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<section class="news-single">
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
              <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur ...</p>
              <p class="text-muted">Kucididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do</p>
              <p class="text-muted">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu</p>

              <blockquote>
                <p class="text-start text-muted">"Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Integer posuere erat a ante quam est corrupti ut blanditiis sint aperiam placeatab.
                </p>
                <footer class="blockquote-footer">ANGER MATHE</footer>
              </blockquote>
              <p class="text-muted">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni dolores eos quira tione voluptatem sequi nesciunt. Neque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ue magnam aliquam quaerat voluptatem.
              </p>
            </div>
            <div class="tags-area align-items-center justify-content-between"></div>
            <div class="widget-tags">
              <ul class="list-unstyled">
                <li><a href="#">CONSTRUCTION</a></li>
                <li><a href="#">SAFETY</a></li>
                <li><a href="#">PLANNING</a></li>
              </ul>
            </div>
            <div class="share-items d-flex justify-content-center">
              <ul class="list-unstyled post-social-icons">
                <li class="social-icon-head">Share:</li>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
              </ul>
            </div>

            <div class="author-box d-sm-flex d-nlock">
              <div class="author-img mb-4 mb-md-0">
                <img src="@/assets/images/news/avator1.png" alt="author-img" class="img-fluid">
              </div>
              <div class="author-info">
                <h3>Elton Themen <span>Site Engineer</span></h3>
                <p class="text-muted">Lisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad
                  vene minim
                  veniam, quis nostrud exercitation nisi ex ea commodo.</p>
                <p class="author-url mb-0 text-muted">
                  "Website:" <span><a href="#"></a>http://www.example.com</span>
                </p>
              </div>
            </div>

            <div class="comment-area">
              <h3 class="comment-heading pb-2">07 COMMENTS</h3>
              <ul class="list-unstyled comment-list">
                <li>
                  <div class="comment d-flex author-img">
                    <img src="@/assets/images/news/avator1.png" alt="author-img">

                    <div class="comment-body">
                      <div class="meta-data">
                        <span class="comment-author mr-3">
                          Michelle Aimber</span>
                        <span class="comment-date float-right">January 17, 2016 at 1:38 pm</span>
                      </div>
                      <div class="comment-content">
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen.</p>
                      </div>
                      <div class="comment-reply text-left">
                        <a href="#" class="comment-reply fw-bold">Reply</a>
                      </div>
                    </div>
                  </div>

<hr>
                </li>
                <li class="reply-comment">
                  <div class="comment d-flex author-img">
                    <img src="@/assets/images/news/avator2.png" alt="author-img">

                    <div class="comment-body">
                      <div class="meta-data">
                        <span class="comment-author mr-3">
                         Tom Harnandez</span>
                        <span class="comment-date float-right">January 17, 2016 at 1:38 pm</span>
                      </div>
                      <div class="comment-content">
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen.</p>
                      </div>
                      <div class="comment-reply text-left">
                        <a href="#" class="comment-reply fw-bold">Reply</a>
                      </div>
                    </div>
                  </div>
              </li>
              <hr>
              <li>
               <div class="comment d-flex author-img">
                    <img src="@/assets/images/news/avator3.png" alt="author-img">

                    <div class="comment-body">
                      <div class="meta-data">
                        <span class="comment-author mr-3">
                         Genelia Dusteen</span>
                        <span class="comment-date float-right">January 17, 2016 at 1:38 pm</span>
                      </div>
                      <div class="comment-content">
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris
                          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen.</p>
                      </div>
                      <div class="comment-reply text-left">
                        <a href="#" class="comment-reply fw-bold">Reply</a>
                      </div>

                      </div>
                    </div>
              </li>
              </ul>     
            </div>

            <div class="form-comment border-box">
              <h3 class="title-comment">ADD COMMENT</h3>
              <form action="" role="form">
                <div class="row d-flex">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="message">
                        <textarea id="message" class="form-control required-field"
                        placeholder="Your comment" rows="10" required></textarea>
                      </label>
                    </div>
                  </div>
                  <div class="col-md-4 mt-3">
                     <div class="form-group">
                      <label for="name">
                        <input id="name" name="name" class="form-control" type="text"
                        placeholder="Your name" required>
                      </label>
                    </div>
                  </div>
                    <div class="col-md-4 mt-3">
                     <div class="form-group">
                      <label for="email">
                        <input id="email" name="email" class="form-control" type="email"
                        placeholder="Your email" required>
                      </label>
                    </div>
                  </div>
                    <div class="col-md-4 mt-3">
                     <div class="form-group">
                      <label for="website">
                        <input id="website" name="website" class="form-control" type="website"
                        placeholder="Your website" required>
                      </label>
                    </div>
                  </div>
                  <div class="clearfix mt-5">
                    <button class="btn btn-warning" type="submit" aria-label="post comment">POST COMMENT</button>
                  </div>
                </div>
              </form>
            </div>


          </div>

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
                      <a href=""><img src="@/assets/images/news/news3.jpg" alt="news3" class="post-img"></a>
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
    name:'news-single'
}
</script>