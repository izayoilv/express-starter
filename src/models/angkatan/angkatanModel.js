const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Angkatan = sequelize.define(
  'Angkatan',
  {
    id_angkatan: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    tahun_ajaran: { type: DataTypes.CHAR(9), allowNull: false, unique: true },
    create_at: { type: DataTypes.DATE },
    update_at: { type: DataTypes.DATE },
    delete_at: { type: DataTypes.DATE },
  },
  { tableName: 'angkatan', timestamps: false }
);

module.exports = Angkatan;
