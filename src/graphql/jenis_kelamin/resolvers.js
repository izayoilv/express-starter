const { Op } = require('sequelize');
const JenisKelamin = require('../../models/jenis_kelamin/jenisKelaminModel');
const { toPlain, findByPkOrThrow } = require('../helpers');

const LABEL = 'Jenis kelamin';

const resolvers = {
  Query: {
    jenisKelamin: async () => {
      const rows = await JenisKelamin.findAll({
        where: { delete_at: null },
        order: [['nama', 'ASC']],
      });
      return rows.map(toPlain);
    },
    jenisKelaminById: async (_, { id }) => toPlain(await findByPkOrThrow(JenisKelamin, id, LABEL)),
    cariJenisKelamin: async (_, { kataKunci }) => {
      const rows = await JenisKelamin.findAll({
        where: {
          delete_at: null,
          [Op.or]: [
            { kode: { [Op.like]: `%${kataKunci}%` } },
            { nama: { [Op.like]: `%${kataKunci}%` } },
          ],
        },
        order: [['nama', 'ASC']],
      });
      return rows.map(toPlain);
    },
  },
  Mutation: {
    tambahJenisKelamin: async (_, { input }) => toPlain(await JenisKelamin.create(input)),
    updateJenisKelamin: async (_, { id, input }) => {
      const row = await findByPkOrThrow(JenisKelamin, id, LABEL);
      await row.update({ ...input, update_at: new Date() });
      return toPlain(row);
    },
    deleteJenisKelamin: async (_, { id }) => {
      const row = await findByPkOrThrow(JenisKelamin, id, LABEL);
      await row.update({ delete_at: new Date() });
      return toPlain(row);
    },
    restoreJenisKelamin: async (_, { id }) => {
      const row = await findByPkOrThrow(JenisKelamin, id, LABEL);
      await row.update({ delete_at: null });
      return toPlain(row);
    },
  },
};

module.exports = resolvers;
