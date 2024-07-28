function tinhTien() {
  var tien1hTag = document.getElementById("tienluong1h");
  var sogioTag = document.getElementById("sogiolam");
  var sotienluong = tienluong1h.value * sogiolam.value;
  console.log(sotienluong);
  document.getElementById("result").innerHTML = `Số Tiền Lương: ${sotienluong}`;
}
