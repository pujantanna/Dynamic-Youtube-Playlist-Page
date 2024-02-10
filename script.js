// function createCard(title, c_name, views, months, duration, thumbnail){

//     let e1 = document.querySelector(".text").firstElementChild
//     e1.replaceChildren(title)

//     let e2 = document.querySelector(".text").children[1].firstElementChild.replaceChildren(c_name)

//     let e3 = document.querySelector(".text").children[1].firstElementChild
//     e3.nextElementSibling.nextElementSibling.firstChild.replaceChildren(views)


// }

function createCard(title, c_name, views, months, duration, thumbnail){

    let real_views
    let html
    let pattern = /^\d{2}:\d{2}:\d{2}$/;
    if(views<1000){

        real_views = views
    }
    else if(views>1000000){

        real_views = views/1000000 + "M"
    }
    else{

        real_views = views/1000 + "K"
    }

    if(pattern.test(duration)){
     html = `<div class="container">
    <div class="card">
        <div class="image">
            <span style="padding-right: 1em;">${duration}</span>
            <img src="${thumbnail}" alt="">
        </div>

        <div class="text">
            <span>${title}</span>
            <ul>
                <li>${c_name}</li>
                <li>•</li>
                <li><span>${real_views}</span> views</li>
                <li>•</li>
                <li><span>${months}</span> months ago</li>
            </ul>
        </div>
    </div>
</div>`;
    }
    else{

        html = `<div class="container">
    <div class="card">
        <div class="image">
            <span>${duration}</span>
            <img src="${thumbnail}" alt="">
        </div>

        <div class="text">
            <span>${title}</span>
            <ul>
                <li>${c_name}</li>
                <li>•</li>
                <li><span>${real_views}</span> views</li>
                <li>•</li>
                <li><span>${months}</span> months ago</li>
            </ul>
        </div>
    </div>
</div>`;
    }

    document.querySelector("body").lastElementChild.insertAdjacentHTML("beforebegin",html)
}

for (let index = 0; index <= 5; index++) {

createCard("JavaScript Full Course (2024) - Beginners to Pro", "Shradha Khapra", 5000000, 10, "19:04:00", "https://i.ytimg.com/vi/ajdRvxDWH4w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDHZkl1toTFHBY8cD7PLeg9Jxd5oA");


createCard("JavaScript Full Course (2024) - Beginners to Pro", "Shradha Khapra", 5000000, 10, "19:04", "https://i.ytimg.com/vi/ajdRvxDWH4w/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDHZkl1toTFHBY8cD7PLeg9Jxd5oA");


createCard("30 Days, 30 JavaScript Projects For Beginners to Practice #javascriptproject", "GreatStack", 650000, 3, "09:51", "https://i.ytimg.com/vi/MIYQR-Ybrn4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB3Pf05THtpElWtJgQfrL_b4Wj_0w");

}








