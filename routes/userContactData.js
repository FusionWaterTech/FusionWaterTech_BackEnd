//Import dependancy
const { Router } = require("express");
const { body, validationResult } = require("express-validator");

// Router instance
const router = Router();

// ROUTE 1: Fetch contact data of user: POST:"api/contact/usercontact

router.post(
  "/usercontact",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("mobile", "Enter valid mobile number").isMobilePhone(),
    body("message", "Enter valid  message").isLength({
      min: 10,
    }),
    body("email", "Enter valid email").isEmail(),
  ],
  async (req, res) => {
    try {
      // Check if data is validate or not
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        console.log(req.body);
        
        res.status(200).send("Data received successfully");
      }
    } catch (error) {
      console.error("Error in /usercontact route:", error.message);
      res.status(500).send("Internal server error");
    }
  }
);

module.exports = router;
