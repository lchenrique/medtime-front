import { MedItem } from "@/components/MedItem";
// export const runtime = "edge";

export interface IHomeProps {}
const getData = async () => {
  const data = await fetch(
    `${process.env.BASE_URL}/api/medicines`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );

  return data.json();
};
const Home = async (props: IHomeProps) => {
  const { data } = await getData();

  return (
    <div className="flex flex-col gap-3 w-full">
      {data.map((med: any) => {
        return (
          <MedItem
            key={med.title}
            title={med.title}
            description={med.description}
            nextHours={med.nextHours}
          />
        );
      })}
    </div>
  );
};

export default Home;
