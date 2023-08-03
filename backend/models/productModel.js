import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    images: [String],
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: {type: String, required: true},
    price: { type: Number, required: true },
    countInStock: { type: Number },
    rating: { type: Number },
    numReviews: { type: Number },
    courseOutline: {type: String, required: true},
    dateFrom: { type: Date, required: true},
    dateTo: { type: Date, required: true},
    timeFrom: { type: Date, required: true},
    timeTo: { type: Date, required: true},
    attendee: {type: String, required: true},
    duration: { type: Number },
    modeOfTraining: { type: String, required: true },
    whatYouWillLearn: {type: String, required: true},
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;