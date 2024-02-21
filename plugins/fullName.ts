export default defineNuxtPlugin((nuxtApp)=>{
    nuxtApp.fullName=(name1:string,name2:string)=>{
        return name1+" "+name2;
    }
})