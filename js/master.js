(() => {
    document.addEventListener("DOMContentLoaded", () => {
        (() => {
            var closeBtn = document.querySelector(".closeBtn");
            var sideBar = document.querySelector("#responsive-sideBar");
            var openBtn = document.querySelector("#openResponsiveSideBar");
            // Close Responsive Side Bar Function
            closeBtn.addEventListener('click', () => {
                sideBar.style = "opacity:0;";
                let gorunum = setTimeout(() => {
                    sideBar.style.display = "none";
                }, 600);
                openBtn.style.display = "block";

            });

            // Open Responsive Side Bar Function
            openBtn.addEventListener('click', () => {
                sideBar.style.display = "block";
                setTimeout(() => {
                    sideBar.style = "opacity:1;";
                }, 100);
                openBtn.style.display = "none";
            });
        })();

        // Back To Top Button Function
        (() => {
            let goTop = document.querySelector(".goToTopBtn");
            window.addEventListener("scroll", () => {
                if(window.pageYOffset > 100){
                    goTop.classList.add("active");
                }else{
                    goTop.classList.remove("active");
                }
            })
        })();



        // My Portfolio Box Like Button Function
        (() => {
            let likeBTN = document.querySelectorAll('.portfolio-boxes-middle-like');
            likeBTN.forEach((btn,i) => {
                btn.addEventListener("click", () => {
                    var likeStatu = btn.getAttribute("likeStatus");
                    var number = document.getElementsByClassName("like-number")[i].innerHTML;
                    if(likeStatu == "like"){
                        number = Number(number) - 1;
                        document.getElementsByClassName("like-number")[i].innerHTML = " " + number;
                        btn.setAttribute("likeStatus", "unlike");
                    }
                    else if(likeStatu == "unlike"){
                        number = Number(number) + 1;
                        document.getElementsByClassName("like-number")[i].innerHTML = " " + number;
                        btn.setAttribute("likeStatus", "like");
                    }
                })
            });
        })();



        (() => {
            // Resume Menu Nav Buttons 
            var educationBtn = document.querySelector(".educationNav");
            var skilBtn = document.querySelector(".skillNav");
            var experienceBtn = document.querySelector(".experienceNav");
            var interviewBtn = document.querySelector(".interviewNav");

            // Resume Containers
            var education = document.querySelector(".resume-education-container");
            var skill = document.querySelector(".resume-proSkill-container");
            var experience = document.querySelector(".resume-exp-container");
            var interview = document.querySelector(".resume-int-container");

            // Resume Functions
            educationBtn.addEventListener("click", () => {
                educationBtn.setAttribute("selectedMenu", "active");
                skilBtn.setAttribute("selectedMenu", "passive");
                experienceBtn.setAttribute("selectedMenu", "passive");
                interviewBtn.setAttribute("selectedMenu", "passive");

                education.setAttribute("visibility", "true");
                skill.setAttribute("visibility", "false");
                experience.setAttribute("visibility", "false");
                interview.setAttribute("visibility", "false");
            });
            skilBtn.addEventListener("click", () => {
                educationBtn.setAttribute("selectedMenu", "passive");
                skilBtn.setAttribute("selectedMenu", "active");
                experienceBtn.setAttribute("selectedMenu", "passive");
                interviewBtn.setAttribute("selectedMenu", "passive");

                education.setAttribute("visibility", "false");
                skill.setAttribute("visibility", "true");
                experience.setAttribute("visibility", "false");
                interview.setAttribute("visibility", "false");
            });
            experienceBtn.addEventListener("click", () => {
                educationBtn.setAttribute("selectedMenu", "passive");
                skilBtn.setAttribute("selectedMenu", "passive");
                experienceBtn.setAttribute("selectedMenu", "active");
                interviewBtn.setAttribute("selectedMenu", "passive");

                education.setAttribute("visibility", "false");
                skill.setAttribute("visibility", "false");
                experience.setAttribute("visibility", "true");
                interview.setAttribute("visibility", "false");
            });
            interviewBtn.addEventListener("click", () => {
                educationBtn.setAttribute("selectedMenu", "passive");
                skilBtn.setAttribute("selectedMenu", "passive");
                experienceBtn.setAttribute("selectedMenu", "passive");
                interviewBtn.setAttribute("selectedMenu", "active");

                education.setAttribute("visibility", "false");
                skill.setAttribute("visibility", "false");
                experience.setAttribute("visibility", "false");
                interview.setAttribute("visibility", "true");
            });
        })();
    })
})();