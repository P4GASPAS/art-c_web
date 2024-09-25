import WelcomeCard from "@/app/Admin/Dashboard/Home/WelcomeCard"
import SalesCard from "@/app/Admin/Dashboard/Home/SalesCard"
import InvestCard from "@/app/Admin/Dashboard/Home/InvestCard"
import RecentOrderCard from "@/app/Admin/Dashboard/Home/RecentOrderCard"
import DailySalesTable from "@/app/Admin/Dashboard/Home/DailySalesTable"

const Home = () => {
  return (
    <>
        <h1 className="text-2xl font-semibold px-4 pt-4">Dashboard</h1>

        <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 m-4">

                        <WelcomeCard/>

                    </div>
                    
                    <div className="col-span-12 lg:col-span-6 m-4">
                        <SalesCard/>
                    </div>

                    <div className="col-span-12 lg:col-span-6 m-4">
                        <InvestCard/>
                    </div>

                    <div className="col-span-12 m-4">

                        <DailySalesTable/>

                    </div>

                </div>
            </div>
            <div className="col-span-12 lg:col-span-4 m-4">

                <RecentOrderCard/>

            </div>
        </div>

    </>
  )
}

export default Home