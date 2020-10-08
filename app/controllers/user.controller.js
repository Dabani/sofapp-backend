exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.staffBoard = (req, res) => {
  res.status(200).send("Staff Content.");
};

exports.refereeBoard = (req, res) => {
  res.status(200).send("Referee Content.");
};

exports.executiveBoard = (req, res) => {
  res.status(200).send("Executive Content.");
};

exports.managerBoard = (req, res) => {
  res.status(200).send("Manager Content.");
};

exports.agentBoard = (req, res) => {
  res.status(200).send("Agent Content.");
};

exports.playerBoard = (req, res) => {
  res.status(200).send("Player Content.");
};