// "use server"
// import fs from "fs/promises"
// export const submitAction = async (e) => {
//     await fs.writeFile("feedback.txt", `Name:${e.get("name")} , Email:${e.get("email")} and Message:${e.get("message")}\n`,{flag:"a"}); 
//   }

'use server'

export const submitAction = async (formData) => {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("http://localhost:3000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) throw new Error(result.error || "Unknown error");

    return { success: true };
  } catch (err) {
    console.error("❌ Submission Error:", err);
    return { success: false, error: err.message };
  }
};


  