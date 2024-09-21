import { ReactNode } from "react"
import UserNav from "@/components/UserNav"
import Sidebar from "@/components/Sidebar"

const DashboardLayout = ({ children }: {children: ReactNode}) => {

  return (
    <>
      <UserNav />
      <div className="grid grid-cols-12">
          <div className="hidden lg:block col-span-2 p-1 bg-primary-foreground border-r-[1px] border-black">
              <Sidebar />
          </div>
          <div className="col-span-12 lg:col-span-10 p-1 bg-gray-200 shadow-inner">
              {children}
          </div>
      </div>
    </>
  )
}

export default DashboardLayout