import Button from "@components/Button";
import { faBook, faCode } from "@fortawesome/free-solid-svg-icons";
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
          <Button type="no-fill" label="Check the code" icon={faCode} />
        </a>
        <a href="https://liberapay.com/sombra/donate">
          <Button type="no-fill" label="Buy me a book" icon={faBook} />
        </a>
      </div>
    </div>
  );
};

export default TopNavbar;
