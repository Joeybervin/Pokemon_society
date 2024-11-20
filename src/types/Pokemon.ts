
interface Pokemon {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number,
    order: number,
    is_default: number,
    types?: string,
    moves?: string,
    egg_groups?: number
}

export default Pokemon