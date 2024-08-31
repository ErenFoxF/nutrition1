
const blogs = JSON.parse(localStorage.getItem("blogs"));
let rows =''; 

if(blogs.length >= 1){
    blogs.forEach(blog =>{
    rows += `
    <div onclick="navigate(${blog.id})"  class="blog">
    <img src="${blog.img}" alt="img">
    <div class="blogContent">
        <h2 class="title">${blog.title}</h2>
        <p class="content">${blog.content}</p>
    </div>
    </div>`
    document.querySelector(".main").innerHTML = rows; 
   
   
});
} else{
   document.querySelector(".main").innerHTML = "Not found"; 
}
   

function navigate(id){
    window.location.href = "../html/blogPage.html";
    localStorage.setItem("id",id)
}