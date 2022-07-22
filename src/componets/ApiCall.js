const apiKey = "AIzaSyCwkzge8d2YRf3a1hq2TWrzjCLn5rIkJE4";
const cxKey = "c24df3559b293a859";

const apiCalled = () =>{
  axios.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cxKey}&q=${data}`)
  .then(res=>{
   console.log(res)

  }).catch(error=>{
    console.log('code is in error',error)
  })
}