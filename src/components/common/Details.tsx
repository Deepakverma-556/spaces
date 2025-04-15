"use client";
import { TABLE_DATA_LIST, TABLE_HEADING_LIST } from "@/utils/helper";
import { Delete, TopArrow, TopBottom } from "@/utils/icons";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function Details() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    setData(data);
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearch(searchParam);
    }
  }, [data || searchParams]);

  const filteredData = data.filter(
    (obj: any) =>
      obj.name?.toLowerCase().includes(search.toLowerCase()) ||
      obj.country?.toLowerCase().includes(search.toLowerCase())
  );

  const deleteHandler = (index: number) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };
  const searchHandler = (e: any) => {
    const value = e.target.value;
    setSearch(value);

    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="max-w-[969px] w-full flex flex-col justify-between">
      <div className="bg-white max-h-max pb-[23px] w-full rounded-[6px] border border-white shadow-[0px_16px_53.7px_0px] shadow-lightBlue">
        <div className="pt-2.5 px-3.5 flex items-center justify-between">
          <p className="font-medium text-sm leading-[100%]">
            Show
            <select className="bg-pink rounded-[6px] text-white py-1 px-1.5 pr-5 mx-2 outline-none cursor-pointer appearance-none">
              <option value="10">10</option>
              <option value="5">5</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>{" "}
            Enter per page
          </p>
          <input
            onChange={searchHandler}
            type="text"
            placeholder="Find"
            className="border-[0.8px] rounded-full border-black/20 font-medium text-sm text-black placeholder:text-black px-[17px] py-3 max-w-[320px] w-full"
          />
        </div>
        <table className="w-full mt-2.5">
          <thead>
            <tr className="flex">
              {TABLE_HEADING_LIST.map((obj, i) => (
                <td
                  key={i}
                  className="bg-customBlue w-full border-r border-gray flex justify-between items-center px-[15px] py-2.5 font-medium text-sm text-white"
                >
                  {obj}{" "}
                  <span>
                    <TopBottom />
                  </span>
                </td>
              ))}
            </tr>
          </thead>
          <tbody className="w-full">
            {TABLE_DATA_LIST.map((obj, i) => (
              <tr
                key={i}
                className="flex transition-all duration-300 hover:bg-pink/8"
              >
                <td className="w-full px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3">
                  {obj.sr}
                </td>
                <td className="w-full px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3">
                  {obj.space}
                </td>
                <td
                  className={`w-full px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3`}
                >
                  <span
                    className={`${
                      [0, 1, 3, 6, 7, 10].includes(i)
                        ? "bg-green-300"
                        : "bg-red-400"
                    } px-1 py-0.5 rounded-xs`}
                  >
                    {obj.offer}
                  </span>
                </td>
                <td className="w-full px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3">
                  {obj.team}
                </td>
                <td className="w-full px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3">
                  {obj.appId}
                </td>
                <td className="w-full px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3 justify-between flex">
                  <span className="flex items-center gap-1">
                    Manage
                    <span>
                      <TopArrow />
                    </span>
                  </span>
                  <button
                    onClick={() => deleteHandler(i)}
                    className="cursor-pointer group"
                  >
                    <Delete myClass="transition-all duration-300 group-hover:fill-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button>Prev</button>
      </div>
    </div>
  );
}

export default Details;
