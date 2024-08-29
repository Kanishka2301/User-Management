"use server";

import connectToDB from "@/database";
import User from "@/models/user";

export async function addNewUserAction(formData) {
  await connectToDB();

  try {
    const newlyCreatedUser = await User.create(formData);
    if (newlyCreatedUser) {
      return {
        success: true,
        message: "User added sucessfully",
      };
    } else {
      return {
        success: false,
        message: "Some error occured, Please try again",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occured, Please try again",
    };
  }
}
