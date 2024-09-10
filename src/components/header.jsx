import Logo from "../assets/Logo.png";
import Menu from "../assets/Menu.png";
import Search from "../assets/Search.png";
import favourite from "../assets/favourite.png";
import portfolio from "../assets/portfolio.png";
import rednotification from "../assets/rednotification.png";

function Header() {
  return (
    <nav className=" flex justify-between border-b items-center px-[25px] py-[18px]">
      <LogoHeader />
      <Icons />
    </nav>
  );
}

function LogoHeader() {
  return (
    <div className="flex gap-[20px] items-center">
      <div className="flex gap-[10px] items-center">
        <img className="w-[30px] h-[30px]" src={Logo} alt="Logo Icon" />
        <h4 className="self-end text-primary text-[23px] font-inter font-bold text-lg sm:text-[20px]">
          CryptoAlert
        </h4>
      </div>
      <div className="hidden lg:flex">
        <Links />
      </div>
      {/* <div className="block lg:hidden">
        <img className="w-[25px] h-[25px]" src={Menu} alt="Menu Icon" />
      </div> */}
    </div>
  );
}

function Icons() {
  return (
    <div className="flex flex-row gap-[15px] sm:gap-[25px]">
      <div className="flex items-center gap-[6px] cursor-pointer">
        <img className="w-[18px] h-[18px]" src={favourite} alt="watchlist Icon" />
        <p className="self-center font-inter text-[12px] font-semibold text-primary2 text-xs sm:text-[12px]">
          Watchlist
        </p>
      </div>
      <div className="flex items-center gap-[6px] cursor-pointer">
        <img className="w-[20px] h-[20px]" src={portfolio} alt="portfolio Icon" />
        <p className="self-center font-inter text-[12px] font-semibold text-primary2 text-xs sm:text-[12px]">
          Portfolio
        </p>
      </div>
      <div className="flex cursor-pointer items-center gap-[5px] w-[100px] sm:w-[120px] h-[30px] bg-ash border pl-[5px] pt-[2px] rounded-md">
        <img className="w-[20px] h-[20px]" src={Search} alt="Search Icon" />
        <p className="font-inter text-[12px] font-semibold text-primary2 text-xs sm:text-[12px]">
          Search
        </p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <ul className="flex gap-[20px] md:gap-[29px] font-semibold font-inter text-[12px] md:text-[14px] text-primary">
      <li className="flex gap-[4px] cursor-pointer">
        <p>Cryptocurrencies</p>
        <img className="mt-[5px] w-[6px] h-[6px]" src={rednotification} alt="Notification Icon" />
      </li>
      <li className="cursor-pointer">Free Trial</li>
      <li className="cursor-pointer">Premium</li>
      <li className="cursor-pointer">Emails</li>
      <li className="cursor-pointer">Learn</li>
    </ul>
  );
}

export default Header;
