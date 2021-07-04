"use strict";

module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const CompanyNews = app.model.define(
    "company_news",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: STRING(100),
      headerImg: STRING(1000),
      news: STRING(40),
      date: STRING(32),
      type: INTEGER,
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return CompanyNews;
}
