import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import {app, apiKey}  from './app';
import cors from 'cors';
config();

const corsOptions = [
    'http://localhost:3000'
]
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001 

const db = drizzle(process.env.SQLITE_FILE_NAME!);

app.listen(PORT, () => console.log(`running in ${PORT} w/ apiKey: ${apiKey()}`));
