import { jsonb } from "drizzle-orm/pg-core";
import { sqliteTable, text} from "drizzle-orm/sqlite-core";


export const Customer = sqliteTable("Customers", {
    correlationID: text('id').primaryKey().$defaultFn( () => Bun.randomUUIDv7()),
    name: text().notNull(), 
    email: text(),
    phone: text(), 
    taxID: text(),   
    address: jsonb()    
})
