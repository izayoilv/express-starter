const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const JenisKelamin = sequelize.define(
  'JenisKelamin',
  {
    id_jenis_kelamin: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    kode: { type: DataTypes.CHAR(1), allowNull: false, unique: true },
    nama: { type: DataTypes.STRING(20), allowNull: false },
    create_at: { type: DataTypes.DATE },
    update_at: { type: DataTypes.DATE },
    delete_at: { type: DataTypes.DATE },
  },
  { tableName: 'jenis_kelamin', timestamps: false }
);

module.exports = JenisKelamin;
