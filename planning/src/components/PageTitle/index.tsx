import * as globalStyles from "../../styles/globals.css";
import { container } from "./styles.css";

const PageTitle = ({
  title,
  highlighted,
}: {
  title: string;
  highlighted?: string;
}) => {
  return (
    <h1 className={container}>
      {title} <span className={globalStyles.highlighted}>{highlighted}</span>
    </h1>
  );
};

export default PageTitle;
