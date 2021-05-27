export interface Generation{
    name: string;
    url: string;
}
export interface PaginatedGeneration{
    count: number;
    next: string;
    previous: string;
    results: Generation[];
}