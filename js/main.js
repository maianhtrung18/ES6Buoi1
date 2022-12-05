const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermilion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];


let generateColor = () => {
    let content = '';
    const colorHtml = colorList.map((color) => {
        return `
        <button class="color-button ${color}"></button>
        `
    });
    content = colorHtml.join("");
    document.getElementById("selectColor").innerHTML = content;
}

generateColor();

let addClickEvent = () => {
    let elements = document.querySelectorAll(".color-button");
    for (const element of elements) {
        element.addEventListener("click", function (element) {


            let newClass = element.target.className.replace("color-button ", "");
            document.querySelector("#house").className = newClass;

        })
    };
}
addClickEvent();


let tinhDiem = (...diem) => {
    let s = 0;
    for (const diemMonHoc of diem) {
        if (diemMonHoc < 0 | diemMonHoc > 10) {
            return "Nhập sai điểm";
        }
        s += diemMonHoc;
    }

    let diemTrungBinh = s / diem.length;
    return diemTrungBinh;
}

let tinh1 = () => {
    let toan1 = document.getElementById("toan1").value;
    let ly1 = document.getElementById("ly1").value;
    let hoa1 = document.getElementById("hoa1").value;

    if (toan1 === "" | ly1 === "" | hoa1 === "") {
        document.getElementById("kq1").value = "Hãy nhập điểm";
    }
    else {
        toan1 = Number(toan1);
        ly1 = Number(ly1);
        hoa1 = Number(hoa1);

        let diemTB1 = tinhDiem(toan1, ly1, hoa1);
        document.getElementById("kq1").value = diemTB1;
    }


}

let tinh2 = () => {
    let toan2 = document.getElementById("toan2").value;
    let ly2 = document.getElementById("ly2").value;
    let hoa2 = document.getElementById("hoa2").value;
    let english2 = document.getElementById("english").value;

    if (toan2 === "" | ly2 === "" | hoa2 === "" | english2 === "") {
        document.getElementById("kq2").value = "Hãy nhập điểm";
    }
    else {
        toan2 = Number(toan2);
        ly2 = Number(ly2);
        hoa2 = Number(hoa2);
        english2 = Number(english2)

        let diemTB2 = tinhDiem(toan2, ly2, hoa2, english2);
        document.getElementById("kq2").value = diemTB2;
    }


}

document.getElementById("tinh1").onclick = tinh1;
document.getElementById("tinh2").onclick = tinh2;

let hover = () => {
    let str = document.querySelector(".heading").innerHTML;
    let chars = [...str];
    let letters = chars.map((char) =>{
        return `<span>${char}</span>`
    });
    let content = letters.join("");
    document.querySelector(".heading").innerHTML = content;
}
hover();



