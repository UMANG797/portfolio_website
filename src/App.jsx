import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { SiLeetcode } from "react-icons/si";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 ">
      <div className="p-14 bg-white">
        <div className="flex justify-between">
          <div className="text-5xl pl-9 tracking-wider">Rathod Umang</div>
          <div className="flex justify-between space-x-20 text-3xl font-serif tracking-wider pr-4 ">
            <a href="./#About" className="hover:text-blue-500">
              About
            </a>
            <a className="hover:text-blue-500" href="./#Skills">
              Skill
            </a>
            <a className="hover:text-blue-500" href="./#Project">
              Project
            </a>
            <a className="hover:text-blue-500" href="./#Contact">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-14">
        <div className="pl-52">
          <img
            src={"../public/portfolio.png"}
            alt="umang"
            style={{
              backgroundColor: "transparent",
              height: "450px",
              width: "450px",
            }}
            className="overflow-hidden rounded-full"
          ></img>
        </div>
        <div className="pr-64 pt-10">
          <div className="text-3xl justify-center text-gray-600 font-serif tracking-widest">
            Hello,I am
          </div>
          <div className="font-bold text-6xl tracking-widest pt-7">
            Rathod Umang
          </div>
          <div className="pt-7 text-gray-700 text-3xl tracking-widest">
            MERN Stack Developer
          </div>
          <div className="mt-7">
            <a
              className="border-2 py-2 px-5 text-black bg-white border-black tracking-wider rounded-3xl text-2xl font-semibold"
              href="https://drive.google.com/file/d/1PoA6RWtw_gUWGRUegyoUYU92vrvFBYxh/view?usp=sharing"
            >
              View CV
            </a>
            <a
              href="./#Contact"
              className="border-2 py-2 px-5 text-white bg-black border-black tracking-wider rounded-3xl text-2xl font-semibold ml-12"
            >
              Contact Me
            </a>
          </div>
          <div className="flex h-8 w-8 mt-11 justify-between space-x-12">
            <a href="https://github.com/UMANG797">
              <FaGithub size="60" className="hover:text-green-500" />
            </a>
            <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHFL-6CLA2s7wAAAZV1XzpQdD9z8E0V67CxyytWMOUZeQeR8lCj5T7NRYm9aKoeT_2WDpTYJ1EtTDUs43vMgIR2_jAElhqhiZC20ER3dPbjsLB2C4DP-G2G-Rm9uSoUBLlu1GA=&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fumang-rathod-a63bab255%2F">
              <CiLinkedin size="60" className="hover:text-blue-500" />
            </a>
            <a href="https://x.com/umangrathod797">
              <FaTwitter size="60" className="hover:text-blue-700" />
            </a>
            <a href="https://leetcode.com/u/ur797/">
              <SiLeetcode size="60" className="hover:text-yellow-600" />
            </a>
          </div>
        </div>
      </div>
      <div
        id="About"
        className="text-center mt-14 text-2xl tracking-wider font-sans"
      >
        Get to Know More about Me
      </div>
      <div className="mt-4 font-bold tracking-wider text-center text-2xl">
        About Me
      </div>
      <div className="flex mt-4  ">
        <div className="">
          <img
            src="../public/photo1.jpg"
            alt="Umang"
            className="h-[500px] w-[500px] rounded-full object-cover"
          />
        </div>
        <div className="text-2xl font-serif  max-w-5xl space-y-4 mt-24">
          <p>
            Hey there! Rathod Umang, 20-year-old B.Tech Computer Engineering
            student based in Rajkot with a relentless passion for technology and
            software development. As an aspiring tech enthusiast, I am
            constantly seeking new challenges and opportunities to broaden my
            knowledge and skills in the ever-evolving tech landscape.
          </p>
          <div className="block tracking-wider">
            <div className="font-bold ">Education:</div>
            <div className="flex mt-3">
              <div className="font-semibold">
                Bachlors of Engineering from :{" "}
              </div>
              <div>V.V.P Engineering Collage,Rajkot.</div>
            </div>
            <div className="flex mt-2">
              <div className="font-semibold">Result : </div>
              <div>8.57 CGPA</div>
            </div>
            <div className="flex mt-3">
              <div className="font-semibold tracking-wider">
                Higher Education :{" "}
              </div>
              <div>Gangotri School,Gondal.</div>
            </div>
            <div className="flex mt-2">
              <div className="font-semibold">Result : </div>
              <div>75 PR</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Skills"
        className="text-center font-serif font-semibold tracking-wider text-2xl"
      >
        Explore My
      </div>
      <div className="text-gray-500 text-center text-4xl tracking-wider font-sans mt-4">
        Tech Skills
      </div>
      <div className="grid grid-cols-4 mt-16 tracking-wider italic">
        <div className="text-center mt-4 flex flex-col items-center justify-center">
          <FaReact size="150" className="text-blue-400" />
          <div className="font-semibold text-3xl mt-5">React</div>
        </div>
        <div className="text-center mt-4 flex flex-col items-center justify-center">
          <FaNodeJs size="150" className="text-green-700" />
          <div className="font-semibold text-3xl mt-5">Node Js</div>
        </div>
        <div className="text-center mt-4 flex flex-col items-center justify-center">
          <SiExpress size="150" className="text-black" />
          <div className="font-semibold text-3xl mt-5">Express Js</div>
        </div>
        <div className="text-center mt-4 flex flex-col items-center justify-center">
          <SiMongodb size="150" className="text-green-800" />
          <div className="font-semibold text-3xl mt-5">MongoDb</div>
        </div>

        <div className="text-center mt-12 flex flex-col items-center justify-center">
          <RiTailwindCssFill size="150" className="text-blue-800" />
          <div className="font-semibold text-3xl mt-5">Tailwind CSS</div>
        </div>
        <div className="text-center mt-12 flex flex-col items-center justify-center">
          <GrMysql size="150" className="text-blue-400" />
          <div className="font-semibold text-3xl mt-5">SQL</div>
        </div>

        <div className="text-center mt-12 flex flex-col items-center justify-center">
          <img
            src="https://cdn1.iconfinder.com/data/icons/artificial-intelligence-1-2/128/Bynary-Tree-Hierarchy-Data-Structure-Nodes-512.png"
            className="w-36 h-36"
          ></img>
          <div className="font-semibold text-3xl mt-5">Data Structures</div>
        </div>
        <div className="text-center mt-12 flex flex-col items-center justify-center">
          <FaAws size="150" className="text-yellow-600" />
          <div className="font-semibold text-3xl mt-5">
            AWS Services(Learning)
          </div>
        </div>
      </div>
      <div
        id="Projects"
        className="text-center text-3xl pt-14 pl-4 tracking-wider font-serif bold"
      >
        Check My
      </div>
      <div className="text-center text-green-700 text-6xl tracking-widest underline font-serif">
        Projects
      </div>
      <div className="grid grid-cols-3 mt-14 pl-36 gap-7 ">
        <div className="flex flex-col  justify-center p-4 border-2 bg-slate-100 rounded-2xl  w-80">
          <img
            className="h-80 border rounded-2xl object-fit"
            src="../public/DgLocker.jpg"
          ></img>
          <div className="font-bold pt-3 text-3xl text-center mb-5">
            Digi-Locker
          </div>
          <button className="text-white text-3xl rounded-full px-2 py-2 border border-black bg-black hover:bg-gray-700 hover:text-neutral-100">
            GitHub
          </button>
        </div>
        <div className="flex flex-col  justify-center p-4 border-2 bg-slate-100 rounded-2xl  w-80">
          <img
            className="h-80 border rounded-2xl object-fit"
            src="../public/box_cricket.jpeg"
          ></img>
          <div className="font-bold pt-3 text-3xl text-center mb-5">
            Box-Cricket
          </div>
          <button className="text-white text-3xl rounded-full px-2 py-2 border border-black bg-black hover:bg-white hover:text-black">
            GitHub
          </button>
        </div>
        <div className="flex flex-col bg-slate-100  justify-center p-4 border-2 rounded-2xl  w-80">
          <img
            className="h-80 border rounded-2xl object-fit object-fill"
            src="../public/diet_ai.jpg"
          ></img>
          <div className="font-bold pt-3 text-3xl text-center mb-5">
            Diet-AI
          </div>
          <button className="text-white text-3xl rounded-full px-2 py-2 border border-black bg-black hover:bg-white hover:text-black">
            GitHub
          </button>
        </div>
      </div>
      <div id="Contact" className="mt-36">
        <div className=" justify-center mt-24">
          <div className="text-slate-700 text-center tracking-wider font-sans text-3xl">
            Get in Touch
          </div>
          <div className="text-black tracking-widest text-center font-bold text-5xl pt-4">
            Contact Me
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-32 space-x-16 ">
        <div className="border-4 rounded-2xl py-3 px-3">
          <div className="flex justify-around space-x-2">
            <CgMail size="50" />
            <a className="text-3xl" href="mailto:umangrathod797@gmail.com">
              Umangrathod797@gmail.com
            </a>
            <div className="flex pl-4">
              <CiLinkedin size="50" />
              <a className="text-3xl pl-4">Linked In</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-40 space-x-14 text-2xl ">
        <a href="./#About">About</a>
        <a href="./#Skills">Skills</a>
        <a href="./#Projects">Projects</a>
        <a href="./#Contact">Contact Me</a>
      </div>
      <div className="text-gray-400 m-12 text-2xl text-center">
        Copyright © 2024 Umang Rathod. All Rights Reserved.
      </div>
    </div>
  );
}

export default App;
