const form = document.getElementById("resultForm");
const resultBox = document.getElementById("resultBox");
const resultData = document.getElementById("resultData");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const reg_no = document.getElementById("reg_no").value;
  const semester = document.getElementById("semester").value;

  const res = await fetch("https://YOUR_BACKEND_URL/api/result", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reg_no, semester })
  });

  const data = await res.json();

  if (data.success) {
    resultBox.style.display = "block";
    resultData.innerHTML = JSON.stringify(data.data, null, 2);
  } else {
    resultBox.style.display = "block";
    resultData.innerHTML = "Result not found";
  }
});
