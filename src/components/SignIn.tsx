import { FC } from "react";
import InputField from "./InputField";
import RememberMe from "./RememberMe";
import Button from "./Button";
import facebook from "../assets/svgs/facebook.svg";
import google from "../assets/svgs/google.svg";
import apple from "../assets/svgs/apple.svg";

interface IProps {}

const SignIn: FC<IProps> = () => {
  const signInOptions: string[] = [facebook, google, apple];
  return (
    <div className={`w-full flex flex-col md:w-[30rem] lg:w-[36rem]`}>
      <InputField title="Email address" placeHolder="Your email" />
      <InputField title="Password" placeHolder="Password" viewPassword={true} />
      <RememberMe />
      <div className="w-full my-10 px-20 flex justify-center items-center">
        <Button btnText="Sign in" />
      </div>
      <p className="flex flex-col w-full text-center text-black/70 text-xs">
        Other sign in options
        <section className="flex justify-center items-center gap-2 mt-2">
          {signInOptions.map((option) => (
            <button className="border-[1px] border-black/20 rounded-full p-3 hover:bg-black/5">
              <img src={option} alt="" />
            </button>
          ))}
        </section>
      </p>
    </div>
  );
};

export default SignIn;
