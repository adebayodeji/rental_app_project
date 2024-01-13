"use client";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondarylable?: string;
}
import { Modern_Antiqua } from "next/font/google";

const Modal = "";
export default Modal;
