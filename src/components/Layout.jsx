import XarrowContext from "react-xarrows";
import Card from "./Card/Card";
import "./Layout.css";
import { useEffect, useState } from "react";
const XarrowFaculty = () => {
  return (
    <>
      <XarrowContext
        showTail={false}
        startAnchor={"bottom"}
        endAnchor={"left"}
        showHead={false}
        curveness={0}
        path="grid"
        animateDrawing={true}
        color="white"
        start="f1"
        end="point-1"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
        endAnchor={"bottom"}
        showHead={false}
        animateDrawing={true}
        color="white"

        curveness={0}
        start="point-1"
        end="f2"
      />
    </>
  );
};
const XarrowPresident = () => {
  return (
    <>
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        color="white"

        start="point-1"
        end="pres"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"left"}
        endAnchor={"right"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        color="white"

        start="pres"
        end="pres1"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
        endAnchor={"left"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        color="white"

        start="pres"
        end="pres2"
      />
    </>
  );
};
const XarrowVPresident = () => {
  return (
    <>
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        color="white"

        curveness={0}
        start="pres"
        end="vpres"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"left"}
        endAnchor={"right"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        color="white"

        start="vpres"
        end="vpres1"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
        color="white"

        endAnchor={"left"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        start="vpres"
        end="vpres2"
      />
    </>
  );
};
const XarrowMisc = () => {
  return (
    <>
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        color="white"

        showHead={false}
        animateDrawing={true}
        curveness={0}
        start="sm4"
        end="point-3"
      />
     <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        color="white"

        animateDrawing={true}
        curveness={0}
        start="sm5"
        end="point-3"
      /> <XarrowContext
      showTail={false}
      path="grid"
      startAnchor={"bottom"}
      endAnchor={"top"}
      showHead={false}
      color="white"

      animateDrawing={true}
      curveness={0}
      start="sm6"
      end="point-3"
    />  <XarrowContext
    showTail={false}
    path="grid"
    startAnchor={"bottom"}
    endAnchor={"top"}
    showHead={false}
    animateDrawing={true}
    color="white"

    curveness={0}
    start="point-3"
    end="point-4"
  />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        color="white"

        animateDrawing={true}
        curveness={0}
        start="point-4"
        end="sec"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"left"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        color="white"

        start="point-4"
        end="mentors"
      />{" "}
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
        endAnchor={"top"}
        color="white"

        showHead={false}
        animateDrawing={true}
        curveness={0}
        start="point-4"
        end="event"
      />
    </>
  );
};

const XarrowSeniorMentor = () => {
  return (
    <>
    <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        color="white"

        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        start="vpres"
        end="smentor"
      />
     
<XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        color="white"

        animateDrawing={true}
        curveness={0}
        start="smentor"
        end="sm1"
      />
     <XarrowContext
      showTail={false}
      path="grid"
      startAnchor={"bottom"}
      endAnchor={"top"}
      showHead={false}
      color="white"

      animateDrawing={true}
      curveness={0}
      start="smentor"
      end="sm2"
    /><XarrowContext
    showTail={false}
    path="grid"
    startAnchor={"bottom"}
    endAnchor={"top"}
    showHead={false}
    animateDrawing={true}
    color="white"

    curveness={0}
    start="smentor"
    end="sm3"
  />
  <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        color="white"

        curveness={0}
        start="sm1"
        end="sm4"
      />
     <XarrowContext
      showTail={false}
      path="grid"
      startAnchor={"bottom"}
      endAnchor={"top"}
      showHead={false}
      color="white"

      animateDrawing={true}
      curveness={0}
      start="sm2"
      end="sm5"
    /><XarrowContext
    showTail={false}
    path="grid"
    color="white"

    startAnchor={"bottom"}
    endAnchor={"top"}
    showHead={false}
    animateDrawing={true}
    curveness={0}
    start="sm3"
    end="sm6"
  />
    </>
  )
}

export default function Layout() {

  const [check, setCheck] = useState(true)

  useEffect(() => {
    let a = document.getElementById("mentors")
    let b = document.getElementById("sec")
    let c = document.getElementById("event")
    let d = document.getElementById("disJm")
    let e = document.getElementById("disSec")
    let f = document.getElementById("disEvent")
    a.addEventListener("click",()=>{
      if(e.classList.contains('disApp')){
        setCheck(!check)
        e.classList.remove('disApp')
        e.classList.add('disNone')
      }
      if(f.classList.contains('disApp')){
        setCheck(!check)
        f.classList.remove('disApp')
        f.classList.add('disNone')
      }
      if(check === true){
      d.classList.remove('disNone')
      d.classList.add('disApp')
      setCheck(!check)
      }else{
        d.classList.remove('disApp')
        d.classList.add('disNone')
        setCheck(!check)
      }
    })

    b.addEventListener("click",()=>{
      if(d.classList.contains('disApp')){
        setCheck(!check)
        d.classList.remove('disApp')
        d.classList.add('disNone')
      }
      if(f.classList.contains('disApp')){
        setCheck(!check)
        f.classList.remove('disApp')
        f.classList.add('disNone')
      }
      if(check === true){
      e.classList.remove('disNone')
      e.classList.add('disApp')
      setCheck(!check)
      }else{
        e.classList.remove('disApp')
        e.classList.add('disNone')
        setCheck(!check)
      }
    })

    c.addEventListener("click",()=>{
      if(d.classList.contains('disApp')){
        setCheck(!check)
        d.classList.remove('disApp')
        d.classList.add('disNone')
      }
      if(e.classList.contains('disApp')){
        setCheck(!check)
        e.classList.remove('disApp')
        e.classList.add('disNone')
      }
      if(check === true){
      f.classList.remove('disNone')
      f.classList.add('disApp')
      setCheck(!check)
      }else{
        f.classList.remove('disApp')
        f.classList.add('disNone')
        setCheck(!check)
      }
    })

    //remove the event listeners from useEffect
  },[check]);


  return (
    <div className=" flex flex-col h-screen items-center justify-start max-w-full px-2 sm:px-2 lg:w-4/5 2xl:w-3/5 lg:mt-10  mx-auto ">
      <div className="lg:mt-[15vh] md:grid-cols-2 mt-6 grid gap-2 justify-items-center lg:flex lg:justify-between w-full">
        <Card
          id="f1"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />

        <Card
          id="f2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="2"
        />
      </div>
      <div className="lg:mt-[15vh] mt-6" id="point-1"></div>
      <p  className="border-2  p-2  tab lg:hidden">
          President
        </p>
      <div className="lg:mt-[15vh] mt-6 md:grid-cols-2 grid gap-4 lg:flex justify-items-center lg:items-center lg:justify-between w-full">
        <Card
          id="pres1"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px] "
          alt="1"
        />

        <p id="pres" className="border-2  p-2  tab hidden lg:block">
          President
        </p>
        <Card 
          id="pres2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
      </div>
      <p  className="border-2 lg:mt-[15vh] mt-6 p-2 tab lg:hidden ">
          Vice President
        </p>
      <div className="lg:mt-[15vh] mt-6 md:grid-cols-2 grid gap-4 lg:flex lg:items-center justify-items-center lg:justify-between w-full">
      <Card
          id="vpres1"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <p id="vpres" className="border-2 text-center  p-2 tab hidden lg:block">
          Vice President
        </p>
        <Card
          id="vpres2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
      </div>

      <div className="flex flex-col lg:mt-[15vh] mt-6 w-full gap-12">
        <div className="flex items-center justify-center">
        <p id="smentor" className="border-2  p-2 tab">
        Senior Mentors
        </p>    
        </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-5 lg:mt-[15vh] mt-6">
         <Card
          id="sm1"
          color
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
          <Card
          id="sm2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
          <Card
          id="sm3"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="sm4"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
          />
          <Card
          id="sm5"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
          />
          <Card
          id="sm6"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
          />
          </div>
      </div>
      <div className="mt-[15vh]" id="point-3" />

      <div className="" id="point-4" />
      <div className="divSize1">
      <div className=" grid grid-cols-3 gap-6 mt-12 items-center justify-items-center w-full">
      <div>
        <p className="border-2 p-2 text-sm tab" id="mentors">
          Junior Mentors
        </p>
       
        </div>
        <div>
        <p className="border-2 p-2 tab text-sm" id="sec">
          Secretary
        </p>
       
        </div>
        <div>
        <p className="border-2 p-2 tab text-sm " id="event">
          Events
        </p>
        
        </div>
      </div>
      <div  className="disNone grid grid-cols-3 gap-12 mt-14 items-center justify-items-center w-full" id="disJm">
      <Card
          id="sm4"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="sm4"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="sm4"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="card2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="card2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="card2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
      </div>
      <div  className="disNone grid grid-cols-3 gap-12 mt-14 items-center justify-items-center w-full" id="disSec">
      <Card
          id="sm4"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="sm4"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="sm4"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="card2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="card2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="card2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
      </div>
      <div  className="disNone grid grid-cols-3 gap-12 mt-14 items-center justify-items-center w-full" id="disEvent">
      <Card
          id="sm4"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="sm4"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="sm4"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="card2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="card2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <Card
          id="card2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
      </div>
      </div>

    <div className="hidden lg:block">

      <XarrowFaculty />
      <XarrowPresident />
      <XarrowVPresident />
      <XarrowSeniorMentor />
      <XarrowMisc />
    </div>
    </div>
  );
}
