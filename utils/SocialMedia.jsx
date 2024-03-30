import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { MdEmail, MdPageview } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";

import { SocialMediaData } from "@/constants/SocialMediaData";
import { PortfolioContext } from "@/contextApi/PortfolioContext";

const SocialMedia = () => {
  const { setShowModal } = useContext(PortfolioContext);

  return (
    <Fragment>
      <div className='absolute left-14 bottom-10 flex gap-7 z-10'>
        <a href="mailto:shifraisaacs@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
          <button
            className='p-2 rounded-full text-5xl bg-black text-white'
            onClick={() => setShowModal(true)}
            title="Email"
          >
            <MdEmail />
          </button>
        </a>
        <a href="https://drive.google.com/file/d/13f_wkFv5v536YB5onTxRraPWiKfjUhSG/view" style={{ color: 'inherit', textDecoration: 'none' }}>
          <button
            className='p-2 rounded-full text-5xl bg-black text-white'
            onClick={() => setShowModal(true)}
            title="Resume"
          >
            <FaFileAlt />
          </button>
        </a>
        {SocialMediaData.map((social, key) => (
          <Link className='w-fit' href={social.link} key={key}>
            <div
              className={"p-2 rounded-full text-5xl text-white"}
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