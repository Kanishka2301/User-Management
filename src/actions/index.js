"use server";

import connectToDB from "@/database";
import User from "@/models/user";

export async function addNewUserAction(formData) {
  try {
    await connectToDB();

    const newlyCreatedUser = await User.create(formData);
    return {
      success: true,
      message: "User added successfully",
      data: newlyCreatedUser,
    };
  } catch (error) {
    console.error("Error creating new user:", error.message);
    return {
      success: false,
      message: "Some error occurred. Please try again.",
    };
  }
}
