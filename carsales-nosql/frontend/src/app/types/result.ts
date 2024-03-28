type Result<T, E> = 
  | { 
      ok: true, 
      value: T, 
      unwrap(): T, 
      unwrapOr(defaultValue: T): T,
      unwrapOrElse(f: (error: E) => T): T,
      isOk(): boolean,
      isErr(): boolean
    } 
  | { 
      ok: false, 
      error: E, 
      unwrap(): never, 
      unwrapOr(defaultValue: T): T,
      unwrapOrElse(f: (error: E) => T): T,
      isOk(): boolean,
      isErr(): boolean 
    }

const Ok = <T>(data: T): Result<T, never> => {
  return { 
    ok: true, 
    value: data, 
    unwrap: () => data, 
    unwrapOr: (_) => data,
    unwrapOrElse: (_) => data,
    isOk: () => true,
    isErr: () => false
  }
}

const Err = <E>(error: E): Result<never, E> => {
  return { 
    ok: false, 
    error, 
    unwrap: () => { throw new Error("Called 'unwrap' on an Err value") }, 
    unwrapOr: (defaultValue) => defaultValue,
    unwrapOrElse: (f) => f(error),
    isOk: () => true,
    isErr: () => false
  }
}





type Result2<T, E> = { ok: true, value: T } | { ok: false, error: E }

const Ok2 = <T>(data: T): Result2<T, never> => {
  return { ok: true, value: data }
}
 
const Err2 = <E>(error: E): Result2<never, E> => {
  return { ok: false, error }
}
