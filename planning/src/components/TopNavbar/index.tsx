import Image from "next/image";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <div className="flex border-b-2 border-grey-500 items-center fixed w-full">
      <Link href="/">
        <a>
          <span className="font-bold p-2 text-gray-700">
            Trust the{" "}
            <span className="text-purple-300 italic tracking-wider">
              Process
            </span>
          </span>
        </a>
      </Link>
      <div className="ml-auto mr-2 text-gray-700">
        <a href="https://github.com/demo-hub/AgilePlanning">
          <button className="p-1 mr-2">
            <Image alt="" src="/github_icon.png" width="16" height="16" /> Check
            the code
          </button>
        </a>
        <span className="text-gray-700">
          Created with{" "}
          <a
            className="text-purple-300 underline font-bold"
            href="https://github.com/t3-oss/create-t3-app"
          >
            T3
          </a>
        </span>
      </div>
    </div>
  );
};

export default TopNavbar;
