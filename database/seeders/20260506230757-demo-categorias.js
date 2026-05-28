'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  

    await queryInterface.bulkInsert('categorias',[
      {
        nombre: 'Informatica', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nombre: 'Ciencias Naturales', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nombre: 'Ciencias Sociales', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nombre: 'Robotica', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nombre: 'Emprendimientos', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        nombre: 'Feria de Ciencias', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
    ])
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('categorias', null, {});
   
  }
};
