"use server"
import fs from "fs/promises"
export const submitAction = async (e) => {
    await fs.writeFile("feedback.txt", `Name:${e.get("name")} , Email:${e.get("email")} and Message:${e.get("message")}\n`,{flag:"a"}); 
  }