import { useEffect, useState } from "react"
import Carousel from "../components/Carousel"
import { Link as Anchor } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import city_actions from "../store/actions/cities"
const {read_carousel} = city_actions

export default function Home() {

const carousel = useSelector(store=>store.cities.carousel)
const dispatch = useDispatch()
useEffect(
  ()=>{
    if (carousel.length===0){
      dispatch(read_carousel())
    }
  },
  []
  )
  console.log(carousel);

  return (
    <main className="min-h-[78vh] flex lg:justify-between">
      <div className="w-full grow flex flex-col lg:flex-row justify-center items-center">
        <div className="md:w-[742px] md:h-[304px] flex flex-col md:items-center lg:items-start lg:w-[40vw] justify-center gap-10">
          <h1 className="font-sans font-bold text-[23px] mt-5 px-1 md:text-[25px] xl:text-[30px] 2xl:text-[35px]">Find the perfect destination</h1>
          <p className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px] ">Our app will help you find the perfect path for your next<br />trip. With an easy-to-use interface and a host of itinerary<br />options, planning your next trip has never been easier.</p>
          <Anchor to='/cities' className="flex justify-center items-center md:w-[230px] md:h-[50px] bg-[#4f46e5] text-white py-[16px] px-[20px] rounded-[8px] hover:bg-[#3f37d3] focus:outline-none focus:bg-[#3f37d3]">View More</Anchor>
        </div>
        <Carousel data={carousel}/>
        </div>
        
    </main>
  )
}
