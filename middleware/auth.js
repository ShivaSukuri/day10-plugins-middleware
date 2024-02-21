export default defineNuxtRouteMiddleware((to,from)=>{
    const status=logInStatus();
    console.log(to.path)
    if(status.value===false && to.path!=="/login"){
        return navigateTo("/login")
    }
    else if(status.value===true && to.path==="/login"){
        return navigateTo("/home");
    }
   
})