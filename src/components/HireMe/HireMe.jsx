import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import fiverr from "/fiverr.svg";
import upwork from "/upwork.svg";

const HireMe = () => {
  return (
    <div className="bg-teal-500">
      <div className="max-w-screen-xl  mx-auto py-24 px-7">
        <div className="text-center pb-10" data-aos="zoom-in">
          <FontAwesomeIcon className="text-7xl" icon={faPaperPlane} />
        </div>
        <div className="flex justify-evenly text-zinc-800"  data-aos="fade-right">
          <div className="text-center">
            <h3 className="text-5xl font-semibold">
              HIRE ME FOR YOUR AWESOME PROJECT
            </h3>
            <p className="w-9/12 mx-auto text-center leading-7 mt-2 font-medium">
              I am available for Freelance projects that depends on your project
              value. Hire me and get your project done!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center pt-10" data-aos="fade-left">
          <div className="text-center">
            <h4 className="text-xl font-bold">Find Me On Other Platforms</h4>
            <div className="flex justify-center gap-10 pt-5">
              <Link className="hover:transition-all hover:scale-105"
                target="_blank"
                to="https://www.upwork.com/freelancers/~010029654c28fb770f"
              >
                <img
                  className="w-16 border border-4 rounded-full"
                  src={upwork}
                  alt="up-work"
                />
              </Link>
              <Link className="hover:transition-all hover:scale-105" target="_blank" to="https://www.fiverr.com/dev_rubelahmed">
                <img
                  className="w-16 border border-4 rounded-full"
                  src={fiverr}
                  alt="fiver-icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
