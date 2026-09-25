const typeDefs = `#graphql
  type Angkatan {
    id_angkatan: ID!
    tahun_ajaran: String!
    create_at: String
    update_at: String
    delete_at: String
  }

  input AngkatanInput {
    tahun_ajaran: String!
  }

  input UpdateAngkatanInput {
    tahun_ajaran: String
  }

  type Query {
    angkatan: [Angkatan!]!
    angkatanById(id: ID!): Angkatan
    cariAngkatan(kataKunci: String!): [Angkatan!]!
  }

  type Mutation {
    tambahAngkatan(input: AngkatanInput!): Angkatan!
    updateAngkatan(id: ID!, input: UpdateAngkatanInput!): Angkatan!
    deleteAngkatan(id: ID!): Angkatan!
    restoreAngkatan(id: ID!): Angkatan!
  }
`;

module.exports = typeDefs;
