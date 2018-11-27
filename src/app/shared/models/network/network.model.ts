export interface ILocation {
    city: string;
    country: string;
    latitude: number;
    longitude: number
}

export interface INetwork {
    company: string | string[];
    href: string;
    id: string;
    location: ILocation;
    name: string;
    toto  /* here optional cars -> */?: string; // optional proprety

}

export interface IApiResponse {
    networks: INetwork[]
}

export interface IStation {
    empty_slots: string;
    extra: {
        bike_uids?: string[];
        number: string;
        slots: number;
        uid: string;
    };
    free_bikes: number;
    id: string;
    latitude: number;
    longitude: number;
    name: string;
    timestamp: Date;
}

export type TNetwork = INetwork & { stations?: IStation[]};