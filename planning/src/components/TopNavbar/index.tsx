import Button from "@components/Button";
import { faBook, faCode } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { highlighted } from "../../styles/globals.css";
import { buttons, container, process, text } from "./styles.css";

const TopNavbar = () => {
  return (
    <div className={container}>
      <Link href="/">
        <span className={text}>
          Trust the <span className={`${highlighted} ${process}`}>Process</span>
        </span>
      </Link>
      <div className={buttons}>
        <a href="https://github.com/demo-hub/TrustTheProcess">
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
