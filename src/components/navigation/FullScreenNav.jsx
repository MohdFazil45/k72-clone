import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";

const fullScreenNav = () => {

  const [navOpen, setNavOpen] = useContext(NavbarContext)

  const fullNavLinkRef = useRef(null)
  const fullScreenRef = useRef(null)

function gsapAnimation() {
  const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power2.out" } });

  // Show fullscreen wrapper
  tl.set(".fullscreennav", { autoAlpha: 1 });

  // Animate logo + close button
  tl.fromTo(".nav-header", 
    { y: -50, opacity: 0 }, 
    { y: 0, opacity: 1 }, 
    "<" // start together with stairs
  );

  // Animate stairs
  tl.fromTo(".stairs", 
    { scaleY: 0, transformOrigin: "top" },
    { scaleY: 1, stagger: { amount: 0.2 } },
    "<"
  );

  // Animate links
  tl.fromTo(".link",
    { opacity: 0, rotateX: 90 },
    { opacity: 1, rotateX: 0, stagger: { amount: 0.2 } },
    "-=0.1"
  );
}

function gsapAnimationReverse() {
  const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power2.in" } });

  // 🚀 Hide logo + close button FIRST
  tl.to(".nav-header", { 
    y: -50,
    opacity: 0
  });

  // Then hide links
  tl.to(".link", { 
    opacity: 0, rotateX: 90, stagger: { amount: 0.1 } }, "-=0.1");

  // Then hide stairs
  tl.to(".stairs", { scaleY: 0, stagger: { amount: 0.2 } }, "-=0.1");

  // Finally hide fullscreen wrapper
  tl.to(".fullscreennav", { autoAlpha: 0 });
}   

  useGSAP(function () {
    if (navOpen) {
      gsapAnimation()
    } else {
      gsapAnimationReverse()
    }
  }, [navOpen])

  return (
    <div ref={fullScreenRef} className="fullscreennav h-screen w-full  text-white overflow-hidden z-50 absolute ">
      <div ref={fullNavLinkRef} className="h-screen w-full fixed">
          <div className="h-screen w-full flex">
            <div className="stairs h-full w-1/5 bg-black"></div>
            <div className="stairs h-full w-1/5 bg-black"></div>
            <div className="stairs h-full w-1/5 bg-black"></div>
            <div className="stairs h-full w-1/5 bg-black"></div>
            <div className="stairs h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div className="relative">
      <div className="flex w-full justify-between items-start p-2">
        <div className='h-20 w-20 text-white'>
            <svg fill="white" className='w-full' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 103 44">
                      <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
        </div>
        <div onClick={() => {
          setNavOpen(false)
        }} className="nav-header h-20 w-20 relative cursor-pointer">
          <div className="w-0.5 h-28 -rotate-45 origin-top bg-[#D3FD50] absolute"></div>
          <div className="w-0.5 h-28 rotate-45 origin-top right-0 bg-[#D3FD50] absolute"></div>
        </div>
      </div>
      <div className="py-12 mt-[16vh] lg:mt-0">
            <div className="link origin-top relative border-t-1 border-white">
                <h1 className="font-[font-300] lg:text-[8vw] text-[15vw] lg:mb-0 mb-4 uppercase text-center leading-[0.8] pt-4">Projects</h1>
                <div className="moveLink flex absolute top-0 text-black bg-[#D3FD50]">
                  <div className="moveX flex  items-center">
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">See everything</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8752h-2416d2" alt="" />
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">See everything</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                  </div>
                  <div className="moveX flex  items-center">
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">See everything</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8752h-2416d2" alt="" />
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">See everything</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                  </div>
                </div>
            </div>
            <div className="link origin-top relative border-t-1 border-white">
                <h1 className="font-[font-300] lg:text-[8vw] text-[15vw] lg:mb-0 mb-4 uppercase text-center leading-[0.8] pt-4">Agency</h1>
                <div className="moveLink flex  absolute top-0 text-black bg-[#D3FD50]">
                  <div className="moveX flex   items-center">
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">know us</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577" alt="" />
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">know us</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                  </div>
                  <div className="moveX flex  items-center">
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">know us</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577" alt="" />
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">know us</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                  </div>
                </div>
            </div>
            <div className="link origin-top relative border-t-1 border-white">
                <h1 className="font-[font-300] lg:text-[8vw] text-[15vw] lg:mb-0 mb-4 uppercase text-center leading-[0.8] pt-4">contact</h1>
                <div className="moveLink flex absolute top-0 text-black bg-[#D3FD50]">
                  <div className="moveX flex  items-center">
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">send us a fax</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8752h-2416d2" alt="" />
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">send us a fax</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                  </div>
                  <div className="moveX flex  items-center">
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">send us a fax</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8752h-2416d2" alt="" />
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">send us a fax</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                  </div>
                </div>
            </div>
            <div className="link origin-top relative border-t-1 border-b-1 border-white">
                <h1 className="font-[font-300] lg:text-[8vw] text-[15vw] lg:mb-0 mb-4 uppercase text-center leading-[0.8] pt-4">blog</h1>
                <div className="moveLink flex absolute top-0 text-black bg-[#D3FD50]">
                  <div className="moveX flex  items-center">
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">read articles</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8752h-2416d2" alt="" />
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">read articles</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e" alt="" />
                  </div>
                  <div className="moveX flex  items-center">
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">read articles</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8752h-2416d2" alt="" />
                      <h2 className="whitespace-nowrap font-[font-300] text-[8vw] uppercase text-center leading-[0.8] pt-4">read articles</h2>
                      <img className="h-24 w-72 object-cover rounded-full shrink-0" src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e" alt="" />
                  </div>
                </div>
            </div>
            
      </div>
      </div>
    </div>
  )
}

export default fullScreenNav