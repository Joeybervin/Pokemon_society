interface Item {
    id: number,
    identifier: string,
    category_id: number,
    cost: number,
    fling_power: number | null,
    fling_effect_id: number | null
}

export default Item;