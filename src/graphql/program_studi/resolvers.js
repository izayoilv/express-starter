const { Op } = require('sequelize');
const ProgramStudi = require('../../models/program_studi/programStudiModel');
const { toPlain, findByPkOrThrow } = require('../helpers');

const LABEL = 'Program studi';

const resolvers = {
  Query: {
    programStudi: async () => {
      const rows = await ProgramStudi.findAll({
        where: { delete_at: null },
        order: [['nama', 'ASC']],
      });
      return rows.map(toPlain);
    },
    programStudiById: async (_, { id }) => toPlain(await findByPkOrThrow(ProgramStudi, id, LABEL)),
    cariProgramStudi: async (_, { kataKunci }) => {
      const rows = await ProgramStudi.findAll({
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
    tambahProgramStudi: async (_, { input }) => toPlain(await ProgramStudi.create(input)),
    updateProgramStudi: async (_, { id, input }) => {
      const row = await findByPkOrThrow(ProgramStudi, id, LABEL);
      await row.update({ ...input, update_at: new Date() });
      return toPlain(row);
    },
    deleteProgramStudi: async (_, { id }) => {
      const row = await findByPkOrThrow(ProgramStudi, id, LABEL);
      await row.update({ delete_at: new Date() });
      return toPlain(row);
    },
    restoreProgramStudi: async (_, { id }) => {
      const row = await findByPkOrThrow(ProgramStudi, id, LABEL);
      await row.update({ delete_at: null });
      return toPlain(row);
    },
  },
};

module.exports = resolvers;
