const Reducer=(state,action)=>{
    // if(action.type==='INC'){
    //     state=state+1;

    // }
    // if(action.type==='DEC'){
    //     if(state===0){
    //         state=0;
    //     }else{
    //         state=state-1;

    //     }  
    // }
    // return state;

    switch (action.type){
        case "INC":
            return state+1;
        case "DEC":
            return (state===0?0:state-1);
        default:
            return state;
    }

}
export default Reducer;