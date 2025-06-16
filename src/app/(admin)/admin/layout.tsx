import {ReactNode} from "react";
import {AdminAuth} from "@/components/auth";

export default function AdminLayout({
  children,
} : {
  children: ReactNode
}) {
  return(
    <AdminAuth>
      {children}
    </AdminAuth>
  )
}