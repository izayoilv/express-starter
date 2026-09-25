require('dotenv').config({ quiet: true });
const sequelize = require('./src/database');
const createApp = require('./src/app');

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    const app = await createApp();
    app.listen(PORT, () => {
      console.log(`Server ready at http://localhost:${PORT}/graphql`);
    });
  } catch (error) {
    console.error('Gagal menjalankan server:', error.message);
    process.exit(1);
  }
}

main();
