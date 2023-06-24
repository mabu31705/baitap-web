// tạo file trên localstorage (bộ nhớ tạm)
// mô phỏng cơ sở dữ liệu
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


<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 96fed53e8e90ef231b7eab26548af8850af47b13
=======
>>>>>>> bd76ae79c7d3a163ff4f015d501c10575fa2ac6f
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
