USE `express-starter`;

INSERT INTO jenis_kelamin (id_jenis_kelamin, kode, nama)
VALUES (UUID(), 'L', 'LAKI-LAKI'), (UUID(), 'P', 'PEREMPUAN') AS new
ON DUPLICATE KEY UPDATE nama = new.nama;

INSERT INTO program_studi (id_program_studi, kode, nama)
VALUES (UUID(), 'TI', 'TEKNIK INFORMATIKA'), (UUID(), 'SI', 'SISTEM INFORMASI'), (UUID(), 'MI', 'MANAJEMEN INFORMATIKA') AS new
ON DUPLICATE KEY UPDATE nama = new.nama;

INSERT INTO angkatan (id_angkatan, tahun_ajaran)
VALUES (UUID(), '2025-2026'), (UUID(), '2026-2027') AS new
ON DUPLICATE KEY UPDATE tahun_ajaran = new.tahun_ajaran;

INSERT INTO mahasiswa (
  id_mahasiswa, nim, nama, id_jenis_kelamin, tempat_lahir, tanggal_lahir,
  alamat, no_hp, email, id_program_studi, id_angkatan
) VALUES (
  UUID(), '2601001', 'MISRIYADI',
  (SELECT id_jenis_kelamin FROM jenis_kelamin WHERE kode = 'L'),
  'TANJUNG PINANG', '2004-05-12',
  'JL. RAJA HAJI NO.10, TANJUNG PINANG', '081234567801', 'MISRIYADI@GMAIL.COM',
  (SELECT id_program_studi FROM program_studi WHERE kode = 'TI'),
  (SELECT id_angkatan FROM angkatan WHERE tahun_ajaran = '2026-2027')
) AS new
ON DUPLICATE KEY UPDATE nama = new.nama;
