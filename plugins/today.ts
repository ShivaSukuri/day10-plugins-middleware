export default defineNuxtPlugin((nuxtAPp)=>{
    return {
        provide:{
            todate:()=>{
                const date=new Date();
                return date;
            },
            hello:(message:string)=>{
                return `hello ${message}`
            }
        }
    }
})