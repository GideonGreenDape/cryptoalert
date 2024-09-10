import cryptolist from "../utility/api";
import favouriteunfiled from "../assets/favouriteunfiled.png";
import arrowup from "../assets/arrowup.png";
import arrowdown from "../assets/arrowdown.png";

function Table() {
  return (
    <div className="overflow-auto max-h-[500px]">
      <table className="min-w-full table-auto">
        <thead className="border bg-white sticky top-0 z-10">
          <tr className="font-inter font-medium text-[13px]">
            <th className="py-[24px] w-[30px]">{' '}</th>
            <th className="text-start w-[50px] hidden sm:table-cell">#</th>
            <th className="text-start w-[160px]">Name</th>
            <th className="text-start w-[80px]">Price</th>
            <th className="text-start w-[80px] hidden lg:table-cell">1h%</th>
            <th className="text-start w-[80px]">24h%</th>
            <th className="text-start w-[80px] hidden md:table-cell">7d%</th>
            <th className="text-start w-[110px] hidden md:table-cell">Market Cap</th>
            <th className="text-start w-[100px] hidden md:table-cell">Volume(24h)</th>
            <th className="text-start w-[90px] hidden lg:table-cell">Circulating Supply</th>
          </tr>
        </thead>
        <tbody>
          {cryptolist.map((items) => (
            <tr className="py-[19px] border-b cursor-pointer hover:bg-tick" key={items.id}>
              <td className="text-center">
                <img className="w-[15px] h-[15px]" src={favouriteunfiled} alt="favourite icon" />
              </td>
              <td className="font-inter text-[13px] text-primary font-semibold hidden sm:table-cell sm:font-normal lg:font-semibold">
                {items.id}
              </td>
              <td className="text-start font-inter font-bold text-primary text-[15px] sm:font-medium lg:font-bold">
                {items.name}{' '}
                <span className="text-primary2 text-[14px] ml-[6px] sm:font-normal lg:font-medium">
                  {items.abbreviation}
                </span>
              </td>
              <td className="font-inter font-bold text-primary text-[14px] sm:font-medium lg:font-bold">
                {items.price}
              </td>
              <td className="font-inter text-[13px] font-semibold text-green hidden lg:table-cell">
                <div className="flex gap-[3px] items-center">
                  <img className="w-[9px] h-[6px]" src={arrowup} alt="arrow up icon" />
                  {items.hr}
                </div>
              </td>
              <td className="font-inter font-semibold text-[13px] text-green sm:font-medium lg:font-semibold">
                <div className="flex gap-[3px] items-center">
                  {items.hrd}
                  <img className="w-[9px] h-[6px]" src={arrowup} alt="arrow up icon" />
                </div>
              </td>
              <td className="font-inter text-[13px] font-semibold text-red hidden md:table-cell sm:font-medium lg:font-semibold">
                <div className="flex gap-[3px] items-center">
                  <img className="w-[9px] h-[6px]" src={arrowdown} alt="arrow down icon" />
                  {items.days}
                </div>
              </td>
              <td className="font-inter font-bold text-primary2 text-[13px] hidden md:table-cell sm:font-medium lg:font-bold">
                {items.marketcap}
              </td>
              <td className="font-inter font-semibold text-primary text-[15px] hidden md:table-cell sm:font-medium lg:font-semibold">
                <div className="py-[8px] flex flex-col gap-[10px]">
                  <p className="text-[14px]">{items.volume}</p>
                  <p className="text-primary2 text-[13px]">{items.quantity}</p>
                </div>
              </td>
              <td className="font-inter text-[14px] font-semibold text-primary hidden lg:table-cell sm:font-medium lg:font-semibold">
                {items.circulatingsupply}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
