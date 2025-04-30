export const setAuthenticatedUser=(data)=>{
    //save object to the local storage
    //stringify object to text
    localStorage.setItem('user',JSON. stringify(data));
};
export const getAuthenticatedUser=(data)=>{
   if(localStorage.get('user')){
    return JSON.parse(localStorage.getItem('user'));
   }
};


export const removeAuthUser=()=>{
    if(localStorage.get('user'))
    localStorage.removeItem('user')
};

