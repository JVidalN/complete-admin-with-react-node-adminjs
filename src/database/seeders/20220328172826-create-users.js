"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Admin User",
          email: "admin@example.app",
          password_hash:
            "$2a$08$eqk.3q3P3JeIK5iP.1Tb9ecyc0popkdA.HQuYKLC.IS32YG2J5DaO",
          role: "admin",
          status: "active",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Manager User",
          email: "manager@example.app",
          password_hash:
            "$2a$08$eqk.3q3P3JeIK5iP.1Tb9ecyc0popkdA.HQuYKLC.IS32YG2J5DaO",
          role: "manager",
          status: "active",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Dev User",
          email: "dev@example.app",
          password_hash:
            "$2a$08$eqk.3q3P3JeIK5iP.1Tb9ecyc0popkdA.HQuYKLC.IS32YG2J5DaO",
          role: "developer",
          status: "active",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
