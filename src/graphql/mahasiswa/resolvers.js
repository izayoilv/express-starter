const { Op } = require('sequelize');
const Mahasiswa = require('../../models/mahasiswa/mahasiswaModel');
const { toPlain, findByPkOrThrow } = require('../helpers');

const LABEL = 'Mahasiswa';

const resolvers = {
  Query: {
    mahasiswa: async () => {
      const rows = await Mahasiswa.findAll({
        where: { delete_at: null },
        order: [['nama', 'ASC']],
      });
      return rows.map(toPlain);
    },
    mahasiswaById: async (_, { id }) => toPlain(await findByPkOrThrow(Mahasiswa, id, LABEL)),
    cariMahasiswa: async (_, { kataKunci }) => {
      const rows = await Mahasiswa.findAll({
        where: {
          delete_at: null,
          [Op.or]: [
            { nim: { [Op.like]: `%${kataKunci}%` } },
            { nama: { [Op.like]: `%${kataKunci}%` } },
            { email: { [Op.like]: `%${kataKunci}%` } },
          ],
        },
        order: [['nama', 'ASC']],
      });
      return rows.map(toPlain);
    },
  },
  Mutation: {
    tambahMahasiswa: async (_, { input }) => toPlain(await Mahasiswa.create(input)),
    updateMahasiswa: async (_, { id, input }) => {
      const row = await findByPkOrThrow(Mahasiswa, id, LABEL);
      await row.update({ ...input, update_at: new Date() });
      return toPlain(row);
    },
    deleteMahasiswa: async (_, { id }) => {
      const row = await findByPkOrThrow(Mahasiswa, id, LABEL);
      await row.update({ delete_at: new Date() });
      return toPlain(row);
    },
    restoreMahasiswa: async (_, { id }) => {
      const row = await findByPkOrThrow(Mahasiswa, id, LABEL);
      await row.update({ delete_at: null });
      return toPlain(row);
    },
  },
};

module.exports = resolvers;
