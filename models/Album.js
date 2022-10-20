import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Album = new Schema({
  title: { type: String },
  yearRecorded: { type: String },
  releaseDate: { type: String },
  length: { type: Number },
  albumType: { type: String },
  label: { type: String },
  ukChartPosition: { type: Number },
  ukGold: { type: Boolean },
  ukPlatinum: { type: Boolean },
  usGold: { type: Boolean },
});

export default mongoose.model("albums", Album);