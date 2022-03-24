function ajaxGET(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            //console.log('responseText:' + xhr.responseText);
            callback(this.responseText);

        } else {
            console.log(this.status);
        }
    }
    xhr.open("GET", url);
    xhr.send();
}



function buttonPath(i) {
    if (i ==0){
        return "/data/rocksongtable";
    }
    if(i==1){
        return "/data/table";
    }
    if (i == 2) {
        return "/data/jazztable";
    }
    else{
        return "/data/hiphoptable";
    }
   
    
}

ajaxGET("/data/info", (response) => {
    let doc = document.getElementById("cardHolder");
    let parsedData = JSON.parse(response);

    for (let i = 0; i < parsedData.length; i++) {
        let title1 = parsedData[i].Title;
        let img1 = parsedData[i].src;
        let info = parsedData[i].info;

        // let buttonNumber = 1;

        let imgg = document.createElement("img")
        imgg.setAttribute("src", img1)
        imgg.className = "musicImage"


        let div1 = document.createElement("div")
        div1.className = "card"

        let h1 = document.createElement('h2')
        h1.className = "cardHeading";
        h1.innerText = title1;

        let button1 = document.createElement("button")
        button1.className = "moreButton";
        button1.innerHTML = "More";
        button1.addEventListener("click",() => {
            ajaxGET(buttonPath(i), (response) => {
                let doc = document.getElementById("tablePlaceHolder");
                doc.innerHTML = response;
            });
            console.log("button works");
        })

        let p1 = document.createElement("p");
        p1.className = "content";
        p1.innerText = info;

        div1.appendChild(imgg);
        div1.appendChild(h1);
        div1.appendChild(p1);
        div1.appendChild(button1);
        doc.appendChild(div1);
    }
});

ajaxGET("/data/homeimg", (response) => {
    let doc = document.getElementById("tablePlaceHolder");
    doc.innerHTML = response;
});

let homebutton = document.getElementById("nav1");
homebutton.addEventListener("click", () => {
    ajaxGET("/data/homeimg", (response) => {
        let doc = document.getElementById("tablePlaceHolder");
        doc.innerHTML = response;
    });
})

