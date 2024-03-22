import { SocialLoginProviders } from "@/types/social-login-providers";
import Image from "next/image";

const SocialLogin = ({ loginProviders }: { loginProviders: SocialLoginProviders[] }) => {
  return (
    <div className={"flex items-center justify-between gap-4"}>
      {loginProviders.map((provider, index) => {
        return (
          <div
            className={"flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md border border-grey"}
            key={index}
          >
            <div className={"relative h-[20px] w-[20px] object-contain"}>
              <Image alt={provider} fill src={`/images/${provider}-icon.svg`} />
            </div>
            <div className={"font-medium capitalize"}>{provider}</div>
          </div>
        );
      })}
    </div>
  );
};
export default SocialLogin;
