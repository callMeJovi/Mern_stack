// const usersDB = {
//   users: require("../model/users.json"),
//   setUsers: function (data) {
//     this.users = data;
//   },
// };

// const fsPromises = require("fs").promises;
// const path = require("path"); // to be replaced by mongoDB
const User = require("../model/User");

const handleLogout = async (req, res) => {
  // remind front-end dev to delete the accessToken on client

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content to send back
  const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  const foundUser = await User.findOne({ refreshToken }).exec();
  // if the user is not found but I have a cookie to that user, we need to clear the cookie
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true }); //maxAge
    return res.sendStatus(204); //successful but no content to send back
  }

  // Delete refreshToken in db
  foundUser.refreshToken = "";
  const result = await foundUser.save();
  console.log(result); // to be deleted before putting into production

  // const currentUser = { ...foundUser, refreshToken: "" };
  // usersDB.setUsers([...otherUsers, currentUser]);
  // await fsPromises.writeFile(
  //   path.join(__dirname, "..", "model", "users.json"),
  //   JSON.stringify(usersDB.users)
  // );

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true }); // secure: true - only serves on https
  res.sendStatus(204);
};

module.exports = { handleLogout };
