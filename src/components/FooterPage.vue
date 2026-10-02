<template>
  
  <footer class="footer" id="footer">
    <div class="container-fluid pt-3">
      <div class="row d-flex mt-5">
        <div class="col-lg-4 col-md-6 footer-widget  text-start">
          <h3 class="widget-title">About Us</h3>
          <div class="footer-img">
            <img src="@/assets/images/footer-logo.png" class="footer-logo mb-4" alt="constra company logo" width="200px">
          </div>
          <p class="footer-content text-start mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor inci done idunt ut
            labore et dolore magna aliqua.</p>
         <ul class="social-icons text-start d-flex gap-3">
            <li><a href="https://facebook.com/themefisher" aria-label="facebook" target="_blank">
              <i class="fab fa-facebook-f"></i></a></li>
          <li><a href="https://twitter.com/themefisher" aria-label="twitter" target="_blank">
              <i class="fab fa-twitter"></i></a></li>
          <li><a href="https://instagram.com/themefisher" aria-label="instagram" target="_blank">
             <i class="fab fa-instagram"></i></a></li>
         <li><a href="https://github.com/themefisher/" aria-label="github" target="_blank">
              <i class="fab fa-github"></i></a></li>
          </ul>

        </div>
        <div class="col-lg-4 col-md-6 footer-widget text-start">
          <h3 class="widget-title">Working Hours</h3>
          <div class="working-hours text-start">
            <p>We operate 7 days a week, excluding major holidays. For emergencies, please contact us directly as there
              is no hotline or contact form.</p>

            <p class="d-flex justify-content-between">
              <span>Monday – Friday:</span>
              <span class="text-end">10:00 – 16:00</span>
            </p>


            <p class="d-flex justify-content-between">
              <span>Saturday:</span>
              <span class="text-end">12:00 – 15:00</span>
            </p>

            <p class="d-flex justify-content-between">
              <span>Sunday–Holidays:</span>
              <span class="text-end">09:00 – 12:00</span>
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
          <h3 class="widget-title text-lg-right text-md-left">Services</h3>
          <ul class="footer-list text-start text-md-start">
            <li><router-link to="/Service-Single" class="footer-link-border">Pre-Construction</router-link></li>
            <li><router-link to="/Service-Single" class="footer-link-border">General Contracting</router-link></li>
            <li><router-link to="/Service-Single" class="footer-link-border">Construction Management</router-link></li>
            <li><router-link to="/Service-Single" class="footer-link-border">Design and Build</router-link></li>
            <li><router-link to="/Service-Single" class="footer-link-border">Self-Perform Construction</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <!---------copy-right-footer-->
  <section class="copy-right p-0">
    <div class="container-fluid p-0">
      <div class="row d-flex flex-start">
        <div class="col-md-6 col-sm-4 mt-3 text-center">
          <div class="copy-right-text mb-4">
            <span>
              Copyright © "Designed & Developed By Themefisher"
            </span>
          </div>
        </div>
        <div class="col-md-6 col-sm-4 mt-3 d-flex">
          <div class="footer-menu text-md-right">
            <ul class="footer-menu-list">
            <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/people">Our People</router-link></li>
             <li><router-link to="/faq">FAQ</router-link></li>
             <li><router-link to="/news-left-sidebar">Blog</router-link></li>
             <li><router-link to="/pricing">Pricing</router-link></li>
            </ul>
          </div>
        </div>
      </div>
     <!----back-to-top-btn----->
     <div id="back-to-top" data-offset-top="10" class="back-to-top show" @click="scrollToTop()">
    <button class="btn btn-dark" title="back-to-top"><i class="fa fa-angle-double-up"></i></button>
     </div>
    </div>
  </section>
    </template>

    <script>

export default {
  name: 'FooterPage',
  methods:{
     scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
}
}
</script>
<style scoped>
@import "@/assets/css/style.css";
</style>