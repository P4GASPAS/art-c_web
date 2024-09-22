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
        <div className="bg-primary-foreground mx-[0%] lg:mx-[25%] my-8 lg:my-28 p-2 z-10 relative">
            <p className="text-xl font-semibold">Account Setup</p>
            <p className="text-muted-foreground">Fill out the necessary input fields.</p>
            <p className="mt-4 font-semibold">Personal Information:</p>
            <form action="" className="grid grid-cols-12 gap-4 m-2 font-normal">
                <div className="col-span-12 lg:col-span-6">
                    <Label className="font-normal">First name</Label>
                    <Input name="first_name" type="text"/>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <Label className="font-normal">Middle name</Label>
                    <Input name="middle_name" type="text"/>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <Label className="font-normal">Last name</Label>
                    <Input name="last_name" type="text"/>
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <Label className="font-normal">Email</Label>
                    <Input name="email" type="email"/>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <Label className="font-normal">Password</Label>
                    <Input name="password" type="password"/>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <Label className="font-normal">Confirm password</Label>
                    <Input name="confirm_password" type="password"/>
                </div>
                <div className="col-span-12 grid">
                    <Button type="submit" className="hover:bg-primary-foreground hover:text-black">Next</Button>
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