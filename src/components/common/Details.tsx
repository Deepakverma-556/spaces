import { TABLE_DATA_LIST, TABLE_HEADING_LIST } from "@/utils/helper";
import { Delete, TopArrow, TopBottom } from "@/utils/icons";

function Details() {
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
                  <Delete />
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
