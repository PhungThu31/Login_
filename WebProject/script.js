const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
// saving Hoa
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
// tính lãi suất Hoa
document.getElementById('calculate').addEventListener('click', function () {
    // Lấy số tiền gửi từ input
    const principal = parseFloat(document.getElementById('principal').value);

    // Lấy gói lãi suất được chọn
    const selectedPackage = document.querySelector('input[name="package"]:checked');

    // Kiểm tra số tiền gửi hợp lệ
    if (isNaN(principal) || principal <= 0) {
        alert("Vui lòng nhập số tiền gửi hợp lệ!");
        return;
    }

    if (!selectedPackage) {
        alert("Vui lòng chọn gói tiết kiệm!");
        return;
    }

    // Lấy giá trị lãi suất và thời hạn
    const rate = parseFloat(selectedPackage.value);
    const durationText = selectedPackage.nextSibling.textContent.trim();

    // Tìm số tháng dựa trên nội dung gói
    let durationInMonths = 1; // Default
    if (durationText.includes('3 tháng')) durationInMonths = 3;
    if (durationText.includes('6 tháng')) durationInMonths = 6;
    if (durationText.includes('9 tháng')) durationInMonths = 9;
    if (durationText.includes('12 tháng')) durationInMonths = 12;

    // Tính lợi nhuận
    const interest = (principal * (rate / 100)) * (durationInMonths / 12);

    // Hiển thị kết quả
    document.getElementById('interest').innerText = interest.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});
