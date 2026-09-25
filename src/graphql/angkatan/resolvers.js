const { Op } = require('sequelize');
const Angkatan = require('../../models/angkatan/angkatanModel');
const { toPlain, findByPkOrThrow } = require('../helpers');

const LABEL = 'Angkatan';

const resolvers = {
  Query: {
    angkatan: async () => {
      const rows = await Angkatan.findAll({
        where: { delete_at: null },
        order: [['tahun_ajaran', 'DESC']],
      });
      return rows.map(toPlain);
    },
    angkatanById: async (_, { id }) => toPlain(await findByPkOrThrow(Angkatan, id, LABEL)),
    cariAngkatan: async (_, { kataKunci }) => {
      const rows = await Angkatan.findAll({
        where: {
          delete_at: null,
          tahun_ajaran: { [Op.like]: `%${kataKunci}%` },
        },
        order: [['tahun_ajaran', 'DESC']],
      });
      return rows.map(toPlain);
    },
  },
  Mutation: {
    tambahAngkatan: async (_, { input }) => toPlain(await Angkatan.create(input)),
    updateAngkatan: async (_, { id, input }) => {
      const row = await findByPkOrThrow(Angkatan, id, LABEL);
      await row.update({ ...input, update_at: new Date() });
      return toPlain(row);
    },
    deleteAngkatan: async (_, { id }) => {
      const row = await findByPkOrThrow(Angkatan, id, LABEL);
      await row.update({ delete_at: new Date() });
      return toPlain(row);
    },
    restoreAngkatan: async (_, { id }) => {
      const row = await findByPkOrThrow(Angkatan, id, LABEL);
      await row.update({ delete_at: null });
      return toPlain(row);
    },
  },
};

module.exports = resolvers;
