document.getElementById("activateBtn").addEventListener("click", function() {
  const codeInput = document.getElementById("activationCode");
  const activateBtn = document.getElementById("activateBtn");
  const status = document.getElementById("statusMessage");
  const code = codeInput.value.trim();

  if (code === "") {
    status.textContent = "Please enter your activation code.";
    status.style.color = "red";
    return; // Stop execution
  }

  // 1. Disable input and button to prevent double-submissions
  activateBtn.disabled = true;
  codeInput.disabled = true;
  activateBtn.style.opacity = "0.5";
  activateBtn.style.cursor = "not-allowed";

  status.textContent = "Verifying code... ⏳";
  status.style.color = "yellow";

  // Simulated backend check
  setTimeout(() => {
    if (code === "12345") {
      status.textContent = "✅ Code verified! Your package is now active.";
      status.style.color = "lime";
      // Optional: Redirect user after success
      // window.location.href = "success.html";
    } else {
      status.textContent = "❌ Invalid code. Please try again.";
      status.style.color = "red";
      
      // 2. Re-enable if it fails so they can try again
      activateBtn.disabled = false;
      codeInput.disabled = false;
      activateBtn.style.opacity = "1";
      activateBtn.style.cursor = "pointer";
    }
  }, 2000);
});

// 3. Allow "Enter" key to trigger the button
document.getElementById("activationCode").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    document.getElementById("activateBtn").click();
  }
});
