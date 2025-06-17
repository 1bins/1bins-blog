import {ReactNode} from "react";
import {AdminAuth} from "@/components/Auth";
import style from './layout.module.scss';

export default function AdminLayout({
  children,
} : {
  children: ReactNode
}) {
  return(
    <main className={style.main}>
      <AdminAuth>
        {children}
      </AdminAuth>
    </main>
  )
}