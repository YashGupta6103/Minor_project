<<<<<<< HEAD
function checkUserLogin() {
    const isLoggedIn = localStorage.getItem("user");
  
    if (!isLoggedIn) {
      alert("You must be logged in to access this page.");
      window.location.href = "login.html"; 
    }
  }
  
 
  checkUserLogin();
=======
function checkUserLogin() {
    const isLoggedIn = localStorage.getItem("user");
  
    if (!isLoggedIn) {
      alert("You must be logged in to access this page.");
      window.location.href = "login.html"; 
    }
  }
  
 
  checkUserLogin();
>>>>>>> d92b234 (Modified And added provider backend and added a new provider dashboard)
  