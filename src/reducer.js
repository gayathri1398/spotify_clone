export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:"BQAEV23P5vgByCg0_H2VkkjbdhytgqN4yvtR-4sQY-vA_3Ak-qFRwpb_8GmDa619DX40fbcNn2Z_xyp5MfYNuc1ptVVpaSIjnmLhu1A-IosRG0kRyKjIPxiRyX_imimG-V2Tays_9M9Wri-aIrc5xiERqD_TP4UOCbRerYGK5NA"
};

// Action => type,payload

const reducer =(state,action)=>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case "SET_TOKEN":
            return{
                ...state,
                token:action.token
            }
        case "SET_PLAYLIST":
            return {
                ...state,
                playlists:action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }
            default:
                return state
    }
};

export default reducer;