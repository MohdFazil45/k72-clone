import { useGSAP } from "@gsap/react"
import Works from "../components/works/Works"
import gsap, { ScrollTrigger } from "gsap/all"

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
        markers:true,
        start:"top 100%",
        end:'top -150%',
        scrub:true
      }
    })
  })
  
  return (
    <div className="p-4 mb-[100vh]">
      <div className=" pt-[45vh]">
        <h2 className="text-black font-[font-300] font-bold text-[12vw] uppercase">work</h2>
      </div>
      <div className="-mt-16 lol">
       {projects.map((elem, idx) => {
        return <div key={idx} className="hero w-full h-[400px] mb-4  flex gap-4 ">
          <Works image1={elem.image1} image2={elem.image2}/>
        </div>
       })}
      </div>
    </div>
  )
}

export default Projects