let content;
const mainItems = document.getElementById("mainItems");
function newService(name,loaction,phone,email) {
    content = 
    `
        <!-- start -->
        <div class="main__items--item">
            <div class="item__name">${name}</div>
            <div class="item__location">${loaction}</div>
            <div class="item__contact">
                <div class="item__contect--phone">
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:+${phone}">${phone}</a>
                </div>
                <div class="item__contect--email">
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:${email}@gmail.com">${email}@gmail.com</a>
                </div>
            </div>
        </div>
        <!-- end -->
    `
    mainItems.innerHTML += content;
}
newService(
    "مركز الأمل المنشود",
    "الموقع مريمه الشارع العام شرقي الصالة الرياضية وصالة الافراح",
    "771641991",
    "autism.society2014"
    );
newService(
    "مركز الحياة",
    "الموقع : حضرموت - القطن - العنين خلف ورشة هجلان",
    "967714387275",
    "alhayh282@gmail.com"
    );