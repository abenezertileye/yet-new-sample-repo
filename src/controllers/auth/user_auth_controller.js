const User = require("../../models/user");
const jwt = require("jsonwebtoken");

//create token
let MaxAge = 3 * 24 * 60 * 60;
function createToken(id) {
  return jwt.sign({ id }, "osjcosj56as", { expiresIn: MaxAge });
}

//signup
exports.signup = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const user = await User.create({ first_name, last_name, email, password });
    const token = createToken(user._id);
    res.send({
      _id: theUser._id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      token: token,
    });
  } catch (err) {
    console.log(err.message);
  }
};

//login
exports.login = async function (req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    const theUser = await User.findById(user._id);
    res.send({
      _id: theUser._id,
      first_name: theUser.first_name,
      last_name: theUser.last_name,
      email: email,
      token: token,
    });
  } catch (err) {
    res.send(err.message);
  }
};
