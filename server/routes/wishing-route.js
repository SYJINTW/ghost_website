const router = require("express").Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const wishingValidation = require("../validation").wishingValidation;
const Wishing = require("../models").wishingModel;

router.use((req, res, next) => {
  console.log("A request is coming into wishing route");
  next();
});

router.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "wishing API is working.",
  };
  return res.json(msgObj);
});

router.get("/", (req, res) => {
  Wishing.find({})
    .then(wishing => {
      res.status(200).send(wishing);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.post("/", async (req, res) => {
  const { error } = wishingValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const wishing = new Wishing(req.body);
    await wishing.save();
    res.status(200).send("New wishing successfully posted");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/:_id", async (req, res) => {
  let { _id } = req.params;
  let wishing = await Wishing.findOne({ _id });
  if (!wishing) {
    res.status(404);
    return res.json({
      success: false,
      message: "Wishing not found",
    });
  }

  const mailTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  mailTransport.sendMail(
    {
      from: "GHOST <ghostteamstudio@gmail.com>",
      to: `${wishing.email}`,
      subject: "Your Wishing has been completed",
      html: `<h1>${wishing.title} has been completed</h1><p>Someone has completed your wishing</p>`,
    },
    function (err) {
      if (err) {
        console.log("Unable to send email: " + err);
      }
    }
  );

  Wishing.findOneAndDelete({ _id })
    .then(() => res.status(200).send("Wishing successfully deleted"))
    .catch(err => res.send({ success: false, message: err }));
});

module.exports = router;
