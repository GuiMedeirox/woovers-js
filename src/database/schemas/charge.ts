import { Customer } from "./customer";
import { pgTable, text, integer, doublePrecision, boolean, jsonb } from "drizzle-orm/pg-core";


export const Charge = pgTable("Charges", {
    correlationID: text('id').primaryKey().$defaultFn( () => Bun.randomUUIDv7()).notNull(),
    value: doublePrecision('value').notNull(), 
    type: text('type', {enum: ['DYNAMIC', 'OVERDUE']}), 
    comment: text('comment'), 
    expiresIn: integer('expiresIn'), 
    expiresDate: text('expiresDate'), 
    customer: text('customerId').references( () => Customer.correlationID, {onDelete: 'cascade'}),
    ensureTaxId: boolean('ensureTaxId'), 
    daysForDueDate: integer('daysForDueDate'), 
    daysAfterDueDate: integer('daysAfterDueDate'), 
    interests: jsonb('interests'),
    fines: jsonb('fines'), 
    discountSettings: jsonb('discountSettings'), 
    additionalInfo: jsonb('additionalInfo'),
    enableCashbackPercentage: boolean('enableCashbackPercentage'), 
    enableCashbackExclusivePercentage: boolean('enableCashbackExclusivePercentage'), 
    subaccount: text('subaccount'), 
    splits: jsonb('splits')

})