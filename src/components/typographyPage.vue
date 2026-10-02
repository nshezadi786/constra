<template>
  <div class="body-inner">
<router-view/>
    <!--------TYPOGRAPHY--PAGE----->
    <section class="typography p-0">
        <div class="container-fluid p-0">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="page-img">
                        <img src="@/assets/images/banner/banner1.jpg" alt="banner-1" class="img-fluid">
                        <div class="page-title">
                            <h3 class="text-center">TYPOGRAPHY</h3>
                            <nav class="page-icon">
                                <ol class="breadcrumb d-flex justify-content-center" aria-label="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                    <li class="breadcrumb-item"><a href="">features</a></li>
                                    <li class="breadcrumb-item"><router-link to="/typography">Typography</router-link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--------typography-section-->
    <section class="typography-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h3 class="column-title">HEADING</h3> 
                <div class="heading-section">
                <h1>h1. HEADING 1</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don’t look even slightly.</p>
          
                <h2>h2. HEADING 2</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don’t look even slightly.</p>
          
                <h3>h3. HEADING 3</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don’t look even slightly.</p>
          
                <h4>h4. HEADING 4</h4>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don’t look even slightly.</p>
          
                <h5>h5. HEADING 5</h5>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don’t look even slightly.</p>
          
                <h6>h6. HEADING 6</h6>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don’t look even slightly.</p>
          </div>
            </div>

            <div class="col-md-6">
                <h3 class="column-title">PARAGRAPH</h3>
                <p class="text-muted">Lorem ipsum dolor sit amet,<mark>a mark here </mark> adipisicing elit. Atque, iusto, 
                    minus sequi natus nesciunt rerum tenetur corrupti autem officiis fugiat expedita laudantium ea aspernatur</p>
                    <p><strong class="text-success">Consectetur adipisicing elit.</strong>  Corrupti, aliquam, 
                        voluptates, nulla, blanditiis totam voluptatem 
                        <strong class="text-danger">voluptatum quod ipsa debitis non</strong>  ab odio natus.</p>
                        <div class="gap-20"></div>
                        <h3 class="column-title">BLOCKQUOTE</h3>
                          <blockquote>
            <p class="text-start text-muted">"Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Integer posuere erat a ante quam est corrupti ut blanditiis sint aperiam placeatab.</p>
              <footer class="blockquote-footer"> SOMEONE FAMOUS IN<cite>Source title</cite></footer>
          </blockquote>

          <blockquote class="bl-1">
            <p class="text-muted">"Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Integer posuere erat a ante quam est corrupti ut blanditiis sint aperiam placeatab.</p>
              <footer class="blockquote-footer"> SOMEONE FAMOUS IN<cite>Source title</cite></footer>
          </blockquote>

          <blockquote class="bl-2">
            <p class="text-muted">"Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Integer posuere erat a ante quam est corrupti ut blanditiis sint aperiam placeatab.</p>
              <footer class="blockquote-footer"> SOMEONE FAMOUS IN<cite>Source title</cite></footer>
          </blockquote>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="column-title">ALERTS</h3>
              <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong>
                   You should check in on some of those fields below.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                     <strong>Holy guacamole!</strong>
                     You should check in on some of those fields below.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <h3 class="alert-heading">A Simple Danger Alert!</h3>
                     <p>Aww yeah, you successfully read this important alert message. This example text is going 
                        to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                        <hr>
                        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
</div>
    </template>

    <script>
export default{
    name:'typographyPage'
}
</script>