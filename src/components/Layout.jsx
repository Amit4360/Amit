import XarrowContext from "react-xarrows";
import Card from "./Card/Card";
import "./Layout.css";
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
      /> 
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        start="sm6"
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
    />
    <XarrowContext
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
  return (
    <div className=" flex flex-col h-screen items-center justify-start max-w-full px-40 mt-10  mx-auto ">
      <div className="flex justify-between w-full">
        <Card
          id="f1"
          className="w-[300px] h-[300px]"
        />

        <Card
          id="f2"
          className="w-[300px] h-[300px]"
        />
      </div>
      <div className="mt-12" id="point-1"></div>
      <div className="mt-12 flex w-full items-center align-middle justify-between">
        <Card
          id="pres1"
          className="w-[300px] h-[300px]"
        />
        <p id="pres" className="border-2  p-2 tab">
          President
        </p>
        <Card
          id="pres2"
          className="w-[300px] h-[300px]"
        />
      </div>
      <div className="mt-12 flex w-full items-center align-middle justify-between">
        <Card
          id="vpres1"
          className="w-[300px] h-[300px]"
        />
        <p id="vpres" className="border-2  p-2 tab">
          Vice President
        </p>
        <Card
          id="vpres2"
          className="w-[300px] h-[300px]"
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
      <div className=" grid grid-cols-3 gap-6 mt-12 items-center justify-items-center w-full pb-10">
        <p className="border-2 p-2 tab" id="mentors">
          Junior Mentors
        </p>
        <p className="border-2 p-2 tab" id="sec">
          Secretary
        </p>
        <p className="border-2 p-2 tab" id="event">
          Events
        </p>
      </div>

      <XarrowFaculty />
      <XarrowPresident />
      <XarrowVPresident />
      <XarrowSeniorMentor />
      <XarrowMisc />
    </div>
  );
}
