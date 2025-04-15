"use client";
import { TABLE_HEADING_LIST } from "@/utils/helper";
import { Delete, TopArrow, TopBottom } from "@/utils/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function Details({ contentData = [] }: any) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1); 
  const searchParams = useSearchParams();

  useEffect(() => {
    setData(contentData);
    const pageParam = searchParams.get("page");
    const searchParam = searchParams.get("search");
    if (pageParam) {
      setCurrentPage(parseInt(pageParam, 10));
    }
    if (searchParam) {
      setSearch(searchParam);
    }
  }, [contentData || searchParams]);

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

  const handleRowsPerPageChange = (e: any) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);

    const params = new URLSearchParams(window.location.search);
    params.set("page", "1");
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage < maxPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const handlePageSelect = (page: number) => {
    setCurrentPage(page);

    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div className="flex flex-col justify-between w-full max-xl:mt-6">
      <div className="bg-white max-h-max pb-[23px] rounded-[6px] border border-white shadow-[0px_16px_53.7px_0px] shadow-lightBlue">
        <div className="pt-2.5 px-3.5 flex items-center justify-between">
          <p className="font-medium text-sm leading-[100%] text-nowrap">
            Show
            <select
              className="bg-pink rounded-[6px] text-white py-1 px-1.5 pr-5 mx-2 outline-none cursor-pointer appearance-none"
              onChange={handleRowsPerPageChange}
              value={rowsPerPage}
            >
              <option value="10">10</option>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="7">7</option>
            </select>{" "}
            Enter per page
          </p>
          <input
            onChange={searchHandler}
            type="text"
            placeholder="Find"
            className="border-[0.8px] rounded-full outline-none border-black/20 font-medium text-sm max-sm:text-xs text-black placeholder:text-black px-[17px] py-3 max-sm:py-1 max-sm:px-2 sm:max-w-[320px] sm:w-full max-sm:w-24"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="mt-2.5 table-auto w-full max-lg:min-w-[960px]">
            <thead>
              <tr className="">
                {TABLE_HEADING_LIST.map((obj, i) => (
                  <td
                    key={i}
                    className={`bg-customBlue border-r border-gray px-[15px] py-2.5 font-medium text-sm text-white`}
                  >
                    <div className="flex justify-between items-center">
                      {obj}
                      <span>
                        <TopBottom />
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            </thead>
            <tbody className="w-full">
              {paginatedData.map((obj, i) => (
                <tr
                  key={i}
                  className="transition-all duration-300 hover:bg-pink/8"
                >
                  <td className="px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3">
                    {obj.alpha_two_code}
                  </td>
                  <td className="px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3">
                    <Link
                      href={obj.web_pages}
                      className="transition-all duration-300 hover:text-sky-400"
                    >
                      {obj.web_pages}
                    </Link>
                  </td>
                  <td
                    className={`px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3`}
                  >
                    <Link
                      href={obj.domains}
                      className={`transition-all duration-300 hover:text-sky-400 ${
                        [0, 1, 3, 6, 7, 10].includes(i)
                          ? "bg-green-300"
                          : "bg-red-400"
                      } px-1 py-0.5 rounded-xs`}
                    >
                      {obj.domains}
                    </Link>
                  </td>
                  <td className="px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3">
                    {obj.country}
                  </td>
                  <td className="px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3">
                    {obj.name}
                  </td>
                  <td className="px-[15px] font-medium text-sm leading-[100%] text-black/70 py-3 justify-between flex gap-5">
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
      </div>
      <div className="flex justify-end items-center gap-2 mt-3">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-1 font-semibold text-[13px] bg-white py-2 rounded-lg cursor-pointer ${
            currentPage === 1 ? "text-black/20" : "text-black"
          }`}
        >
          Prev
        </button>
        {Array.from(
          { length: Math.ceil(filteredData.length / rowsPerPage) },
          (_, i) => i + 1
        ).map((page) => (
          <button
            key={page}
            onClick={() => handlePageSelect(page)}
            className={`flex items-center justify-center h-8 w-8 font-semibold text-[13px] rounded-lg cursor-pointer ${
              page === currentPage
                ? "text-white bg-blue-500"
                : "bg-white text-black"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(filteredData.length / rowsPerPage)
          }
          className={`px-1 font-semibold text-[13px] bg-white py-2 rounded-lg cursor-pointer ${
            currentPage === Math.ceil(filteredData.length / rowsPerPage)
              ? "text-black/20"
              : "text-black"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Details;
