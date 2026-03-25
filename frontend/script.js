const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const res = await fetch("https://preetham-portfolio-5lu8.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    // 🔥 DEBUG
    console.log("Status:", res.status);

    if (!res.ok) {
      throw new Error("Server response not OK");
    }

    const result = await res.json();

    console.log("Response:", result); // ✅ DEBUG

    alert(result.message);
    form.reset();

  } catch (err) {
    console.error("❌ Error:", err);
    alert("❌ Server error");
  }
});