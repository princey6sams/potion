import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-x-2">
      <Image
        src="/code-copy-active.svg"
        alt="Potion"
        width={40}
        height={40}
        className="dark:hidden"
      />
      <Image
        src="/code-copy.svg"
        alt="Potion"
        width={40}
        height={40}
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Potion</p>
    </div>
  );
};

// Nice idea to apply to Portfolio // Prioritize...
// Extremely nice trick to control icons and images in dark mode...
