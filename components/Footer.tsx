"use client"
import Image from "next/image";
import Link from "next/link";
import {Link as ScrollLink} from 'react-scroll';
import React from "react";
import {BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedin, BiLogoLinkedinSquare, BiLogoTwitter,} from "react-icons/bi"

const Footer = () => {
  const nav = [
    { name: "Home", route: "hero" },
    { name: "Features", route: "features" },
    { name: "How It Works", route: "works" },
    { name: "Integration", route: "integration" },
    { name: "Support", route: "banner" },
  ];
  const socials = [
    { name: "Instagram", route: "https://instagram.com/medscanafrica" },
    { name: "Linkedin", route: "https://www.linkedin.com/company/medscan-africa/" },
    { name: "Twitter", route: "https://x.com/medscanafrica" },
    { name: "Facebook", route: "#" },
  ];

  return (
    <div className="md:mt-40 mt-5 ">
      <div className="md:mx-32 sm:m-5 md:my-20 ">
        <div className="border-b-4 border-black border-opacity-50">
          <div className="  justify-between  py-5 md:flex hidden ">
            <ul className="flex flex-row items-center ">
              {nav.map((data, index) => (
      <ScrollLink to={data.route} className="mx-5 text-xl font-bold cursor-pointer "  activeClass="active"
              smooth={true}
              spy={true}
              key={data.name}
              offset={-150}>
              {data.name}
           </ScrollLink>
                
              ))}
            </ul>
            <ul className="flex flex-row items-center ">
              {socials.map((data, index) => (
                <li
                  key={data.name}
                  className="mx-5 text-xl font-bold cursor-pointer "
                >
                  {data.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex md:hidden text-black py-2 mx-3 text-3xl  " >
            <Link href="#">
            <BiLogoTwitter className="mx-2 hover:text-primary" />
              </Link>
            <Link href="https://www.linkedin.com/company/medscan-africa/">
            <BiLogoLinkedinSquare className="mx-2 hover:text-primary" />
            </Link>
            <Link href="#">
            <BiLogoFacebookCircle className="mx-2 hover:text-primary " />
              </Link>
            <Link href="https://instagram.com/medscanafrica">
            <BiLogoInstagram className="mx-2 hover:text-primary" />
              </Link>
          </div>
        </div>
        <div className="flex  flex-row max-md:flex-wrap max-sm:mx-1 xl:text-xl text-lg justify-between py-5 ">
          <Link href="mailto:info@medscan.africa">info@medscan.africa</Link>
          <span>Medscan. All Rights Reserved</span>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
      <Image
        src="/assets/Medscan Footer text 1.png"
        width={1000}
        height={1000}
        alt="Footer"
        className="w-full h-full "
      />
    </div>
  );
};

export default Footer;
