import { CONTACT_LIST, USER_GUIDES_LIST } from "@/utils/helper";
import { Docs, GuidesIcon } from "@/utils/icons";
import Link from "next/link";
import React from "react";
import Heading from "./common/Heading";
import Details from "./common/Details";

function Products() {
  return (
    <div className="pt-[140px] bg-offWhite pb-[62px]">
      <div className="max-w-[1252px] mx-auto px-4">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-[32px] leading-[100%]">
            My DevOps Spaces
          </h2>
          <button className="font-medium text-white bg-gradient-to-br from-purple from-30% to-darkPink px-4 py-[14px] rounded-xs cursor-pointer hover:from-darkPink">
            Create a DevOps Spaces (1 left)
          </button>
        </div>
        <div className="pt-11 flex gap-5">
          <div className="w-[251px]">
            <Heading text="User's Guides" />
            <ul className="py-3">
              {USER_GUIDES_LIST.map((obj, i) => (
                <li key={i} className="py-2">
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
            <Heading text="Contact and Support" />
            <ul className="py-3">
              {CONTACT_LIST.map((obj, i) => (
                <li key={i} className="py-2">
                  <Link
                    href={obj.link}
                    className="flex items-center gap-3 font-medium text-sm leading-[100%] border-l-2 border-darkPink py-3 pl-4 bg-gradient-to-r from-darkPink/10 to-transparent hover:from-darkPink"
                  >
                    <span>{obj.icon}</span> {obj.title}
                  </Link>
                </li>
              ))}
            </ul>
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
          <Details />
        </div>
      </div>
    </div>
  );
}

export default Products;
