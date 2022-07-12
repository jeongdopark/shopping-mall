type Rating = {
    rate : number;
    count : number;
}

export type Product = {
    category : string,
    description : string,
    id : string,
    image : string;
    price : number;
    rating : Rating;
    title : string;
}