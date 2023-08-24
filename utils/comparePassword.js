import bcrypt from "bcrypt"

export const comparePassword = async function (password, userPassword) {
    return await bcrypt.compare(password, userPassword);
  };