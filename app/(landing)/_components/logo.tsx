import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Potion"
        width={100}
        height={100}
        className={cn("cursor-pointer", font)}
      />
    </div>
  );
};
