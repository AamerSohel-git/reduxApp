export const formatedResult = (arr) => {
    const res = arr.map((ele)=>{return{...ele, quantity: 0}})
    return res
}