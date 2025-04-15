import { CONTACT_LIST, USER_GUIDES_LIST } from "@/utils/helper";
import { Docs, GuidesIcon } from "@/utils/icons";
import Link from "next/link";
import React from "react";
import Heading from "./common/Heading";
import Details from "./common/Details";

function Products({ heroContent }: any) {
  return (
    <div className="pt-[140px] bg-offWhite pb-[62px] max-lg:pt-24 max-md:pt-16">
      <div className="max-w-[1252px] mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap">
          <h2 className="font-medium text-[32px] leading-[100%] max-sm:w-full max-sm:pb-4">
            My DevOps Spaces
          </h2>
          <button className="font-medium text-white bg-gradient-to-br from-purple from-30% to-darkPink px-4 py-[14px] max-sm:text-sm rounded-xs cursor-pointer hover:from-darkPink">
            Create a DevOps Spaces (1 left)
          </button>
        </div>
        <div className="pt-11 max-sm:pt-8 flex gap-5 max-xl:flex-wrap">
          <div className="xl:w-[251px] w-full">
            <Heading text="User's Guides" />
            <ul className="py-3 max-xl:flex w-full flex-wrap">
              {USER_GUIDES_LIST.map((obj, i) => (
                <li key={i} className="py-2 mr-10">
                  <Link
                    href={obj.link}
                    className="flex items-center gap-3 font-medium text-sm leading-[100%] border-l-2 border-customBlue py-3 pl-4 bg-gradient-to-r from-lightPurple to-transparent hover:from-purple"
                  >
                    <span>
                      <GuidesIcon />
                    </span>{" "}
                    {obj.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <Heading text="Contact and Support" />
              <ul className="py-3 max-xl:flex w-full flex-wrap gap-4">
                {CONTACT_LIST.map((obj, i) => (
                  <li key={i} className="py-2 mr-10">
                    <Link
                      href={obj.link}
                      className="flex items-center gap-3 font-medium text-sm leading-[100%] border-l-2 border-darkPink py-3 pl-4 bg-gradient-to-r from-darkPink/10 to-transparent hover:from-darkPink"
                    >
                      <span>{obj.icon}</span> {obj.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-[271px]">
              <Heading text="Others" />
              <Link
                href={"#devsecops"}
                className="flex items-center gap-3 font-medium text-sm leading-[100%] border-l-2 border-darkPink py-3 pl-4 bg-gradient-to-r from-darkPink/10 to-transparent mt-5 hover:from-darkPink"
              >
                <span>
                  <Docs />
                </span>{" "}
                DevSecOps Docs
              </Link>
            </div>
          </div>
          <Details contentData={heroContent} />
        </div>
      </div>
    </div>
  );
}

export default Products;
