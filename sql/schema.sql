CREATE DATABASE IF NOT EXISTS `express-starter`;
USE `express-starter`;

CREATE TABLE IF NOT EXISTS jenis_kelamin (
  id_jenis_kelamin CHAR(36) PRIMARY KEY,
  kode CHAR(1) NOT NULL UNIQUE,
  nama VARCHAR(20) NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  delete_at TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS program_studi (
  id_program_studi CHAR(36) PRIMARY KEY,
  kode VARCHAR(20) NOT NULL UNIQUE,
  nama VARCHAR(100) NOT NULL,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  delete_at TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS angkatan (
  id_angkatan CHAR(36) PRIMARY KEY,
  tahun_ajaran CHAR(9) NOT NULL UNIQUE,
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  delete_at TIMESTAMP NULL
);

CREATE TABLE IF NOT EXISTS mahasiswa (
  id_mahasiswa CHAR(36) PRIMARY KEY,
  nim VARCHAR(20) NOT NULL UNIQUE,
  nama VARCHAR(100) NOT NULL,
  id_jenis_kelamin CHAR(36) NOT NULL,
  tempat_lahir VARCHAR(50),
  tanggal_lahir DATE,
  alamat TEXT,
  no_hp VARCHAR(15),
  email VARCHAR(100),
  id_program_studi CHAR(36),
  id_angkatan CHAR(36),
  create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  delete_at TIMESTAMP NULL,
  CONSTRAINT fk_mahasiswa_jenis_kelamin FOREIGN KEY (id_jenis_kelamin) REFERENCES jenis_kelamin(id_jenis_kelamin),
  CONSTRAINT fk_mahasiswa_program_studi FOREIGN KEY (id_program_studi) REFERENCES program_studi(id_program_studi),
  CONSTRAINT fk_mahasiswa_angkatan FOREIGN KEY (id_angkatan) REFERENCES angkatan(id_angkatan)
);
