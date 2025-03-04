import express from 'express';
import cors from 'cors';
import userRoutes from './router/retailerRouter';
import sequelize from './config/db';
import { Local } from './environment/config';

const app = express();
const PORT = Local.Port;
app.use('/uploads', express.static('uploads'))

app.use(cors());
app.use(express.json())
app.use('/', userRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database synchronized\n\n ');
  })
  .catch((err:any) => {
    console.error('Database synchronization failed:', err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
