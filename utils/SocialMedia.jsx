import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { MdFeedback,  MdEmail } from "react-icons/md";

import { SocialMediaData } from "@/constants/SocialMediaData";
import { PortfolioContext } from "@/contextApi/PortfolioContext";

const SocialMedia = () => {
  const { setShowModal } = useContext(PortfolioContext);

  return (
    <Fragment>
      <div className='absolute left-14 bottom-10 flex flex-col gap-4 z-10'>
        <a href="mailto:shifraisaacs@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
          <button
            className='p-2 rounded-full text-xl bg-black text-white'
            onClick={() => setShowModal(true)}
            title="Email"
          >
            <MdEmail />
          </button>
        </a>
        {SocialMediaData.map((social, key) => (
          <Link className='w-fit' href={social.link} key={key}>
            <div
              className={"p-2 rounded-full text-xl text-white"}
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