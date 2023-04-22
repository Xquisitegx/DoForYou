const express = require("express");
const router = express.Router();

const reviewsController = require("../controllers/reviewsController")


// Customer reviews routes
router.post("/reviewCustomer/", reviewsController.submitCutomerReview);
router.get("/reviewCustomer/:cid/all", reviewsController.getCustomerReviews);
router.get("/reviewCustomer/:cid", reviewsController.getCountForEachTag);
router.put("/reviewCustomer/:cid/:like", reviewsController.updateCustomerRating);

// Performer reviews routes
router.post("/reviewPerformer", reviewsController.submitPerformerReview);
router.get("/reviewPerformer/:pid", reviewsController.getPerformerReviews);


// Both customer and performer reviews
router.get("/:uid", reviewsController.getUserReviews);
router
    .route('/')
    .get(reviewsController.getAllReviews);

module.exports = router;