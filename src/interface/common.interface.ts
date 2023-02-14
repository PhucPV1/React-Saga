 export interface IPaginationParams {
    _limit:number
    _page:number
    _total:number
 }

 export interface IListResponse <T>{
    data: T[]
    pagination: IPaginationParams
 }

 export interface IListParams {
    _limit:number
    _page:number
    _sort:string
    _order: 'desc'|'asc'
    [key:string]:any
 }