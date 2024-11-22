document.addEventListener("DOMContentLoaded", () => {
    const restrictedLinks = [
      "Tiffin.html",
      "varieties.html",
      "10min.html"
    ];
  
   
    const navLinks = document.querySelectorAll(".nav__links a");
  
    navLinks.forEach(link => {
     
      if (restrictedLinks.includes(link.getAttribute("href"))) {
        link.addEventListener("click", (e) => {
          
          const isLoggedIn = localStorage.getItem("user");
  
          if (!isLoggedIn) {
            e.preventDefault(); // Prevent the link from being followed
            alert("You must be logged in to access this page.");
            window.location.href = "login.html"; // Redirect to login page
          }
        });
      }
    });
  });
  