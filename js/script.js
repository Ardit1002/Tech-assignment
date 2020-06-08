const links = document.querySelectorAll('#main-nav a');

links.forEach(function(el) {
    el.addEventListener("click", function(e) {
        event.preventDefault();

        // Scroll to
        if (!!this.hash) {
            var scrollTop = document.querySelector(this.hash).offsetTop;
            console.log(scrollTop-100)
            window.scroll({
                top: scrollTop, 
                left: 0, 
                behavior: 'smooth'
            });
        }

        // Add active state
        links.forEach(el => el.classList.remove("current"));
        this.classList.add("current");
    });
})