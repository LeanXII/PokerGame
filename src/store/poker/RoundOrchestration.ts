import ActionHandlers from "./ActionHandlers"




const RoundOrchestration = () => {


  const {handlePaySmallBlind, handlePayBigBlind} = ActionHandlers();



  const handleRoundStart =  () => {

    setTimeout(()=> {

      handlePaySmallBlind()
    },1000)

    setTimeout(()=> {

      handlePayBigBlind()
    }, 2000)





  }
  return {handleRoundStart}
}

export default RoundOrchestration;