export class People {
    public name: string
    public height: number
    public mass: number
    public hair_color: string
    public skin_color: string
    public eye_color: string
    public birth_year: string
    public gender: string
    public homeworld: string
    public films: string[]

    public species: string[]

    public vehicles: string[]
    public starships: string[]
    public created: Date
    public edited: Date
    public url: string


    public static fromJson(json: any): People {
        const p: People = {
            name: json.name,
            height: json.height,
            mass: json.mass,
            hair_color: json.hair_color,
            skin_color: json.skin_color,
            eye_color: json.eye_color,
            birth_year: json.birth_year,
            gender: json.gender,
            homeworld: json.homeworld,
            films: json.films,
            species: json.species,
            vehicles: json.vehicles,
            starships: json.starships,
            created: json.created,
            edited: json.edited,
            url: json.url
        }
        return p
    }

}
