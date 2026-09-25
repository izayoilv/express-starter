const typeDefs = `#graphql
  type Mahasiswa {
    id_mahasiswa: ID!
    nim: String!
    nama: String!
    id_jenis_kelamin: ID!
    tempat_lahir: String
    tanggal_lahir: String
    alamat: String
    no_hp: String
    email: String
    id_program_studi: ID
    id_angkatan: ID
    create_at: String
    update_at: String
    delete_at: String
  }

  input MahasiswaInput {
    nim: String!
    nama: String!
    id_jenis_kelamin: ID!
    tempat_lahir: String
    tanggal_lahir: String
    alamat: String
    no_hp: String
    email: String
    id_program_studi: ID
    id_angkatan: ID
  }

  input UpdateMahasiswaInput {
    nim: String
    nama: String
    id_jenis_kelamin: ID
    tempat_lahir: String
    tanggal_lahir: String
    alamat: String
    no_hp: String
    email: String
    id_program_studi: ID
    id_angkatan: ID
  }

  type Query {
    mahasiswa: [Mahasiswa!]!
    mahasiswaById(id: ID!): Mahasiswa
    cariMahasiswa(kataKunci: String!): [Mahasiswa!]!
  }

  type Mutation {
    tambahMahasiswa(input: MahasiswaInput!): Mahasiswa!
    updateMahasiswa(id: ID!, input: UpdateMahasiswaInput!): Mahasiswa!
    deleteMahasiswa(id: ID!): Mahasiswa!
    restoreMahasiswa(id: ID!): Mahasiswa!
  }
`;

module.exports = typeDefs;
