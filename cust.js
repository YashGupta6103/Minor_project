function checkUserLogin() {
    const isLoggedIn = localStorage.getItem("user");
  
    if (!isLoggedIn) {
      alert("You must be logged in to access this page.");
      window.location.href = "login.html"; 
    }
  }
  
 
  checkUserLogin();
  