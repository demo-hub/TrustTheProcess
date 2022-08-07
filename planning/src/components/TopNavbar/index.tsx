import Image from "next/image";

const TopNavbar = () => {
  return (
    <div className="flex border-b-2 border-grey-500 items-center">
      <span className="font-bold p-2 text-gray-700">
        Trust the{" "}
        <span className="text-purple-300 italic tracking-wider">Process</span>
      </span>
      <div className="ml-auto mr-1 text-gray-700">
        <button
          onClick={() =>
            window.location.assign("https://github.com/demo-hub/AgilePlanning")
          }
          className="p-1"
        >
          <Image alt="" src="/github_icon.png" width="16" height="16" /> Check
          the code
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
