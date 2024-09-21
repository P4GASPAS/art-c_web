import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 my-8 text-white mx-2">
        <Link href={""} className="sidenavButton">Dashboard</Link>
        <Link href={""} className="sidenavButton">Inventory</Link>
        <Link href={""} className="sidenavButton">Appointments</Link>
        <Link href={""} className="sidenavButton">Products</Link>
        <Link href={""} className="sidenavButton">Messages</Link>
        <Link href={""} className="sidenavButton">Accounts</Link>
    </div>
  )
}

export default Sidebar