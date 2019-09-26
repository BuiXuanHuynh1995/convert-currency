function chuyenDoi() {
    let tien = document.getElementById("nhapTien").value;
    let cv1 = document.getElementById("convert1").value;
    let cv2 = document.getElementById("convert2").value;
    let thanhTien = (tien * cv1) / cv2
    document.getElementById("chuyenTien").value = thanhTien;
}