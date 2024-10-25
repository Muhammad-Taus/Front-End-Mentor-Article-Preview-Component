
const shareBtn = document.querySelector("#icon-btn");

const avatarShare = document.querySelector(".avatar-share");




document.body.addEventListener('click', function(e) {
    if (!e.target.classList.contains('avatar-share')) {
        avatarShare.classList.remove("scale-1");
    }
});

 
shareBtn.addEventListener("click", (event) => {
    // alert("hi");
    event.stopPropagation();
    // console.log(avatarShare.classList);
    // console.dir(avatarShare.classList);


    avatarShare.classList.add("scale-1");
});
