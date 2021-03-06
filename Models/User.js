module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: Sequelize.STRING,
      required: true,
    },
    password: {
      type: Sequelize.STRING,
      required: true,
    },
    username: {
      type: Sequelize.STRING,
      required: true,
    },

    role: {
      type: Sequelize.DataTypes.ENUM("user", "admin"),
      defaultValue: "user",
    },
    phone: {
      type: Sequelize.STRING,
      required: true,
    },
    date: {
      type: Sequelize.STRING,
      required: true,
    },
  });

  return User;
};
