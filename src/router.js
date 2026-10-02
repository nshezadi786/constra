import { createRouter, createWebHistory } from 'vue-router';
import Home1Page from './components/Home1Page.vue';
import AboutPage from './components/AboutPage.vue';
import teamPage from './components/teamPage.vue';
import testimonialsPage from './components/testimonialsPage.vue';
import faqPage from './components/faqPage.vue';
import pricingPage from './components/pricingPage.vue';
import projectallPage from './components/projectallPage.vue';
import singleprojectPage from './components/singleprojectPage.vue';
import serviceallPage from './components/serviceallPage.vue';
import ServiceSinglePage from './components/ServiceSinglePage.vue';
import Newsleftsidebar from './components/Newsleftsidebar.vue';
import Newsrightsidebar from './components/Newsrightsidebar.vue';
import Newssingle from './components/Newssingle.vue';
import typographyPage from './components/typographyPage.vue';
import contactPage from './components/contactPage.vue';
import pagenotFound from './components/pagenotFound.vue';
import Home2Page from './components/Home2Page.vue';





const routes = [
  
  { path: '/', component: Home1Page,},
   { path: '/home-two',component: Home2Page, meta: { hideHeader: true }},
  { path: '/about', component: AboutPage },
   { path: '/people',component: teamPage},
     { path: '/testimonials',component: testimonialsPage},
   { path: '/faq',component: faqPage},
     { path: '/pricing',component: pricingPage},
      { path: '/projects',component: projectallPage},
     { path: '/project-single',component: singleprojectPage},
   { path: '/services',component: serviceallPage},
     { path: '/Service-Single',component: ServiceSinglePage},
      { path: '/typography',component: typographyPage},
       { path: '/404',component: pagenotFound},
   { path: '/news-left-sidebar',component: Newsleftsidebar},
     { path: '/news-right-sidebar',component: Newsrightsidebar},
      { path: '/news-single',component:Newssingle},
       { path: '/contact',component: contactPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes : routes,

})
export default router