export type Post = {
    id: string;
    title: string;
    publishedAt: string;
    slug: {
        current: string;
    }
    mainImage: {
        _type: string;
        alt: string;
        asset: {
            _ref: string;
            _type: string;
        }
    }
    author: {
        name: string;
        image: {
            hotspot: {
                _type: string;
                width: number;
                x: number;
                y: number;
                height: number;
            }
            asset: {
                _ref: string;
                _type: string;
            }
            crop: {
                top: number;
                left: number;
                bottom: number;
                right: number;
                _type: string;
            }
        }
    }
    body: any
}


export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    image: {
        alt: string;
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        }
    }
}


export type PartnersType = {
    id: string;
    image: {
        alt: string;
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        }
    },
    link: string;
    partnerName: string;
    bio: any;
}