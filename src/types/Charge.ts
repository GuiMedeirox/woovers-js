import { CustomerWithEmail, CustomerWithPhone, CustomerWithTaxID } from "./Customer"

export type Charge = {

    correlationID: string, 
    value: number, 
    type: "DYNAMIC" | "OVERDUE",
    comment: string, 
    expiresIn: number, 
    expiresDate: string, 
    customer: CustomerWithEmail | CustomerWithPhone | CustomerWithTaxID, 
    ensureSameTaxID: boolean, 
    daysForDueDate: number, 
    daysAfterDueDate: number,
    interests: Interests, 
    fines: Fines,
    discountSettings: DiscountSettings,
    additionalInfo: AdditionalInfo, 
    enableCashbackPercentage: boolean, 
    enableCashbackExclusivePercentage: boolean, 
    subaccount: string, 
    splits: SplitCharge

}


type Interests = {
    value: number
}

type Fines = {
    value: number
}

type SplitCharge = Array<{value: number, pixKey: string, splitType: "SPLIT_INTERNAL_TRANSFER" | "SPLIT_SUB_ACCOUNT" | "SPLIT_PARTNER"}>;

type DiscountSettings = {
    modality: string, 
    discountFixedDate: Array<{daysActive: number, value: number}>;
}

type AdditionalInfo = Array<{ key: string, value: string }>;
