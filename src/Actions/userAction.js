// login user
export const getUser=(user)=>{
    return{
        type:"VIEW_USER",
        payload:user
    }
}