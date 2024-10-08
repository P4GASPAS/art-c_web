"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/aceternity_ui/label";
import { Input } from "@/components/aceternity_ui/input";
import { cn } from "@/lib/utils";
import { BoxesCore } from "@/components/aceternity_ui/background-boxes";
import { useFormState, useFormStatus } from "react-dom";
import { handleRegister, redirectGithub, redirectFacebook, redirectGoogle } from "./ServerAction";
import { ZodErrors } from "@/components/ZodErrors";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function SignupFormDemo() {

  const [state, formAction] = useFormState(handleRegister, {})
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(state?.message != undefined) {
      console.log(state)
      setCookie('token', state.accessToken)
      setCookie('user', state.user)
      router.push('/Dashboard/Home')
    }
  }, [state?.message])

  return (
    <>
    <div className="p-4 w-full absolute overflow-hidden bg-secondary">
      <BoxesCore/>
      <div className="relative z-10 bg-primary-foreground w-[45vh] md:w-[80vh] mx-auto p-4 rounded-lg shadow-xl">

        <h1 className="text-2xl font-semibold text-center my-4">Register</h1>
        <p className="leading-5 text-sm">Fill up all of the necessary data in order to create your new account and buy products or make an appointment for a service.</p>

        <form action={formAction} className="grid grid-cols-12 gap-4 my-8">
          <div className="col-span-12 space-y-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" name="first_name" placeholder="Juan" type="text" />
              <ZodErrors error={state?.zodErrors?.first_name} />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="middlename">Middle name</Label>
              <Input id="middlename" name="middle_name" placeholder="Dela" type="text" />
              <ZodErrors error={state?.zodErrors?.middle_name} />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" name="last_name" placeholder="Cruz" type="text" />
              <ZodErrors error={state?.zodErrors?.last_name} />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="Juan@sample.com" type="text" />
              <ZodErrors error={state?.zodErrors?.email} />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" placeholder="******" type="password" />
              <ZodErrors error={state?.zodErrors?.password} />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="confirm_password">Confirm Password</Label>
              <Input id="confirm_password" name="confirm_password" placeholder="******" type="password" />
              <ZodErrors error={state?.zodErrors?.confirm_password} />
            </LabelInputContainer>
            <div className="grid">
              <SubmitButton/>
            </div>
          </div>
        </form>

        <div className="relative flex items-center mb-8">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <div className="grid gap-2">
          <button
            className="bg-secondary border-2 rounded-md h-10 font-medium"
            type="button"
            onClick={async () => {
              setLoading(!loading)
              redirectGithub().then(res => res)
            }}
            disabled={loading}
          >
            <svg
                data-v-54e46119=""
                width="30"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
                >
                <path
                    data-v-54e46119=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.3019 0C5.50526 0 0 5.50526 0 12.3019C0 17.7392 3.52669 22.3458 8.4127 23.977C9.0244 24.0902 9.25095 23.7126 9.25095 23.3804C9.25095 23.0858 9.2434 22.3156 9.23585 21.2885C5.81488 22.0286 5.08991 19.6422 5.08991 19.6422C4.53108 18.2225 3.72304 17.8373 3.72304 17.8373C2.60537 17.0746 3.80611 17.0897 3.80611 17.0897C5.03705 17.1803 5.69405 18.3584 5.69405 18.3584C6.78906 20.2388 8.57129 19.6951 9.27361 19.3779C9.38688 18.585 9.70406 18.0412 10.0514 17.7316C7.32524 17.4295 4.45556 16.3723 4.45556 11.66C4.45556 10.3158 4.93132 9.22074 5.72426 8.35984C5.59588 8.04266 5.17298 6.79662 5.83754 5.10501C5.83754 5.10501 6.87213 4.77274 9.22074 6.36616C10.2025 6.0943 11.2522 5.95837 12.3019 5.95082C13.344 5.95837 14.4013 6.0943 15.383 6.36616C17.7316 4.77274 18.7662 5.10501 18.7662 5.10501C19.4383 6.79662 19.0154 8.05021 18.887 8.35984C19.6724 9.22074 20.1482 10.3158 20.1482 11.66C20.1482 16.3874 17.271 17.422 14.5297 17.7316C14.9677 18.1092 15.3679 18.8644 15.3679 20.0123C15.3679 21.6586 15.3528 22.9801 15.3528 23.3879C15.3528 23.7202 15.5718 24.0978 16.1986 23.977C21.0846 22.3458 24.6038 17.7392 24.6038 12.3094C24.6038 5.50526 19.0985 0 12.3019 0Z"
                    fill="black"
                ></path>
              </svg>
            <BottomGradient />
          </button>

          <button
            className="bg-secondary border-2 rounded-md h-10 font-medium"
            type="button"
            onClick={async () => {
              setLoading(!loading)
              redirectGoogle().then(res => res)
            }}
            disabled={loading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 256 262" className="mx-auto">
                  <path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/>
                  <path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/>
                  <path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/>
                  <path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/>
              </svg>
            <BottomGradient />
          </button>

          <button
            className="bg-secondary border-2 rounded-md h-10 font-medium"
            type="button"
            onClick={async () => {
              setLoading(!loading)
              redirectFacebook().then(res => res)
            }}
            disabled={loading}
          >
            <svg width="30" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" className="mx-auto">
                <path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"/>
                <path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"/>
            </svg>
            <BottomGradient />
          </button>
        </div>

      </div>
    </div>
    </>
  );
}

const SubmitButton = () => {
  
  const status = useFormStatus()

  return (
    <button
      className={cn(`rounded-md h-10 font-medium flex justify-center gap-2 items-center hover:bg-secondary hover:text-black transition ease-out duration-400`, status.pending ? `bg-secondary text-black opacity-50` : `bg-primary text-white`)}
      type="submit"
      disabled={status.pending ? true : false}
    >
      {(status.pending ? true : false) && <svg aria-hidden="true" className="w-5 h-5 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>}
      Sign up &rarr;
      <BottomGradient />
  </button>
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
