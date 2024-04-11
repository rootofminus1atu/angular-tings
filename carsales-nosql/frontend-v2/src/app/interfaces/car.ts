import { err, ok, Result } from "neverthrow"


export interface ICarAddResponse {
    acknowledged: boolean
    insertedId: string
}

/**
 * Represents an unchecked deletion response from the server. 
 * It's unchecked because the `deletedCount` field could be 0, indicating a failed deletion attempt.
 */
export interface ICarDeleteResponse {
    acknowledged: boolean
    deletedCount: number
}

/**
 * Represents a checked deletion response from the server.
 * This interface guarantees that the deletion did take place.
 */
export interface ICarDeleteResponseChecked {
    acknowledged: boolean
    deletedId: string
}

export function toChecked(res: ICarDeleteResponse, id: string): Result<ICarDeleteResponseChecked, string> {
    if (res.deletedCount > 0) {
        return ok({
            acknowledged: res.acknowledged,
            deletedId: id
        });
    } else {
        // assuming that a deletedCount of 0 means that a car with a given id was not found (when testing in postman that's how it works)
        return err("Deletion failed error, the car that you wanted to delete was not found in the database");
    }
}

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