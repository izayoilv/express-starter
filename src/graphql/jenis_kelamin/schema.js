const typeDefs = `#graphql
  type JenisKelamin {
    id_jenis_kelamin: ID!
    kode: String!
    nama: String!
    create_at: String
    update_at: String
    delete_at: String
  }

  input JenisKelaminInput {
    kode: String!
    nama: String!
  }

  input UpdateJenisKelaminInput {
    kode: String
    nama: String
  }

  type Query {
    jenisKelamin: [JenisKelamin!]!
    jenisKelaminById(id: ID!): JenisKelamin
    cariJenisKelamin(kataKunci: String!): [JenisKelamin!]!
  }

  type Mutation {
    tambahJenisKelamin(input: JenisKelaminInput!): JenisKelamin!
    updateJenisKelamin(id: ID!, input: UpdateJenisKelaminInput!): JenisKelamin!
    deleteJenisKelamin(id: ID!): JenisKelamin!
    restoreJenisKelamin(id: ID!): JenisKelamin!
  }
`;

module.exports = typeDefs;
