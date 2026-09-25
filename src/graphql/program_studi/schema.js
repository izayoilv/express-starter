const typeDefs = `#graphql
  type ProgramStudi {
    id_program_studi: ID!
    kode: String!
    nama: String!
    create_at: String
    update_at: String
    delete_at: String
  }

  input ProgramStudiInput {
    kode: String!
    nama: String!
  }

  input UpdateProgramStudiInput {
    kode: String
    nama: String
  }

  type Query {
    programStudi: [ProgramStudi!]!
    programStudiById(id: ID!): ProgramStudi
    cariProgramStudi(kataKunci: String!): [ProgramStudi!]!
  }

  type Mutation {
    tambahProgramStudi(input: ProgramStudiInput!): ProgramStudi!
    updateProgramStudi(id: ID!, input: UpdateProgramStudiInput!): ProgramStudi!
    deleteProgramStudi(id: ID!): ProgramStudi!
    restoreProgramStudi(id: ID!): ProgramStudi!
  }
`;

module.exports = typeDefs;
