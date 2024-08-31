const blogs=[
    {'id':1,
    "section":'camera',
    'img': '../img/brownie.jpeg',
    'title': "HOW HEALTHY ARE PROTEIN BARS?",
    'content':"Although fresh food first is our motto, shelf-stable and portable protein bars can make hitting your daily nutritional needs much easier, especially if you have a busy lifestyle. So just how healthy are protein bars?"
    
    },
    {
        'id':2,
        "section":'shoe',
        'img': '../img/steroids.jpeg',
        'title': "A DIETITIAN'S TAKE ON WEIGHT LOSS MEDICATIONS",
        'content':"A lot has changed over the past year regarding the weight loss injection trend. What used to be taboo is now ostensibly as common as taking a multivitamin. Here is a dietitian’s take on weight loss medication."
    },
    {
        'id':3,
        "section":'headphone',
        'img': '../img/coctail.jpeg',
        'title': "5 NUTRITION MUSTS FOR A HEALTHY & SEXY SUMMER SEASON",
        'content':"We are redefining “summer bodies” to mean self-nourishment versus self-image. Afterall, who feels sexy and confident when they’re dehydrated, malnourished and just plain exhausted? Read on to learn the top must-haves for a healthy and sexy summer season."
    },
    {'id':4,
    "section":'camera',
    'img': '../img/brownie.jpeg',
    'title': "HOW HEALTHY ARE PROTEIN BARS?",
    'content':"Although fresh food first is our motto, shelf-stable and portable protein bars can make hitting your daily nutritional needs much easier, especially if you have a busy lifestyle. So just how healthy are protein bars?"
    
    },
    {
        'id':5,
        "section":'shoe',
        'img': '../img/steroids.jpeg',
        'title': "A DIETITIAN'S TAKE ON WEIGHT LOSS MEDICATIONS",
        'content':"A lot has changed over the past year regarding the weight loss injection trend. What used to be taboo is now ostensibly as common as taking a multivitamin. Here is a dietitian’s take on weight loss medication."
    },
    {
        'id':6,
        "section":'headphone',
        'img': '../img/coctail.jpeg',
        'title': "5 NUTRITION MUSTS FOR A HEALTHY & SEXY SUMMER SEASON",
        'content':"We are redefining “summer bodies” to mean self-nourishment versus self-image. Afterall, who feels sexy and confident when they’re dehydrated, malnourished and just plain exhausted? Read on to learn the top must-haves for a healthy and sexy summer season."
    }
]   
const search = document.getElementById("searchInput");
const searchBtn = document.getElementById("setsearch");


searchBtn.addEventListener("click", () => {
    let searchedBlogs = [];
    blogs.forEach(blog =>{
        if(blog.title.includes((search.value).toUpperCase()) && (search.value).length > 2){
            searchedBlogs.push(blog);
        }
    })
    localStorage.setItem("blogs", JSON.stringify(searchedBlogs));
    // window.location.href = "../html/searchedBlogs.html";
    window.location.href = "../html/searchedBlogs.html";



})


search.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchBtn.click();
    }
  });



function goToBlogPage(id){

window.location.href = "../html/blogPage.html";
localStorage.setItem("id",id)
}

const filterCOntainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");
let rows =''; 
    blogs.forEach(blog =>{
    rows += `<div class="gallery-item" } ">
    <div href="#" onclick="goToBlogPage(${blog.id})" class="gallery-item-inner">
        <img class="imgBlog" src="${blog.img}" alt="shoe">
        <h3>${blog.title}</h3>
        <p>${blog.content}</p>
    </div>
    </div>`
    document.getElementById("datass").innerHTML = rows; 
});
    


filterCOntainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter-item")){
        filterCOntainer.querySelector('.active').classList.remove("active");
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        let rows =''; 
        if (filterValue !=="all"){
              const filterBlogs = blogs.filter(isRightSection);
        function isRightSection(element){
            return element.section === filterValue
        } 
        filterBlogs.forEach(blog =>{
            rows += `<div class="gallery-item" } ">
            <div onclick="goToBlogPage(${blog.id})"  class="gallery-item-inner">
                <img class="imgBlog" src="${blog.img}" alt="shoe">
                <h3>${blog.title}</h3>
                <p>${blog.content}</p>
            </div>
            </div>`});

            
        }else{
        blogs.forEach(blog =>{
            rows += `<div class="gallery-item" } ">
            <div onclick="goToBlogPage(${blog.id})"  class="gallery-item-inner">
                <img class="imgBlog" src="${blog.img}" alt="shoe">
                <h3>${blog.title}</h3>
                <p>${blog.content}</p>
            </div>
            </div>`
        });

        }
        document.getElementById("datass").innerHTML = rows; 
    }
})




// const a = blogs.map(item => item.section === 'shoe')


        
// filterCOntainer.addEventListener("click", (event) =>{
//     if(event.target.classList.contains("filter-item")){
//         filterCOntainer.querySelector('.active').classList.remove("active");
//         event.target.classList.add("active");
//         const filterValue = event.target.getAttribute("data-filter");
//         galleryItems.forEach((item) =>{
//            if(item.classList.contains(filterValue) || filterValue === 'all' ){
//             item.classList.remove("hide")
//             item.classList.add("show");
//            }else{
//             item.classList.remove("show")
//             item.classList.add("hide");
//            }
//         })
//     }
// })




  