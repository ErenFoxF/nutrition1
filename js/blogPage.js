const blogs=[
    {'id':1,
    "section":'camera',
    'img': '../img/brownie.jpeg',
    'title': "HOW HEALTHY ARE PROTEIN BARS?",
    'content':"Although fresh food first is our motto, shelf-stable and portable protein bars can make hitting your daily nutritional needs much easier, especially if you have a busy lifestyle. So just how healthy are protein bars?",
    'mainText': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates laboriosam ab dolorum, ipsam perferendis harum eligendi rem modi voluptatem ipsum praesentium accusantium animi atque. Debitis, tempore vel fugit modi voluptate, nisi suscipit omnis pariatur earum laborum cupiditate reiciendis nam repudiandae ipsum, accusamus nobis nesciunt beatae! Autem repudiandae voluptatum ex possimus itaque quos vitae ullam tempora dolores, sit eveniet, fugiat corporis. Saepe nisi vero incidunt ipsa quibusdam fugit! Magni praesentium perferendis quos incidunt sequi, quidem laudantium iure dolorum repellendus quis ullam aperiam. Ut ratione distinctio vero nesciunt quibusdam harum inventore, eaque deserunt dolorum soluta esse officiis doloremque autem! Est, perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates laboriosam ab dolorum, ipsam perferendis harum eligendi rem modi voluptatem ipsum praesentium accusantium animi atque. Debitis, tempore vel fugit modi voluptate, nisi suscipit omnis pariatur earum laborum cupiditate reiciendis nam repudiandae ipsum, accusamus nobis nesciunt beatae! Autem repudiandae voluptatum ex possimus itaque quos vitae ullam tempora dolores, sit eveniet, fugiat corporis. Saepe nisi vero incidunt ipsa quibusdam fugit! Magni praesentium perferendis quos incidunt sequi, quidem laudantium iure dolorum repellendus quis ullam aperiam. Ut ratione distinctio vero nesciunt quibusdam harum inventore, eaque deserunt dolorum soluta esse officiis doloremque autem! Est, perferendis?"
    },
    {
        'id':2,
        "section":'shoe',
        'img': '../img/steroids.jpeg',
        'title': "A DIETITIAN'S TAKE ON WEIGHT LOSS MEDICATIONS",
        'content':"A lot has changed over the past year regarding the weight loss injection trend. What used to be taboo is now ostensibly as common as taking a multivitamin. Here is a dietitian’s take on weight loss medication.",
        'mainText': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates laboriosam ab dolorum, ipsam perferendis harum eligendi rem modi voluptatem ipsum praesentium accusantium animi atque. Debitis, tempore vel fugit modi voluptate, nisi suscipit omnis pariatur earum laborum cupiditate reiciendis nam repudiandae ipsum, accusamus nobis nesciunt beatae! Autem repudiandae voluptatum ex possimus itaque quos vitae ullam tempora dolores, sit eveniet, fugiat corporis. Saepe nisi vero incidunt ipsa quibusdam fugit! Magni praesentium perferendis quos incidunt sequi, quidem laudantium iure dolorum repellendus quis ullam aperiam. Ut ratione distinctio vero nesciunt quibusdam harum inventore, eaque deserunt dolorum soluta esse officiis doloremque autem! Est, perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates laboriosam ab dolorum, ipsam perferendis harum eligendi rem modi voluptatem ipsum praesentium accusantium animi atque. Debitis, tempore vel fugit modi voluptate, nisi suscipit omnis pariatur earum laborum cupiditate reiciendis nam repudiandae ipsum, accusamus nobis nesciunt beatae! Autem repudiandae voluptatum ex possimus itaque quos vitae ullam tempora dolores, sit eveniet, fugiat corporis. Saepe nisi vero incidunt ipsa quibusdam fugit! Magni praesentium perferendis quos incidunt sequi, quidem laudantium iure dolorum repellendus quis ullam aperiam. Ut ratione distinctio vero nesciunt quibusdam harum inventore, eaque deserunt dolorum soluta esse officiis doloremque autem! Est, perferendis?"

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

const blog = blogs[localStorage.getItem("id")-1];
console.log(blog);

document.getElementById("head").innerHTML = 
`
<div style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${blog.img}') no-repeat;  background-size: cover;  background-position: center;" class="bcg">
<h3>White rabbit</h3>
<h2>Blog </h2>
<h2 class="blogTitle">${blog.title}</h2>
</div>
`;
document.getElementById("mainText").innerHTML = 
`
<p class="content">${blog.mainText}</p> 
`;
{/* <img class="img" src="${blog.img}" alt=""></img> */}
