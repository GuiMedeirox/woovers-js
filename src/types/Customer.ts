type Address = {
    zipcode?: string
    street?: string
    number?: string
    neighborhood?: string
    city?: string
    state?: string
    complement?: string
    country?: string
}

export type CustomerWithTaxID = { 

    name: string, 
    email?: string, 
    phone?: string, 
    taxID?: string, 
    correlationID: string,
    address?: Address
}

export type CustomerWithPhone = {
    name: string, 
    email?: string, 
    phone: string, 
    taxID?: string, 
    correlationID?: string,
    address?: Address
    
}

export type CustomerWithEmail = {
    name: string, 
    email: string, 
    phone?: string, 
    taxID?: string, 
    correlationID?: string,
    address?: Address
    
}