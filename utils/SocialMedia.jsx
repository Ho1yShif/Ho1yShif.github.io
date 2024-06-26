import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { MdEmail} from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

import { SocialMediaData } from "@/constants/SocialMediaData";
import { PortfolioContext } from "@/contextApi/PortfolioContext";

const SocialMedia = () => {
  const { setShowModal } = useContext(PortfolioContext);

  return (
    <Fragment>
      <div className='flex flex-wrap justify-center items-center gap-8 py-[30px] px-[20px] sm:flex-col md:flex-row'>
        <a href="mailto:shifraisaacs@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }} className="max-w-[50%] sm:max-w-full">
          <div
            className='p-4 rounded-full text-5xl bg-black text-white flex flex-col gap-3 items-center'
            onClick={() => setShowModal(true)}
            title="Email"
          >
            <MdEmail />
          </div>
        </a>
        <a href="https://docs.google.com/document/d/1KBnF9S5ot0XMx3fBoncZMl690q3BDPhMZGImKiMNIPQ/edit?usp=sharing" style={{ color: 'inherit', textDecoration: 'none' }} className="max-w-[50%] sm:max-w-full">
          <div
            className='p-4 rounded-full text-5xl bg-black text-white flex flex-col gap-3 items-center'
            onClick={() => setShowModal(true)}
            title="Resume"
          >
            <IoDocumentText />
          </div>
        </a>
        {SocialMediaData.map((social, key) => (
          <Link className='w-fit max-w-[50%] sm:max-w-full' href={social.link} key={key}>
            <div
              className={"p-2 rounded-full text-5xl text-white flex flex-col gap-3 items-center"}
              style={{ background: social.color }}
              title={social.name}
            >
              {social.icon}
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default SocialMedia;
