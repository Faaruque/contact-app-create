const router = require("express").Router();
const {
  getAllContact,
  singleContact,
  postContact,
  updateContact,
  deletContact,
} = require("../controller/contactController");

router.get("/", getAllContact);
router.get("/:id", singleContact);
router.post("/", postContact);
router.put("/:id", updateContact);
router.delete("/:id", deletContact);

module.exports = router;
