// const mongoose = require("mongoose");

// let Activ_user_week = mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//     name: String,
//     week: { type: Date, expires: 1000 * 60 * 60 * 7, default: Date.now },
//   },
//   //   week: { type: Date, expires: 1000 * 60 * 60 * 24 * 7, default: Date.now },
//   // },
//   // month: { type: Date, expires: 1000 * 60 * 60 * 24* 30, default: Date.now },
//   // },

//   // { createdAt: { type: Date, expires: "2m" } },
//   { timestamps: true }
// );

// // currentSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });
// module.exports = mongoose.model("ActiveWeek", Activ_user_week);
