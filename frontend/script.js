const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch("https://preetham-portfolio-5lu8.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    // 🔥 IMPORTANT CHECK
    if (!res.ok) {
      throw new Error("Server response not OK");
    }

    const result = await res.json();

    alert(result.message);
    form.reset();

  } catch (err) {
    console.error(err);
    alert("❌ Server error");
  }
});