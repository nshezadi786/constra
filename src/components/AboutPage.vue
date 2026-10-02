<template>
  <div class="body-inner">
     <router-view/>
  <!--------ABOUT-US-PAGE----->
  <section class="aboutsus p-0">
    <div class="container-fluid p-0">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="page-img">
            <img src="@/assets/images/banner/banner1.jpg" alt="banner-1" class="img-fluid">
            <div class="page-title">
              <h3 class="text-center">ABOUT US</h3>
              <nav class="page-icon">
                <ol class="breadcrumb d-flex justify-content-center" aria-label="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                  <li class="breadcrumb-item"><a href="">Company</a></li>
                  <li class="breadcrumb-item"><router-link to="/about">About Us</router-link></li>
                </ol>
              </nav>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--------aboutus-area-->
  <section class="aboutus-area">
    <div class="container">
      <div class="row d-flex">
        <div class="col-lg-6">
          <div class="column-title text-start">
            <h3>Who we are</h3>
          </div>
          <p class="text-start">"When gregor samsa woke from troubled dreams.he found imself transformed in
            his bed into a horrible vermin"</p>
          <blockquote>
            <p class="text-start">"Semporibus autem quibusdam et aut officiis
              debitis aut rerum est aut optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere
              ut"</p>
          </blockquote>
          <p class="text-start">He lay on his armour-like back, and if he lifted. ultrices ultrices sapien,
            nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything
            embarrassing.</p>
        </div>

        <div class="col-lg-6 mt-5 mt-lg-0">
          <div class="carousel slide" id="myCarousel" data-bs-ride="carousel">
            <div class="carousel-inner">
              <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>

              <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
              <div class="carousel-item active">
                <img src="@/assets/images/slider-pages/slide-page2.jpg" alt="slider-pages" class="img-fluid w-100">
                <div class="carousel-caption carousel-text" id="myCarousel">
                  <h2 class="text-center">
                    REALATIONSHIPS
                  </h2>
                </div>
              </div>

              <div class="carousel-item">
                <img src="@/assets/images/slider-pages/slide-page1.jpg" alt="slider-pages" class="img-fluid w-100">
                <div class="carousel-caption carousel-text" id="myCarousel">
                  <h2 class="text-center">
                    PERFORMANCE
                  </h2>
                </div>
              </div>

              <div class="carousel-item">
                <img src="@/assets/images/slider-pages/slide-page3.jpg" alt="slider-pages" class="img-fluid w-100">
                <div class="carousel-caption carousel-text" id="myCarousel">
                  <h2 class="text-center">
                    LEADERSHIP
                  </h2>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!---------facts-area---->
  <section class="facts bg-dark">
    <div class="container-fluid p-0">

      <div class="row">

        <div class="col-md-3 col-sm-6 ts-fact-area mt-3 text-center">
          <div class="ts-fact-img">
            <img src="@/assets/images/icon-image/fact1.png" alt="fact1">
          </div>
          <div class="ts-fact-content">
            <div class="ts-fact-">
              <h2 class="ts-fact-num text-white fw-bold mt-3">1789</h2>
              <p class="ts-fact-title mb-0">Total Projects</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 ts-fact-area mt-3 text-center">
          <div class="ts-fact-img">
            <img src="@/assets/images/icon-image/fact2.png" alt="fact2">
          </div>
          <div class="ts-fact-content">
            <div class="ts-fact">
              <h2 class="ts-fact-num text-white fw-bold mt-3">647</h2>
              <p class="ts-fact-title mb-0">Staff Members</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 ts-fact-area mt-3 text-center">
          <div class="ts-fact-img">
            <img src="@/assets/images/icon-image/fact3.png" alt="fact3">
          </div>
          <div class="ts-fact-content">
            <div class="ts-fact">
              <h2 class="ts-fact-num text-white fw-bold mt-3">4000</h2>
              <p class="ts-fact-title mb-0">Hours Of Work</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 ts-fact-area mt-3 text-center">
          <div class="ts-fact-img">
            <img src="@/assets/images/icon-image/fact4.png" alt="fact4">
          </div>
          <div class="ts-fact-content">
            <div class="ts-fact">
              <h2 class="ts-fact-num text-white fw-bold mt-3">44</h2>
              <p class="ts-fact-title mb-0">Countries Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!---------team-member-cards-->
  <section class="team-members">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mb-2">
          <h2 class="section-title">Quality service</h2>
          <h3 class="section-sub-title">Professional team</h3>
          <div class="col-lg-12 mt-5">
            <!-----1-card------->
            <div class="team-carousel-container">
              <div class="team-card-wrapper mb-2">
                <div class="team-wrapper-img">
                  <img src="@/assets/images/team/team1.jpg" alt="team-member" class="img-fluid team-img">

                  <div class="full-overlay">
                    <h3 class="ts-name text-warning mt-5">NATS STENMAN</h3>
                    <p class="ts-designation mb-1 text-white">Chief operating Officer</p>
                    <p class="ts-description text-wite">Nats Stenman began his career in <br>construction with boots on
                      the ground</p>
                    <div class="team-social-icon">
                      <a target="_blank" href=""><i class="fab fa-facebook"></i></a>
                      <a target="_blank" href=""><i class="fab fa-twitter"></i></a>
                      <a target="_blank" href=""><i class="fab fa-google-plus"></i></a>
                      <a target="_blank" href=""><i class="fab fa-linkedin"></i></a>
                    </div>
                  </div>

                  <div class="initial-overlay">
                    <h3 class="ts-name fw-bold text-warning">NATS STENMAN</h3>
                    <p class="ts-designation mb-1 text-white">Chief Operating Officer</p>
                  </div>
                </div>
              </div>
            <!-----2-card------->
              <div class="team-card-wrapper mb-2">
                <div class="team-wrapper-img">
                  <img src="@/assets/images/team/team2.jpg" alt="team-member" class="img-fluid team-img">

                  <div class="full-overlay">
                    <h3 class="ts-name text-warning mt-5">ANGELA LYOUER</h3>
                    <p class="ts-designation mb-1 text-white">Innovation Officer</p>
                    <p class="ts-description text-wite">Nats Stenman began his career in <br>construction with boots on
                      the ground</p>
                    <div class="team-social-icon">
                      <a target="_blank" href=""><i class="fab fa-facebook"></i></a>
                      <a target="_blank" href=""><i class="fab fa-twitter"></i></a>
                      <a target="_blank" href=""><i class="fab fa-linkedin"></i></a>
                    </div>
                  </div>

                  <div class="initial-overlay">
                    <h3 class="ts-name fw-bold text-warning">ANELA LYOUER</h3>
                    <p class="ts-designation mb-1 text-white">Innovation Officer</p>
                  </div>
                </div>
              </div>

           <!-----3-card------->
               <div class="team-card-wrapper mb-2">
                <div class="team-wrapper-img">
                  <img src="@/assets/images/team/team3.jpg" alt="team-member" class="img-fluid team-img">

                  <div class="full-overlay">
                    <h3 class="ts-name text-warning mt-5">MARK CONTER</h3>
                    <p class="ts-designation mb-1 text-white">Safety Officer</p>
                    <p class="ts-description text-wite">Nats Stenman began his career in <br>construction with boots on
                      the ground</p>
                    <div class="team-social-icon">
                      <a target="_blank" href=""><i class="fab fa-facebook"></i></a>
                      <a target="_blank" href=""><i class="fab fa-twitter"></i></a>
                      <a target="_blank" href=""><i class="fab fa-google-plus"></i></a>
                      <a target="_blank" href=""><i class="fab fa-linkedin"></i></a>
                    </div>
                  </div>

                  <div class="initial-overlay">
                    <h3 class="ts-name fw-bold text-warning">MARK CONTER</h3>
                    <p class="ts-designation mb-1 text-white">Safety Officer</p>
                  </div>
                </div>
              </div>
                    <!-----4-card------->
               <div class="team-card-wrapper mb-2">
                <div class="team-wrapper-img">
                  <img src="@/assets/images/team/team4.jpg" alt="team-member" class="img-fluid team-img">

                  <div class="full-overlay">
                    <h3 class="ts-name text-warning mt-5">AYESHA STEWART</h3>
                    <p class="ts-designation mb-1 text-white">Finance Officer</p>
                    <p class="ts-description text-wite">Nats Stenman began his career in <br>construction with boots on
                      the ground</p>
                    <div class="team-social-icon">
                      <a target="_blank" href=""><i class="fab fa-facebook"></i></a>
                      <a target="_blank" href=""><i class="fab fa-twitter"></i></a>
                      <a target="_blank" href=""><i class="fab fa-google-plus"></i></a>
                      <a target="_blank" href=""><i class="fab fa-linkedin"></i></a>
                    </div>
                  </div>

                  <div class="initial-overlay">
                    <h3 class="ts-name fw-bold text-warning">AYESHA STEWART</h3>
                    <p class="ts-designation mb-1 text-white">Finance Officer</p>
                  </div>
                </div>
              </div>

              <!-----5-card------->
               <div class="team-card-wrapper mb-2">
                <div class="team-wrapper-img">
                  <img src="@/assets/images/team/team5.jpg" alt="team-member" class="img-fluid team-img">

                  <div class="full-overlay">
                    <h3 class="ts-name text-warning mt-5">DAVE CLARKTE</h3>
                    <p class="ts-designation mb-1 text-white">Site Supervisor </p>
                    <p class="ts-description text-wite">Nats Stenman began his career in <br>construction with boots on
                      the ground</p>
                    <div class="team-social-icon">
                      <a target="_blank" href=""><i class="fab fa-facebook"></i></a>
                      <a target="_blank" href=""><i class="fab fa-twitter"></i></a>
                      <a target="_blank" href=""><i class="fab fa-google-plus"></i></a>
                      <a target="_blank" href=""><i class="fab fa-linkedin"></i></a>
                    </div>
                  </div>

                  <div class="initial-overlay">
                    <h3 class="ts-name fw-bold text-warning">DAVE CLARKTE</h3>
                    <p class="ts-designation mb-1 text-white">Site Supervisor</p>
                  </div>
                </div>
              </div>
                    <!-----6--card------->
               <div class="team-card-wrapper mb-2">
                <div class="team-wrapper-img">
                  <img src="@/assets/images/team/team6.jpg" alt="team-member" class="img-fluid team-img">

                  <div class="full-overlay">
                    <h3 class="ts-name text-warning mt-5">ELTON JOE</h3>
                    <p class="ts-designation mb-1 text-white">Site Supervisor</p>
                    <p class="ts-description text-wite">Nats Stenman began his career in <br>construction with boots on
                      the ground</p>
                    <div class="team-social-icon">
                      <a target="_blank" href=""><i class="fab fa-facebook"></i></a>
                      <a target="_blank" href=""><i class="fab fa-twitter"></i></a>
                      <a target="_blank" href=""><i class="fab fa-google-plus"></i></a>
                      <a target="_blank" href=""><i class="fab fa-linkedin"></i></a>
                    </div>
                  </div>

                  <div class="initial-overlay">
                    <h3 class="ts-name fw-bold text-warning">ELTON JOET</h3>
                    <p class="ts-designation mb-1 text-white">Site Supervisor</p>
                  </div>
                </div>
              </div>
                <div class="carousel-nav-buttons mt-4 text-center">
            <button id="prevBtn"><i class="fa fa-angle-left"></i></button>
            <button id="nextBtn"><i class="fa fa-angle-right"></i></button>
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
export default {
  name: 'AboutPage',
  mounted() {
    this.initTeamSlider();
  },
  methods: {
    initTeamSlider() {
      const teamCards = document.querySelectorAll('.team-card-wrapper');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      if (!teamCards.length || !prevBtn || !nextBtn) return;

      let currentIndex = 0;
      const cardsToShow = 4; 
      const stepSize = 2;    

      const updateCardVisibility = () => {
      
        teamCards.forEach(card => {
          card.style.display = 'none';
        });

        for (let i = 0; i < cardsToShow; i++) {
          const cardIndex = currentIndex + i;
          if (teamCards[cardIndex]) {
            teamCards[cardIndex].style.display = 'inline-block'; 
          }
        }
        
  
        prevBtn.disabled = (currentIndex === 0);
        nextBtn.disabled = (currentIndex + cardsToShow >= teamCards.length);
      };

    
      nextBtn.addEventListener('click', () => {
        if (currentIndex + stepSize < teamCards.length) {
          currentIndex += stepSize;
          updateCardVisibility();
        }
      });

      prevBtn.addEventListener('click', () => {
        if (currentIndex >= stepSize) {
          currentIndex -= stepSize;
          updateCardVisibility();
        } else if (currentIndex > 0) {
          currentIndex = 0;
          updateCardVisibility();
        }
      });
      updateCardVisibility();
    }
  }
}
</script>
