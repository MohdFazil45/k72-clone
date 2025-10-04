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
  }, {
    image1: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
    image2: 'https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5'
  },{
    image1: 'https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860',
    image2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
  },]

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
    <div className="lg:p-4 p-2  relative">
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
      <div className="w-full">
        <Footer/>
      </div>
    </div>
  )
}

export default Projects