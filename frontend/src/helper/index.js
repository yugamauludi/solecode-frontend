export function getDate(datetime) {
    const dateObj = new Date(datetime);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
  
    return `${year}-${month}-${date}`;
}
  
export function getTime(datetime) {
    const dateObj = new Date(datetime);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');  
   
    return `${hours}:${minutes}`;
}
  
//   const datetime = "2021-08-17T13:10";
//   const date = getDate(datetime);
//   const time = getTime(datetime);
  
//   console.log(`Date: ${date}`);
//   console.log(`Time: ${time}`);