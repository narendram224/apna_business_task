export const isoDateConverter = (isoData)=>{
    let date = new Date(isoData);
let year = date.getFullYear();
let month = date.getMonth()+1;
let dt = date.getDate();

if (dt < 10) {
  dt = '0' + dt;
}
if (month < 10) {
  month = '0' + month;
}
const converteddate =`${dt}-${month}-${year}`
console.log(year+'-' + month + '-'+dt);
return converteddate;
}