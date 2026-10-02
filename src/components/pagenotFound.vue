<template>
    <div class="body-inner">
  <router-view/>
    <!--------404--PAGE----->
    <section class="404 p-0">
        <div class="container-fluid p-0">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="page-img">
                        <img src="@/assets/images/banner/banner1.jpg" alt="banner-1" class="img-fluid">
                        <div class="page-title">
                            <h3 class="text-center">FEATURES</h3>
                            <nav class="page-icon">
                                <ol class="breadcrumb d-flex justify-content-center" aria-label="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                    <li class="breadcrumb-item"><a href="">feartures</a></li>
                                    <li class="breadcrumb-item"><router-link to="/404">404</router-link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-----404-section-->
    <section class="404-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12 text-center">
                    <div class="error-page">
                        <div class="error-code">
                                 <h2><strong>404</strong></h2>
                        </div>
                        <div class="error-message">
                            <h3>Oops... Page Not Found!</h3>
                        </div>
                        <div class="error-body">
                            Try using the button below to go to main page of the site
                            <br>
                           <router-link to="/" class="btn btn-warning">Back To HomePage</router-link>
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
        name:'pagenotFound',
    }
    </script>
