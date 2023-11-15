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
        start="vpres"
        end="point-2"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        start="point-2"
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
        start="point-3"
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
        start="point-3"
        end="event"
      />
    </>
  );
};
export default function Layout() {
  return (
    <div className=" flex flex-col h-screen items-center justify- start max-w-full px-40 mt-10  mx-auto ">
      <div className="flex justify-between w-full">
        <img id="f1" src="https://picsum.photos/300" className="w-[300px] h-[300px]"alt="1" />

        <img id="f2" src="https://picsum.photos/300" className="w-[300px] h-[300px]" alt="2" />
      </div>
      <div className="mt-12" id="point-1"></div>
      <div className="mt-12 flex w-full items-center justify-between">
        <img id="pres1" src="https://picsum.photos/300"  className="w-[300px] h-[300px]" alt="1" />
        <p id="pres" className="border-2  p-2 tab"> 
          President
        </p>
        <img id="pres2" src="https://picsum.photos/300"  className="w-[300px] h-[300px]" alt="2" />
      </div>
      <div className="mt-12 flex w-full items-center justify-between">
        <img id="vpres1" src="https://picsum.photos/300"  className="w-[300px] h-[300px]" alt="1" />
        <p id="vpres" className="border-2  p-2 tab">
          Vice President
        </p>
        <img id="vpres2" src="https://picsum.photos/300"  className="w-[300px] h-[300px]" alt="2" />
      </div>
      <div className="mt-12" id="point-2" />
      <div className="mt-12" id="point-3" />
      <div className=" grid grid-cols-3 gap-6 mt-12 items-center justify-items-center w-full">
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
      <XarrowMisc />
    </div>
  );
}
