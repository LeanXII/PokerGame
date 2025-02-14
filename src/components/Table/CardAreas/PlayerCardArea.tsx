import { type PlayerCardArea } from "@/store/types/storeTypes";
import Card from "../Card/Card";
import { clsx } from "ts-clsx";

export default function PlayerCardArea({ horizontal }: PlayerCardArea) {
  return (
    <div className={clsx("flex justify-evenly items-center space-x-1 h-20", {"flex-col space-x-0 space-y-1": horizontal})}>
      {horizontal ? (
        <>
          <Card horizontal={true} />
          <Card horizontal={true} />
        </>
      ) : (
        <>
          <Card />
          <Card />
        </>
      )}
    </div>
  );
}
