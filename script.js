
const dogImg=document.getElementById("dog-img");
const refreshBtn=document.getElementById("refresh-btn");
//https://dog.ceo/api/breeds/image/random
const refresh=()=>{fetch('https://dog.ceo/api/breeds/image/random')
  .then(response =>response.json())
.then(json => {
dogImg.innerHTML=`<img src="${json.message}" height="200" width="200"/>`
});}
refreshBtn.onclick=() => refresh();

