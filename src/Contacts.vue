<template>


<body>


<MyHeader/>


     <!-- CONTACT -->
     <section class="contact section-padding">
          <div class="container">
               <div class="row">

                    <div class="col-lg-6 mx-auto col-md-7 col-12 py-5 mt-5 text-center" data-aos="fade-up">

                      <h1 class="mb-4"> <strong>Contact us</strong></h1>

                      <p>This is our contact page, send us a message we'll be happy to respond</p>
                    </div>

                    <div class="col-lg-8 mx-auto col-md-10 col-12">    
                      <form action="#" method="post" class="contact-form" data-aos="fade-up" data-aos-delay="300" role="form">
                        <div class="row">
                          <div class="col-lg-6 col-12">
                            <input type="text" class="form-control" v-model="user_name"  placeholder="Name">
                          </div>
                          <div class="col-lg-6 col-12">
                            <input type="email" class="form-control" v-model="email_address"  placeholder="Email">
                          </div>
                          <div class="col-lg-12 col-12">
                            <textarea class="form-control" rows="6" v-model="user_message" placeholder="Message"></textarea>
                          </div>
                          <div class="col-lg-5 mx-auto col-7">
                            <button class="form-control" id="submit-button"  @click="logdetails()">Send Message</button>
                          </div>
                        </div>

                      </form>
                    </div>

               </div>
          </div>
     </section>


    <footer class="site-footer">
      <div class="container">
        <div class="row">

          <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
            <h1 class="text-white" data-aos="fade-up" data-aos-delay="100">We make creative <strong>brands</strong> only.</h1>
          </div>

          <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
            <h4 class="my-4">Contact Info</h4>

            <p class="mb-1">
              <i class="fa fa-phone mr-2 footer-icon"></i> 
              +99 080 070 4224
            </p>

            <p>
              <a href="#">
                <i class="fa fa-envelope mr-2 footer-icon"></i>
                hello@company.com
              </a>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
            <h4 class="my-4">Our Studio</h4>

            <p class="mb-1">
              <i class="fa fa-home mr-2 footer-icon"></i> 
              Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ, Brazil
            </p>
          </div>

          <div class="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up" data-aos-delay="400">
            <p class="copyright-text">Copyright &copy; 2020 Your Company
            <br>
            <a rel="nofollow noopener" href="https://templatemo.com">Design: TemplateMo</a></p>
          </div>

          <div class="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
            
            <ul class="footer-link">
              <li><a href="#">Stories</a></li>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
            <ul class="social-icon">
              <li><a href="#" class="fa fa-instagram"></a></li>
              <li><a href="#" class="fa fa-twitter"></a></li>
              <li><a href="#" class="fa fa-dribbble"></a></li>
              <li><a href="#" class="fa fa-behance"></a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>


     <!-- SCRIPTS -->


</body>

</template>

<script>
 import  MyHeader from './components/Header';

export default {
    name: 'MyContacts',
    components : {
        MyHeader
    },
    data(){
      return{
          user_name: ' ',
          email_address: ' ',
          user_message: ' '
      }
      
    },
    methods : {
        logdetails(){
          console.log(this.user_message, this.email_address, this.user_name)
          console.log("sdsds")
        }
      } 
    
}
</script>