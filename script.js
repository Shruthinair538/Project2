const backtop = document.querySelector(".foot_panel1");
backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})


const sideBar = document.querySelector(".sideBar");
const black = document.querySelector(".black");
const sideBtn = document.querySelector(".second-1");
const cross = document.querySelector(".fa-xmark");
sideBtn.addEventListener("click", () => {
    sideBar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop_scroll")

})
cross.addEventListener("click", () => {
        sideBar.classList.remove("active");
        cross.classList.remove("active");
        black.classList.remove("active");
        document.body.classList.remove("stop_scroll")


    })
    // const sign = document.querySelector(".arrow");
    // const tri = document.querySelector(".triangle");
    // const signin = document.querySelector(".hidden_sign");

// sign.addEventListener("click", () => {
//     black.classList.toggle("active-1");
//     signin.classList.toggle("active");
//     tri.classList.toggle("active");
//     document.body.classList.toggle("stop_scroll")


// })