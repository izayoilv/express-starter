const jenisKelaminTypeDefs = require('./jenis_kelamin/schema');
const jenisKelaminResolvers = require('./jenis_kelamin/resolvers');
const programStudiTypeDefs = require('./program_studi/schema');
const programStudiResolvers = require('./program_studi/resolvers');
const angkatanTypeDefs = require('./angkatan/schema');
const angkatanResolvers = require('./angkatan/resolvers');
const mahasiswaTypeDefs = require('./mahasiswa/schema');
const mahasiswaResolvers = require('./mahasiswa/resolvers');

const typeDefs = [
  jenisKelaminTypeDefs,
  programStudiTypeDefs,
  angkatanTypeDefs,
  mahasiswaTypeDefs,
];

const resolvers = {
  Query: {
    ...jenisKelaminResolvers.Query,
    ...programStudiResolvers.Query,
    ...angkatanResolvers.Query,
    ...mahasiswaResolvers.Query,
  },
  Mutation: {
    ...jenisKelaminResolvers.Mutation,
    ...programStudiResolvers.Mutation,
    ...angkatanResolvers.Mutation,
    ...mahasiswaResolvers.Mutation,
  },
};

module.exports = { typeDefs, resolvers };
