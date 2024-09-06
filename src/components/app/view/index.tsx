import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useGradientWorkerInit } from "@/components/worker/useGradientWorkerInit";

import { FC, PropsWithChildren } from "react";

const View: FC<PropsWithChildren> = ({ children }) => {
  const workerInitialized = useGradientWorkerInit();

  return (
    <main className="w-full h-screen max-h-full relative flex items-center justify-center">
      {workerInitialized ? (
        children
      ) : (
        <>
          <Skeleton className="w-full h-full flex items-center justify-center">
            <Label>Loading...</Label>
          </Skeleton>
        </>
      )}
    </main>
  );
};

export default View;
