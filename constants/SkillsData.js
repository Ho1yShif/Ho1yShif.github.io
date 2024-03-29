import { FaPython, FaJava, FaLinux, FaAws, FaJira } from 'react-icons/fa';
import { BsGit, BsGithub, BsTable } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql, SiAmazonaws, SiLua, SiMicrosoftexcel, SiPandas, SiNumpy, SiPytorch, SiR, SiConfluence } from "react-icons/si";
import { BiTable } from "react-icons/bi";

export const TechStackData = [
  {
    name: "Python",
    icon: <FaPython className="md:text-4xl text-2xl" color="#3776AB" />
  },
  {
    name: "Pandas",
    icon: <SiPandas className="md:text-4xl text-2xl" color="#150458" />
  },
  {
    name: "NumPy",
    icon: <SiNumpy className="md:text-4xl text-2xl" color="#013243" />
  },
  {
    name: "PyTorch",
    icon: <SiPytorch className="md:text-4xl text-2xl" color="#EE4C2C" />
  },
  {
    name: "separator" },
  {
    name: "MySQL",
    icon: <GrMysql className="md:text-4xl text-2xl" color="#08668e" />
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="md:text-4xl text-2xl" color="#336791" />
  },
  {
    name: "RedshiftSQL",
    icon: <FaAws className="md:text-4xl text-2xl" color="#FF9900" />
  },
  {
    name: "ETL",
    icon: <BsTable className="md:text-4xl text-2xl" color="#000000" />
  },
  {
    name: "separator"},
  {
    name: "R",
    icon: <SiR className="md:text-4xl text-2xl" color="#276DC3" />
  },
  {
    name: "Java",
    icon: <FaJava className="md:text-4xl text-2xl" color="#276DC3" />
  },
  {
    name: "Lua",
    icon: <SiLua className="md:text-4xl text-2xl" color="#000080" />
  },
  {
    name: "Linux",
    icon: <FaLinux className="md:text-4xl text-2xl" color="#000000" />
  },
  {
    name: "separator"
  },
  {
    name: "AWS S3 CLI",
    icon: <FaAws className="md:text-4xl text-2xl" color="#FF9900" />
  },
  {
    name: "Git",
    icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />
  },
  {
    name: "GitHub",
    icon: <BsGithub className="md:text-4xl text-2xl" color="black" />
  },
  {
    name: "separator"
  },
  {
    name: "Excel",
    icon: <SiMicrosoftexcel className="md:text-4xl text-2xl" color="#217346" />
  },
  {
    name: "Looker",
    icon: <BiTable className="md:text-4xl text-2xl" color="#000000" />
  },
  {
    name: "Tableau",
    icon: <BiTable className="md:text-4xl text-2xl" color="#E97627" />
  },
  {
    name: "Jira",
    icon: <FaJira className="md:text-4xl text-2xl" color="#0052CC" />
  },
  {
    name: "Confluence",
    icon: <SiConfluence className="md:text-4xl text-2xl" color="#172B4D" />
  }
];
