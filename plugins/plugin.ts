export default defineNuxtPlugin((nuxtApp)=>{
    let evenNumbers: number[]=[];
    nuxtApp.even=(maxNumber: number)=>{
        for(let i=0;i<=maxNumber;i++){
            if(i%2===0){
                evenNumbers.push(i);
            }
        }
        return evenNumbers;
    }
    nuxtApp.arrayList=(list:number[])=>{
        return list;
    }
})