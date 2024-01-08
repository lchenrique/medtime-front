import { MedItem } from "@/components/MedItem";

// export const runtime = "edge";

export interface IHomeProps {}
const getData = async () => {
  // const res = await fetch(`http://localhost:8080/api/medicines`, {
  //   method: "GET",
  //   cache: "no-cache",
  // });
  // const { data } = await res.json();
  // return data;
};
const Home = async (props: IHomeProps) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* {result.map((med: any) => {
          return (
            <MedItem
              key={med.title}
              title={med.title}
              description={med.description}
              nextHours={med.nextHours}
            />
          );
        })} */}
    </div>
  );
};

export default Home;
