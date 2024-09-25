'use client'
import { Input } from "@/components/aceternity_ui/input";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils";
import { BoxesCore } from "@/components/aceternity_ui/background-boxes";
import { useEffect, useState } from "react";
import { handleRegister } from "@/app/register/ServerAction";
import { connectUser } from "../ServerAction";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";


const page = () => {

  const [state, formAction] = useFormState(handleRegister, {})
  const router = useRouter()

  useEffect(() => {
    if(state?.message != undefined) {
      setCookie('token', state.accessToken)
      setCookie('user', state.user)
      const user = getCookie('user')
      connectUser(user)
      router.push('/callback/setup/location')
    }
  }, [state?.message])

  return (
    <>
    <div className="p-4 w-full absolute overflow-hidden bg-secondary">
        <BoxesCore/>
        <div className="bg-primary-foreground mx-[0%] lg:mx-[25%] my-8 lg:my-28 p-2 z-10 relative">
            <p className="text-xl font-semibold">Account Setup</p>
            <p className="text-muted-foreground">Fill out the necessary input fields.</p>
            <p className="mt-4 font-semibold">Personal Information:</p>
            <form action={formAction} className="grid grid-cols-12 gap-4 m-2 font-normal">
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
                    <SubmitButton/>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

const SubmitButton = () => {

  const status = useFormStatus()

  return (
    <Button type="submit" disabled={status.pending ? true : false} className="hover:bg-primary-foreground hover:text-black">
      {(status.pending ? true : false) && <svg aria-hidden="true" className="w-5 h-5 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>}
      Next
    </Button>
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