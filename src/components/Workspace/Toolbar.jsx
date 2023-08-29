import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { TfiTarget } from 'react-icons/tfi';
import { LuBoxSelect } from 'react-icons/lu';
import { BiCut, BiCube, BiSolidShow, BiFullscreen, BiSolidHand, BiSolidCube } from 'react-icons/bi';
import { PiSelectionForegroundFill, PiCubeFocus, PiArrowsCounterClockwiseBold } from 'react-icons/pi';
import { CgArrowsHAlt } from 'react-icons/cg';
import { GiArrowCursor, GiReturnArrow } from 'react-icons/gi';
import { AiOutlineCloud, AiTwotoneSetting, AiOutlineLine } from 'react-icons/ai';
import { MdAddAPhoto, MdNoteAdd } from 'react-icons/md';
import { SlGhost } from 'react-icons/sl';
import { BsQuestionDiamondFill, BsArrowDownLeft, BsFileEarmarkTextFill } from 'react-icons/bs';
import { RxTransparencyGrid } from 'react-icons/rx';
import { TbLayersIntersect2 } from 'react-icons/tb';
import { FaTrash } from 'react-icons/fa';
import { MdDraw } from 'react-icons/md';
import { RiScissorsCutLine } from 'react-icons/ri';
import Dropdown from '../Dropdown';

function Toolbar() {
  const cameraRef = useRef(null);
  const measureRef = useRef(null);
  const markupRef = useRef(null);
  const cutRef = useRef(null);
  const cubeRef = useRef(null);
  const visibilityRef = useRef(null);
  const [cameraControl, setCameraControl] = useState(false);
  const [measureControl, setMeasureControl] = useState(false);
  const [markupControl, setMarkupControl] = useState(false);
  const [cutControl, setCutControl] = useState(false);
  const [cubeControl, setCubeControl] = useState(false);
  const [visibilityControl, setVisibilityControl] = useState(false);

  useEffect(() => {
    const handleHideDropdownCamera = (e) => {
      if (cameraRef.current && !cameraRef.current.contains(e.target)) {
        setCameraControl(false);
      }
      if (measureRef.current && !measureRef.current.contains(e.target)) {
        setMeasureControl(false);
      }
      if (markupRef.current && !markupRef.current.contains(e.target)) {
        setMarkupControl(false);
      }
      if (cutRef.current && !cutRef.current.contains(e.target)) {
        setCutControl(false);
      }
      if (cutRef.current && !cutRef.current.contains(e.target)) {
        setCubeControl(false);
      }
      if (visibilityRef.current && !visibilityRef.current.contains(e.target)) {
        setVisibilityControl(false);
      }
    };
    document.addEventListener('mousedown', handleHideDropdownCamera);
    return () => document.removeEventListener('mousedown', handleHideDropdownCamera);
  }, []);
  return (
    <div className="flex items-center h-12 bg-white shadow_trimple absolute z-10 w-full">
      <Link
        to={'/cac-du-an'}
        className=" flex items-center pl-[0.375rem] py-1 pr-1 ml-1 hover:bg-[#e2e2e7] hover:text-black cursor-pointer "
      >
        <box-icon name="arrow-back"></box-icon>
        <p className="font-semibold">Back</p>
      </Link>
      <hr className="hr" />
      <span className="group-icon">
        <div className=" w-16 relative" ref={cameraRef}>
          <span className="icon" onClick={() => setCameraControl(!cameraControl)}>
            <GiReturnArrow />
          </span>
          {cameraControl && (
            <Dropdown className={'text-sm py-2 top-12 left-0'}>
              <li className="list-option active">
                <span>
                  <GiReturnArrow />
                </span>
                <p>Rotate</p>
                <p>CTRL + U</p>
              </li>
              <li className="list-option ">
                <span>
                  <BiSolidHand />
                </span>
                <p>Span</p>
                <p>CTRL + I</p>
              </li>
              <li className="list-option ">
                <span>
                  <PiArrowsCounterClockwiseBold />
                </span>
                <p>Look around</p>
                <p>CTRL + P</p>
              </li>
            </Dropdown>
          )}
        </div>
      </span>
      <hr className="hr" />
      <span className="group-icon">
        <span className="active">
          <GiArrowCursor />
        </span>
        <span>
          <LuBoxSelect />
        </span>
        <span>
          <box-icon name="selection"></box-icon>
        </span>
      </span>
      <hr className="hr" />
      <span className="group-icon">
        <span>
          <PiSelectionForegroundFill />
        </span>
      </span>
      <hr className="hr" />
      <span className="group-icon">
        <div className=" w-16 relative" ref={measureRef}>
          <span
            className="icon"
            onClick={() => {
              setMeasureControl(!measureControl);
            }}
          >
            <CgArrowsHAlt />
          </span>
          {measureControl && (
            <Dropdown className={'text-sm py-2 top-12 right-0'}>
              <li className="list-option active">
                <span>
                  <CgArrowsHAlt />
                </span>
                <p>Perpendicular measure</p>
              </li>
              <li className="list-option ">
                <span>
                  <TfiTarget />
                </span>
                <p>Single point</p>
              </li>
              <li className="list-option ">
                <span>
                  <PiArrowsCounterClockwiseBold />
                </span>
                <p>Angle measure</p>
              </li>
              <li className="list-option border-t">
                <span>
                  <FaTrash />
                </span>
                <p>Delete all measurements</p>
              </li>
            </Dropdown>
          )}
        </div>
        <div className=" w-16 relative" ref={markupRef}>
          <span className="icon" onClick={() => setMarkupControl(!markupControl)}>
            <AiOutlineCloud />
          </span>
          {markupControl && (
            <Dropdown className={'text-sm py-2 top-12 right-0'}>
              <li className="list-option active">
                <span>
                  <AiOutlineCloud />
                </span>
                <p>Cloud markup</p>
              </li>
              <li className="list-option ">
                <span>
                  <BsArrowDownLeft />
                </span>
                <p>Arrow markup</p>
              </li>
              <li className="list-option ">
                <span className="-rotate-45">
                  <AiOutlineLine />
                </span>
                <p>Line markup</p>
              </li>
              <li className="list-option ">
                <span>
                  <BsFileEarmarkTextFill />
                </span>
                <p>Text markup</p>
              </li>
              <li className="list-option ">
                <span>
                  <MdDraw />
                </span>
                <p>Draw markup</p>
              </li>
              <li className="list-option border-t">
                <span>
                  <FaTrash />
                </span>
                <p>Delete all markup</p>
              </li>
            </Dropdown>
          )}
        </div>
        <div className=" w-16 relative" ref={cutRef}>
          <span className="icon" onClick={() => setCutControl(!cutControl)}>
            <BiCut />
          </span>
          {cutControl && (
            <Dropdown className={'text-sm py-2 top-12 right-0'}>
              <li className="list-option active">
                <span>
                  <BiCut />
                </span>
                <p>Clip plane</p>
              </li>
              <li className="list-option ">
                <span className="-rotate-90">
                  <RiScissorsCutLine />
                </span>
                <p>Vertical clip plane</p>
              </li>
              <li className="list-option border-t">
                <span>
                  <FaTrash />
                </span>
                <p>Delete all clip plane</p>
              </li>
            </Dropdown>
          )}
        </div>
        <span>
          <MdAddAPhoto />
        </span>
        <span>
          <MdNoteAdd />
        </span>
      </span>
      <hr className="hr" />

      <span className="group-icon">
        <div className="w-16 relative" ref={cubeRef}>
          <span
            className="icon"
            onClick={() => {
              setCubeControl(!cubeControl);
            }}
          >
            <BiCube />
          </span>
          {cubeControl && (
            <Dropdown className={'text-sm py-2 top-12 right-0'}>
              <li className="list-option active">
                <span>
                  <BiCube />
                </span>
                <p>Axon view</p>
              </li>
              <li className="list-option ">
                <span className="rotate-[115deg]">
                  <BiSolidCube />
                </span>
                <p>Top view</p>
              </li>
              <li className="list-option border-t">
                <span>
                  <BiSolidCube />
                </span>
                <p>Front view</p>
              </li>
              <li className="list-option border-t">
                <span>
                  <BiSolidCube />
                </span>
                <p>Left view</p>
              </li>
              <li className="list-option border-t">
                <span>
                  <BiSolidCube />
                </span>
                <p>Back view</p>
              </li>
              <li className="list-option border-t">
                <span className="rotate-[210deg]">
                  <BiSolidCube />
                </span>
                <p>Right view</p>
              </li>
              <li className="list-option border-t">
                <span className="-rotate-[60deg]">
                  <BiSolidCube />
                </span>
                <p>Bottom view</p>
              </li>
            </Dropdown>
          )}
        </div>
        <span className="">
          <PiCubeFocus />
        </span>
      </span>
      <hr className="hr" />

      <span className="group-icon">
        <span className="">
          <SlGhost />
        </span>
        <span>
          <TbLayersIntersect2 />
        </span>
      </span>
      <hr className="hr" />
      <span className="group-icon">
        <div className=" w-16 relative" ref={visibilityRef}>
          <span className="icon " onClick={() => setVisibilityControl(!visibilityControl)}>
            <BiSolidShow className="" />
          </span>
          {visibilityControl && (
            <Dropdown className={'text-sm py-2 top-12 right-0'}>
              <li className="list-option ">
                <input className="checkbox" type="checkbox" name="" id="" />
                <p>Annotations</p>
              </li>
              <li className="list-option ">
                <input className="checkbox" type="checkbox" name="" id="" />
                <p>Clip planes</p>
              </li>
              <li className="list-option border-t">
                <input className="checkbox" type="checkbox" name="" id="" />
                <p>Grids</p>
              </li>
              <li className="list-option border-t">
                <input className="checkbox" type="checkbox" name="" id="" />
                <p>IFC element types</p>
              </li>
              <li className="list-option border-t">
                <input className="checkbox" type="checkbox" name="" id="" />
                <p>Object attachments</p>
              </li>
            </Dropdown>
          )}
        </div>
        <span>
          <RxTransparencyGrid />
        </span>
      </span>
      <hr className="hr" />
      <button className="hover:bg-[#f3f3f7] text-[#0c77be] font-medium h-10 px-1 ">Reset model</button>
      <hr className="hr" />
      <span className="group-icon">
        <span>
          <BsQuestionDiamondFill />
        </span>
        <span className="">
          <AiTwotoneSetting />
        </span>
        <span className="">
          <BiFullscreen />
        </span>
      </span>
    </div>
  );
}

export default Toolbar;
