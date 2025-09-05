import { jsonb, pgTable, varchar, text } from "drizzle-orm/pg-core";

export const Customer = pgTable("Customers", {
    correlationID: varchar().primaryKey().$defaultFn( () => Bun.randomUUIDv7()),
    name: text().notNull(), 
    email: text(), 
    phone: text(), 
    taxID: text(),   
    address: jsonb()    
})
