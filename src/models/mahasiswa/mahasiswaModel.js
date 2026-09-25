const { DataTypes } = require('sequelize');
const sequelize = require('../../database');
const JenisKelamin = require('../jenis_kelamin/jenisKelaminModel');
const ProgramStudi = require('../program_studi/programStudiModel');
const Angkatan = require('../angkatan/angkatanModel');

const Mahasiswa = sequelize.define(
  'Mahasiswa',
  {
    id_mahasiswa: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nim: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    nama: { type: DataTypes.STRING(100), allowNull: false },
    id_jenis_kelamin: { type: DataTypes.UUID, allowNull: false },
    tempat_lahir: { type: DataTypes.STRING(50) },
    tanggal_lahir: { type: DataTypes.DATEONLY },
    alamat: { type: DataTypes.TEXT },
    no_hp: { type: DataTypes.STRING(15) },
    email: { type: DataTypes.STRING(100) },
    id_program_studi: { type: DataTypes.UUID },
    id_angkatan: { type: DataTypes.UUID },
    create_at: { type: DataTypes.DATE },
    update_at: { type: DataTypes.DATE },
    delete_at: { type: DataTypes.DATE },
  },
  { tableName: 'mahasiswa', timestamps: false }
);

Mahasiswa.belongsTo(JenisKelamin, { foreignKey: 'id_jenis_kelamin' });
Mahasiswa.belongsTo(ProgramStudi, { foreignKey: 'id_program_studi' });
Mahasiswa.belongsTo(Angkatan, { foreignKey: 'id_angkatan' });

module.exports = Mahasiswa;
