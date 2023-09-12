// Transparent navbar scroll
let nav = document.querySelector("header");
nav.addEventListener('scroll', function(){

    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("opacity-75");
    } else {
        
    }
})

// Smooth single page scroll
let link = document.querySelectorAll("#section-link").forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Getting Portfolio data from JSON
function displayPortfolio() {
    $.getJSON('./page/script/portfolio.json', function(porto) {
        let data = porto.MyWork;
        // console.log(data);
        $.each(data, function(i, work) {
            $('#portfolio-data').append('<h1>'+ work.ProjectName +'</h1>');
        })
    });
}