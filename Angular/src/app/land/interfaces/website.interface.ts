export interface WebsiteResponse {
    ok: boolean,
    data?: [],
    msg?: string,
    token?: string
}

export interface Item {
    id?: string;
    category_id?: string;
    name?: string;
    description?: string;
    price?: string;
    linkTo?: string;
    tags?: string;
    image?: string;
    screenshots?: string[];
}

export interface Category {
    id: string;
    name: string;
    icon: string;
}