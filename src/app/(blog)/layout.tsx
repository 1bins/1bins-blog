import {ReactNode} from "react";
import {Header} from "@/components/header";

export default function BlogLayout({
  children
}: {
  children: ReactNode
}) {
 return(
   <main>
     <Header />
     {children}
   </main>
 )
}