import InventoryProducts from "@/app/Dashboard/Inventory/InventoryProducts"

const page = () => {
  return (
    <div>
        <h1 className="text-2xl font-semibold px-4 pt-4">Inventory</h1>
        <InventoryProducts />
    </div>
  )
}

export default page