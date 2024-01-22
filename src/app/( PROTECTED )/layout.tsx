import Header from "@/components/layout/header";
import SessionWrapper from "@/components/session/session-provider";
import { LoadingWrapper } from "@/components/loading-wrapper";
import { Toaster } from "@/components/ui/sonner";

let opacity = 1
const BaseLayout = async ({ children }: any) => {

  return (
    <SessionWrapper>
      <LoadingWrapper>

      <div className="h-full w-full">
        <div className="h-20 min-20 max-20 ">
          <Header />
        </div>
        <main className="h-[calc(100%-80px)] flex flex-col items-center justify-center px-3">
          <div className=" w-full  mx-auto  overflow-y-auto h-full">
            <div className="w-full flex justify-center h-full ">{children}</div>
          </div>
        </main>
      </div>
      </LoadingWrapper>
      <Toaster />
    </SessionWrapper>
  );
};

export default BaseLayout;
