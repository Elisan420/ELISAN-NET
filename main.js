document.getElementById("activateBtn").addEventListener("click", function() {
  const code = document.getElementById("activationCode").value.trim();
  const status = document.getElementById("statusMessage");

  if (code === "") {
    status.textContent = "Please enter your activation code.";
    status.style.color = "red";
  } else {
    status.textContent = "Verifying code... ⏳";
    status.style.color = "yellow";

    // Simulated check (you’ll later connect this to your backend)
    setTimeout(() => {
      if (code === "12345") {
        status.textContent = "✅ Code verified! Your package is now active.";
        status.style.color = "lime";
      } else {
        status.textContent = "❌ Invalid code. Please try again.";
        status.style.color = "red";
      }
    }, 2000);
  }
});