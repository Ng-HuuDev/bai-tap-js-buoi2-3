function tinhTien() {
  var tien1hTag = document.getElementById("tienluong1h");
  var soGioTag = document.getElementById("sogiolam");
  var soTienLuong = tienluong1h.value * sogiolam.value;
  console.log(soTienLuong);
  document.getElementById(
    "result"
  ).innerHTML = `<h2 class="text-danger bg-info p-3 mt-3"> Số tiền nhận: ${soTienLuong}USD </h2>`;
}
