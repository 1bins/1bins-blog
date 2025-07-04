'use client'
import {modalStore} from "@/store/modalStore";

export default function BodyWrapper({
  children,
  fontClass
}: {
  children: React.ReactNode;
  fontClass: string;
}){
  const { isOpen } = modalStore();

  return(
    <body
      className={`${fontClass} ${isOpen ? "modal-open" : ""}`}
      data-color-mode="light"
    >
      {children}
    </body>
  )
}