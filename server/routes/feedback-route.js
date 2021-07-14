const router = require("express").Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const feedbackValidation = require("../validation").feedbackValidation;
const Feedback = require("../models").feedbackModel;

router.use((req, res, next) => {
  console.log("A request is coming into feedback route");
  next();
});

router.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "feedback API is working.",
  };
  return res.json(msgObj);
});

router.get("/", (req, res) => {
  Feedback.find({})
    .then(feedback => {
      res.status(200).send(feedback);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.post("/", async (req, res) => {
  const { error } = feedbackValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const feedback = new Feedback(req.body);
    await feedback.save();

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
        to: "GHOST <ghostteamstudio@gmail.com>",
        subject: `${feedback.subject}`,
        html: `<h1>Some one send a feedback!</h1>
              <h6>name: ${feedback.name}</h6>
              <h6>email: ${feedback.email}</h6>
              <p>email: ${feedback.message}</p>`,
      },
      function (err) {
        if (err) {
          console.log("Unable to send email: " + err);
        }
      }
    );

    res.status(200).send("Thanks for your feedback!");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
