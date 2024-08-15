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