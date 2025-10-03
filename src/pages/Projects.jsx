import { useGSAP } from "@gsap/react"
import Works from "../components/works/Works"
import gsap, { ScrollTrigger } from "gsap/all"
import Footer from "../components/comman/Footer"

const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height:"100px",
      stagger:{
        amount:0.5
      },
      scrollTrigger:{
        trigger:".lol",
        start:"top 100%",
        end:'top -150%',
        scrub:true
      }
    })
  })
  
  return (
    <div className="lg:p-4 p-2 mb-[100vh]">
      <div className="pt-[45vh]">
        <h2 className="text-black font-[font-300] font-bold lg:text-[12vw] text-8xl uppercase">work</h2>
      </div>
      <div className="lg:mt-0 mt-0 lol">
       {projects.map((elem, idx) => {
        return <div key={idx} className="hero w-full lg:h-[400px] lg:mb-4 mb-12 flex-col lg:flex-row  flex gap-4 ">
          <Works image1={elem.image1} image2={elem.image2}/>
        </div>
       })}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Projects