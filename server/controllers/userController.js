const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ExperiencerModel = require("../models/Experiencer");
const HostModel = require("../models/Host");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1h' });
};

const signupExperiencer = (req, res) => {
    const { name, surname, email, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        ExperiencerModel.create({ name, surname, email, password: hash })
            .then((experiencer) => {
                res.json(experiencer);
            })
            .catch(err => console.log(err));
    });
};

const signupHost = (req, res) => {
    const { name, surname, email, taxId, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        HostModel.create({ name, surname, email, taxId, password: hash })
            .then((host) => {
                res.json(host);
            })
            .catch(err => console.log(err));
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    ExperiencerModel.findOne({ email: email }).then((experiencer) => {
        if (experiencer) {
            bcrypt.compare(password, experiencer.password, (err, response) => {
                if (response) {
                    const token = createToken(experiencer._id);
                    res.cookie("token", token);
                    res.status(200).json({ email, name: experiencer.name, surname: experiencer.surname, token, type: "experiencer", message: "Success" });
                } else {
                    res.status(400).json({ type: "experiencer", message: "Incorrect password" });
                }
            });
        } else {
            HostModel.findOne({ email: email }).then((host) => {
                if (host) {
                    bcrypt.compare(password, host.password, (err, response) => {
                        if (response) {
                            const token = createToken(host._id);
                            res.cookie("token", token);
                            console.log(host);
                            res.status(200).json({ id: host._id,email, name: host.name, surname: host.surname, token, type: "host", message: "Success" });
                        } else {
                            res.status(400).json({ type: "host", message: "Incorrect password" });
                        }
                    });
                } else {
                    res.status(400).json({ message: "User not found" });
                }
            }).catch(err => console.log(err));
        }
    }).catch(err => console.log(err));
};

const logout = (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Success" });
};

const getHost = async (req, res) => {
    try {
      const { id } = req.params;
      const host = await HostModel.findById(id);
      if (!host) {
        return res.status(404).json({ message: "host not found" });
      }
      res.status(200).json(host);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

const getExperiencer = (req, res) => {
    const { email } = req.body.email;
    ExperiencerModel.findOne({ email: email }).then((experiencer) => {
        res.json(experiencer);
    }).catch(err => console.log(err));
}


const putHost = (req, res) => {
    const { host } = req.body;
    HostModel.findByIdAndUpdate(host, {_id: host.id}).then((host) => {
        res.json(host);
    }).catch(err => console.log(err));
}

const putExperiencer = (req, res) => {
    const { experiencer } = req.body;
    HostModel.findByIdAndUpdate(experiencer, {_id: experiencer.id}).then((host) => {
        res.json(host);
    }).catch(err => console.log(err));
}

module.exports = { signupExperiencer, signupHost, login, logout, getHost, getExperiencer, putHost, putExperiencer };
