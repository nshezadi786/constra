<template>
      <div class="body-inner">
       <router-view/>
        <!--------contact-US-PAGE----->
        <section class="contact p-0">
            <div class="container-fluid p-0">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="page-img">
                            <img src="@/assets/images/banner/banner1.jpg" alt="banner-1" class="img-fluid">
                            <div class="page-title">
                                <h3 class="text-center">CONTACT</h3>
                                <nav class="page-icon">
                                    <ol class="breadcrumb d-flex justify-content-center" aria-label="breadcrumb">
                                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                        <li class="breadcrumb-item"><a href="#">Company</a></li>
                                        <li class="breadcrumb-item"><router-link to="/contact">Contact</router-link></li>
                                    </ol>
                                </nav>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!------------CONTACT-SECTION-------------->
        <section class="contact">
            <div class="container mt-lg-0 pt-5 pb-5">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="section-title">REACHING OUR OFFICE</h2>
                        <h3 class="section-sub-title">FIND OUR LOCATION</h3>
                    </div>
                </div>

                <div class="row d-flex mt-5">

                    <div class="col-md-4">
                        <div class="contact-box-bg text-center h-100">
                            <div class="map-icon round-icon">
                                <span><i class="fa fa-phone-square mr-0"></i></span>
                                <div class="contact-info">
                                    <h3 class="contact-title">Visit Our Office</h3>
                                    <p>9051 Constra Incorporate, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div class="col-md-4">
                        <div class="contact-box-bg text-center h-100">
                            <div class="map-icon round-icon">
                                <span><i class="fa fa-map-marker-alt mr-0"></i></span>
                                <div class="contact-info">
                                    <h3 class="contact-title">Email Us</h3>
                                    <p>office@Constra.com</p>
                                </div>
                            </div>
                        </div>
                     </div>

                            <div class="col-md-4">
                        <div class="contact-box-bg text-center h-100">
                            <div class="map-icon round-icon">
                                <span><i class="fa fa-envelope mr-0"></i></span>
                                <div class="contact-info">
                                    <h3 class="contact-title">call us</h3>
                                    <p>(+9) 847-291-4353</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                  <div class="gap-60"></div>
                  <div class="row">
                    <div class="col-12">
                  <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.7914422259532!2d4.846715115802702!3d52.392330979790174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf563ab55249e3%3A0x59292938484b2f34!2sFoleon!5e0!3m2!1sen!2snl!4v1632382921275!5m2!1sen!2snl" 
            style="border:0;" allowfullscreen="" loading="lazy">
        </iframe>
        </div>
        </div>
                  </div>

                  <div class="row d-flex">
                    <div class="col-lg-12">
                         <h3 class="mt-5 fw-bold fs-3 mb-5">WE LOVE TO HEAR</h3>
              <form action="" role="form">
                 <div class="col-md-4 mt-3">
                     <div class="form-group">
                      <label for="name">Name
                        <input id="name" name="name" class="form-control" type="text"
                        placeholder="Your name" required>
                      </label>
                    </div>
                  </div>

                   <div class="col-md-4 mt-3">
                     <div class="form-group">
                      <label for="name">Email
                        <input id="name" name="name" class="form-control" type="text"
                        placeholder="Your name" required>
                      </label>
                    </div>
                  </div>

                   <div class="col-md-4 mt-3">
                     <div class="form-group">
                      <label for="name">Subject
                        <input id="name" name="name" class="form-control" type="text"
                        placeholder="Your name" required>
                      </label>
                    </div>
                  </div>
              </form>
                   <form action="" role="form">
                 <label for="message">Message
                        <textarea id="message" class="form-control required-field"
                        placeholder="" rows="10" required></textarea>
                      </label>
                      <div class="text-right">
                        <br>
                    <button class="btn btn-warning" type="submit" aria-label="send-message">Send Message</button>
                  </div>
              </form>
        </div>
    </div>
</div>
        </section>
</div>
    </template>

    <script>
export default{
    name:'contactPage'
}
</script>