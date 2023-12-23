<template>
<Navbar></Navbar>

<div class="hero-page text-center py-20 px-5 md:px-10 max-w-screen-xl mx-auto">
    <img src="~/assets/img/raldin-casidar-icon.png" alt="Raldin Casidar's Logo" class="md:h-25 h-20 mx-auto">
    <h2 class="text-white text-2xl md:text-4xl my-10 font-bold">We, at Raldin Casidar Studios</h2>
    <!-- <h1 class="text-yellow-400 drop-shadow-xl shadow-yellow-400/50 text-7xl my-10 font-bold">Design Websites</h1> -->
    <VueWriter class="text-yellow-400 drop-shadow-xl leading-relaxed shadow-yellow-400/50 text-5xl md:text-7xl my-10 font-bold" :typeSpeed="70"  :eraseSpeed="70" :caret="'cursor'" :array="['Design Softwares', 'Develop Apps', 'Create Logos', 'Help Businesses', 'Help Students', 'Create Systems']" />
    <p class="text-white/70 text-md md:text-lg  leading-10">We are a team of experts that design and develop websites for your needs.</p>
    <a class="rounded-full inline-block white-text p-4 px-6 bg-yellow-400 mt-20 shadow-md shadow-yellow-400/50 font-bold uppercase hover:scale-110 transition-all hover:shadow-lg active:scale-95 active:shadow-sm" href="#!">CREATE YOUR PROJECTS!</a>
</div>

<div class="who-are-we flex flex-column md:flex-row flex-wrap-reverse max-w-screen-2xl py-20 mx-auto min-h-full items-center px-3 md:px-10">
    <div class="box-1 p-4 w-full lg:w-2/4">
        <h3 class=" text-xl md:text-2xl text-white my-5 font-bold">Who are we?</h3>
        <h2 class="text-4xl md:text-5xl text-yellow-400 drop-shadow-xl font-bold my-10 leading-relaxed">We are a team of software experts</h2>
        <p class="text-md md:text-lg text-white/70 leading-10">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one.</p>
    </div>
    <div class="box-2 p-0 md:p-4 w-full lg:w-2/4 justify-center">
        <div class="flex flex-row p-0 md:p-10 justify-center gap-x-3 max-w-full md:max-w-xl m-auto">
            <div class="flex flex-col mt-20">
                <img src="~/assets/img/team-1.png" class="w-72 cursor-pointer hover:-rotate-6 transition-transform hover:scale-110" alt="Team 1: Raldin Casidar">
                <img src="~/assets/img/team-2.png" class="w-72 cursor-pointer hover:rotate-6 transition-transform hover:scale-110" alt="Team 2: Raldin Casidar">
            </div>
            <div class="flex flex-col">
                <img src="~/assets/img/team-3.png" class="w-72 cursor-pointer hover:-rotate-6 transition-transform hover:scale-110" alt="Team 3: Raldin Casidar">
                <img src="~/assets/img/team-4.png" class="w-72 cursor-pointer hover:rotate-6 transition-transform hover:scale-110" alt="Team 4: Raldin Casidar">
            </div>
        </div>
    </div>
</div>

<div class="our-services min-h-full py-20 px-3 md:px-10 text-center max-w-screen-xl mx-auto">
    <h3 class="text-white text-3xl md:text-4xl font-bold ">Our Services</h3>
    <img class="mx-auto mb-20" src="~/assets/img/divider.svg" alt="">

    <div class="flex flex-row flex-wrap justify-center">
        <div class="w-full p-3 lg:w-1/2 xl:w-2/6">
            <div class="group border border-gray-600 p-5 py-10 border-b-4 border-b-yellow-400 hover:shadow-xl hover:shadow-yellow-400/30 transition-shadow cursor-pointer">
                <i class="material-icons text-6xl text-white text-yellow-400 my-5 transition-transform">web</i>
                <h4 class="font-bold text-white text-3xl mb-7">Web Designing</h4>
                <ul>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                </ul>

                <a href="#!" class="mt-10 mb-5 inline-block uppercase text-white font-bold border-yellow-400 border-2 p-3 px-6 rounded-full hover:bg-yellow-400 hover:text-gray-800 hover:scale-110 active:scale-95 transition-all">GET A FREE QUOTE!</a>
            </div>
        </div>
        <div class="w-full p-3 lg:w-1/2 xl:w-2/6">
            <div class="group border border-gray-600 p-5 py-10 border-b-4 border-b-yellow-400 hover:shadow-xl hover:shadow-yellow-400/30 transition-shadow cursor-pointer">
                <i class="material-icons text-6xl text-white text-yellow-400 my-5 transition-transform">web</i>
                <h4 class="font-bold text-white text-3xl mb-7">Web Designing</h4>
                <ul>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                </ul>

                <a href="#!" class="mt-10 mb-5 inline-block uppercase text-white font-bold border-yellow-400 border-2 p-3 px-6 rounded-full hover:bg-yellow-400 hover:text-gray-800 hover:scale-110 active:scale-95 transition-all">GET A FREE QUOTE!</a>
            </div>
        </div>
        <div class="w-full p-3 lg:w-1/2 xl:w-2/6">
            <div class="group border border-gray-600 p-5 py-10 border-b-4 border-b-yellow-400 hover:shadow-xl hover:shadow-yellow-400/30 transition-shadow cursor-pointer">
                <i class="material-icons text-6xl text-white text-yellow-400 my-5 transition-transform">web</i>
                <h4 class="font-bold text-white text-3xl mb-7">Web Designing</h4>
                <ul>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                    <li class="text-white/70 my-3"> <i class="material-icons text-lg text-yellow-400 mr-3 align-middle">check</i> Create Prototypes and Designs</li>
                </ul>

                <a href="#!" class="mt-10 mb-5 inline-block uppercase text-white font-bold border-yellow-400 border-2 p-3 px-6 rounded-full hover:bg-yellow-400 hover:text-gray-800 hover:scale-110 active:scale-95 transition-all">GET A FREE QUOTE!</a>
            </div>
        </div>
    </div>
</div>

<div class="our-team-experts min-h-full py-20 px-5 md:px-10 text-center max-w-screen-xl mx-auto">
    <h3 class="text-white text-4xl font-bold  mb-20 ">Our Team Experts</h3>
    <div class="flex flex-row flex-wrap gap-0 justify-center">
        <div class="w-full md:w-1/2 lg:w-2/6 text-center group cursor-pointer hover:bg-yellow-400/5 transition-colors py-5 rounded-xl focus:ring-2 ring-white">
            <img src="~/assets/img/team-1.png" class="transition-transform w-full max-w-xs mx-auto group-hover:-rotate-6 group-hover:scale-110" alt="Team 1: Raldin Casidar">
            <h4 class="text-white font-bold text-2xl mb-5">Raldin C. Disomimba</h4>
            <div class="tag text-yellow-400 border-2 border-yellow-400 font-bold inline-block rounded-100 group-hover:bg-yellow-400 group-hover:text-gray-800 transition-colors cursor-pointer p-2 text-sm rounded-full px-6 mb-5">Backend Developer</div>
            <p class="text-white/70 mb-6">Expert in PHP, MySQL & Python</p>
            <p>
                <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">facebook</i></a>
                <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">public</i></a>
                <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">mail</i></a>
            </p>
        </div>
        <div class="w-full md:w-1/2 lg:w-2/6 text-center group cursor-pointer hover:bg-yellow-400/5 transition-colors py-5 rounded-xl focus:ring-2 ring-white">
            <img src="~/assets/img/team-4.png" class="transition-transform w-full max-w-xs mx-auto group-hover:-translate-y-3 group-hover:scale-110" alt="Team 1: Raldin Casidar">
            <h4 class="text-white font-bold text-2xl mb-5">Jebray Sorronda</h4>
            <div class="tag text-yellow-400 border-2 border-yellow-400 font-bold inline-block rounded-100 group-hover:bg-yellow-400 group-hover:text-gray-800 transition-colors cursor-pointer p-2 text-sm rounded-full px-6 mb-5">Frontend Developer</div>
            <p class="text-white/70 mb-6">Expert in Web, VueJS and ReactJS</p>
            <p>
                <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">facebook</i></a>
                <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">public</i></a>
                <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">mail</i></a>
            </p>
        </div>
        <div class="w-full md:w-1/2 lg:w-2/6 text-center group cursor-pointer hover:bg-yellow-400/5 transition-colors py-5 rounded-xl focus:ring-2 ring-white">
            <img src="~/assets/img/team-3.png" class="transition-transform w-full max-w-xs mx-auto group-hover:rotate-6 group-hover:scale-110" alt="Team 1: Raldin Casidar">
            <h4 class="text-white font-bold text-2xl mb-5">Maveric Marano</h4>
            <div class="tag text-yellow-400 border-2 border-yellow-400 font-bold inline-block rounded-100 group-hover:bg-yellow-400 group-hover:text-gray-800 transition-colors cursor-pointer p-2 text-sm rounded-full px-6 mb-5">Lead Marketing</div>
            <p class="text-white/70 mb-6">Expert in Marketing</p>
            <p>
                <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">facebook</i></a>
                <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">public</i></a>
                <a href="#!" class="pt-4 pb-1 px-3 transition-colors hover:bg-yellow-400/20 rounded-full leading-4 mx-1"><i class="material-icons text-2xl text-yellow-400">mail</i></a>
            </p>
        </div>
    </div>
</div>

<div class="our-previous-work our-services min-h-full py-20 px-3 md:px-10 text-center max-w-screen-xl mx-auto">
    <h3 class="text-white text-4xl font-bold ">Our Previous Work</h3>
    <img class="mx-auto mb-20" src="~/assets/img/divider.svg" alt="">

    <div class="flex flex-col lg:flex-row items-center my-14">
        <div class="w-full lg:w-2/4 pa-3 justify-center">
            <img src="~/assets/img/project-1.png" alt="Covax E-Passport" class="w-full max-w-xl mx-auto">
        </div>
        <div class="w-full lg:w-2/4 pa-3 text-left p-3">
            <h3 class="text-white text-lg md:text-2xl font-bold my-5">Covax E-Passport</h3>
            <h2 class="text-yellow-400 text-2xl md:text-4xl font-bold drop-shadow-lg leading-relaxed my-5">CoVid-19 Contact Tracing and Monitoring App</h2>
            <p class="text-white/70 text-md md:text-lg leading-loose drop-shadow-md">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one.</p>
            <a class="text-yellow-400 drop-shadow-lg uppercase mt-10 inline-block font-bold text-md tracking-widest border-b-2 hover:border-yellow-400 border-yellow-400/20" href="#!">VIEW CASE STUDY</a>
        </div>
    </div>

    <div class="flex flex-col lg:flex-row-reverse items-center my-14">
        <div class="w-full lg:w-2/4 pa-3 justify-center">
            <img src="~/assets/img/project-2.png" alt="GS Digital Marketing App" class="w-full max-w-xl mx-auto">
        </div>
        <div class="w-full lg:w-2/4 pa-3 text-left p-3">
            <h3 class="text-white text-lg md:text-2xl font-bold my-5">GS Digital Marketing App</h3>
            <h2 class="text-yellow-400 text-2xl md:text-4xl font-bold drop-shadow-lg leading-relaxed my-5">Mobile Wallet and Earning Application</h2>
            <p class="text-white/70 text-md md:text-lg leading-loose drop-shadow-md">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one.</p>
            <a class="text-yellow-400 drop-shadow-lg uppercase mt-10 inline-block font-bold text-md tracking-widest border-b-2 hover:border-yellow-400 border-yellow-400/20" href="#!">VIEW CASE STUDY</a>
        </div>
    </div>

    <div class="flex flex-col lg:flex-row items-center my-14">
        <div class="w-full lg:w-2/4 pa-3 justify-center">
            <img src="~/assets/img/project-3.png" alt="SchoolShare" class="w-full max-w-xl mx-auto">
        </div>
        <div class="w-full lg:w-2/4 pa-3 text-left p-3">
            <h3 class="text-white text-lg md:text-2xl font-bold my-5">SchoolShare</h3>
            <h2 class="text-yellow-400 text-2xl md:text-4xl font-bold drop-shadow-lg leading-relaxed my-5">Document Sharing Platform for Schools</h2>
            <p class="text-white/70 text-md md:text-lg leading-loose drop-shadow-md">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one.</p>
            <a class="text-yellow-400 drop-shadow-lg uppercase mt-10 inline-block font-bold text-md tracking-widest border-b-2 hover:border-yellow-400 border-yellow-400/20" href="#!">VIEW CASE STUDY</a>
        </div>
    </div>
</div>



<div class="call-to-action my-20 py-10">
    <div class="box border-t-2 border-b-2 border-yellow-400 bg-[#222222]">
        <div class="flex mx-auto max-w-screen-xl items-center">
            <div class="p-8 py-[40px] w-full md:w-2/4 text-center md:text-left">
                <i class="material-icons text-[50px] md:text-[70px] text-yellow-400">schedule</i>
                <h2 class="text-xl md:text-2xl font-bold text-white">Let's Schedule your</h2>
                <h2 class="text-2xl md:text-4xl font-bold text-yellow-400 my-7">FREE CONSULTATION</h2>
                <p class="text-lg text-gray-300 leading-loose">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was.</p>
                <a href="#!" class="inline-block bg-yellow-400 m-4 p-3 px-6 rounded-full font-bold mt-12 text-lg shadow-lg shadow-yellow-400/30 active:scale-105 active:shadow-xl transition-all">FREE CONSULTATION <i class="material-icons align-middle text-xl ml-2">arrow_forward</i></a>
            </div>
            <div class="hidden md:block p-8 w-2/4">
                <div class="calendly-inline-widget shadow-yellow-400/20 shadow-lg rounded-xl h-[700px] -my-16 max-w-md mx-auto overflow-hidden" data-url="https://calendly.com/raldincasidar/free-consultation"></div>
               <!-- <div class="">
               </div> -->
            </div>
        </div>

    </div>
</div>


<div class="our-services min-h-full py-20 px-0 md:px-10 text-center max-w-screen-xl mx-auto">
    <h3 class="text-white text-3xl md:text-4xl font-bold ">Our DevBlogs</h3>
    <img class="mx-auto mb-20" src="~/assets/img/divider.svg" alt="">


    <ClientOnly>
        <carousel :items-to-show="showCarouselItem" :wrap-around="true" class="shadow-x-md">
            <slide v-for="slide in 10" :key="slide" class="p-3">
                <div class="border-gray-400 border rounded-lg p-5 py-8 pt-0 text-center w-full mt-20 group hover:shadow-lg shadow-yellow-400 transition-shadow cursor-pointer active:scale-95 transition-transform">
                    <div class="w-full pb-[56%] bg-gray-400 rounded-lg shadow-yellow-400/30 shadow-lg mb-10 -mt-16 -rotate-1 bg-no-repeat bg-cover transition-transform group-hover:scale-105 group-hover:rotate-3" style="background-image: url('https://picsum.photos/1080/720')"></div>
                    <h6 class="text-left text-gray-400 my-4">5 mins read - Raldin C. Disomimba</h6>
                    <h4 class="text-left text-xl font-bold text-yellow-400 drop-shadow-lg">Why do you need to work in a grabe environment</h4>
                    <a href="#!" class="inline-block mt-10 w-full rounded-full border-2 border-yellow-400 p-3 text-white font-bold shadow-md shadow-yellow-400/20 group-hover:bg-yellow-400 group-hover:text-gray-800 transition-colors focus:ring-2 ring-white">READ ARTICLE</a>
                </div>
            </slide>

            <template #addons>
                <!-- <navigation /> -->
                <pagination />
            </template>
        </carousel>
    </ClientOnly>
</div>


<Footer></Footer>


</template>

<style>
.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: #FFD118;
  animation: blink 1s infinite;
}

.is-typed span.underscore {
  display: inline-flex;
  width: 17px;
  height: 7px;
  align-items:flex-end;
  background-color: #FFD118;
  animation: blink 1s infinite;
}

@keyframes blink {
  49% {
    background-color: #FFD118;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

iframe::-webkit-scrollbar {
    display: none;
}

.shadow-x-md {
    box-shadow: inset 25px 0px 25px -25px rgba(0,0,0,0.45), inset -25px 0px 25px -25px rgba(0, 0, 0, 0.246);
}

.carousel__pagination-button::after {
    background-color: rgba(255, 255, 255, 0.112);
}

.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
    background-color: #FFD118;
}

</style>

<script setup>
import VueWriter from "vue-writer";

useHead({
  title: 'Raldin Casidar Studios | Expert Software Engineers Crafting Innovative Solutions',
  meta: [
    { name: 'description', content: 'At Raldin Casidar Studios, we are a dynamic team of software engineers dedicated to building cutting-edge software, websites, and mobile apps. Partner with us to elevate your business with tailor-made technological solutions. Visit us at raldincasidar.studio for transformative tech expertise.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [
        { src: ''}
    ]
})

const showCarouselItem = ref(2.5)

function listenAndAdjust(e) {
    const width = window.innerWidth
    if (width < 767) {
        showCarouselItem.value = 1.1
    }
    else {
        showCarouselItem.value = 2.5
    }
}

onMounted(() => {
    listenAndAdjust()
    window.addEventListener('resize', listenAndAdjust, true);

    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
    document.head.appendChild(recaptchaScript)
})

onUnmounted(() => {
    window.removeEventListener('resize', listenAndAdjust, true);
})
</script>