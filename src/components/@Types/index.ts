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

export type TeamType = {
    id: string;
    city: string;
    teamName:string;
    image: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        }
    }
}

type GaolType = {
    id: string;
    points: number;
    goal:string;
    image: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        }
    }
}

export type GlobalRanking = {
    points: number;
    teamDetails: TeamType
}

export type RoundType = {
    id: string;
    isFinish: boolean;
    roundTime: number;
    date: string;
    team1: TeamType;
    team2: TeamType;
    team1Achievements: GaolType[],
    team2Achievements: GaolType[]
}

export type TournamentsType = {
    id: string;
    date: string;
    status: "finish" | "playing" | "schedule" | string;
    teams: TeamType[]
    gameGoals: GaolType[]
    rounds: RoundType[]
    information: any;
}