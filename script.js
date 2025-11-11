"use strict";

//Chức năng ẩn thông tin cá nhân
const thongtincn1 = document.querySelector(".thongtincn1");
const thongtincn2 = document.querySelector(".thongtincn2");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

thongtincn1.style.display = "none";
thongtincn2.style.display = "block";

submitBtn.addEventListener("click", function () {
  const email = emailInput.value.trim(); // Lấy giá trị của ô input

  if (regex.test(email)) {
    // Nếu email hợp lệ, ẩn thongtincn2 và hiển thị thongtincn1
    thongtincn2.style.display = "none";
    thongtincn1.style.display = "block";
  } else {
    // Nếu email không hợp lệ, hiển thị thông báo lỗi
    alert("Vui lòng nhập email hợp lệ.");
  }
});

//Chức năng ẩn thông tin nghề nghiệp
const kinhnghiem2 = document.querySelector(".kinhnghiem2");
const kinhnghiem = document.querySelector(".kinhnghiem");
const hocvan2 = document.querySelector(".hocvan2");
const hocvan = document.querySelector(".hocvan");
const hoatdong2 = document.querySelector(".hoatdong2");
const hoatdong = document.querySelector(".hoatdong");
const sothich2 = document.querySelector(".sothich2");
const sothich = document.querySelector(".sothich");
const ngonngu2 = document.querySelector(".ngonngu2");
const ngonngu = document.querySelector(".ngonngu");
const kynang2 = document.querySelector(".kynang2");
const kynang = document.querySelector(".kynang");

const wiewmorebtnkinhnghiem = document.querySelector(
  ".view-more-btn-kinhnghiem"
);
const wiewmorebtnhocvan = document.querySelector(".view-more-btn-hocvan");
const wiewmorebtnhoatdong = document.querySelector(".view-more-btn-hoatdong");
const wiewmorebtnsothich = document.querySelector(".view-more-btn-sothich");
const wiewmorebtnngonngu = document.querySelector(".view-more-btn-ngonngu");
const wiewmorebtnkynang = document.querySelector(".view-more-btn-kynang");

const wiewlessbtnkinhnghiem = document.querySelector(
  ".view-less-btn-kinhnghiem"
);
const wiewlessbtnhocvan = document.querySelector(".view-less-btn-hocvan");
const wiewlessbtnhoatdong = document.querySelector(".view-less-btn-hoatdong");
const wiewlessbtnsothich = document.querySelector(".view-less-btn-sothich");
const wiewlessbtnngonngu = document.querySelector(".view-less-btn-ngonngu");
const wiewlessbtnkynang = document.querySelector(".view-less-btn-kynang");

kinhnghiem2.style.display = "none";
hocvan2.style.display = "none";
hoatdong2.style.display = "none";
sothich2.style.display = "none";
ngonngu2.style.display = "none";
kynang2.style.display = "none";

wiewlessbtnkinhnghiem.style.display = "none";
wiewlessbtnhocvan.style.display = "none";
wiewlessbtnhoatdong.style.display = "none";
wiewlessbtnsothich.style.display = "none";
wiewlessbtnngonngu.style.display = "none";
wiewlessbtnkynang.style.display = "none";

kinhnghiem.addEventListener("mouseenter", function () {
  if (kinhnghiem2.style.display === "none") {
    wiewmorebtnkinhnghiem.style.display = "block";
  } else {
    wiewlessbtnkinhnghiem.style.display = "block";
  }
});

kinhnghiem.addEventListener("mouseleave", function () {
  wiewmorebtnkinhnghiem.style.display = "none";
  wiewlessbtnkinhnghiem.style.display = "none";
});

wiewmorebtnkinhnghiem.addEventListener("click", function () {
  kinhnghiem2.style.display = "block";
  wiewmorebtnkinhnghiem.style.display = "none";
  wiewlessbtnkinhnghiem.style.display = "block";
});

wiewlessbtnkinhnghiem.addEventListener("click", function () {
  kinhnghiem2.style.display = "none";
  wiewlessbtnkinhnghiem.style.display = "none";
  wiewmorebtnkinhnghiem.style.display = "block";
});

hoatdong.addEventListener("mouseenter", function () {
  if (hoatdong2.style.display === "none") {
    wiewmorebtnhoatdong.style.display = "block";
  } else {
    wiewlessbtnhoatdong.style.display = "block";
  }
});

hoatdong.addEventListener("mouseleave", function () {
  wiewmorebtnhoatdong.style.display = "none";
  wiewlessbtnhoatdong.style.display = "none";
});

wiewmorebtnhoatdong.addEventListener("click", function () {
  hoatdong2.style.display = "block";
  wiewmorebtnhoatdong.style.display = "none";
  wiewlessbtnhoatdong.style.display = "block";
});

wiewlessbtnhoatdong.addEventListener("click", function () {
  hoatdong2.style.display = "none";
  wiewlessbtnhoatdong.style.display = "none";
  wiewmorebtnhoatdong.style.display = "block";
});

hocvan.addEventListener("mouseenter", function () {
  if (hocvan2.style.display === "none") {
    wiewmorebtnhocvan.style.display = "block";
  } else {
    wiewlessbtnhocvan.style.display = "block";
  }
});

hocvan.addEventListener("mouseleave", function () {
  wiewmorebtnhocvan.style.display = "none";
  wiewlessbtnhocvan.style.display = "none";
});

wiewmorebtnhocvan.addEventListener("click", function () {
  hocvan2.style.display = "block";
  wiewmorebtnhocvan.style.display = "none";
  wiewlessbtnhocvan.style.display = "block";
});

wiewlessbtnhocvan.addEventListener("click", function () {
  hocvan2.style.display = "none";
  wiewlessbtnhocvan.style.display = "none";
  wiewmorebtnhocvan.style.display = "block";
});

kynang.addEventListener("mouseenter", function () {
  if (kynang2.style.display === "none") {
    wiewmorebtnkynang.style.display = "block";
  } else {
    wiewlessbtnkynang.style.display = "block";
  }
});

kynang.addEventListener("mouseleave", function () {
  wiewmorebtnkynang.style.display = "none";
  wiewlessbtnkynang.style.display = "none";
});

wiewmorebtnkynang.addEventListener("click", function () {
  kynang2.style.display = "block";
  wiewmorebtnkynang.style.display = "none";
  wiewlessbtnkynang.style.display = "block";
});

wiewlessbtnkynang.addEventListener("click", function () {
  kynang2.style.display = "none";
  wiewlessbtnkynang.style.display = "none";
  wiewmorebtnkynang.style.display = "block";
});

ngonngu.addEventListener("mouseenter", function () {
  if (ngonngu2.style.display === "none") {
    wiewmorebtnngonngu.style.display = "block";
  } else {
    wiewlessbtnngonngu.style.display = "block";
  }
});

ngonngu.addEventListener("mouseleave", function () {
  wiewmorebtnngonngu.style.display = "none";
  wiewlessbtnngonngu.style.display = "none";
});

wiewmorebtnngonngu.addEventListener("click", function () {
  ngonngu2.style.display = "block";
  wiewmorebtnngonngu.style.display = "none";
  wiewlessbtnngonngu.style.display = "block";
});

wiewlessbtnngonngu.addEventListener("click", function () {
  ngonngu2.style.display = "none";
  wiewlessbtnngonngu.style.display = "none";
  wiewmorebtnngonngu.style.display = "block";
});

sothich.addEventListener("mouseenter", function () {
  if (sothich2.style.display === "none") {
    wiewmorebtnsothich.style.display = "block";
  } else {
    wiewlessbtnsothich.style.display = "block";
  }
});

sothich.addEventListener("mouseleave", function () {
  wiewmorebtnsothich.style.display = "none";
  wiewlessbtnsothich.style.display = "none";
});

wiewmorebtnsothich.addEventListener("click", function () {
  sothich2.style.display = "block";
  wiewmorebtnsothich.style.display = "none";
  wiewlessbtnsothich.style.display = "block";
});

wiewlessbtnsothich.addEventListener("click", function () {
  sothich2.style.display = "none";
  wiewlessbtnsothich.style.display = "none";
  wiewmorebtnsothich.style.display = "block";
});
