// models/news.js
module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define('News', {
      imageUrl: DataTypes.STRING,
      message: DataTypes.TEXT
    });
    return News;
  };
  