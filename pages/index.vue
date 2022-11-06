<template>
  <div>
    <div id="app-inner" ref="appRef"
        :class="[savedTheme, {'enable-focus-style': isAnyFocus}]"
        @click="isAnyFocus = true"
        @keyup.tab="isAnyFocus = false">

        <div class="circle-cursor circle-cursor-outer" ref="circleCursorOuter"></div>
        <div class="circle-cursor circle-cursor-inner" ref="circleCursorInner"></div>

         <!-- start preloader-->
        <transition name="preloader">
          <div class="preloader" v-if="isPreloading">
            <div class="circle">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
            </div>
          </div>
        </transition>
        <!-- end preloader-->

        <!-- start of header -->
        <header :class="{
          'big-header': isHeaderBig,
          'small-header': !isHeaderBig,
          'header-hidden': isHeaderHidden
        }">
          <div class="container">
            <!-- logo -->
            <div class="logo" title="SammieKei">
              <h1><a href="#">SammieKei</a></h1>
            </div>

            <!-- nav links -->
            <nav :class="{'menu-open': isNavMenuOpen}" ref="headerNav">

              <!-- nav menu links -->
              <ul class="nav-links">
                <li v-for="link in navLinks" :key="link.url">
                  <a :href="link.url" @click="closeNavMenu">
                    {{ link.title.en }}
                  </a>
                </li>
              </ul>

              <!-- menu content in big devices (hidden in mobile/tablet) -->
              <div class="desktop-menu-content" tabindex="-1">
                <div class="container">

                  <!-- about us -->
                  <div class="about-us">
                    <p>
                      I love making things simple, intuitive and expertly crafted!
                    </p>
                    <h4 class="block-title">
                      Product is the vital essence of what I do, truly great product is born of meticulous planning and process. This is where i specialized!
                    </h4>
                  </div>

                  <!-- contact info -->
                  <ul class="contact-info row">
                    <li class="col-lg-4">
                      <h4 class="block-title">Email</h4>
                      <ul>
                        <li><a href="shodiposamuel1@gmail.com">shodiposamuel1@gmail.com</a></li>
                      </ul>
                    </li>
                    <li class="col-lg-4">
                      <h4 class="block-title">Address</h4>
                      <ul>
                        <li>
                          12, New Life Church Street,
                          <br>
                          Lucky Fibre, Ikorodu, Lagos
                        </li>
                      </ul>
                    </li>
                    <li class="col-lg-4">
                      <h4 class="block-title">Phone</h4>
                      <ul>
                        <li><a href="tel:+2349059873723">+2349059873723</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <!-- options icons -->
            <ul class="options-icons">

              <!-- lang switcher button -->
             

              <!-- theme switcher button -->
              <li class="theme-switcher">
                <button :class="savedTheme" title="Change Mode" @click="changeAppTheme"></button>
              </li>

              <!-- hamburger button -->
              <li class="hamburger-btn" :class="{'open': isNavMenuOpen}">
                <button @click="toggleNavMenu"
                  title="Toggle Side Menu"
                  aria-label="Toggle Side Menu"
                  ref="navMenuToggleBtn">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </li>
            </ul>
          </div>
        </header>
        <!-- end of header -->

        <!-- start of hero section -->
        <div id="hero" class="hero-section" ref="heroSection" data-paneffect="true">
          <div class="hero-img">
            <div class="layer" v-clone>
              <img src="../assets/images/sammie.png" alt="User Name">
            </div>
          </div>

          <div class="hero-text">
            <h2 class="text">
              I Code, Develop & Build
              <br>
              Creative Products
            </h2>
            <a href="#contact" class="btn">Get In Touch</a>
          </div>

          <div class="social">
            <ul>
              <li>
                <a href="https://m.facebook.com/public/Sammie-Kei" target="_blank" rel="noreferrer" v-tooltip="{text: 'Facebook', dir: 'right'}">
                  <i class="fab fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/codexsco" target="_blank" rel="noreferrer" v-tooltip="{text: 'Twitter', dir: 'right'}">
                  <i class="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://ng.linkedin.com/in/samuel-shodipo-4097631bb" target="_blank" rel="noreferrer" v-tooltip="{text: 'LinkedIn', dir: 'right'}">
                  <i class="fab fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="scroll-down">
            <a href="#about" title="Scroll Down">Scroll</a>
          </div>
        </div>
        <!-- end of hero section -->

        <!-- start of statistics section -->
        <div id="statistics" class="statistics-section section">
          <div class="section-content">
            <div class="container">
              <ul class="statistics-items row">
                <li class="col-sm-12 col-md-6 col-lg-4">
                  <a href="#experience">
                    <div class="icon">
                      <img src="~/assets/images/icons/emblem.png" alt="Years of Experience">
                    </div>
                    <div class="text">
                      <h3>{{ experienceYears }}+</h3>
                      <strong>Years of Experience</strong>
                    </div>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="col-sm-12 col-md-6 col-lg-4">
                  <a href="#portfolio">
                    <div class="icon">
                      <img src="~/assets/images/icons/check-mark.png" alt="Completed Projects">
                    </div>
                    <div class="text">
                      <h3>45+</h3>
                      <strong>Completed Projects</strong>
                    </div>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
                <li class="col-sm-12 col-md-6 col-lg-4">
                  <a href="#testimonials">
                    <div class="icon">
                      <img src="~/assets/images/icons/happy.png" alt="Happy Clients">
                    </div>
                    <div class="text">
                      <h3>5+</h3>
                      <strong>Happy Clients</strong>
                    </div>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end of statistics section -->

        <!-- start of about section -->
        <div id="about" class="about-section section" tabindex="-1">
          <div class="container">
            <div class="section-content row">

              <!-- about image -->
              <div class="about-img col-lg-6">
                <div class="layer" v-clone>
                  <img src="~/assets/images/sam1.png" alt="User Name">
                </div>
              </div>

              <!-- text box -->
              <div class="about-text col-lg-6">
                <div class="text-box-inline">
                  <span class="subtitle">about me</span>
                  <h2>
                    Need a Creative Product?
                    <br>
                    I can Help You!
                  </h2>
                  <p>
                    Hi! I’m Shodipo Samuel aka Sammie Kei, and I’m a developer who has passion for building clean web applications with intuitive functionality. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various MEVN stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.
                  </p>
                  <div class="btns-container">
                    <a href="#contact" class="btn btn-primary">Hire Me</a>
                    <a download=""  href="/" class="btn btn-outline-light">Download CV</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end of about section -->

        <!-- start of skills section -->
        <div id="skills" class="skills-section section" tabindex="-1">
          <div class="container">
            <div class="section-content row">

              <!-- text box -->
              <div class="skills-text col-lg-6">
                <div class="text-box-inline">
                  <span class="subtitle">my skills</span>
                  <h2>
                    What My Programming
                    <br>
                    Skills Included?
                  </h2>
                  <p>
                    I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.
                  </p>
                  <div ref="skillsSwitchBtn" class="toggle-switch-btn">
                    <input id="skills-list" type="radio" value="skills" v-model="skillsType" checked>
                    <label for="skills-list" class="link-hover">Skills</label>
                    <input id="tools-list" type="radio" value="tools" v-model="skillsType">
                    <label for="tools-list" class="link-hover">Tools</label>
                    <span class="switcher-toggle" style="width: calc((100% - 8px) / 2);"></span>
                  </div>
                </div>
              </div>

              <!-- skills items -->
              <div class="skills-items col-lg-6">

                <!-- skills list -->
                <ul v-staggerdelay="50" v-show="skillsType === 'skills'">
                  <li tabindex="0"
                    v-for="skill in skillsItems"
                    :key="skill.title"
                    v-tooltip="{text: skill.title, dir: 'top'}">
                    <div class="skill-icon">
                      <img v-bind:src="skill.imgUrl" :alt="skill.title">
                      
                     
                     </div>
                  </li>
                 
                </ul>

                <!-- tools list -->
                <ul v-staggerdelay="50" v-show="skillsType === 'tools'">
                  <li tabindex="0"
                    v-for="tool in toolsItems"
                    :key="tool.title"
                    v-tooltip="{text: tool.title, dir: 'top'}">
                    <div class="skill-icon">
                      <img :src="tool.imgUrl" :alt="tool.title">
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- end of skills section -->

        <!-- start of experience section -->
        <div id="experience" class="experience-section section" tabindex="-1">
          <div class="container">
            <div class="section-content row">

              <!-- timeline -->
              <div class="experience-timeline col-lg-6">
                <ul class="outer-ul">
                  <li class="outer-li" v-for="(group, index) in experienceChunks" :key="index">
                    <ul class="inner-ul">
                      <li class="has-ultimate-tooltip"
                        tabindex="0"
                        v-for="item in group">
                        <template v-if="Object.keys(item).length > 0">
                          <h3>{{ item.date }}</h3>
                          <div class="ultimate-tooltip">
                            <h4 class="ultimate-tooltip-title">{{ item.companyName.en }}</h4>
                            <h5 class="ultimate-tooltip-subtitle">{{ item.jobTitle.en }}</h5>
                            <p>{{ item.desc.en }}</p>
                          </div>
                          <div class="ultimate-tooltip-arrow"></div>
                        </template>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <!-- text box -->
              <div class="experience-text col-lg-6">
                <div class="text-box-inline">
                  <span class="subtitle">experience</span>
                  <h2>
                    {{ experienceYears }}+ Years of Experience
                    <br>
                    With Many Recognition!
                  </h2>
                  <p>
                    I have been developing sites and apps for {{ experienceYears }} years and i know for sure the main trends and directions of modern design, I have been a visionary and a reliable software engineering partner for world-class brands. You will get a decent result as you expect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end of experience section -->

        <!-- start of portfolio section -->
        <div id="portfolio" class="portfolio-section section" tabindex="-1">
          <div class="container">
            <div class="section-content">

              <!-- portfolio items -->
              <ul class="portfolio-items" ref="portfolioItems" data-no-works-msg="No works to load">
                <li>
                  <!-- text box -->
                  <div class="text-box-inline">
                    <span class="subtitle">my works</span>
                    <h2>
                      See My Works Which
                      <br>
                      Will Amaze You!
                    </h2>
                    <p>
                      We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.
                    </p>
                    <ul class="works-filter">
                      <li v-for="filter in filters" :key="filter">
                        <button :class="{'active': currentFilter === filter}"
                          @click="filterPortfolioItems(filter)">
                          {{ filter }}
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>

                <!-- start items list -->
                <li class="portfolio-item"
                  v-for="work in filteredPortfolioItems"
                  :key="work.title.en">
                  <a :href="work.url" target="_blank" rel="noopener">
                    <div class="item-img">
                      <img :src="work.imgUrl" :alt="work.title.en">
                    </div>
                    <div class="item-details">
                      <h3 class="title">{{ work.title.en }}</h3>
                      <div class="date">{{ work.date.en }}</div>
                    </div>
                  </a>
                </li>
                <!-- end items list -->

                <li>
                  <button class="more" @click="getPortfolioItems">Load more works</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end of portfolio section -->

        <!-- start of testimonials section -->
        <div id="testimonials" class="testimonials-section section" tabindex="-1">
          <div class="container">
            <div class="section-title">
              <span class="subtitle">testimonials</span>
              <h2 class="title">
                Check What's My Clients
                <br>
                Say About Me
              </h2>
            </div>
          </div>

          <div class="section-content">
            <ul class="testimonials-items" v-staggerdelay="500">
              <li class="has-ultimate-tooltip"
                tabindex="0"
                v-for="item in testimonialsItems"
                :key="item.quoteAuthor.en">
                <div class="testimonials-item">
                  <div class="testimonial-author-img">
                    <img :src="item.imgUrl || '~/assets/images/testimonials/anonymous-user.png'" :alt="item.quoteAuthor.en">
                  </div>
                  <div class="ultimate-tooltip">
                    <p>{{ item.quoteContent.en }}</p>
                    <h4 class="ultimate-tooltip-title">{{ item.quoteAuthor.en }}</h4>
                    <h5 class="ultimate-tooltip-subtitle">{{ item.jobTitle.en }}</h5>
                  </div>
                  <div class="ultimate-tooltip-arrow"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- end of testimonials section -->

        <!-- start of contact section -->
        <div id="contact" class="contact-section section" tabindex="-1">
          <div class="container">
            <div class="section-content row">

              <!-- text box -->
              <div class="contact-text col-lg-6">
                <div class="text-box-inline">
                  <span class="subtitle">contact</span>
                  <h2>
                    Have You Any Project?
                    <br>
                    Please Drop a Message
                  </h2>
                  <p>
                    Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.
                  </p>
                </div>

                <!-- contact info -->
                <ul class="contact-info">
                  <li>
                    <img src="~/assets/images/icons/address.png" alt="Address">
                    <div>
                      <strong>Address:</strong>
                      12, New Life Church Street, Lucky Fibre, Ikorodu, Lagos
                    </div>
                  </li>
                  <li>
                    <img src="~/assets/images/icons/phone.png" alt="Phone">
                    <div>
                      <strong>Phone:</strong>
                      <ul>
                        <li><a href="tel:+2349059873723" class="ltr-dir">+2349059873723</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <img src="~/assets/images/icons/email.png" alt="Email">
                    <div>
                      <strong>Email:</strong>
                      <ul>
                        <li><a href="mailto:shodiposamuel1@gmail.com">shodiposamuel1@gmail.com</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>

                <!-- social links -->
                <ul class="social">
                  <li>
                    <a href="https://m.facebook.com/public/Sammie-Kei" target="_blank" rel="noreferrer" v-tooltip="{text: 'Facebook', dir: 'top'}">
                      <i class="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/codexsco" target="_blank" rel="noreferrer" v-tooltip="{text: 'Twitter', dir: 'top'}">
                      <i class="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://ng.linkedin.com/in/samuel-shodipo-4097631bb" target="_blank" rel="noreferrer" v-tooltip="{text: 'LinkedIn', dir: 'top'}">
                      <i class="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <!-- contact form -->
              <div class="col-lg-6">
                <form ref="contactForm"
                  class="contact-form form-styled"
                  data-success-msg="Message sent successfully!"
                  data-err-msg="Oops! something went wrong, please try again.">
                  <div class="group">
                    <label>Name</label>
                    <div class="control has-prefix-icon">
                      <input type="text"
                        name="name"
                        ref="name"
                        id="na"
                        placeholder="e.g. John Doe"
                        minlength="3"
                        required>
                      <i class="fa fa-user-circle prefix-icon" aria-hidden="true"></i>

                      <!-- validation errors messages -->
                      <div class="errors-msgs">
                        <input class="required" type="hidden" value="Name is required">
                        <input class="minLength" type="hidden" value="Name must be at least 3 characters">
                      </div>
                    </div>
                  </div>
                  <div class="group">
                    <label>Email</label>
                    <div class="control has-prefix-icon">
                      <input class="ltr-dir"
                        type="email"
                        id="em"
                        inputmode="email"
                        ref="email"
                        name="email"
                        placeholder="e.g. john.doe@gmail.com"
                        required>
                      <i class="fa fa-envelope prefix-icon" aria-hidden="true"></i>

                      <!-- validation errors messages -->
                      <div class="errors-msgs">
                        <input class="required" type="hidden" value="Email is required">
                        <input class="invalid" type="hidden" value="Please enter a valid email address">
                      </div>
                    </div>
                  </div>
                  <div class="group phone-number">
                    <label>Phone <span class="optional">(Optional)</span></label>
                    <div class="control has-prefix-icon">
                      <input type="tel"
                        inputmode="tel"
                        ref="phone"
                        id="ph"
                        name="phone"
                        placeholder="Phone Number">
                      <i class="fa fa-phone prefix-icon" aria-hidden="true"></i>

                      <!-- validation errors messages -->
                      <div class="errors-msgs">
                        <input class="invalid" type="hidden" value="Please enter a valid Phone Number">
                      </div>
                    </div>
                  </div>
                  <div class="group">
                    <label>Message</label>
                    <div class="control has-prefix-icon">
                      <textarea name="message" id="mess" ref="message" placeholder="Write message..." required></textarea>
                      <i class="fa fa-comments prefix-icon" aria-hidden="true"></i>

                      <!-- validation errors messages -->
                      <div class="errors-msgs">
                        <input class="required" type="hidden" value="Message is required">
                      </div>
                    </div>
                  </div>
                  <div class="group">
                    <div class="control">
                      <button class="submit-btn btn btn-dark" type="button" @click="contactFormValidation" name="submit">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- end of contact section -->

        <!-- start of footer -->
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <!-- logo -->
                <div class="logo" title="SammieKei">
                  <h1><a href="#">Sammie Kei</a></h1>
                </div>
              </div>
              <div class="col-lg-6">
                &copy; {{ copyrightDate }} Proudly Built by
                <a href="https://github.com/SammieKei40" target="_blank" rel="noopener">codexsco</a>
              </div>
            </div>
          </div>
        </footer>
        <!-- end of footer -->

        <!-- scroll to top button -->
        <button ref="scrollTopBtn"
          :class="['scroll-to-top', isScrollTopBtnDisplayed && 'show-scrollTop']"
          title="Back To Top"
          tabindex="0"
          @click="scrollToTop">
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </button>

        <!-- toast notifications -->
        <ul class="notifications-container">
          <transition-group name="notify">
            <li v-for="notify of notifications"
              :key="notify.id"
              :id="notify.id"
              :class="['notification', 'show', notify.className, notify.time && 'timer']"
            >
              {{ notify.msg }}
              <i class="fa fa-times link-hover" aria-hidden="true" @click="dismissNotify(notify.id)"></i>
              <span v-if="notify.time"
                class="disappearing-time"
                :style="{ 'animation-duration': notify.time + 'ms' }"></span>
            </li>
          </transition-group>
        </ul>

        <!-- ajax loading -->
        <div v-show="isAjaxLoading" class="ajax-loading">
          <span></span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        // the date my career started (change to yours)
        careerStartDate: 2019,
  
        // the date copyright started (change to yours)
        copyrightStartDate: 2021,
  
        // for the template theme
        appTheme: 'light_theme',
        savedTheme: null,
  
        // flag to toggle the preloader
        isPreloading: false,
  
        // toast notifications array
        notifications: [],
  
        // manage loading spinner status
        ajaxLoading: [],
  
        // for minimizing the header on scrolling down
        startMinimizingHeaderAt: 100,
        isHeaderBig: true,
        // for toggling the header on scrolling down
        lastScrollPosition: 0,
        isHeaderHidden: false,
        // for scroll to top button
        startShowingScrollTopBtnAt: 600,
        isScrollTopBtnDisplayed: false,
  
        // flag to toggle focus style class
        isAnyFocus: false,
  
        // flag to toggle nav menu
        isNavMenuOpen: false,
  
        // list of nav links to loop through it
        navLinks: [
          {
            url: '#hero',
            title: { en: 'Home' }
          }, {
            url: '#about',
            title: { en: 'About'}
          }, {
            url: '#skills',
            title: { en: 'Skills'}
          }, {
            url: '#portfolio',
            title: { en: 'Portfolio'}
          }, {
            url: '#contact',
            title: { en: 'Contact'}
          }
        ],
  
        
         // flag to toggle between skills types in skills section
        skillsType: '',

        skillsItems: [
            {
              imgUrl: require('../assets/images/skills/html.jpg'),
              title: 'HTML5'
            }, {
              imgUrl: require('../assets/images/skills/css3.png'),
              title: 'CSS3'
            }, {
              imgUrl: require('../assets/images/skills/javascript.png'),
              title: 'JavaScript'
            }, {
              imgUrl: require('../assets/images/skills/bootstrap.png'),
              title: 'Bootstrap'
            }, {
              imgUrl: require('../assets/images/skills/nuxt.png'),
              title: 'Nuxt'
            }, {
              imgUrl: require('../assets/images/skills/vue.png'),
              title: 'Vue'
            }, {
              imgUrl: require('../assets/images/skills/tailwind.png'),
              title: 'Tailwind CSS'
            },
            {
              imgUrl: require('../assets/images/skills/python.jpg'),
              title: 'Python'
            },
            {
              imgUrl: require('../assets/images/skills/visual.jpg'),
              title: 'Visual Basic'
            },
            {
              imgUrl: require('../assets/images/skills/vite.jpg'),
              title: 'Vite'
            },
            {
              imgUrl: require('../assets/images/skills/node.png'),
              title: 'Node'
            },
            {
              imgUrl: require('../assets/images/skills/typescript.png'),
              title: 'Node'
            }
          ],


            // list of tools items to loop through it
          toolsItems: [
            {
              imgUrl: require('../assets/images/skills/github.png'),
              title: 'Git (Github)'
            }, {
              imgUrl: require('../assets/images/skills/npm.png'),
              title: 'Npm'
            }, {
              imgUrl: require('../assets/images/skills/command.png'),
              title: 'Command Line'
            }, {
              imgUrl: require('../assets/images/skills/vs-code.png'),
              title: 'VS Code'
            }, {
              imgUrl: require('../assets/images/skills/clickup.jpg'),
              title: 'ClickUp'
            },{
              imgUrl: require('../assets/images/skills/discord.png'),
              title: 'Discord'
            },
            {
              imgUrl: require('../assets/images/skills/figma.jpg'),
              title: 'Figma'
            },
            {
              imgUrl: require('../assets/images/skills/heroku.png'),
              title: 'Heroku'
            }, 
            {
              imgUrl: require('../assets/images/skills/netlify.png'),
              title: 'Netlify'
            },
            {
              imgUrl: require('../assets/images/skills/slack.png'),
              title: 'Slack'
            },
            {
              imgUrl: require('../assets/images/skills/zeplin.png'),
              title: 'Zeplin'
            },
          ],

       
  
        // list of experience items to loop through it
        experienceItems: [
          {
            date: '2019',
            companyName: { en: 'DSC Unilag'},
            jobTitle: { en: 'JavaScript Intern', ar: 'Ù…Ø·ÙˆØ± Ø§Ù„ÙˆØ§Ø¬Ù‡Ø© Ø§Ù„Ø£Ù…Ø§Ù…ÙŠØ©' },
            desc: {
              en: 'Joined a group of team to solve everyday tasks and build web app using a powerful technology JAVASCRIPT',
              
            }
          }, {
            date: '2020',
            companyName: { en: 'DESSERVE NG.'},
            jobTitle: { en: 'Frontend Developer' },
            desc: {
              en: 'Collaborate with creative and development teams on the execution of web and mobile application.'
            }
          }, {
            date: '2021',
            companyName: { en: 'FlowNFuse'},
            jobTitle: { en: 'Frontend Developer Lead' },
            desc: {
              en: 'Collaborate with creative and development teams on the execution of web and mobile application.'
            }
          }, {
            date: '2021',
            companyName: { en: 'Uridium Technologies'},
            jobTitle: { en: 'Frontend Developer (VUE)' },
            desc: {
              en: 'Collaborate with creative and development teams on the execution of web and mobile application.'
            }
          }, {}
        ],
  
        // current page of portfolio items
        portfolioItemsPage: 1,
  
        // portfolio items per page
        itemsPerPage: 7,
  
        // portfolio items filter by type
        filters: ['All', 'HTML', 'Vue', 'Nuxt'],
        currentFilter: 'All',
  
        // portfolio archive name
        portfolioArchiveName: '',
  
        // list of portfolio items to loop through it
        allPortfolioItems: [
          {
            id: 1,
            url: 'https://sammiekei40.github.io/EasyBank-Page/',
            imgUrl: require('../assets/images/portfolio/portfolio1.jpg'),
            title: { en: 'EasyBank Landing Page'},
            date: { en: 'April 2020'},
            desc: {
              en: 'A responsive EasyBank Landing Page website',
            },
            category: 'HTML',
            tools: ['HTML', 'CSS', 'JavaScript']
          }, {
            id: 2,
            url: 'https://sammiekei40.github.io/GPA-Calculator/',
            imgUrl: require('../assets/images/portfolio/portfolio7.png'),
            title: { en: 'A GPA Calculator'},
            date: { en: 'September 2020'},
            desc: {
              en: 'A GPA calculator created with vanilla Javascript',
            },
            category: 'HTML',
            tools: ['HTML','JavaScript', 'Bootstrap']
          }, {
            id: 3,
            url: 'https://sammiekei40.github.io/ChatBot/',
            imgUrl: require('../assets/images/portfolio/portfolio8.png'),
            title: { en: 'ChatBot'},
            date: { en: 'February 2020'},
            desc: {
              en: 'A chatbot created with vanilla javascript',
            },
            category: 'HTML',
            tools: ['HTML', 'CSS', 'JavaScript']
          }, {
            id: 4,
            url: 'https://aggregate-calculator001.netlify.app/',
            imgUrl: require('../assets/images/portfolio/portfolio4.png'),
            title: { en: 'Aggregate Calculator'},
            date: { en: 'July 2020'},
            desc: {
              en: 'An Aggregate calculator built with vanilla javascript and bootstrap',
            },
            category: 'HTML',
            tools: ['HTML', 'BootStrap', 'JavaScript']
          },{
            id: 5,
            url: 'http://examcountdowntimer.netlify.app/',
            imgUrl: require('../assets/images/portfolio/portfolio5.png'),
            title: { en: 'ExamCount Down App'},
            date: { en: 'November 2020'},
            desc: {
              en: 'Countdown timer for upcoming examinations',
            },
            category: 'HTML',
            tools: ['HTML', 'CSS', 'JavaScript']
          }, {
            id: 6,
            url: 'https://phone-validation001.netlify.app/',
            imgUrl: require('../assets/images/portfolio/portfolio2.png'),
            title: { en: 'Phone Number Validator App'},
            date: { en: 'August 2021'},
            desc: {
              en: 'An app that validates the mobile network',
            },
            category: 'Vue',
            tools: ['HTML', 'Tailwind Css', 'Vue JS']
          }, {
            id: 7,
            url: 'https://weatherapp-001.netlify.com/',
            imgUrl: require('../assets/images/portfolio/portfolio6.png'),
            title: { en: 'API Interaction (Weather App)'},
            date: { en: 'June 2021'},
            desc: {
              en: 'Worked with OpenMap Weather API to create a weather web app',
            },
            category: 'Vue',
            tools: ['HTML', 'Tailwind Css', 'Vue JS']
          }, {
            id: 8,
            url: 'https://weatherapp-001.netlify.com/',
            imgUrl: require('../assets/images/portfolio/portfolio3.png'),
            title: { en: 'devFinder app'},
            date: { en: 'October 2021'},
            desc: {
              en: 'Worked with Github API to create a devFinder app',
            },
            category: 'Vue',
            tools: ['HTML', 'Tailwind Css', 'Vue JS']
          },
          {
            id: 9,
            url: 'https://roqqu.netlify.app/',
            imgUrl: require('../assets/images/portfolio/portfolio9.png'),
            title: { en: 'A Trading Website'},
            date: { en: 'April 2022'},
            desc: {
              en: 'Cloned a Ui/UX Design of a Trading website',
            },
            category: 'Nuxt',
            tools: [ 'Semantic UI', 'Nuxt']
          },
          {
            id: 10,
            url: 'https://jobportal01.netlify.app/',
            imgUrl: require('../assets/images/portfolio/portfolio10.png'),
            title: { en: 'Job Portal Web app'},
            date: { en: 'March 2022'},
            desc: {
              en: 'Built a Job Posting Platform',
            },
            category: 'Nuxt',
            tools: ['Bootstrap Css', 'Vue JS']
          },
          {
            id: 11,
            url: 'https://stopwatch123.netlify.app/',
            imgUrl: require('../assets/images/portfolio/portfolio11.png'),
            title: { en: 'Stopwatch App'},
            date: { en: 'February 2022'},
            desc: {
              en: 'Built a UI/UX Design of Stopwatch timer',
            },
            category: 'Vue',
            tools: ['Tailwind Css', 'Vue JS']
          },
          {
            id: 12,
            url: 'https://shortener1.netlify.app/',
            imgUrl: require('../assets/images/portfolio/portfolio12.png'),
            title: { en: 'Shortly'},
            date: { en: 'January 2022'},
            desc: {
              en: 'Build your brand recognition and get detailed insigts on how your links are performing',
            },
            category: 'Vue',
            tools: ['Tailwind Css', 'Vue JS']
          },
          {
            id: 13,
            url: 'https://calapp.netlify.app/',
            imgUrl: require('../assets/images/portfolio/portfolio13.png'),
            title: { en: 'Calculator app'},
            date: { en: 'March 2022'},
            desc: {
              en: 'Created a local calculator',
            },
            category: 'HTML',
            tools: ['HTML', 'Css', 'Javascript']
          }

        ].reverse(),
  
        // viewed portfolio items
        portfolioItems: [],
  
        // list of testimonials items to loop through it
        testimonialsItems: [
          {
            imgUrl: require('../assets/images/sammie.png'),
            quoteContent: {
              en: 'Sammie simply provides amazing web development service. Their team is extremely professional and the easiest to meet I have ever worked with. I would recommend Sammie to anyone.',
            },
            quoteAuthor: { en: 'Sammie Kei'},
            jobTitle: { en: 'Developer'}
          }, 
        ]
      }
    },
  
    created() {
      // get a theme to use
      this.getAppTheme();
    },
    mounted() {
      if (window.innerWidth >= 992) {
        // initialize circle cursor
        this.initCircleCursor();
  
        // apply pan effect hero image
        this.heroImgPanEffect();
  
        // initialize VanillaTilt library in portfolio section
        this.initializeTilt();
      }
  
      // nav menu tab trap
      this.navMenuTabTrap();
  
      // hide the preloader screen after loading
      window.addEventListener('load', () => this.isPreloading = false);
  
      // scrolling options
      this.scrollingOptions();
      document.addEventListener('scroll', () => this.scrollingOptions());
  
      // initialize popper.js plugin
      document.querySelectorAll('.has-ultimate-tooltip').forEach(el => {
        Popper.createPopper(el, el.querySelector('.ultimate-tooltip'), {
          placement: 'top',
          modifiers: [{ name: 'offset', options: { offset: [0, 30] }}]
        });
      });
  
      // get portfolio items
      this.getPortfolioItems();
  
      // init glightbox plugin
      const lightbox = new GLightbox({
        autoplayVideos: false,
      });
  
      // initialize the first displayed type of skills
      this.initSkillsFirstType();
    },
    methods: {
      // initialize circle cursor
      initCircleCursor() {
        const app = this.$refs.appRef;
        const outer = this.$refs.circleCursorOuter;
        const inner = this.$refs.circleCursorInner;
  
        // return if disabled
        if (!outer || !inner) { return; }
  
        app.addEventListener('mousemove', e => {
          // make the circles follow the cursor
          outer.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
          inner.setAttribute('style', `visibility: visible; top: ${e.clientY}px; left: ${e.clientX}px;`);
  
          // add link hover style
          (e.target.closest('a') || e.target.closest('button') || e.target.closest('.link-hover')) ? inner.classList.add('cursor-link-hover') : inner.classList.remove('cursor-link-hover');
        });
  
        app.addEventListener('click', () => {
          // add pulse effect on click
          inner.classList.add('cursor-click-effect');
          setTimeout(() => inner.classList.remove('cursor-click-effect'), 200);
        });
      },
  
      // get a theme to use
      getAppTheme() {
        // get the saved theme from the localStorage
        const storageSavedTheme = localStorage.getItem('sammieSavedTheme');
      
        // Check to see if there a saved theme
        if (storageSavedTheme) {
          this.savedTheme = storageSavedTheme;
      
        } else {
          // So, try to get the browser default theme or make your own default
      
          // Check to see if Media-Queries are supported
          if (window.matchMedia) {
      
            // Check if the dark-mode Media-Query matches
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
              this.savedTheme = 'dark_theme';
            } else { this.savedTheme = 'light_theme'; }
      
          } else {
            // Default (when Media-Queries are not supported)
            this.savedTheme = this.appTheme;
          }
        }
      
        // save the new theme in the localStorage
        localStorage.setItem('sammieSavedTheme', this.savedTheme);
      },
  
      // detect the theme changes
      changeAppTheme() {
        (this.savedTheme === 'light_theme') ? this.savedTheme = 'dark_theme' : this.savedTheme = 'light_theme';
  
        // save the new theme in the localStorage
        localStorage.setItem('sammieSavedTheme', this.savedTheme);
      },
  
      // toggle nav menu
      toggleNavMenu() {
        this.isNavMenuOpen = !this.isNavMenuOpen;
        this.isNavMenuOpen ? this.openNavMenu() : this.closeNavMenu();
      },
  
      // open nav menu
      openNavMenu() {
        const bodyEl = document.getElementsByTagName('body')[0];
  
        this.isNavMenuOpen = true;
  
        bodyEl.setAttribute('style', 'overflow-y: hidden;');
  
        // set focus on nav menu
        this.$refs.headerNav.querySelector('.desktop-menu-content').focus();
      },
  
      // close nav menu
      closeNavMenu() {
        const bodyEl = document.getElementsByTagName('body')[0];
  
        this.isNavMenuOpen = false;
  
        bodyEl.removeAttribute('style');
  
        // set focus on nav menu toggle button
        this.$refs.navMenuToggleBtn.focus();
      },
  
      // nav menu tab trap
      navMenuTabTrap() {
        const nav = this.$refs.headerNav;
        const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
        let firstTabStop;
        let lastTabStop;
        let isFirstTabStop;
        let isLastTabStop;
  
        document.addEventListener('keyup', e => {
          if (nav.classList.contains('menu-open')) {
            // get first & last focusable elements in the side menu for the tab trap
            const visibleFocusableEls = [...nav.querySelectorAll(focusableElementsString)]
              .filter(el => window.getComputedStyle(el).getPropertyValue('visibility') !== 'hidden');
            firstTabStop = visibleFocusableEls[0];
            lastTabStop = visibleFocusableEls[visibleFocusableEls.length -1];
  
            if (e.code === 'Tab') {
              if (e.shiftKey) /* shift + tab */ {
                // if this is the first item, move to the last item
                isFirstTabStop && lastTabStop.focus();
              } else /* tab */ {
                // if this is the last item, go back to the first item
                isLastTabStop && firstTabStop.focus();
              }
  
              // close nav menu on Escape button press
            } else if (e.code === 'Escape') { this.toggleNavMenu(); }
  
            // get current active element
            const activeEl = document.activeElement;
  
            // check if last item or not
            isLastTabStop = (activeEl === lastTabStop) ? true : false;
  
            // check if first item or not
            isFirstTabStop = (activeEl === firstTabStop) ? true : false;
          }
        });
      },
  
      // apply pan effect hero image
      heroImgPanEffect() {
        const parent = this.$refs.heroSection;
  
        // return if disabled
        if (!parent || !parent.getAttribute('data-paneffect')) { return; }
  
        const layer1 = parent.querySelectorAll('.layer')[0];
        const layer2 = parent.querySelectorAll('.layer')[1];
  
        parent.addEventListener('mousemove', (e) => {
          const x = ((e.x - parent.getBoundingClientRect().x) / parent.offsetWidth) * 100;
          const y = ((e.y - parent.getBoundingClientRect().y) / parent.offsetHeight) * 100;
  
          parent.classList.add('parallax-animation');
  
          layer1.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
          layer2.setAttribute('style', `transform-origin: ${x}vw ${y}vh;`);
        });
      },
  
      // scrolling options
      scrollingOptions() {
        const scrollPosition = window.pageYOffset;
      
        // check for current scroll position to minimize the header
        this.isHeaderBig = (scrollPosition >= this.startMinimizingHeaderAt) ? false : true;
      
        // check for current scroll position to toggle the header
        this.isHeaderHidden = ((scrollPosition > 100) && (scrollPosition > this.lastScrollPosition)) ? true : false;
        this.lastScrollPosition = scrollPosition;
      
        // check for current scroll position to show the scrollTop button
        this.isScrollTopBtnDisplayed = (scrollPosition >= this.startShowingScrollTopBtnAt) ? true : false;
      },
  
      // scroll to top
      scrollToTop() {
        window.scroll({ top: 0, behavior: 'smooth' });
      },
  
      // initialize the first displayed type of skills
      initSkillsFirstType() {
        const skillsSwitchBtn = this.$refs.skillsSwitchBtn;
  
        // return if disabled
        if (!skillsSwitchBtn) { return; }
  
        this.skillsType = skillsSwitchBtn.querySelector('input').value;
      },
  
      // initialize VanillaTilt library in portfolio section
      initializeTilt() {
        const portfolioItems = this.$refs.portfolioItems;
  
        // return if disabled
        if (!portfolioItems) { return; }
  
        VanillaTilt.init(portfolioItems.querySelectorAll('.portfolio-item'), {
          max: 8,
          speed: 400,
          glare: true,
          'max-glare': 0.3
        });
      },
  
      // get portfolio items
      getPortfolioItems() {
        const itemsArr = this.allPortfolioItems
          .filter(item => {
            const urlParams = new URLSearchParams(window.location.search);
            const tax = urlParams.get('tax');
  
            if (tax) {
              if (tax === 'cat') {
                const cat = urlParams.get('cat');
  
                this.portfolioArchiveName = cat;
                return item.category === cat;
  
              } else if (tax === 'tools') {
                const tool = urlParams.get('tools');
  
                this.portfolioArchiveName = tool;
                return item.tools.includes(tool);
              }
  
            } else {
              return this.currentFilter === 'All' || item.category === this.currentFilter;
            }
          })
          .slice(this.filteredPortfolioItems.length, this.portfolioItemsPage * this.itemsPerPage);
  
        // check if have works or not
        if (itemsArr.length) {
          this.portfolioItems.push(...itemsArr);
  
          // initialize VanillaTilt for new items
          setTimeout(() => this.portfolioItemsPage > 1 && this.initializeTilt(), 0);
  
          this.portfolioItemsPage++;
  
        } else {
  
          // show message "No works" to the user
          this.setNotify({
            className: 'danger',
            msg: this.$refs.portfolioItems.getAttribute('data-no-works-msg'),
            time: 3000
          });
        }
      },
  
      // filter portfolio items
      filterPortfolioItems(filter) {
        this.currentFilter = filter;
        this.portfolioItemsPage = 1;
  
        if (this.filteredPortfolioItems.length) {
          // initialize VanillaTilt for new items
          setTimeout(() => this.initializeTilt(), 0);
  
        } else {
          // get new portfolio items
          this.getPortfolioItems();
        }
      },
  
      // contact form validation
      contactFormValidation() {
  
        // contact form
        const contactForm = this.$refs.contactForm;
  
        // form controls
        const name        = contactForm.querySelector('input[name="name"]');
        const email       = contactForm.querySelector('input[name="email"]');
        const phone       = contactForm.querySelector('input[name="phone"]');
        const message     = contactForm.querySelector('textarea');
  
        // form validation status
        let errors = {
          name: { required: true, minLength: true },
          email: { required: true, invalid: true },
          phone: { invalid: true },
          message: { required: true }
        };
  
        /* --------------- */
        /* name validation */
        /* --------------- */
  
        // required validation
        if (name.value === '') {
          errors.name.required = true;
          this.setNotify({
            id: 'nameRequired',
            className: 'danger',
            msg: name.closest('.control').querySelector('.errors-msgs .required').value
          });
  
        } else {
          errors.name.required = false;
          this.dismissNotify('nameRequired');
        }
  
        // minlength validation
        if (name.value.length > 0 && name.value.length < name.getAttribute('minlength')) {
          errors.name.minLength = true;
          this.setNotify({
            id: 'nameMinLength',
            className: 'danger',
            msg: name.closest('.control').querySelector('.errors-msgs .minLength').value
          });
  
        } else {
          errors.name.minLength = false;
          this.dismissNotify('nameMinLength');
        }
  
        // toggle invalid errors & style classes
        if (Object.keys(errors.name).some(err => errors.name[err] === true)) {
          name.classList.remove('valid');
          name.classList.add('invalid');
        } else {
          name.classList.remove('invalid');
          name.classList.add('valid');
        }
  
        /* ---------------- */
        /* email validation */
        /* ---------------- */
  
        // required validation
        if (email.value === '') {
          errors.email.required = true;
          this.setNotify({
            id: 'emailRequired',
            className: 'danger',
            msg: email.closest('.control').querySelector('.errors-msgs .required').value
          });
  
        } else {
          errors.email.required = false;
          this.dismissNotify('emailRequired');
        }
  
        // email validation
        if (email.value.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
          errors.email.invalid = true;
          this.setNotify({
            id: 'emailInvalid',
            className: 'danger',
            msg: email.closest('.control').querySelector('.errors-msgs .invalid').value
          });
  
        } else {
          errors.email.invalid = false;
          this.dismissNotify('emailInvalid');
        }
  
        // toggle invalid errors & style classes
        if (Object.keys(errors.email).some(err => errors.email[err] === true)) {
          email.classList.remove('valid');
          email.classList.add('invalid');
        } else {
          email.classList.remove('invalid');
          email.classList.add('valid');
        }
  
        /* ---------------- */
        /* phone validation */
        /* ---------------- */
  
        // phone validation
        if (phone.value.length > 0 && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value)) {
          errors.phone.invalid = true;
          this.setNotify({
            id: 'phoneInvalid',
            className: 'danger',
            msg: phone.closest('.control').querySelector('.errors-msgs .invalid').value
          });
  
        } else {
          errors.phone.invalid = false;
          this.dismissNotify('phoneInvalid');
        }
  
        // toggle invalid errors & style classes
        if (Object.keys(errors.phone).some(err => errors.phone[err] === true)) {
          phone.classList.remove('valid');
          phone.classList.add('invalid');
        } else {
          phone.classList.remove('invalid');
          phone.classList.add('valid');
        }
  
        /* ------------------ */
        /* message validation */
        /* ------------------ */
  
        // required validation
        if (message.value === '') {
          errors.message.required = true;
          this.setNotify({
            id: 'messageRequired',
            className: 'danger',
            msg: message.closest('.control').querySelector('.errors-msgs .required').value
          });
  
        } else {
          errors.message.required = false;
          this.dismissNotify('messageRequired');
        }
  
        // toggle invalid errors & style classes
        if (Object.keys(errors.message).some(err => errors.message[err] === true)) {
          message.classList.remove('valid');
          message.classList.add('invalid');
        } else {
          message.classList.remove('invalid');
          message.classList.add('valid');
        }
  
        // send the message if the form is valid
        (!Object.values(errors).some(control => Object.values(control).some(Boolean))) && this.sendContactFormMessage(contactForm);
      },
  
      // send message from contact form
      sendContactFormMessage(form) {
      //  const url = form.getAttribute('action');
        const formData = new FormData(form);

        var name = document.getElementById('na').value
        var email = document.getElementById('em').value
        var phone = document.getElementById('ph').value
        var message = document.getElementById('mess').value

      
       const apiToken = "2135276019:AAG6J2yo6kEOZ9QRS1M1W2v07vCRA-Wq-RY";
        const chat_id = "-636680793"

        const my_test = `Contact Message: - <b>Name:</b> <i>${name}</i> <b>Email:</b> <i>${email}</i>  <b>Phone:</b> <i>${phone}</i>  <b>Message:</b> <i>${message}</i>`
        const url = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chat_id}&text=${my_test}&parse_mode=html` 

        // start loading spinner
        this.startLoading();
  
        // send post request
        fetch(url, { method: 'POST', body:formData})
          .then(res => res.text())
          .then(data => {
            
              // show success message
              this.setNotify({ className: 'success', msg: form.getAttribute('data-success-msg'), time: 5000 });
  
              // reset all form inputs
              form.reset();
  
              // remove inputs valid classes
              form.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));
  
            
              // show error message
            //  this.setNotify({ className: 'danger', msg: form.getAttribute('data-err-msg'), time: 5000 });
            
  
            // end loading spinner
            this.endLoading();
  
            console.log(data);
          })
          .catch(err => console.log(err));
      },
  
      // show messages by toast notifications
      setNotify({id, className, msg, time}) {
        const notify = {
          id: id || `${Date.now()}${this.notifications.length}`,
          className,
          msg,
          time
        };
  
        if (id) {
          (!this.notifications.some(e => e.id === id)) && this.notifications.push(notify);
  
        } else { this.notifications.push(notify); }
  
        // remove this notification from the array after (n) seconds
        time && setTimeout(() => this.dismissNotify(notify.id), time);
      },
  
      // dismiss the notifications
      dismissNotify(id) {
        const index = this.notifications.findIndex(notify => notify.id === id);
        (index > -1) && this.notifications.splice(index, 1);
      },
  
      // add ajax loading spinner
      startLoading() {
        this.ajaxLoading.push(true);
      },
  
      // remove ajax loading spinner
      endLoading() {
        this.ajaxLoading.pop();
      }
    },
    computed: {
      // flag to toggle ajax loading spinner
      isAjaxLoading() {
        return this.ajaxLoading.some(state => state === true);
      },
  
      // get the total years of experience
      experienceYears() {
        return new Date(new Date() - new Date(String(this.careerStartDate))).getFullYear() - 1969;
      },
  
      // split experience items into chunks of 3 items
      experienceChunks() {
        return [...Array(Math.ceil(this.experienceItems.length / 3))].map(() => this.experienceItems.splice(0, 3));
      },
  
      // filtered portfolio items
      filteredPortfolioItems() {
        const urlParams = new URLSearchParams(window.location.search);
        const tax = urlParams.get('tax');
  
        if (tax) {
          return this.portfolioItems;
  
        } else {
          return this.portfolioItems.filter(item => this.currentFilter === 'All' || item.category === this.currentFilter);
        }
      },
  
      // get single portfolio item
      getSinglePortfolioItem() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
  
        return this.allPortfolioItems.find(item => item.id == id);
      },
  
      // get the total years of copyright
      copyrightDate() {
        const yearsDuration = new Date(new Date() - new Date(String(this.copyrightStartDate))).getFullYear() - 1970;
        return yearsDuration === 0 ? this.copyrightStartDate : `${this.copyrightStartDate} - ${this.copyrightStartDate + yearsDuration}`;
      }
    },
    directives: {
      // clone directive
      clone: {
        mounted(el) {
          el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
        }
      },
  
      // add stagger delay to children elements
      staggerdelay: {
        mounted(el, binding) {
          [...el.children].forEach((child, i) => {
            child.setAttribute('style', `animation-delay: ${(i + 1) * (binding.value || 100)}ms`);
          });
        }
      },
  
      // tooltip directive
      tooltip: {
        mounted(el, binding) {
          el.classList.add('has-tooltip');
          el.insertAdjacentHTML('beforeend', `<div class="custom-tooltip custom-tooltip-${binding.value.dir}">${binding.value.text}</div>`);
        }
      }
    }
}
</script>

<style>

</style>
