const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const ProgramStudi = sequelize.define(
  'ProgramStudi',
  {
    id_program_studi: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    kode: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    nama: { type: DataTypes.STRING(100), allowNull: false },
    create_at: { type: DataTypes.DATE },
    update_at: { type: DataTypes.DATE },
    delete_at: { type: DataTypes.DATE },
  },
  { tableName: 'program_studi', timestamps: false }
);

module.exports = ProgramStudi;
