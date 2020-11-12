<template>
  <q-layout view="lHh Lpr lFf">
    <div v-bind:class="{'main': $q.platform.is.desktop, 'mobile_main': $q.platform.is.ipad || $q.platform.is.mobile}"
         class="full-height" style="background-color:rgba(255, 255, 255, 1);">

      <q-header class="q-py-sm" style="background-color:rgba(255, 255, 255, 1);">
        <q-toolbar class="text-h4" color = "dark">
          <q-space></q-space>
          <q-tabs v-model="selected_tab" shrink>
            <q-tab :style="[selected_tab == 't_0' ? {backgroundColor: 'white'} : {}]" class="q-mr-sm q-py-xs custom_tab"
                   @click="scrollToElement('id_about_us')" style="width:120px;min-height:auto !important;color: black"
                   label="About us"/>
            <q-tab :style="[selected_tab == 't_1' ? {backgroundColor: 'white'} : {}]" class="q-mr-sm q-py-xs custom_tab"
                   @click="scrollToElement('id_products')" style="width:120px;min-height:auto !important;color: black"
                   label="products"/>
            <q-tab :style="[selected_tab == 't_2' ? {backgroundColor: 'white'} : {}]" class="q-mr-sm q-py-xs custom_tab"
                   @click="scrollToElement('id_shop')" style="width:120px;min-height:auto !important;color: black"
                   label="Shop"/>
            <q-tab :style="[selected_tab == 't_3' ? {backgroundColor: 'white'} : {}]" class="q-mr-sm q-py-xs custom_tab"
                   @click="scrollToElement('id_organization')" style="width:120px;min-height:auto !important;color: black"
                   label="Organization"/>
            <q-tab :style="[selected_tab == 't_4' ? {backgroundColor: 'white'} : {}]" class="q-mr-sm q-py-xs custom_tab"
                   @click="scrollToElement('id_contact_us')" style="width:120px;min-height:auto !important;color: black" 
                   label="Contact Us"/>
          </q-tabs>
        </q-toolbar>
      </q-header>
      <section>
        <div class="full-height full-width flex flex-center text-center"
           style="background-color: rgba(255, 255, 255, 0.5) !important;z-index:0;height: 100vh !important;">
        <div class="">
          <div class="text-h3 text-grey-10">WELCOME TO<div style="color: #3C3744 !important;" class="text-h4 q-mt-md text-grey-15 my-font">Kitchen cabinets</div></div>
          <div class="text-h2 text-white q-py-sm q-my-md"
               style="border-top:3px solid #FFF9FF;border-bottom: 3px solid #000000;">
          </div>
          <div class="text-h6" style="color: #000000;">
            European Made | Elegant | Noble
          </div>
        </div>
      </div>
        <!-- <canvas id="canvas1" style="height: 100%;width:100%;"></canvas> -->
      </section>
    </div>

    <div style="background-color:#FFFFFF" id="id_about_us">
      <div class="row">
        <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
          <div style="border-bottom: 3px solid #bdbdbd;" class="q-pa-md text-center text-black text-weight-bolder text-h6">
            ABOUT US
          </div>
          <div style="background-color: rgba(255,255,255, 0) !important;">
            <div style="background-color: rgba(255,255,255, 0) !important;">
              <q-img style="height:100%"
                     class="col-5"
                     src="/statics/images/my_2.png" 
              />
            </div>
          </div>
        </div>
        <div class="col-md-8 col-lg-8 col-xs-12 col-sm-12 q-px-md q-pt-sm">
          <div class="text-h4 text-center text-black q-py-xs q-my-xs"
               style="border-top:3px solid #000000;border-bottom: 3px solid #bdbdbd;">
               Text here
          </div>
          <h5 class="q-my-none text-caption" style="color: #000000;">
            Text here Text here Text here Text here Text here Text here
          </h5>
        </div>
      </div>
    </div>
    <div style="background-color:#FFFFFF" id="id_products">
      <div class="row q-px-xl">
        <div class="text-h4 text-center text-black q-py-sm q-my-md full-width"
             style="border-top:3px solid #000000;border-bottom: 3px solid #000000;">Our products
        </div>
        <div class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <!-- <q-ribbon class="github-text" position="top-right" type="corner" color="white" background-color="#eb4f71">
                <a href="https://github.com/mayank091193/quasar-admin-crm" target="_blank">FORK ME ON GITHUB!</a>
              </q-ribbon> -->
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="q-py-xs">
                    <div class="text-overline text-pink">Made With Love</div>
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      <a class="product_link" style="text-decoration: none;color: #eb4f71;"
                         href="https://www.kitchencabinets.co.nz/page/range-milan" target="_blank">Milan set</a>
                    </div>
                    <div class="text-caption text-grey-9">
                      Simplicity at its core, these cabinets do exactly what they need to. The Milan Set is the most affordable kitchen cabinetry available and is perfect for anyone on a restricted budget, or those who simply require a basic unit. 
                      <br>Milan set is also well suited for rooms outside of the kitchen; such as laundries, basements and even sleepouts. All of our cabinets are made in Italy and come with step by step instructions, making assembly simple - even for those who aren't DIY minded.
                      <ul>
                        <li>Three Year Warranty</li>
                        <li>Moisture Resistant Particle Board Door</li>
                        <li>Italian Hardware</li>
                        <li>Individual Toekick & Handle Included</li>
                        <li>White Satin Melamine Finish</li>
                      </ul>
                    </div>
                  </q-card-section>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="col-5 flex flex-center">
                    <q-img
                      href="google.com"
                      class="rounded-borders"
                      style="border:1px solid darkgrey"
                      src="/statics/images/milan set.jpg"
                    />
                  </q-card-section>
                </div>
              </div>
            </q-card-section>

            <q-separator/>
          </q-card>
        </div>
        <div class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <!-- <q-ribbon class="github-text" position="top-right" type="corner" color="white" background-color="#eb4f71">
                <a href="https://github.com/mayank091193/quasar-scrum" target="_blank">FORK ME ON GITHUB!</a>
              </q-ribbon> -->
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="q-py-xs">
                    <div class="text-overline text-pink">Made With Love</div>
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      <a class="product_link" style="text-decoration: none;color: #eb4f71;"
                         href="https://www.kitchencabinets.co.nz/page/range-florence" target="_blank">Florence set</a>
                    </div>
                    <div class="text-caption text-grey-9">
                      Florence Set is the step above the rest, with soft closing hardware these cabinets can modernise any kitchen. There is a reason why this product is our best seller, combining high quality style at a reasonable price they provide your kitchen with a clean look that will always be on trend.
                      <ul>
                        <li>Five Year Warranty</li>
                        <li>Thermoformed Moisture & Impact Resistant MDF Doors</li>
                        <li>Blum Soft Closing Hardware</li>
                        <li>Handles Included</li>
                        <li>White Gloss Finish Doors & Drawers</li>
                      </ul>
                    </div>
                  </q-card-section>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="col-5 flex flex-center">
                    <q-img
                      class="rounded-borders"
                      style="border:1px solid darkgrey"
                      src="/statics/images/Florence set.png"
                    />
                  </q-card-section>
                </div>
              </div>
            </q-card-section>

            <q-separator/>
          </q-card>
        </div>
        <div class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-card class="my-card" flat bordered>
            <q-card-section>
              <!-- <q-ribbon class="github-text" position="top-right" type="corner" color="white" background-color="#eb4f71">
                <a href="https://github.com/mayank091193/vue-quasar-company-profile-website" target="_blank">FORK ME ON
                  GITHUB!</a>
              </q-ribbon> -->
              <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="q-py-xs">
                    <div class="text-overline text-pink">Made With Love</div>
                    <div class="text-h5 q-mt-sm q-mb-xs">
                      <a class="product_link" style="text-decoration: none;color: #eb4f71;"
                         href="https://www.kitchencabinets.co.nz/page/range-premier" target="_blank">Premier Range</a>
                    </div>
                    <div class="text-caption text-grey-9">
                      The Premier brand is the most customisable of the available kitchen cabinetry, defined by high quality performance and distinguished styles in a range of colours. The wide selection of styles and colours encourages kitchens that can be uniquely designed to cater to any aesthetic taste.
                      <ul>
                        <li>Ten Year Warranty</li>
                        <li>Highly Moisture Resistant Doors</li>
                        <li>Blum Soft Closing Hinges</li>
                        <li>Full Extension Drawer Runners (DTC and Blum)</li>
                        <li>Variety of Door Ranges and Finishes Available</li>
                        <li>Moisture Resistant Particle Board Carcass</li>
                        <li>Edges Fully Sealed with PUR and PVC</li>
                      </ul>
                    </div>
                  </q-card-section>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                  <q-card-section class="col-5 flex flex-center">
                    <q-img
                      class="rounded-borders"
                      style="border:1px solid darkgrey"
                      src="/statics/images/Premier Range.png"
                    />
                  </q-card-section>
                </div>
              </div>
            </q-card-section>

            <q-separator/>
          </q-card>
        </div>
      </div>
    </div>
    <div style="background-color:#FFFFFF" id="id_shop">
      <div class="row row q-px-xl">
        <div class="text-h4 text-center text-dark q-py-sm q-my-md full-width"
             style="border-top:3px solid #000000;border-bottom: 3px solid #000000;">Our shop
        </div>
        <div class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center">
          <q-btn target="_blank" type="a" href="https://www.kitchencabinets.co.nz/page/shop">
            <q-card class="shop-card q-my-sm">
              <q-card-section class="q-pb-none">
                <div class="text-h6 text-center text-grey-9">kitchen  cabinets</div>
              </q-card-section>
              <q-card-section class="flex flex-center">
                <img class="" style="height: 185px;width: 185px;"
                     src="statics\images\ShopIcons.png">
              </q-card-section>
            </q-card>
          </q-btn>
        </div>
      </div>
    </div>
    <section id="id_organization">
      <div style="background-color:#FFFFFF;z-index:0;" class="content">
        <div class="row row q-px-xl">
          <div class="text-h4 text-center text-black q-py-sm q-my-md full-width"
               style="border-top:3px solid #000000;border-bottom: 3px solid #000000;">Our organization
          </div>
          <div class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl">
            <div class="q-pa-md">
              <div class="q-col-gutter-md row">
                <div class="col-md-6 col-md-6 col-xs-12 col-sm-12 text-center flex flex-center">
                  <q-img
                    src="statics/images/IIH.png"
                    v-bind:class="{'sketch_desktop': $q.platform.is.desktop, 'sketch_mobile': $q.platform.is.ipad || $q.platform.is.mobile}"
                  >
                  </q-img>
                </div>

                <div class="col-md-6 col-md-6 col-xs-12 col-sm-12 text-center flex flex-center">
                  <q-img src="statics/images/IIH.png"
                         v-bind:class="{'sketch_desktop': $q.platform.is.desktop, 'sketch_mobile': $q.platform.is.ipad || $q.platform.is.mobile}">
                  </q-img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <canvas id="canvas2" style="height: 100%;width:100%;"></canvas>
    </section>
    <div id="contact_us">
      <div style="background-color: rgba(0, 0, 0, 0.68) !important;">
        <form
          action="https://formspree.io/mpzydoze"
          method="POST"
        >
          <div class="row text-center flex flex-center q-py-lg">
            <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
              <q-input required v-model="name" name="name" bg-color="white" outlined label="Your Name *">
                <template v-slot:append>
                  <q-icon name="list" style="color:black"/>
                </template>
              </q-input>
              <q-input type="email" required v-model="email" name="_replyto" bg-color="white" outlined label="Your Email *">
                <template v-slot:append>
                  <q-icon name="email" style="color:black"/>
                </template>
              </q-input>
            </div>
            <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
              <q-input required v-model="message" name="message" class="" type="textarea" bg-color="white" outlined
                       label="Your Message *">
                <template v-slot:append>
                  <q-icon name="comment" style="color:black"/>
                </template>
              </q-input>
            </div>
          </div>
          <div class="row flex flex-center text-center q-pb-xl q-mt-md">
            <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12">
              <q-btn type="submit" size="lg" style="background:black;color: white" label="Send Message"/>
            </div>
          </div>
        </form>
      </div>
    </div>
    <q-toolbar class="flex flex-center text-white" style="background-color: #1c1b21;border-top: 2px solid black"
               id="id_contact_us">
      <div class="q-pa-sm q-gutter-sm">
        <q-btn target="_blank" style="border: 2px solid black" round type="a" href="https://twitter.com/kitchens_nz"
               glossy
               icon="fab fa-twitter"/>
        <q-btn style="border: 2px solid black" round type="a" href="info@kitchencabinets.co.nz"
               glossy
               icon="email"/>
        <q-btn target="_blank" style="border: 2px solid black;" round type="a"
               href="https://www.youtube.com/channel/UCHGCOTXEl0YQbH0nyH8SlCA"
               glossy
               icon="fab fa-youtube"/>
        <q-btn target="_blank" style="border: 2px solid black;" round type="a"
               href="https://www.instagram.com/kcandstones/"
               glossy
               icon="fab fa-instagram-square"/>
      </div>
    </q-toolbar>
  </q-layout>
</template>

<script>

    import {scroll} from 'quasar'

    const {getScrollTarget, setScrollPosition} = scroll
    export default {
        name: 'PageIndex',
        data() {
            return {
                name: "",
                email: "",
                message: "",
                selected_tab: 't_0',
            }
        },
        methods: {
            scrollToElement(id) {
                let el = document.getElementById(id)
                const target = getScrollTarget(el)
                const offset = el.offsetTop - 65
                const duration = 800
                setScrollPosition(target, offset, duration)
            }
        },
    }
</script>

<style>
  .main {

    background: url(/statics/images/my_1.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh !important;
  }

  .mobile_main {
    background: url(/statics/images/my_1.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh !important;
  }

  .my-card {
    width: 100%;
    max-width: 800px;
    border: none;
    border-radius: 0px;
  }

  .sponsor-card {
    width: 100%;
    max-width: 240px;
    border: none;
    border-radius: 6px;
  }

  .project_link:hover {
    text-decoration: underline !important;
  }

  .sketch_desktop {
    width: 450px;
    height: 620px;
    border: 20px solid #30313b;
  }

  .sketch_mobile {
    width: 100%;
    height: 100% !important;
    border: 20px solid #30313b;
  }

  #contact_us {
    background: url(/statics/images/BushRd.png);
    background-size: cover;
    background-position: 50%;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  .custom_tab {
    width: 130px;
  }

  body {
    overflow-x: hidden;
  }

  section {
    position: relative;
  }

  section > * {
    z-index: 9;
    position: relative;
    top: 0;
  }

  section > canvas {
    z-index: 1;
    position: absolute;
    left: 0;
  }
</style>
