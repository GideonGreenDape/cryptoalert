import arrowup from "../assets/arrowup.png";
import Diamond from "../assets/Diamond.png";

function MainHeader() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[10px] sm:gap-[10px] px-[16px] sm:px-[28px] py-[13px] border-b">
      <div className="flex flex-wrap gap-[10px] sm:gap-[20px]">
        <p className="font-inter text-[10px] sm:text-[11px] font-semibold text-primary2">
          Cryptos: <span className="text-btnblue font-bold">2.4M+</span>
        </p>
        <p className="font-inter text-[10px] sm:text-[11px] font-semibold text-primary2">
          Exchanges: <span className="text-btnblue font-bold">790</span>
        </p>
        <p className="flex gap-[4px] font-inter text-[10px] sm:text-[11px] font-semibold text-primary2">
          Market Cap: <span className="text-btnblue font-bold">$2.01T</span>
          <img className="self-center w-[8px] h-[6px]" src={arrowup} alt="indicator" />
          <span className="text-green font-bold">2.68%</span>
        </p>
        <p className="flex gap-[4px] font-inter text-[10px] sm:text-[11px] font-semibold text-primary2">
          24h Vol: <span className="text-btnblue font-bold">$69.45B</span>
          <img className="self-center w-[8px] h-[6px]" src={arrowup} alt="indicator" />
          <span className="text-green font-bold">53.27%</span>
        </p>
        <p className="font-inter text-[10px] sm:text-[11px] font-semibold text-primary2">
          Dominance: <span className="text-btnblue font-bold">BTC:56.1% ETH:14.1%</span>
        </p>
      </div>

      <div className="flex items-center mt-[10px] sm:mt-0 ml-0 sm:ml-auto">
        <img className="w-[24px] sm:w-[27px] h-[24px] sm:h-[27px]" src={Diamond} alt="indicator" />
        <p className="font-inter text-primary2 font-semibold text-[10px] sm:text-[12px] ml-[5px]">
          freelancer.com contest Made with love by Iboyi Gideon
        </p>
      </div>
    </div>
  );
}

export default MainHeader;
