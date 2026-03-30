'use strict';

// const { SELECT } = require('sequelize/types/query-types');
const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // async up (queryInterface, Sequelize) {
  //   await qyeryInterface.addConstraint('Airports',{
  //     type:'foreign key',
  //     name:'city_key_constraint_name',
  //     fields:['cityID'],
  //     references:{
  //       table:'cities',
  //       fields:'id'
  //     },
  //     onUpdate:'CASCADE',
  //     onDELETE:'CASCADE'
      
  //   });
  // },

  // async down (queryInterface, Sequelize) {
  //   await queryInterface.removeConstraint('Airports','city_fkey_constraint');
  // }
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports', {
      type: 'foreign key',
      name: 'city_key_constraint_name',
      fields: ['cityID'],
      references: {
        table: 'cities',
        field: 'id'
      },
      // onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'Airports',
      'city_key_constraint_name'
    );
  }

};
