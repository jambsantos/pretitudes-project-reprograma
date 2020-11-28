const candidates = require("../models/black-candidates");

const allCandidates = (req, res) => {
  candidates.find((err, candidatesList) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(candidatesList);
  });
};

const createCandidate = (req, res) => {
  candidates.countDocuments((err, count) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else {
      let candidate = new candidates(req.body);
      candidate.id = count + 1;
      candidate.save((err) => {
        if (err) {
          return res.status(424).send({ message: err.message });
        }
        res.status(201).send("Successfully registered!");
      });
    }
  });
};

module.exports = {
  allCandidates,
  createCandidate
};