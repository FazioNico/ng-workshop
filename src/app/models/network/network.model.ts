export interface ILocation {
    city: string;
    country: string;
    latitude: number;
    longitude: number
}

export interface INetwork {
    company: string[];
    href: string;
    id: string;
    location: ILocation;
    name: string;
    toto  /* here optional cars -> */?: string; // optional proprety

}

export interface IApiResponse {
    networks: INetwork[]
}
