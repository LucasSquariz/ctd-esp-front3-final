export type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    addressStreet: string;
    addressDistrict: string;
    addressNumber: string;
    addressComp?: string | null;
    city: string;
    state: string;
    zipCode: string;
    cardNumber: string;
    cardCvv: string;
    cardExpDate: string;
    cardName: string;
}

export type Comic = {
    images?: any;
    id: string;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    };    
    price: number;
    stock: number;
    characters: Characters;
};

export interface Character {
    id: string;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: URL[];
    thumbnail: Thumbnail;
    comics: Comics;
    stories: Stories;
    events: Comics;
    series: Comics;
}

type Characters = {
    available: number;
    returned: number;
    collectionURI: string;
    items: Items[];
};

type Items = {
    resourceURI: string;
    name: string;
    role: string;
};

interface Comics {
    available: string;
    returned: string;
    collectionURI: string;
    items: ComicsItem[];
}

interface ComicsItem {
    resourceURI: string;
    name: string;
}

interface Stories {
    available: string;
    returned: string;
    collectionURI: string;
    items: StoriesItem[];
}

interface StoriesItem {
    resourceURI: string;
    name: string;
    type: string;
}

interface Thumbnail {
    path: string;
    extension: string;
}

interface URL {
    type: string;
    url: string;
}