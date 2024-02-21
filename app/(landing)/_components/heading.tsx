"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="tet-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans, Unified. Welcome to{" "}
        <span className="underline">Potion</span>
      </h1>
      <h3>
        Potion is the connected workspace where
        <br /> you can actually cook everything up.
      </h3>
      <Button>
        Enter Potion
        <ArrowRight className="h-4 w-4-ml-2" />
      </Button>
    </div>
  );
};
