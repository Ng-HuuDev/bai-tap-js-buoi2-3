function doiTien() {
  //   console.log("doi tien");
  var soUsdTag = document.getElementById("sousd");
  //   goi bien va quy doi tien
  var doiTienTag = sousd.value * 23500;
  console.log(doiTienTag);

  //   Xuat ra man hinh so tien da quy doi

  document.getElementById(
    "result"
  ).innerHTML = `<h2 class="fs-3 fw-bold mt-3 bg-info p-4 text-light"> Số tiền nhận được: ${doiTienTag}đ </h2>`;
}
