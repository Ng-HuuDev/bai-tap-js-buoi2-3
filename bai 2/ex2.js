function tinhTrungBinh() {
  soT1Tag = document.getElementById("sothuc1");
  // console.log("🚀 ~ tinhTrungBinh ~ soT1Tag:", sothuc1.value);

  soT2Tag = document.getElementById("sothuc2");
  soT3Tag = document.getElementById("sothuc3");
  soT4Tag = document.getElementById("sothuc4");
  soT5Tag = document.getElementById("sothuc5");

  // tinh trung binh
  var soTrungBinhTag =
    sothuc1.value / 5 +
    sothuc2.value / 5 +
    sothuc3.value / 5 +
    sothuc4.value / 5 +
    sothuc5.value / 5;

  // var soTrungBinhTag = soT1Tag + soT2Tag + soT3Tag + soT4Tag + soT5Tag;
  console.log(soTrungBinhTag);
  //   Xuat trung binh tren man hinh

  document.getElementById(
    "result"
  ).innerHTML = `<h2 class="bg-info fs-1 text-danger fs-3 mt-3 p-2
  "> Gia Tri Trung Binh: ${soTrungBinhTag} </h2>`;
}
