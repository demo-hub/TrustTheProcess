import Button from "@components/Button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { highlighted } from "../../styles/globals.css";
import { body, button, container, footer, modal } from "./styles.css";

type ModalProps = {
  children: JSX.Element;
  title?: string;
  highlightedWord?: string;
  withFooter?: boolean;
  onCancel?: () => void;
  onClose?: () => void;
};

const Modal = ({
  children,
  title,
  highlightedWord,
  withFooter,
  onCancel,
  onClose,
}: ModalProps) => {
  return (
    <div className={container}>
      <div className={modal}>
        <div className={button}>
          <Button type="icon" icon={faXmark} onClick={() => onClose?.()} />
        </div>
        {title ? (
          <h1 className={title}>
            {title}{" "}
            {highlightedWord ? (
              <span className={highlighted}>{highlightedWord}</span>
            ) : undefined}
          </h1>
        ) : undefined}
        <div className={body}>{children}</div>
        {withFooter ? (
          <div className={footer}>
            <Button type="danger" label="Cancel" onClick={() => onCancel?.()} />
            <Button type="primary" label="Continue" />
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default Modal;
