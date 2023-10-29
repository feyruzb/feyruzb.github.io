document.body.onload = () => {
    document.querySelectorAll("nav a").forEach(function(e) {
        if (e.href == window.location) {
            e.classList.add("active");
        }
    })
}