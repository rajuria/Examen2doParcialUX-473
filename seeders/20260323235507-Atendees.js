'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Atendees", [
      {
        id: 4,
        fullName: "Ernesto Almendarez",
        email: "ealmendarez@unitec.edu",
        ticketType: "VIP",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 1,
        fullName: "Rafael Ajuria",
        email: "rajuria@unitec.edu",
        ticketType: "Student",
        createdAt: new Date(Date.UTC(2026, 1, 1)),
        updatedAt: new Date()
      },
      {
        id: 2,
        fullName: "Angelica Lopez",
        email: "alopez@unitec.edu",
        ticketType: "Professional",
        createdAt: new Date(Date.UTC(2026, 1, 2)),
        updatedAt: new Date()
      },
      {
        id: 3,
        fullName: "Alejandro Martinez",
        email: "amartinez@unitec.edu",
        ticketType: "VIP",
        createdAt: new Date(Date.UTC(2026, 1, 3)),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Atendees", null, {});
  }
};
