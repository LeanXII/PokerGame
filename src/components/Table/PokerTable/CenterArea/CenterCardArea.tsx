import Card from "../../Card/Card";
import Pot from './Pot/Pot'
export default function CardArea() {
  return (
    <div className="relative flex justify-center items-center w-[650px] h-[220px] border border-white rounded-full">
      <div className = "absolute left-[90px]">
        <Pot />
      </div>
      <div className = "absolute right-10">
        <Card card = {"https://deckofcardsapi.com/static/img/back.png"}/>
      </div>
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
