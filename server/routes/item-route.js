const router = require("express").Router();

const itemValidation = require("../validation").itemValidation;
const Item = require("../models").itemModel;

router.use((req, res, next) => {
  console.log("A request is coming into item route");
  next();
});

router.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "item API is working.",
  };
  return res.json(msgObj);
});

router.get("/", (req, res) => {
  Item.find({})
    .then(item => {
      res.status(200).send(item);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.get("/food/:church", (req, res) => {
  const { church } = req.params;
  Item.find({ type: "Food", church: `${church}` })
    .then(item => {
      res.status(200).send(item);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.get("/book/:church", (req, res) => {
  const { church } = req.params;
  Item.find({ type: "Book", church: `${church}` })
    .then(item => {
      res.status(200).send(item);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

router.post("/", async (req, res) => {
  const { error } = itemValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = new Item(req.body);
    await item.save();
    res.status(200).send("Item successfully posted");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/:_id", async (req, res) => {
  let { _id } = req.params;
  let item = await Item.findOne({ _id });
  if (!item) {
    res.status(404);
    return res.json({
      success: false,
      message: "Item not found",
    });
  }

  Item.findOneAndDelete({ _id })
    .then(() => res.status(200).send("Item successfully deleted"))
    .catch(err => res.send({ success: false, message: err }));
});

module.exports = router;
