// tạo file trên localstorage (bộ nhớ tạm)
getDataFromJson = () => {
    fetch("../data/thuan.json")
        .then(res => res.json())
        .then(data => {
            let dataFromJson = data;
            localStorage.setItem("images", JSON.stringify(dataFromJson));
        })
        .catch(err => {
            console.error("error get data from json" + err);
        });
}
getDataFromJson();

// vòng lặp lấy dữ liệu từ localstorage về và in ra html
getListCV = () => {
    let listCV = document.getElementById("cvList");
    let listImage2 = localStorage.getItem("images");
    let htmlContent = '';
    let listImage = JSON.parse(listImage2);

    for (let i = 0; i < listImage.length; i++) {
        htmlContent += ' <div class="cv-content-width col-md-4 col-sm-6 row cv-p-20">\n' +
            '                       <a href="#" class="cv-a"> ' +
            '                           <div class="cv-bg-2 ">\n' +
            '                               <div>\n' +
            '                                   <img src="../images/' + listImage[i].image + '" alt="" class="cv-image-content">\n' +
            '                               </div>\n' +
            '                               <div class="d-flex justify-content-center">\n' +
            '                                   <h5 class="cv-content-title">' + listImage[i].title + '</h5>\n' +
            '                               </div>\n' +
            '                            </div> \n' +
            '                        </a>\n' +
            '                    </div>';
    }
    listCV.innerHTML = htmlContent;
}
document.addEventListener("DOMContentLoaded", getListCV);
