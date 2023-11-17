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
        start="vpres"
        end="vpres1"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
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
        start="point-4"
        end="mentors"
      />{" "}
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
        endAnchor={"top"}
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
      animateDrawing={true}
      curveness={0}
      start="sm2"
      end="sm5"
    /><XarrowContext
    showTail={false}
    path="grid"
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
  },[check]);


  return (
    <div className=" flex flex-col h-screen items-center justify- start max-w-full px-40 mt-10  mx-auto ">
      <div className="flex justify-between w-full">
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
      <div className="mt-12" id="point-1"></div>
      <div className="mt-12 flex w-full items-center justify-between">
        <Card
          id="pres1"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <p id="pres" className="border-2  p-2 tab">
          President
        </p>
        <Card
          id="pres2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
      </div>
      <div className="mt-12 flex w-full items-center justify-between">
      <Card
          id="vpres1"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
        <p id="vpres" className="border-2  p-2 tab">
          Vice President
        </p>
        <Card
          id="vpres2"
          src="https://picsum.photos/300"
          className="w-[300px] h-[300px]"
          alt="1"
        />
      </div>

      <div className="flex flex-col   w-full gap-12">
        <div className="flex items-center justify-center">
        <p id="smentor" className="border-2  p-2 tab">
        Senior Mentors
        </p>    
        </div>
         <div className="flex w-full justify-between mt-12">
         <Card
          id="sm1"
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
        </div>
        <div className="flex w-full justify-between " >
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
      <div className="mt-24" id="point-3" />

      <div className="mt-12" id="point-4" />
      <div className="divSize1">
      <div className=" grid grid-cols-3 gap-6 mt-12 items-center justify-items-center w-full">
      <div>
        <p className="border-2 p-2 tab" id="mentors">
          Junior Mentors
        </p>
       
        </div>
        <div>
        <p className="border-2 p-2 tab" id="sec">
          Secretary
        </p>
       
        </div>
        <div>
        <p className="border-2 p-2 tab" id="event">
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

      <XarrowFaculty />
      <XarrowPresident />
      <XarrowVPresident />
      <XarrowSeniorMentor />
      <XarrowMisc />
    </div>
  );
}
