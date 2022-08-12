export type ListingItemServer = {
    category: {
        label: string;
        value: number;
    };
    description: string;
    images: {
        thumbnail: string;
        url: string;
    }[];
    location?: Location;
    price: number;
    seller: {
        uid: string;
    };
    title: string;
    id: string;
};

export type ListingItemClient = {
    category: {
        label: string;
        value: number;
    };
    description: string;
    images: string[];
    location?: Location;
    price: number;
    seller: {
        uid: string;
    };
    title: string;
    id: string;
};

export type User = {
    uid: string;
    displayName:string, 
    email:string, 
    firstName:string, 
    lastName:string, 
    photoURL:string,
};


export type Location={
    latitude: number,
    longitude: number
}