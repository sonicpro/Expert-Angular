export class Movie {

    public constructor(
        private _movie_id: number,
        private _title: string,
        private _phase: string,
        private _category_name: string,
        private _release_year: number,
        private _running_time: number,
        private _rating_name: string,
        private _disc_format_name: string,
        private _number_discs: number,
        private _viewing_format_name: string,
        private _aspect_ratio_name: string,
        private _status: string,
        private _release_date: string,
        private _budget: number,
        private _gross: number,
        private _time_stamp: Date){

    }

    public toString = (): string => {

        return `Movie (movie_id: ${this._movie_id},
        title: ${this._title},
        phase: ${this._phase},
        category_name: ${this._category_name},
        release_year: ${this._release_year},
        running_time: ${this._running_time},
        rating_name: ${this._rating_name},
        disc_format_name: ${this._disc_format_name},
        number_discs: ${this._number_discs},
        viewing_format_name: ${this._viewing_format_name},
        aspect_ratio_name: ${this._aspect_ratio_name},
        status: ${this._status},
        release_date: ${this._release_date},
        budget: ${this._budget},
        gross: ${this._gross},
        time_stamp: ${this._time_stamp})`;
    }

    public get movie_id(): number{
        return this._movie_id;
    }
    public get title(): string{
        return this._title;
    }
    public get phase(): string{
        return this._phase;
    }
    public get category_name(): string{
        return this._category_name;
    }
    public get release_year(): number{
        return this._release_year;
    }
    public get running_time(): number{
        return this._running_time;
    }
    public get rating_name(): string{
        return this._rating_name;
    }
    public get disc_format_name(): string{
        return this._disc_format_name;
    }
    public get number_discs(): number{
        return this._number_discs;
    }
    public get viewing_format_name(): string{
        return this._viewing_format_name;
    }
    public get aspect_ratio_name(): string{
        return this._aspect_ratio_name;
    }
    public get status(): string{
        return this._status;
    }
    public get release_date(): string{
        return this._release_date;
    }
    public get budget(): number{
        return this._budget;
    }
    public get gross(): number{
        return this._gross;
    }
    public get time_stamp(): Date{
        return this._time_stamp;
    }

    public set movie_id(movie_id: number){
        this._movie_id = movie_id;
    }
    public set title(title: string){
        this._title = title;
    }
    public set phase(phase: string){
        this._phase = phase;
    }
    public set category_nam(category_name: string){
        this._category_name = category_name;
    }
    public set release_year(release_year: number){
        this._release_year = release_year;
    }
    public set running_time(running_time: number){
        this._running_time = running_time;
    }
    public set rating_name(rating_name: string){
        this._rating_name = rating_name;
    }
    public set disc_format_name(disc_format_name: string){
        this._disc_format_name = disc_format_name;
    }
    public set number_discs(number_discs: number){
        this._number_discs = number_discs;
    }
    public set viewing_format_name(viewing_format_name: string){
        this._viewing_format_name = viewing_format_name;
    }
    public set aspect_ratio_name(aspect_ratio_name: string){
        this._aspect_ratio_name = aspect_ratio_name;
    }
    public set status(status: string){
        this._status = status;
    }
    public set release_date(release_date: string){
        this._release_date = release_date;
    }
    public set budget(budget: number){
        this._budget = budget;
    }
    public set gross(gross: number){
        this._gross = gross;
    }
    public set time_stamp(time_stamp: Date){
        this._time_stamp = time_stamp;
    }


}

export enum MovieFields{
    movie_id,
    title,
    phase,
    category_name,
    release_year,
    running_time,
    rating_name,
    disc_format_name,
    number_discs,
    viewing_format_name,
    aspect_ratio_name,
    status,
    release_date,
    budget,
    gross,
    time_stamp
}
