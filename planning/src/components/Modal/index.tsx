import Button from "@components/Button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
    <div className="w-screen h-screen fixed flex justify-center items-center">
      <div className="w-96 h-96 rounded-xl bg-white shadow flex flex-col p-6">
        <div className="flex justify-end">
          <Button type="icon" icon={faXmark} onClick={() => onClose?.()} />
        </div>
        {title ? (
          <h1 className="text-3xl leading-normal font-extrabold text-gray-700 inline-block text-center mt-2.5">
            {title}{" "}
            {highlightedWord ? (
              <span className="text-purple-300">{highlightedWord}</span>
            ) : undefined}
          </h1>
        ) : undefined}
        <div className="flex flex-1 justify-center items-center text-2xl text-center">
          {children}
        </div>
        {withFooter ? (
          <div className="flex flex-1 justify-center items-center">
            <Button type="danger" label="Cancel" onClick={() => onCancel?.()} />
            <Button type="primary" label="Continue" />
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default Modal;
