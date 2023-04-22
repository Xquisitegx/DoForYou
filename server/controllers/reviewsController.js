const ReviewCustomer = require("../models/reviewCustomerModel");
const ReviewPerformer = require("../models/reviewPerformerModel");
const Task = require("../models/taskModel");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// Get all reviews 
exports.getAllReviews = catchAsync(async (req, res) => {

  const reviewsCustomer = await ReviewCustomer.find({});
  const reviewsPerformer = await ReviewPerformer.find({});

  res.status(200).json({
    status: "success",
    results: reviewsCustomer.length,
    reviewsCustomer,
    results: reviewsPerformer.length,
    reviewsPerformer
  });
})

// Displat all reviews for a specific user
exports.getUserReviews = catchAsync(async (req, res) => {

  const userId = req.params.uid;
  const reviewsCustomer = await ReviewCustomer.find({ userId });
  const reviewsPerformer = await ReviewPerformer.find({ userId });

  res.status(200).json({
    status: "success",
    results: reviewsCustomer.length,
    reviewsCustomer,
    results: reviewsPerformer.length,
    reviewsPerformer
  });
})


/***********************   CUSTOMER REVIEWS   ***************************/

// Submit a new review
exports.submitCutomerReview = catchAsync(async (req, res) => {
  const task = await Task.findById(req.body.task);
  req.body.task = task;
  req.body.customer = task.uploadedUser;
  const review = new ReviewCustomer(req.body);
  await review.save();
  res.status(201).json({
    status: "success",
    results: review.length,
    review
  });

});

// Get all reviews for a specific customer
exports.getCustomerReviews = catchAsync(async (req, res) => {
  const customerId = req.params.cid;
  const reviews = await ReviewCustomer.find({ customerId })
  res.status(201).json({
    status: "success",
    results: reviews.length,
    reviews
  });

});

// Get count of reviews for a specific customer and tag
exports.getCountForEachTag = catchAsync(async (req, res) => {
  const customerId = req.params.cid;
  const positiveTags = [
    "Punctual payment",
    "Good manners",
    "Friendly",
    "Great Communication",
    "Reasonable request",
    "Positive",
  ];
  const negativeTags = [
    "Payment delay",
    "Lack of description",
    "Rude",
    "Poor Communication",
    "Unreasonable request",
    "Negative"
  ];

  const positiveCounts = {};
  const negativeCounts = {};
  for (const tag of positiveTags) {
    const reviews = await ReviewCustomer.find({ customer: customerId, tags: tag });
    positiveCounts[tag] = reviews.length;
  }
  for (const tag of negativeTags) {
    const reviews = await ReviewCustomer.find({ customer: customerId, tags: tag });
    negativeCounts[tag] = reviews.length;
  }
  

  res.status(200).json({
    status: "success",
    positiveCounts,
    negativeCounts
  });
});


// Update likes count
exports.updateCustomerRating = catchAsync(async (req, res) => {
  const customerId = req.params.cid;
  const like = req.params.like.toLowerCase() === 'like' ? 1 : -1;

  await ReviewCustomer.updateMany({ customerId: customerId }, { $inc: { likes: like } });

  res.status(200).json({
    status: "success",
    message: "Rating updated successfully"

  });
});


/***********************   PERFORMER REVIEWS   ************************** */

// Submit a new review

exports.submitPerformerReview = catchAsync(async (req, res) => {
  req.body.task = await Task.findById(req.body.task);
  req.body.performer = req.body.task.assignedUser;
  const { performer, rating } = req.body;

  // Find existing reviews for the performer
  const existingReviews = await ReviewPerformer.find({ performer });

  // Calculate the new average rating
  const existingRatingsTotal = existingReviews.reduce((total, review) => total + review.rating, 0);
  const newAverageRating = ((existingRatingsTotal + rating) / (existingReviews.length + 1).toFixed(2));

  // Create a new review document
  const newReview = new ReviewPerformer(req.body);

  // Save the new review
  await newReview.save();

  // Update the performer with the new average rating
  await ReviewPerformer.findOneAndUpdate(
    { performer },
    { $set: { averageRating: newAverageRating } }
  );

  // Update the ratings in the existing reviews
  const updatedReview = await ReviewPerformer.updateMany({ performer }, { $set: { average_rating: newAverageRating } }, { new: true });

  res.status(201).json({ 
    status: "success",
    review: updatedReview 
  });
});


// Get all reviews for a specific performer
exports.getPerformerReviews = catchAsync(async (req, res) => {
  const performer = req.params.pid;
  const reviews = await ReviewPerformer.find({ performer })
  .populate({
    path: "task",
    populate: {
      path: "uploadedUser",
      model: "User"
    }
  });;

  console.log(reviews);

  res.status(201).json({
    status: "success",
    results: reviews.length,
    reviews
  });
});

// Get average rating for a specific performer