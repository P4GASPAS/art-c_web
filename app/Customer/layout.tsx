import { ReactNode } from "react"
import Navbar from "@/app/Customer/Navbar"

const DashboardLayout = ({ children }: {children: ReactNode}) => {

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default DashboardLayout