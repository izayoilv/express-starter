const { GraphQLError } = require('graphql');

function toPlain(row) {
  const data = row.get({ plain: true });
  for (const key of Object.keys(data)) {
    if (data[key] instanceof Date) {
      data[key] = data[key].toISOString();
    }
  }
  return data;
}

async function findByPkOrThrow(Model, id, label) {
  const row = await Model.findByPk(id);
  if (!row) {
    throw new GraphQLError(`${label} dengan ID ${id} tidak ditemukan`);
  }
  return row;
}

module.exports = { toPlain, findByPkOrThrow };
