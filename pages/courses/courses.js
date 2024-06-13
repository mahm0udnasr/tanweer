const joinCourse = document.querySelectorAll(".f__course .btn");
let pathX = window.location.pathname
let path = pathX.replace("//pages/courses/courses.html", "");
console.log(path)
joinCourse.forEach((btn,index) => {
    btn.onclick = ()=> {
        window.location.href = `${path}/pages/viewcourse/view.html?id=${index}`
    }
});
