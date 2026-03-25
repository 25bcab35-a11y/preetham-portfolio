const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch("https://portfolio-vwo1.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    alert(result.message); // ✅ POPUP
    form.reset();

  } catch (err) {
    alert("❌ Server error");
  }
});