async function analyzeJob() {
    const job = document.getElementById("job").value.trim();
    const resultBox = document.getElementById("result");
  
    if (!job) {
      alert("Please enter your job title.");
      return;
    }
  
    resultBox.style.display = "block";
    resultBox.innerHTML = "Analyzing job risk and future-proof skills...";
  
    // Replace with your actual backend API
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ job })
      });
  
      if (!response.ok) throw new Error("API error");
  
      const data = await response.json();
  
      resultBox.innerHTML = `<strong>Risk Level:</strong> ${data.risk}<br><br>
      <strong>Recommended Skills:</strong><ul>${data.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
      <strong>Advice:</strong> ${data.advice}`;
    } catch (error) {
      resultBox.innerHTML = "Error analyzing job. Please try again later.";
    }
  }
  