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
    location: number[];
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
    location: number[];
    price: number;
    seller: {
        uid: string;
    };
    title: string;
    id: string;
};

export type User = {
    uid: string;
};
