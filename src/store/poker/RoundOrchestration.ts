import ActionHandlers from "./ActionHandlers"
import { usePoker } from "./Reducer";



const RoundOrchestration = () => {

  const {dispatch} = usePoker();
  const {handlePaySmallBlind, handlePayBigBlind} = ActionHandlers();



  const handleRoundStart = async () => {


     await handlePaySmallBlind(dispatch)





       await handlePayBigBlind(dispatch)

    



  }
  return {handleRoundStart}
}

export default RoundOrchestration;