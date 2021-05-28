export interface BaseResult{
    name: string;
    url: string;
}
export interface PaginatedGeneration{
    count: number;
    next: string;
    previous: string;
    results: BaseResult[];
}

export interface PaginatedLocation{
    count: number;
    next: string;
    previous: string;
    results: BaseResult[];
}


export interface Paginateditems{
    count: number;
    next: string;
    previous: string;
    results: BaseResult[];
}