<template>
 <div class="body-inner">
<router-view/>
    <!--------testimonial-PAGE----->
    <section class="testimonial p-0">
        <div class="container-fluid p-0">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="page-img">
                        <img src="@/assets/images/banner/banner1.jpg" alt="banner-1" class="img-fluid">
                        <div class="page-title">
                            <h3 class="text-center">TESTIMONIALS</h3>
                            <nav class="page-icon">
                                <ol class="breadcrumb d-flex justify-content-center" aria-label="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                    <li class="breadcrumb-item"><a href="">Company</a></li>
                                    <li class="breadcrumb-item"><router-link to="/testimonials">Testimonial</router-link></li>
                                </ol>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!---------testimonial-section---->
    <section class="testimonials">
        <div class="container">
            <div class="row d-flex">
                <div class="col-lg-12 mt-5">
                    <h3 class="section-sub-title">WHAT PEOPLE SAID</h3>
                </div>
                <div class="col-lg-4 col-md-6 mt-5">
                    <div class="quote-item">
                        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                        squid."
                    </div>
                    <div class="footer-item">
                        <img src="@/assets/images/clients/testimonial1.png" alt="clients" class="testimonials-tumbs">
                        <h3 class="quote-author pt-3">GABRIAL DENIS</h3>
                        <p class="quote-subtext">Chairman OKT,industries</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 mt-5">
                    <div class="quote-item">
                        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                        squid."
                    </div>

                    <div class="footer-item">
                        <img src="@/assets/images/clients/testimonial2.png" alt="clients" class="testimonials-tumbs">
                        <h3 class="quote-author pt-3">WELDON CASH</h3>
                        <p class="quote-subtext">CEO, FIRST CHOICE GROUP</p>
                    </div>
                </div>



                <div class="col-lg-4 col-md-6 mt-5">
                    <div class="quote-item">
                        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                        squid."
                    </div>
                    <div class="footer-item">
                        <img src="@/assets/images/clients/testimonial3.png" alt="clients" class="testimonials-tumbs">
                        <h3 class="quote-author pt-3">Hyram Izzy</h3>
                        <p class="quote-subtext">Director, AKT Group</p>
                    </div>
                </div>


            </div>
        </div>
    </section>
</div>
    </template>
    <script>

export default {
  name: 'testimonialsPage',
}
</script>
