import Card from "../Card/Card";

export default function CardArea() {
  return (
    <div className="flex justify-center items-center w-[650px] h-[220px] border border-white rounded-full">
      <div className="flex justify-evenly w-[300px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
