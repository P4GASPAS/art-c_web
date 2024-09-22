import { Input } from "@/components/aceternity_ui/input";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils";
import { BoxesCore } from "@/components/aceternity_ui/background-boxes";


const page = () => {


  return (
    <>
    <div className="p-4 w-full absolute overflow-hidden bg-secondary">
        <BoxesCore/>
        <div className="bg-primary-foreground mx-[20%] my-16 p-2 z-10 relative">
            <p className="text-xl font-semibold">Location Setup</p>
            <p className="text-muted-foreground">Fill out the necessary input fields.</p>
            <p className="mt-4 font-semibold">Personal Information:</p>
            <form action="" className="grid grid-cols-12 gap-4 m-2 font-normal">
                <div className="col-span-12">
                    <Label className="font-normal">Address</Label>
                    <Input name="address" type="text"/>
                </div>
                <div className="col-span-6">
                    <Label className="font-normal">City</Label>
                    <Input name="city" type="text"/>
                </div>
                <div className="col-span-6">
                    <Label className="font-normal">State</Label>
                    <Input name="state" type="text"/>
                </div>
                <div className="col-span-6">
                    <Label className="font-normal">Postal code</Label>
                    <Input name="postal_code" type="number"/>
                </div>
                <div className="col-span-6">
                    <Label className="font-normal">Country</Label>
                    <Input name="country" type="text"/>
                </div>
                <div className="col-span-12">
                    <Label className="font-normal">Barangay</Label>
                    <Input name="barangay" type="text"/>
                </div>
                <div className="col-span-6">
                    <Label className="font-normal">Province</Label>
                    <Input name="province" type="text"/>
                </div>
                <div className="col-span-6">
                    <Label className="font-normal">House</Label>
                    <Input name="house" type="text"/>
                </div>
                <div className="col-span-12 flex justify-end gap-4">
                    <Button type="button" variant={"secondary"}>Skip</Button>
                    <Button type="submit" variant={"default"} className="hover:bg-primary-foreground hover:text-black">Confirm</Button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
  
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  

export default page