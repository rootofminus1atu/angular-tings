export interface ICar {
    _id: string
    make: string
    model: string
    year: string
    image: string
}

export class NewCar implements ICar {
    _id!: string
    make: string
    model: string
    year: string
    image: string

    constructor(make: string, model: string, year: string, image: string) {
        this.make = make
        this.model = model
        this.year = year
        this.image = image
    }
}