import { Modal as AntModal } from "antd";

const Modal = ({ children, visable = true }: any) => {
  const setting = {
    visible: visable,
    centered: true,
    closable: false,
    footer: null,
    mask: true,
  };
  return (
    <section>
      <AntModal {...setting}>{children}</AntModal>
    </section>
  );
};

export default Modal;
