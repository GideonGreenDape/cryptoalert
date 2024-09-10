
function Heading() {
  return (
    <div className="mt-[10px] flex flex-col sm:flex-row items-start sm:items-center justify-between px-[16px] sm:px-[26px] mt-[0px] h-auto sm:h-[100px]">
      <div className="flex flex-col gap-[4px] w-full sm:w-[700px]">
        <IntroText />
        <TrailingText />
      </div>
      <div className="cursor-pointer pt-[8px] mt-[10px] sm:mt-0 rounded-md text-center h-[35px] w-[120px] sm:w-[100px] bg-btnblue text-white">
        <p className="font-inter text-[14px] sm:text-[13px] font-semibold">Get Started</p>
      </div>
    </div>
  );
}

function IntroText() {
  return (
    <h1 className="font-inter text-[22px] sm:text-[26px] text-primary font-bold sm:font-semibold">
      Don't stare at charts all day - get notified when it matters.
    </h1>
  );
}

function TrailingText() {
  return (
    <p className="font-inter font-medium text-primary2 text-[13px] sm:text-[14px]">
      The global crypto market cap is{" "}
      <span className="font-bold text-[12px] sm:text-[13px]">$1.94T</span>, a{" "}
      <span className="font-bold text-[13px] sm:text-[14px]">1.65%</span> increase over the last day{" "}
      <span className="underline text-[12px] sm:text-[13px] font-bold">Read more.</span>
    </p>
  );
}

export default Heading;
