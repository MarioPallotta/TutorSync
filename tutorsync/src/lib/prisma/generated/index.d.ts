
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model COURSES
 * 
 */
export type COURSES = $Result.DefaultSelection<Prisma.$COURSESPayload>
/**
 * Model ENROLLMENTS
 * 
 */
export type ENROLLMENTS = $Result.DefaultSelection<Prisma.$ENROLLMENTSPayload>
/**
 * Model SCHEDULE
 * 
 */
export type SCHEDULE = $Result.DefaultSelection<Prisma.$SCHEDULEPayload>
/**
 * Model STUDY_BUDDY_GROUPS
 * 
 */
export type STUDY_BUDDY_GROUPS = $Result.DefaultSelection<Prisma.$STUDY_BUDDY_GROUPSPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model TUTORING_SESSION
 * 
 */
export type TUTORING_SESSION = $Result.DefaultSelection<Prisma.$TUTORING_SESSIONPayload>
/**
 * Model TUTOR_AVAILABILITY
 * 
 */
export type TUTOR_AVAILABILITY = $Result.DefaultSelection<Prisma.$TUTOR_AVAILABILITYPayload>
/**
 * Model Tutor
 * 
 */
export type Tutor = $Result.DefaultSelection<Prisma.$TutorPayload>
/**
 * Model USERS
 * 
 */
export type USERS = $Result.DefaultSelection<Prisma.$USERSPayload>
/**
 * Model TUTOR_COURSE
 * 
 */
export type TUTOR_COURSE = $Result.DefaultSelection<Prisma.$TUTOR_COURSEPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cOURSES`: Exposes CRUD operations for the **COURSES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more COURSES
    * const cOURSES = await prisma.cOURSES.findMany()
    * ```
    */
  get cOURSES(): Prisma.COURSESDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eNROLLMENTS`: Exposes CRUD operations for the **ENROLLMENTS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ENROLLMENTS
    * const eNROLLMENTS = await prisma.eNROLLMENTS.findMany()
    * ```
    */
  get eNROLLMENTS(): Prisma.ENROLLMENTSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sCHEDULE`: Exposes CRUD operations for the **SCHEDULE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SCHEDULES
    * const sCHEDULES = await prisma.sCHEDULE.findMany()
    * ```
    */
  get sCHEDULE(): Prisma.SCHEDULEDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sTUDY_BUDDY_GROUPS`: Exposes CRUD operations for the **STUDY_BUDDY_GROUPS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more STUDY_BUDDY_GROUPS
    * const sTUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.findMany()
    * ```
    */
  get sTUDY_BUDDY_GROUPS(): Prisma.STUDY_BUDDY_GROUPSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tUTORING_SESSION`: Exposes CRUD operations for the **TUTORING_SESSION** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TUTORING_SESSIONS
    * const tUTORING_SESSIONS = await prisma.tUTORING_SESSION.findMany()
    * ```
    */
  get tUTORING_SESSION(): Prisma.TUTORING_SESSIONDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tUTOR_AVAILABILITY`: Exposes CRUD operations for the **TUTOR_AVAILABILITY** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TUTOR_AVAILABILITIES
    * const tUTOR_AVAILABILITIES = await prisma.tUTOR_AVAILABILITY.findMany()
    * ```
    */
  get tUTOR_AVAILABILITY(): Prisma.TUTOR_AVAILABILITYDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutor`: Exposes CRUD operations for the **Tutor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tutors
    * const tutors = await prisma.tutor.findMany()
    * ```
    */
  get tutor(): Prisma.TutorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uSERS`: Exposes CRUD operations for the **USERS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USERS
    * const uSERS = await prisma.uSERS.findMany()
    * ```
    */
  get uSERS(): Prisma.USERSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tUTOR_COURSE`: Exposes CRUD operations for the **TUTOR_COURSE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TUTOR_COURSES
    * const tUTOR_COURSES = await prisma.tUTOR_COURSE.findMany()
    * ```
    */
  get tUTOR_COURSE(): Prisma.TUTOR_COURSEDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    COURSES: 'COURSES',
    ENROLLMENTS: 'ENROLLMENTS',
    SCHEDULE: 'SCHEDULE',
    STUDY_BUDDY_GROUPS: 'STUDY_BUDDY_GROUPS',
    Student: 'Student',
    TUTORING_SESSION: 'TUTORING_SESSION',
    TUTOR_AVAILABILITY: 'TUTOR_AVAILABILITY',
    Tutor: 'Tutor',
    USERS: 'USERS',
    TUTOR_COURSE: 'TUTOR_COURSE'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "cOURSES" | "eNROLLMENTS" | "sCHEDULE" | "sTUDY_BUDDY_GROUPS" | "student" | "tUTORING_SESSION" | "tUTOR_AVAILABILITY" | "tutor" | "uSERS" | "tUTOR_COURSE"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      COURSES: {
        payload: Prisma.$COURSESPayload<ExtArgs>
        fields: Prisma.COURSESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.COURSESFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COURSESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.COURSESFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COURSESPayload>
          }
          findFirst: {
            args: Prisma.COURSESFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COURSESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.COURSESFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COURSESPayload>
          }
          findMany: {
            args: Prisma.COURSESFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COURSESPayload>[]
          }
          create: {
            args: Prisma.COURSESCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COURSESPayload>
          }
          createMany: {
            args: Prisma.COURSESCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.COURSESDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COURSESPayload>
          }
          update: {
            args: Prisma.COURSESUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COURSESPayload>
          }
          deleteMany: {
            args: Prisma.COURSESDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.COURSESUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.COURSESUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COURSESPayload>
          }
          aggregate: {
            args: Prisma.COURSESAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCOURSES>
          }
          groupBy: {
            args: Prisma.COURSESGroupByArgs<ExtArgs>
            result: $Utils.Optional<COURSESGroupByOutputType>[]
          }
          count: {
            args: Prisma.COURSESCountArgs<ExtArgs>
            result: $Utils.Optional<COURSESCountAggregateOutputType> | number
          }
        }
      }
      ENROLLMENTS: {
        payload: Prisma.$ENROLLMENTSPayload<ExtArgs>
        fields: Prisma.ENROLLMENTSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ENROLLMENTSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENROLLMENTSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ENROLLMENTSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENROLLMENTSPayload>
          }
          findFirst: {
            args: Prisma.ENROLLMENTSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENROLLMENTSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ENROLLMENTSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENROLLMENTSPayload>
          }
          findMany: {
            args: Prisma.ENROLLMENTSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENROLLMENTSPayload>[]
          }
          create: {
            args: Prisma.ENROLLMENTSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENROLLMENTSPayload>
          }
          createMany: {
            args: Prisma.ENROLLMENTSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ENROLLMENTSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENROLLMENTSPayload>
          }
          update: {
            args: Prisma.ENROLLMENTSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENROLLMENTSPayload>
          }
          deleteMany: {
            args: Prisma.ENROLLMENTSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ENROLLMENTSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ENROLLMENTSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ENROLLMENTSPayload>
          }
          aggregate: {
            args: Prisma.ENROLLMENTSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateENROLLMENTS>
          }
          groupBy: {
            args: Prisma.ENROLLMENTSGroupByArgs<ExtArgs>
            result: $Utils.Optional<ENROLLMENTSGroupByOutputType>[]
          }
          count: {
            args: Prisma.ENROLLMENTSCountArgs<ExtArgs>
            result: $Utils.Optional<ENROLLMENTSCountAggregateOutputType> | number
          }
        }
      }
      SCHEDULE: {
        payload: Prisma.$SCHEDULEPayload<ExtArgs>
        fields: Prisma.SCHEDULEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SCHEDULEFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHEDULEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SCHEDULEFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHEDULEPayload>
          }
          findFirst: {
            args: Prisma.SCHEDULEFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHEDULEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SCHEDULEFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHEDULEPayload>
          }
          findMany: {
            args: Prisma.SCHEDULEFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHEDULEPayload>[]
          }
          create: {
            args: Prisma.SCHEDULECreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHEDULEPayload>
          }
          createMany: {
            args: Prisma.SCHEDULECreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SCHEDULEDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHEDULEPayload>
          }
          update: {
            args: Prisma.SCHEDULEUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHEDULEPayload>
          }
          deleteMany: {
            args: Prisma.SCHEDULEDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SCHEDULEUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SCHEDULEUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SCHEDULEPayload>
          }
          aggregate: {
            args: Prisma.SCHEDULEAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSCHEDULE>
          }
          groupBy: {
            args: Prisma.SCHEDULEGroupByArgs<ExtArgs>
            result: $Utils.Optional<SCHEDULEGroupByOutputType>[]
          }
          count: {
            args: Prisma.SCHEDULECountArgs<ExtArgs>
            result: $Utils.Optional<SCHEDULECountAggregateOutputType> | number
          }
        }
      }
      STUDY_BUDDY_GROUPS: {
        payload: Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>
        fields: Prisma.STUDY_BUDDY_GROUPSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.STUDY_BUDDY_GROUPSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDY_BUDDY_GROUPSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.STUDY_BUDDY_GROUPSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDY_BUDDY_GROUPSPayload>
          }
          findFirst: {
            args: Prisma.STUDY_BUDDY_GROUPSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDY_BUDDY_GROUPSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.STUDY_BUDDY_GROUPSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDY_BUDDY_GROUPSPayload>
          }
          findMany: {
            args: Prisma.STUDY_BUDDY_GROUPSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDY_BUDDY_GROUPSPayload>[]
          }
          create: {
            args: Prisma.STUDY_BUDDY_GROUPSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDY_BUDDY_GROUPSPayload>
          }
          createMany: {
            args: Prisma.STUDY_BUDDY_GROUPSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.STUDY_BUDDY_GROUPSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDY_BUDDY_GROUPSPayload>
          }
          update: {
            args: Prisma.STUDY_BUDDY_GROUPSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDY_BUDDY_GROUPSPayload>
          }
          deleteMany: {
            args: Prisma.STUDY_BUDDY_GROUPSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.STUDY_BUDDY_GROUPSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.STUDY_BUDDY_GROUPSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$STUDY_BUDDY_GROUPSPayload>
          }
          aggregate: {
            args: Prisma.STUDY_BUDDY_GROUPSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSTUDY_BUDDY_GROUPS>
          }
          groupBy: {
            args: Prisma.STUDY_BUDDY_GROUPSGroupByArgs<ExtArgs>
            result: $Utils.Optional<STUDY_BUDDY_GROUPSGroupByOutputType>[]
          }
          count: {
            args: Prisma.STUDY_BUDDY_GROUPSCountArgs<ExtArgs>
            result: $Utils.Optional<STUDY_BUDDY_GROUPSCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      TUTORING_SESSION: {
        payload: Prisma.$TUTORING_SESSIONPayload<ExtArgs>
        fields: Prisma.TUTORING_SESSIONFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TUTORING_SESSIONFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTORING_SESSIONPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TUTORING_SESSIONFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTORING_SESSIONPayload>
          }
          findFirst: {
            args: Prisma.TUTORING_SESSIONFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTORING_SESSIONPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TUTORING_SESSIONFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTORING_SESSIONPayload>
          }
          findMany: {
            args: Prisma.TUTORING_SESSIONFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTORING_SESSIONPayload>[]
          }
          create: {
            args: Prisma.TUTORING_SESSIONCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTORING_SESSIONPayload>
          }
          createMany: {
            args: Prisma.TUTORING_SESSIONCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TUTORING_SESSIONDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTORING_SESSIONPayload>
          }
          update: {
            args: Prisma.TUTORING_SESSIONUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTORING_SESSIONPayload>
          }
          deleteMany: {
            args: Prisma.TUTORING_SESSIONDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TUTORING_SESSIONUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TUTORING_SESSIONUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTORING_SESSIONPayload>
          }
          aggregate: {
            args: Prisma.TUTORING_SESSIONAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTUTORING_SESSION>
          }
          groupBy: {
            args: Prisma.TUTORING_SESSIONGroupByArgs<ExtArgs>
            result: $Utils.Optional<TUTORING_SESSIONGroupByOutputType>[]
          }
          count: {
            args: Prisma.TUTORING_SESSIONCountArgs<ExtArgs>
            result: $Utils.Optional<TUTORING_SESSIONCountAggregateOutputType> | number
          }
        }
      }
      TUTOR_AVAILABILITY: {
        payload: Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>
        fields: Prisma.TUTOR_AVAILABILITYFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TUTOR_AVAILABILITYFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_AVAILABILITYPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TUTOR_AVAILABILITYFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_AVAILABILITYPayload>
          }
          findFirst: {
            args: Prisma.TUTOR_AVAILABILITYFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_AVAILABILITYPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TUTOR_AVAILABILITYFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_AVAILABILITYPayload>
          }
          findMany: {
            args: Prisma.TUTOR_AVAILABILITYFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_AVAILABILITYPayload>[]
          }
          create: {
            args: Prisma.TUTOR_AVAILABILITYCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_AVAILABILITYPayload>
          }
          createMany: {
            args: Prisma.TUTOR_AVAILABILITYCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TUTOR_AVAILABILITYDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_AVAILABILITYPayload>
          }
          update: {
            args: Prisma.TUTOR_AVAILABILITYUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_AVAILABILITYPayload>
          }
          deleteMany: {
            args: Prisma.TUTOR_AVAILABILITYDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TUTOR_AVAILABILITYUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TUTOR_AVAILABILITYUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_AVAILABILITYPayload>
          }
          aggregate: {
            args: Prisma.TUTOR_AVAILABILITYAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTUTOR_AVAILABILITY>
          }
          groupBy: {
            args: Prisma.TUTOR_AVAILABILITYGroupByArgs<ExtArgs>
            result: $Utils.Optional<TUTOR_AVAILABILITYGroupByOutputType>[]
          }
          count: {
            args: Prisma.TUTOR_AVAILABILITYCountArgs<ExtArgs>
            result: $Utils.Optional<TUTOR_AVAILABILITYCountAggregateOutputType> | number
          }
        }
      }
      Tutor: {
        payload: Prisma.$TutorPayload<ExtArgs>
        fields: Prisma.TutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          findFirst: {
            args: Prisma.TutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          findMany: {
            args: Prisma.TutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>[]
          }
          create: {
            args: Prisma.TutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          createMany: {
            args: Prisma.TutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          update: {
            args: Prisma.TutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          deleteMany: {
            args: Prisma.TutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutorPayload>
          }
          aggregate: {
            args: Prisma.TutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutor>
          }
          groupBy: {
            args: Prisma.TutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutorCountArgs<ExtArgs>
            result: $Utils.Optional<TutorCountAggregateOutputType> | number
          }
        }
      }
      USERS: {
        payload: Prisma.$USERSPayload<ExtArgs>
        fields: Prisma.USERSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USERSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USERSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          findFirst: {
            args: Prisma.USERSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USERSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          findMany: {
            args: Prisma.USERSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>[]
          }
          create: {
            args: Prisma.USERSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          createMany: {
            args: Prisma.USERSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.USERSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          update: {
            args: Prisma.USERSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          deleteMany: {
            args: Prisma.USERSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.USERSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.USERSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERSPayload>
          }
          aggregate: {
            args: Prisma.USERSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUSERS>
          }
          groupBy: {
            args: Prisma.USERSGroupByArgs<ExtArgs>
            result: $Utils.Optional<USERSGroupByOutputType>[]
          }
          count: {
            args: Prisma.USERSCountArgs<ExtArgs>
            result: $Utils.Optional<USERSCountAggregateOutputType> | number
          }
        }
      }
      TUTOR_COURSE: {
        payload: Prisma.$TUTOR_COURSEPayload<ExtArgs>
        fields: Prisma.TUTOR_COURSEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TUTOR_COURSEFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_COURSEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TUTOR_COURSEFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_COURSEPayload>
          }
          findFirst: {
            args: Prisma.TUTOR_COURSEFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_COURSEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TUTOR_COURSEFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_COURSEPayload>
          }
          findMany: {
            args: Prisma.TUTOR_COURSEFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_COURSEPayload>[]
          }
          create: {
            args: Prisma.TUTOR_COURSECreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_COURSEPayload>
          }
          createMany: {
            args: Prisma.TUTOR_COURSECreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TUTOR_COURSEDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_COURSEPayload>
          }
          update: {
            args: Prisma.TUTOR_COURSEUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_COURSEPayload>
          }
          deleteMany: {
            args: Prisma.TUTOR_COURSEDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TUTOR_COURSEUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TUTOR_COURSEUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TUTOR_COURSEPayload>
          }
          aggregate: {
            args: Prisma.TUTOR_COURSEAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTUTOR_COURSE>
          }
          groupBy: {
            args: Prisma.TUTOR_COURSEGroupByArgs<ExtArgs>
            result: $Utils.Optional<TUTOR_COURSEGroupByOutputType>[]
          }
          count: {
            args: Prisma.TUTOR_COURSECountArgs<ExtArgs>
            result: $Utils.Optional<TUTOR_COURSECountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    cOURSES?: COURSESOmit
    eNROLLMENTS?: ENROLLMENTSOmit
    sCHEDULE?: SCHEDULEOmit
    sTUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSOmit
    student?: StudentOmit
    tUTORING_SESSION?: TUTORING_SESSIONOmit
    tUTOR_AVAILABILITY?: TUTOR_AVAILABILITYOmit
    tutor?: TutorOmit
    uSERS?: USERSOmit
    tUTOR_COURSE?: TUTOR_COURSEOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    SCHEDULE: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SCHEDULE?: boolean | AdminCountOutputTypeCountSCHEDULEArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountSCHEDULEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SCHEDULEWhereInput
  }


  /**
   * Count Type COURSESCountOutputType
   */

  export type COURSESCountOutputType = {
    ENROLLMENTS: number
    TUTOR_COURSE: number
  }

  export type COURSESCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ENROLLMENTS?: boolean | COURSESCountOutputTypeCountENROLLMENTSArgs
    TUTOR_COURSE?: boolean | COURSESCountOutputTypeCountTUTOR_COURSEArgs
  }

  // Custom InputTypes
  /**
   * COURSESCountOutputType without action
   */
  export type COURSESCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COURSESCountOutputType
     */
    select?: COURSESCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * COURSESCountOutputType without action
   */
  export type COURSESCountOutputTypeCountENROLLMENTSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ENROLLMENTSWhereInput
  }

  /**
   * COURSESCountOutputType without action
   */
  export type COURSESCountOutputTypeCountTUTOR_COURSEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TUTOR_COURSEWhereInput
  }


  /**
   * Count Type ENROLLMENTSCountOutputType
   */

  export type ENROLLMENTSCountOutputType = {
    STUDY_BUDDY_GROUPS: number
    TUTORING_SESSION: number
  }

  export type ENROLLMENTSCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    STUDY_BUDDY_GROUPS?: boolean | ENROLLMENTSCountOutputTypeCountSTUDY_BUDDY_GROUPSArgs
    TUTORING_SESSION?: boolean | ENROLLMENTSCountOutputTypeCountTUTORING_SESSIONArgs
  }

  // Custom InputTypes
  /**
   * ENROLLMENTSCountOutputType without action
   */
  export type ENROLLMENTSCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTSCountOutputType
     */
    select?: ENROLLMENTSCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ENROLLMENTSCountOutputType without action
   */
  export type ENROLLMENTSCountOutputTypeCountSTUDY_BUDDY_GROUPSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: STUDY_BUDDY_GROUPSWhereInput
  }

  /**
   * ENROLLMENTSCountOutputType without action
   */
  export type ENROLLMENTSCountOutputTypeCountTUTORING_SESSIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TUTORING_SESSIONWhereInput
  }


  /**
   * Count Type TUTOR_AVAILABILITYCountOutputType
   */

  export type TUTOR_AVAILABILITYCountOutputType = {
    SCHEDULE: number
  }

  export type TUTOR_AVAILABILITYCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SCHEDULE?: boolean | TUTOR_AVAILABILITYCountOutputTypeCountSCHEDULEArgs
  }

  // Custom InputTypes
  /**
   * TUTOR_AVAILABILITYCountOutputType without action
   */
  export type TUTOR_AVAILABILITYCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITYCountOutputType
     */
    select?: TUTOR_AVAILABILITYCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TUTOR_AVAILABILITYCountOutputType without action
   */
  export type TUTOR_AVAILABILITYCountOutputTypeCountSCHEDULEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SCHEDULEWhereInput
  }


  /**
   * Count Type TutorCountOutputType
   */

  export type TutorCountOutputType = {
    ENROLLMENTS: number
    STUDY_BUDDY_GROUPS: number
    TUTORING_SESSION: number
    TUTOR_AVAILABILITY: number
    TUTOR_COURSE: number
  }

  export type TutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ENROLLMENTS?: boolean | TutorCountOutputTypeCountENROLLMENTSArgs
    STUDY_BUDDY_GROUPS?: boolean | TutorCountOutputTypeCountSTUDY_BUDDY_GROUPSArgs
    TUTORING_SESSION?: boolean | TutorCountOutputTypeCountTUTORING_SESSIONArgs
    TUTOR_AVAILABILITY?: boolean | TutorCountOutputTypeCountTUTOR_AVAILABILITYArgs
    TUTOR_COURSE?: boolean | TutorCountOutputTypeCountTUTOR_COURSEArgs
  }

  // Custom InputTypes
  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutorCountOutputType
     */
    select?: TutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeCountENROLLMENTSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ENROLLMENTSWhereInput
  }

  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeCountSTUDY_BUDDY_GROUPSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: STUDY_BUDDY_GROUPSWhereInput
  }

  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeCountTUTORING_SESSIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TUTORING_SESSIONWhereInput
  }

  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeCountTUTOR_AVAILABILITYArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TUTOR_AVAILABILITYWhereInput
  }

  /**
   * TutorCountOutputType without action
   */
  export type TutorCountOutputTypeCountTUTOR_COURSEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TUTOR_COURSEWhereInput
  }


  /**
   * Count Type USERSCountOutputType
   */

  export type USERSCountOutputType = {
    ENROLLMENTS: number
    STUDY_BUDDY_GROUPS: number
    TUTORING_SESSION: number
  }

  export type USERSCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ENROLLMENTS?: boolean | USERSCountOutputTypeCountENROLLMENTSArgs
    STUDY_BUDDY_GROUPS?: boolean | USERSCountOutputTypeCountSTUDY_BUDDY_GROUPSArgs
    TUTORING_SESSION?: boolean | USERSCountOutputTypeCountTUTORING_SESSIONArgs
  }

  // Custom InputTypes
  /**
   * USERSCountOutputType without action
   */
  export type USERSCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERSCountOutputType
     */
    select?: USERSCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * USERSCountOutputType without action
   */
  export type USERSCountOutputTypeCountENROLLMENTSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ENROLLMENTSWhereInput
  }

  /**
   * USERSCountOutputType without action
   */
  export type USERSCountOutputTypeCountSTUDY_BUDDY_GROUPSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: STUDY_BUDDY_GROUPSWhereInput
  }

  /**
   * USERSCountOutputType without action
   */
  export type USERSCountOutputTypeCountTUTORING_SESSIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TUTORING_SESSIONWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    Admin_ID: number | null
    User_ID: number | null
  }

  export type AdminSumAggregateOutputType = {
    Admin_ID: number | null
    User_ID: number | null
  }

  export type AdminMinAggregateOutputType = {
    Admin_ID: number | null
    User_ID: number | null
  }

  export type AdminMaxAggregateOutputType = {
    Admin_ID: number | null
    User_ID: number | null
  }

  export type AdminCountAggregateOutputType = {
    Admin_ID: number
    User_ID: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    Admin_ID?: true
    User_ID?: true
  }

  export type AdminSumAggregateInputType = {
    Admin_ID?: true
    User_ID?: true
  }

  export type AdminMinAggregateInputType = {
    Admin_ID?: true
    User_ID?: true
  }

  export type AdminMaxAggregateInputType = {
    Admin_ID?: true
    User_ID?: true
  }

  export type AdminCountAggregateInputType = {
    Admin_ID?: true
    User_ID?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    Admin_ID: number
    User_ID: number
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Admin_ID?: boolean
    User_ID?: boolean
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
    SCHEDULE?: boolean | Admin$SCHEDULEArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    Admin_ID?: boolean
    User_ID?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Admin_ID" | "User_ID", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
    SCHEDULE?: boolean | Admin$SCHEDULEArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      USERS: Prisma.$USERSPayload<ExtArgs>
      SCHEDULE: Prisma.$SCHEDULEPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Admin_ID: number
      User_ID: number
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `Admin_ID`
     * const adminWithAdmin_IDOnly = await prisma.admin.findMany({ select: { Admin_ID: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    USERS<T extends USERSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERSDefaultArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SCHEDULE<T extends Admin$SCHEDULEArgs<ExtArgs> = {}>(args?: Subset<T, Admin$SCHEDULEArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SCHEDULEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly Admin_ID: FieldRef<"Admin", 'Int'>
    readonly User_ID: FieldRef<"Admin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.SCHEDULE
   */
  export type Admin$SCHEDULEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
    where?: SCHEDULEWhereInput
    orderBy?: SCHEDULEOrderByWithRelationInput | SCHEDULEOrderByWithRelationInput[]
    cursor?: SCHEDULEWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SCHEDULEScalarFieldEnum | SCHEDULEScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model COURSES
   */

  export type AggregateCOURSES = {
    _count: COURSESCountAggregateOutputType | null
    _avg: COURSESAvgAggregateOutputType | null
    _sum: COURSESSumAggregateOutputType | null
    _min: COURSESMinAggregateOutputType | null
    _max: COURSESMaxAggregateOutputType | null
  }

  export type COURSESAvgAggregateOutputType = {
    Course_ID: number | null
    Course_Number: number | null
    Course_Section: Decimal | null
    Enrolled_Count: number | null
  }

  export type COURSESSumAggregateOutputType = {
    Course_ID: number | null
    Course_Number: number | null
    Course_Section: Decimal | null
    Enrolled_Count: number | null
  }

  export type COURSESMinAggregateOutputType = {
    Course_ID: number | null
    Course_Number: number | null
    Course_Section: Decimal | null
    Course_Title: string | null
    Course_Instructor: string | null
    Enrolled_Count: number | null
  }

  export type COURSESMaxAggregateOutputType = {
    Course_ID: number | null
    Course_Number: number | null
    Course_Section: Decimal | null
    Course_Title: string | null
    Course_Instructor: string | null
    Enrolled_Count: number | null
  }

  export type COURSESCountAggregateOutputType = {
    Course_ID: number
    Course_Number: number
    Course_Section: number
    Course_Title: number
    Course_Instructor: number
    Enrolled_Count: number
    _all: number
  }


  export type COURSESAvgAggregateInputType = {
    Course_ID?: true
    Course_Number?: true
    Course_Section?: true
    Enrolled_Count?: true
  }

  export type COURSESSumAggregateInputType = {
    Course_ID?: true
    Course_Number?: true
    Course_Section?: true
    Enrolled_Count?: true
  }

  export type COURSESMinAggregateInputType = {
    Course_ID?: true
    Course_Number?: true
    Course_Section?: true
    Course_Title?: true
    Course_Instructor?: true
    Enrolled_Count?: true
  }

  export type COURSESMaxAggregateInputType = {
    Course_ID?: true
    Course_Number?: true
    Course_Section?: true
    Course_Title?: true
    Course_Instructor?: true
    Enrolled_Count?: true
  }

  export type COURSESCountAggregateInputType = {
    Course_ID?: true
    Course_Number?: true
    Course_Section?: true
    Course_Title?: true
    Course_Instructor?: true
    Enrolled_Count?: true
    _all?: true
  }

  export type COURSESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which COURSES to aggregate.
     */
    where?: COURSESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COURSES to fetch.
     */
    orderBy?: COURSESOrderByWithRelationInput | COURSESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: COURSESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COURSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COURSES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned COURSES
    **/
    _count?: true | COURSESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: COURSESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: COURSESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: COURSESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: COURSESMaxAggregateInputType
  }

  export type GetCOURSESAggregateType<T extends COURSESAggregateArgs> = {
        [P in keyof T & keyof AggregateCOURSES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCOURSES[P]>
      : GetScalarType<T[P], AggregateCOURSES[P]>
  }




  export type COURSESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: COURSESWhereInput
    orderBy?: COURSESOrderByWithAggregationInput | COURSESOrderByWithAggregationInput[]
    by: COURSESScalarFieldEnum[] | COURSESScalarFieldEnum
    having?: COURSESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: COURSESCountAggregateInputType | true
    _avg?: COURSESAvgAggregateInputType
    _sum?: COURSESSumAggregateInputType
    _min?: COURSESMinAggregateInputType
    _max?: COURSESMaxAggregateInputType
  }

  export type COURSESGroupByOutputType = {
    Course_ID: number
    Course_Number: number | null
    Course_Section: Decimal | null
    Course_Title: string | null
    Course_Instructor: string | null
    Enrolled_Count: number | null
    _count: COURSESCountAggregateOutputType | null
    _avg: COURSESAvgAggregateOutputType | null
    _sum: COURSESSumAggregateOutputType | null
    _min: COURSESMinAggregateOutputType | null
    _max: COURSESMaxAggregateOutputType | null
  }

  type GetCOURSESGroupByPayload<T extends COURSESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<COURSESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof COURSESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], COURSESGroupByOutputType[P]>
            : GetScalarType<T[P], COURSESGroupByOutputType[P]>
        }
      >
    >


  export type COURSESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Course_ID?: boolean
    Course_Number?: boolean
    Course_Section?: boolean
    Course_Title?: boolean
    Course_Instructor?: boolean
    Enrolled_Count?: boolean
    ENROLLMENTS?: boolean | COURSES$ENROLLMENTSArgs<ExtArgs>
    TUTOR_COURSE?: boolean | COURSES$TUTOR_COURSEArgs<ExtArgs>
    _count?: boolean | COURSESCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cOURSES"]>



  export type COURSESSelectScalar = {
    Course_ID?: boolean
    Course_Number?: boolean
    Course_Section?: boolean
    Course_Title?: boolean
    Course_Instructor?: boolean
    Enrolled_Count?: boolean
  }

  export type COURSESOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Course_ID" | "Course_Number" | "Course_Section" | "Course_Title" | "Course_Instructor" | "Enrolled_Count", ExtArgs["result"]["cOURSES"]>
  export type COURSESInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ENROLLMENTS?: boolean | COURSES$ENROLLMENTSArgs<ExtArgs>
    TUTOR_COURSE?: boolean | COURSES$TUTOR_COURSEArgs<ExtArgs>
    _count?: boolean | COURSESCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $COURSESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "COURSES"
    objects: {
      ENROLLMENTS: Prisma.$ENROLLMENTSPayload<ExtArgs>[]
      TUTOR_COURSE: Prisma.$TUTOR_COURSEPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Course_ID: number
      Course_Number: number | null
      Course_Section: Prisma.Decimal | null
      Course_Title: string | null
      Course_Instructor: string | null
      Enrolled_Count: number | null
    }, ExtArgs["result"]["cOURSES"]>
    composites: {}
  }

  type COURSESGetPayload<S extends boolean | null | undefined | COURSESDefaultArgs> = $Result.GetResult<Prisma.$COURSESPayload, S>

  type COURSESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<COURSESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: COURSESCountAggregateInputType | true
    }

  export interface COURSESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['COURSES'], meta: { name: 'COURSES' } }
    /**
     * Find zero or one COURSES that matches the filter.
     * @param {COURSESFindUniqueArgs} args - Arguments to find a COURSES
     * @example
     * // Get one COURSES
     * const cOURSES = await prisma.cOURSES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends COURSESFindUniqueArgs>(args: SelectSubset<T, COURSESFindUniqueArgs<ExtArgs>>): Prisma__COURSESClient<$Result.GetResult<Prisma.$COURSESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one COURSES that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {COURSESFindUniqueOrThrowArgs} args - Arguments to find a COURSES
     * @example
     * // Get one COURSES
     * const cOURSES = await prisma.cOURSES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends COURSESFindUniqueOrThrowArgs>(args: SelectSubset<T, COURSESFindUniqueOrThrowArgs<ExtArgs>>): Prisma__COURSESClient<$Result.GetResult<Prisma.$COURSESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first COURSES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COURSESFindFirstArgs} args - Arguments to find a COURSES
     * @example
     * // Get one COURSES
     * const cOURSES = await prisma.cOURSES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends COURSESFindFirstArgs>(args?: SelectSubset<T, COURSESFindFirstArgs<ExtArgs>>): Prisma__COURSESClient<$Result.GetResult<Prisma.$COURSESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first COURSES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COURSESFindFirstOrThrowArgs} args - Arguments to find a COURSES
     * @example
     * // Get one COURSES
     * const cOURSES = await prisma.cOURSES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends COURSESFindFirstOrThrowArgs>(args?: SelectSubset<T, COURSESFindFirstOrThrowArgs<ExtArgs>>): Prisma__COURSESClient<$Result.GetResult<Prisma.$COURSESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more COURSES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COURSESFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all COURSES
     * const cOURSES = await prisma.cOURSES.findMany()
     * 
     * // Get first 10 COURSES
     * const cOURSES = await prisma.cOURSES.findMany({ take: 10 })
     * 
     * // Only select the `Course_ID`
     * const cOURSESWithCourse_IDOnly = await prisma.cOURSES.findMany({ select: { Course_ID: true } })
     * 
     */
    findMany<T extends COURSESFindManyArgs>(args?: SelectSubset<T, COURSESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COURSESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a COURSES.
     * @param {COURSESCreateArgs} args - Arguments to create a COURSES.
     * @example
     * // Create one COURSES
     * const COURSES = await prisma.cOURSES.create({
     *   data: {
     *     // ... data to create a COURSES
     *   }
     * })
     * 
     */
    create<T extends COURSESCreateArgs>(args: SelectSubset<T, COURSESCreateArgs<ExtArgs>>): Prisma__COURSESClient<$Result.GetResult<Prisma.$COURSESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many COURSES.
     * @param {COURSESCreateManyArgs} args - Arguments to create many COURSES.
     * @example
     * // Create many COURSES
     * const cOURSES = await prisma.cOURSES.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends COURSESCreateManyArgs>(args?: SelectSubset<T, COURSESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a COURSES.
     * @param {COURSESDeleteArgs} args - Arguments to delete one COURSES.
     * @example
     * // Delete one COURSES
     * const COURSES = await prisma.cOURSES.delete({
     *   where: {
     *     // ... filter to delete one COURSES
     *   }
     * })
     * 
     */
    delete<T extends COURSESDeleteArgs>(args: SelectSubset<T, COURSESDeleteArgs<ExtArgs>>): Prisma__COURSESClient<$Result.GetResult<Prisma.$COURSESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one COURSES.
     * @param {COURSESUpdateArgs} args - Arguments to update one COURSES.
     * @example
     * // Update one COURSES
     * const cOURSES = await prisma.cOURSES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends COURSESUpdateArgs>(args: SelectSubset<T, COURSESUpdateArgs<ExtArgs>>): Prisma__COURSESClient<$Result.GetResult<Prisma.$COURSESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more COURSES.
     * @param {COURSESDeleteManyArgs} args - Arguments to filter COURSES to delete.
     * @example
     * // Delete a few COURSES
     * const { count } = await prisma.cOURSES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends COURSESDeleteManyArgs>(args?: SelectSubset<T, COURSESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more COURSES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COURSESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many COURSES
     * const cOURSES = await prisma.cOURSES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends COURSESUpdateManyArgs>(args: SelectSubset<T, COURSESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one COURSES.
     * @param {COURSESUpsertArgs} args - Arguments to update or create a COURSES.
     * @example
     * // Update or create a COURSES
     * const cOURSES = await prisma.cOURSES.upsert({
     *   create: {
     *     // ... data to create a COURSES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the COURSES we want to update
     *   }
     * })
     */
    upsert<T extends COURSESUpsertArgs>(args: SelectSubset<T, COURSESUpsertArgs<ExtArgs>>): Prisma__COURSESClient<$Result.GetResult<Prisma.$COURSESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of COURSES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COURSESCountArgs} args - Arguments to filter COURSES to count.
     * @example
     * // Count the number of COURSES
     * const count = await prisma.cOURSES.count({
     *   where: {
     *     // ... the filter for the COURSES we want to count
     *   }
     * })
    **/
    count<T extends COURSESCountArgs>(
      args?: Subset<T, COURSESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], COURSESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a COURSES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COURSESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends COURSESAggregateArgs>(args: Subset<T, COURSESAggregateArgs>): Prisma.PrismaPromise<GetCOURSESAggregateType<T>>

    /**
     * Group by COURSES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COURSESGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends COURSESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: COURSESGroupByArgs['orderBy'] }
        : { orderBy?: COURSESGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, COURSESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCOURSESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the COURSES model
   */
  readonly fields: COURSESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for COURSES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__COURSESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ENROLLMENTS<T extends COURSES$ENROLLMENTSArgs<ExtArgs> = {}>(args?: Subset<T, COURSES$ENROLLMENTSArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TUTOR_COURSE<T extends COURSES$TUTOR_COURSEArgs<ExtArgs> = {}>(args?: Subset<T, COURSES$TUTOR_COURSEArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TUTOR_COURSEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the COURSES model
   */
  interface COURSESFieldRefs {
    readonly Course_ID: FieldRef<"COURSES", 'Int'>
    readonly Course_Number: FieldRef<"COURSES", 'Int'>
    readonly Course_Section: FieldRef<"COURSES", 'Decimal'>
    readonly Course_Title: FieldRef<"COURSES", 'String'>
    readonly Course_Instructor: FieldRef<"COURSES", 'String'>
    readonly Enrolled_Count: FieldRef<"COURSES", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * COURSES findUnique
   */
  export type COURSESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COURSES
     */
    select?: COURSESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COURSES
     */
    omit?: COURSESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COURSESInclude<ExtArgs> | null
    /**
     * Filter, which COURSES to fetch.
     */
    where: COURSESWhereUniqueInput
  }

  /**
   * COURSES findUniqueOrThrow
   */
  export type COURSESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COURSES
     */
    select?: COURSESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COURSES
     */
    omit?: COURSESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COURSESInclude<ExtArgs> | null
    /**
     * Filter, which COURSES to fetch.
     */
    where: COURSESWhereUniqueInput
  }

  /**
   * COURSES findFirst
   */
  export type COURSESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COURSES
     */
    select?: COURSESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COURSES
     */
    omit?: COURSESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COURSESInclude<ExtArgs> | null
    /**
     * Filter, which COURSES to fetch.
     */
    where?: COURSESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COURSES to fetch.
     */
    orderBy?: COURSESOrderByWithRelationInput | COURSESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COURSES.
     */
    cursor?: COURSESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COURSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COURSES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COURSES.
     */
    distinct?: COURSESScalarFieldEnum | COURSESScalarFieldEnum[]
  }

  /**
   * COURSES findFirstOrThrow
   */
  export type COURSESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COURSES
     */
    select?: COURSESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COURSES
     */
    omit?: COURSESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COURSESInclude<ExtArgs> | null
    /**
     * Filter, which COURSES to fetch.
     */
    where?: COURSESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COURSES to fetch.
     */
    orderBy?: COURSESOrderByWithRelationInput | COURSESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COURSES.
     */
    cursor?: COURSESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COURSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COURSES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COURSES.
     */
    distinct?: COURSESScalarFieldEnum | COURSESScalarFieldEnum[]
  }

  /**
   * COURSES findMany
   */
  export type COURSESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COURSES
     */
    select?: COURSESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COURSES
     */
    omit?: COURSESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COURSESInclude<ExtArgs> | null
    /**
     * Filter, which COURSES to fetch.
     */
    where?: COURSESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COURSES to fetch.
     */
    orderBy?: COURSESOrderByWithRelationInput | COURSESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing COURSES.
     */
    cursor?: COURSESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COURSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COURSES.
     */
    skip?: number
    distinct?: COURSESScalarFieldEnum | COURSESScalarFieldEnum[]
  }

  /**
   * COURSES create
   */
  export type COURSESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COURSES
     */
    select?: COURSESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COURSES
     */
    omit?: COURSESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COURSESInclude<ExtArgs> | null
    /**
     * The data needed to create a COURSES.
     */
    data?: XOR<COURSESCreateInput, COURSESUncheckedCreateInput>
  }

  /**
   * COURSES createMany
   */
  export type COURSESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many COURSES.
     */
    data: COURSESCreateManyInput | COURSESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * COURSES update
   */
  export type COURSESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COURSES
     */
    select?: COURSESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COURSES
     */
    omit?: COURSESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COURSESInclude<ExtArgs> | null
    /**
     * The data needed to update a COURSES.
     */
    data: XOR<COURSESUpdateInput, COURSESUncheckedUpdateInput>
    /**
     * Choose, which COURSES to update.
     */
    where: COURSESWhereUniqueInput
  }

  /**
   * COURSES updateMany
   */
  export type COURSESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update COURSES.
     */
    data: XOR<COURSESUpdateManyMutationInput, COURSESUncheckedUpdateManyInput>
    /**
     * Filter which COURSES to update
     */
    where?: COURSESWhereInput
    /**
     * Limit how many COURSES to update.
     */
    limit?: number
  }

  /**
   * COURSES upsert
   */
  export type COURSESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COURSES
     */
    select?: COURSESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COURSES
     */
    omit?: COURSESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COURSESInclude<ExtArgs> | null
    /**
     * The filter to search for the COURSES to update in case it exists.
     */
    where: COURSESWhereUniqueInput
    /**
     * In case the COURSES found by the `where` argument doesn't exist, create a new COURSES with this data.
     */
    create: XOR<COURSESCreateInput, COURSESUncheckedCreateInput>
    /**
     * In case the COURSES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<COURSESUpdateInput, COURSESUncheckedUpdateInput>
  }

  /**
   * COURSES delete
   */
  export type COURSESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COURSES
     */
    select?: COURSESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COURSES
     */
    omit?: COURSESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COURSESInclude<ExtArgs> | null
    /**
     * Filter which COURSES to delete.
     */
    where: COURSESWhereUniqueInput
  }

  /**
   * COURSES deleteMany
   */
  export type COURSESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which COURSES to delete
     */
    where?: COURSESWhereInput
    /**
     * Limit how many COURSES to delete.
     */
    limit?: number
  }

  /**
   * COURSES.ENROLLMENTS
   */
  export type COURSES$ENROLLMENTSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    where?: ENROLLMENTSWhereInput
    orderBy?: ENROLLMENTSOrderByWithRelationInput | ENROLLMENTSOrderByWithRelationInput[]
    cursor?: ENROLLMENTSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ENROLLMENTSScalarFieldEnum | ENROLLMENTSScalarFieldEnum[]
  }

  /**
   * COURSES.TUTOR_COURSE
   */
  export type COURSES$TUTOR_COURSEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
    where?: TUTOR_COURSEWhereInput
    orderBy?: TUTOR_COURSEOrderByWithRelationInput | TUTOR_COURSEOrderByWithRelationInput[]
    cursor?: TUTOR_COURSEWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TUTOR_COURSEScalarFieldEnum | TUTOR_COURSEScalarFieldEnum[]
  }

  /**
   * COURSES without action
   */
  export type COURSESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COURSES
     */
    select?: COURSESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the COURSES
     */
    omit?: COURSESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COURSESInclude<ExtArgs> | null
  }


  /**
   * Model ENROLLMENTS
   */

  export type AggregateENROLLMENTS = {
    _count: ENROLLMENTSCountAggregateOutputType | null
    _avg: ENROLLMENTSAvgAggregateOutputType | null
    _sum: ENROLLMENTSSumAggregateOutputType | null
    _min: ENROLLMENTSMinAggregateOutputType | null
    _max: ENROLLMENTSMaxAggregateOutputType | null
  }

  export type ENROLLMENTSAvgAggregateOutputType = {
    Enrollment_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Course_ID: number | null
    Total_Enrollment: number | null
  }

  export type ENROLLMENTSSumAggregateOutputType = {
    Enrollment_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Course_ID: number | null
    Total_Enrollment: number | null
  }

  export type ENROLLMENTSMinAggregateOutputType = {
    Enrollment_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Course_ID: number | null
    Total_Enrollment: number | null
  }

  export type ENROLLMENTSMaxAggregateOutputType = {
    Enrollment_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Course_ID: number | null
    Total_Enrollment: number | null
  }

  export type ENROLLMENTSCountAggregateOutputType = {
    Enrollment_ID: number
    User_ID: number
    Tutor_ID: number
    Course_ID: number
    Total_Enrollment: number
    _all: number
  }


  export type ENROLLMENTSAvgAggregateInputType = {
    Enrollment_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Course_ID?: true
    Total_Enrollment?: true
  }

  export type ENROLLMENTSSumAggregateInputType = {
    Enrollment_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Course_ID?: true
    Total_Enrollment?: true
  }

  export type ENROLLMENTSMinAggregateInputType = {
    Enrollment_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Course_ID?: true
    Total_Enrollment?: true
  }

  export type ENROLLMENTSMaxAggregateInputType = {
    Enrollment_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Course_ID?: true
    Total_Enrollment?: true
  }

  export type ENROLLMENTSCountAggregateInputType = {
    Enrollment_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Course_ID?: true
    Total_Enrollment?: true
    _all?: true
  }

  export type ENROLLMENTSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ENROLLMENTS to aggregate.
     */
    where?: ENROLLMENTSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENROLLMENTS to fetch.
     */
    orderBy?: ENROLLMENTSOrderByWithRelationInput | ENROLLMENTSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ENROLLMENTSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENROLLMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENROLLMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ENROLLMENTS
    **/
    _count?: true | ENROLLMENTSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ENROLLMENTSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ENROLLMENTSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ENROLLMENTSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ENROLLMENTSMaxAggregateInputType
  }

  export type GetENROLLMENTSAggregateType<T extends ENROLLMENTSAggregateArgs> = {
        [P in keyof T & keyof AggregateENROLLMENTS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateENROLLMENTS[P]>
      : GetScalarType<T[P], AggregateENROLLMENTS[P]>
  }




  export type ENROLLMENTSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ENROLLMENTSWhereInput
    orderBy?: ENROLLMENTSOrderByWithAggregationInput | ENROLLMENTSOrderByWithAggregationInput[]
    by: ENROLLMENTSScalarFieldEnum[] | ENROLLMENTSScalarFieldEnum
    having?: ENROLLMENTSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ENROLLMENTSCountAggregateInputType | true
    _avg?: ENROLLMENTSAvgAggregateInputType
    _sum?: ENROLLMENTSSumAggregateInputType
    _min?: ENROLLMENTSMinAggregateInputType
    _max?: ENROLLMENTSMaxAggregateInputType
  }

  export type ENROLLMENTSGroupByOutputType = {
    Enrollment_ID: number
    User_ID: number
    Tutor_ID: number | null
    Course_ID: number
    Total_Enrollment: number | null
    _count: ENROLLMENTSCountAggregateOutputType | null
    _avg: ENROLLMENTSAvgAggregateOutputType | null
    _sum: ENROLLMENTSSumAggregateOutputType | null
    _min: ENROLLMENTSMinAggregateOutputType | null
    _max: ENROLLMENTSMaxAggregateOutputType | null
  }

  type GetENROLLMENTSGroupByPayload<T extends ENROLLMENTSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ENROLLMENTSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ENROLLMENTSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ENROLLMENTSGroupByOutputType[P]>
            : GetScalarType<T[P], ENROLLMENTSGroupByOutputType[P]>
        }
      >
    >


  export type ENROLLMENTSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Enrollment_ID?: boolean
    User_ID?: boolean
    Tutor_ID?: boolean
    Course_ID?: boolean
    Total_Enrollment?: boolean
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
    Tutor?: boolean | ENROLLMENTS$TutorArgs<ExtArgs>
    COURSES?: boolean | COURSESDefaultArgs<ExtArgs>
    STUDY_BUDDY_GROUPS?: boolean | ENROLLMENTS$STUDY_BUDDY_GROUPSArgs<ExtArgs>
    TUTORING_SESSION?: boolean | ENROLLMENTS$TUTORING_SESSIONArgs<ExtArgs>
    _count?: boolean | ENROLLMENTSCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eNROLLMENTS"]>



  export type ENROLLMENTSSelectScalar = {
    Enrollment_ID?: boolean
    User_ID?: boolean
    Tutor_ID?: boolean
    Course_ID?: boolean
    Total_Enrollment?: boolean
  }

  export type ENROLLMENTSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Enrollment_ID" | "User_ID" | "Tutor_ID" | "Course_ID" | "Total_Enrollment", ExtArgs["result"]["eNROLLMENTS"]>
  export type ENROLLMENTSInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
    Tutor?: boolean | ENROLLMENTS$TutorArgs<ExtArgs>
    COURSES?: boolean | COURSESDefaultArgs<ExtArgs>
    STUDY_BUDDY_GROUPS?: boolean | ENROLLMENTS$STUDY_BUDDY_GROUPSArgs<ExtArgs>
    TUTORING_SESSION?: boolean | ENROLLMENTS$TUTORING_SESSIONArgs<ExtArgs>
    _count?: boolean | ENROLLMENTSCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ENROLLMENTSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ENROLLMENTS"
    objects: {
      USERS: Prisma.$USERSPayload<ExtArgs>
      Tutor: Prisma.$TutorPayload<ExtArgs> | null
      COURSES: Prisma.$COURSESPayload<ExtArgs>
      STUDY_BUDDY_GROUPS: Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>[]
      TUTORING_SESSION: Prisma.$TUTORING_SESSIONPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Enrollment_ID: number
      User_ID: number
      Tutor_ID: number | null
      Course_ID: number
      Total_Enrollment: number | null
    }, ExtArgs["result"]["eNROLLMENTS"]>
    composites: {}
  }

  type ENROLLMENTSGetPayload<S extends boolean | null | undefined | ENROLLMENTSDefaultArgs> = $Result.GetResult<Prisma.$ENROLLMENTSPayload, S>

  type ENROLLMENTSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ENROLLMENTSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ENROLLMENTSCountAggregateInputType | true
    }

  export interface ENROLLMENTSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ENROLLMENTS'], meta: { name: 'ENROLLMENTS' } }
    /**
     * Find zero or one ENROLLMENTS that matches the filter.
     * @param {ENROLLMENTSFindUniqueArgs} args - Arguments to find a ENROLLMENTS
     * @example
     * // Get one ENROLLMENTS
     * const eNROLLMENTS = await prisma.eNROLLMENTS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ENROLLMENTSFindUniqueArgs>(args: SelectSubset<T, ENROLLMENTSFindUniqueArgs<ExtArgs>>): Prisma__ENROLLMENTSClient<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ENROLLMENTS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ENROLLMENTSFindUniqueOrThrowArgs} args - Arguments to find a ENROLLMENTS
     * @example
     * // Get one ENROLLMENTS
     * const eNROLLMENTS = await prisma.eNROLLMENTS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ENROLLMENTSFindUniqueOrThrowArgs>(args: SelectSubset<T, ENROLLMENTSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ENROLLMENTSClient<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ENROLLMENTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENROLLMENTSFindFirstArgs} args - Arguments to find a ENROLLMENTS
     * @example
     * // Get one ENROLLMENTS
     * const eNROLLMENTS = await prisma.eNROLLMENTS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ENROLLMENTSFindFirstArgs>(args?: SelectSubset<T, ENROLLMENTSFindFirstArgs<ExtArgs>>): Prisma__ENROLLMENTSClient<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ENROLLMENTS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENROLLMENTSFindFirstOrThrowArgs} args - Arguments to find a ENROLLMENTS
     * @example
     * // Get one ENROLLMENTS
     * const eNROLLMENTS = await prisma.eNROLLMENTS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ENROLLMENTSFindFirstOrThrowArgs>(args?: SelectSubset<T, ENROLLMENTSFindFirstOrThrowArgs<ExtArgs>>): Prisma__ENROLLMENTSClient<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ENROLLMENTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENROLLMENTSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ENROLLMENTS
     * const eNROLLMENTS = await prisma.eNROLLMENTS.findMany()
     * 
     * // Get first 10 ENROLLMENTS
     * const eNROLLMENTS = await prisma.eNROLLMENTS.findMany({ take: 10 })
     * 
     * // Only select the `Enrollment_ID`
     * const eNROLLMENTSWithEnrollment_IDOnly = await prisma.eNROLLMENTS.findMany({ select: { Enrollment_ID: true } })
     * 
     */
    findMany<T extends ENROLLMENTSFindManyArgs>(args?: SelectSubset<T, ENROLLMENTSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ENROLLMENTS.
     * @param {ENROLLMENTSCreateArgs} args - Arguments to create a ENROLLMENTS.
     * @example
     * // Create one ENROLLMENTS
     * const ENROLLMENTS = await prisma.eNROLLMENTS.create({
     *   data: {
     *     // ... data to create a ENROLLMENTS
     *   }
     * })
     * 
     */
    create<T extends ENROLLMENTSCreateArgs>(args: SelectSubset<T, ENROLLMENTSCreateArgs<ExtArgs>>): Prisma__ENROLLMENTSClient<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ENROLLMENTS.
     * @param {ENROLLMENTSCreateManyArgs} args - Arguments to create many ENROLLMENTS.
     * @example
     * // Create many ENROLLMENTS
     * const eNROLLMENTS = await prisma.eNROLLMENTS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ENROLLMENTSCreateManyArgs>(args?: SelectSubset<T, ENROLLMENTSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ENROLLMENTS.
     * @param {ENROLLMENTSDeleteArgs} args - Arguments to delete one ENROLLMENTS.
     * @example
     * // Delete one ENROLLMENTS
     * const ENROLLMENTS = await prisma.eNROLLMENTS.delete({
     *   where: {
     *     // ... filter to delete one ENROLLMENTS
     *   }
     * })
     * 
     */
    delete<T extends ENROLLMENTSDeleteArgs>(args: SelectSubset<T, ENROLLMENTSDeleteArgs<ExtArgs>>): Prisma__ENROLLMENTSClient<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ENROLLMENTS.
     * @param {ENROLLMENTSUpdateArgs} args - Arguments to update one ENROLLMENTS.
     * @example
     * // Update one ENROLLMENTS
     * const eNROLLMENTS = await prisma.eNROLLMENTS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ENROLLMENTSUpdateArgs>(args: SelectSubset<T, ENROLLMENTSUpdateArgs<ExtArgs>>): Prisma__ENROLLMENTSClient<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ENROLLMENTS.
     * @param {ENROLLMENTSDeleteManyArgs} args - Arguments to filter ENROLLMENTS to delete.
     * @example
     * // Delete a few ENROLLMENTS
     * const { count } = await prisma.eNROLLMENTS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ENROLLMENTSDeleteManyArgs>(args?: SelectSubset<T, ENROLLMENTSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ENROLLMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENROLLMENTSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ENROLLMENTS
     * const eNROLLMENTS = await prisma.eNROLLMENTS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ENROLLMENTSUpdateManyArgs>(args: SelectSubset<T, ENROLLMENTSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ENROLLMENTS.
     * @param {ENROLLMENTSUpsertArgs} args - Arguments to update or create a ENROLLMENTS.
     * @example
     * // Update or create a ENROLLMENTS
     * const eNROLLMENTS = await prisma.eNROLLMENTS.upsert({
     *   create: {
     *     // ... data to create a ENROLLMENTS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ENROLLMENTS we want to update
     *   }
     * })
     */
    upsert<T extends ENROLLMENTSUpsertArgs>(args: SelectSubset<T, ENROLLMENTSUpsertArgs<ExtArgs>>): Prisma__ENROLLMENTSClient<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ENROLLMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENROLLMENTSCountArgs} args - Arguments to filter ENROLLMENTS to count.
     * @example
     * // Count the number of ENROLLMENTS
     * const count = await prisma.eNROLLMENTS.count({
     *   where: {
     *     // ... the filter for the ENROLLMENTS we want to count
     *   }
     * })
    **/
    count<T extends ENROLLMENTSCountArgs>(
      args?: Subset<T, ENROLLMENTSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ENROLLMENTSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ENROLLMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENROLLMENTSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ENROLLMENTSAggregateArgs>(args: Subset<T, ENROLLMENTSAggregateArgs>): Prisma.PrismaPromise<GetENROLLMENTSAggregateType<T>>

    /**
     * Group by ENROLLMENTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ENROLLMENTSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ENROLLMENTSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ENROLLMENTSGroupByArgs['orderBy'] }
        : { orderBy?: ENROLLMENTSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ENROLLMENTSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetENROLLMENTSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ENROLLMENTS model
   */
  readonly fields: ENROLLMENTSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ENROLLMENTS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ENROLLMENTSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    USERS<T extends USERSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERSDefaultArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Tutor<T extends ENROLLMENTS$TutorArgs<ExtArgs> = {}>(args?: Subset<T, ENROLLMENTS$TutorArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    COURSES<T extends COURSESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, COURSESDefaultArgs<ExtArgs>>): Prisma__COURSESClient<$Result.GetResult<Prisma.$COURSESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    STUDY_BUDDY_GROUPS<T extends ENROLLMENTS$STUDY_BUDDY_GROUPSArgs<ExtArgs> = {}>(args?: Subset<T, ENROLLMENTS$STUDY_BUDDY_GROUPSArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TUTORING_SESSION<T extends ENROLLMENTS$TUTORING_SESSIONArgs<ExtArgs> = {}>(args?: Subset<T, ENROLLMENTS$TUTORING_SESSIONArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ENROLLMENTS model
   */
  interface ENROLLMENTSFieldRefs {
    readonly Enrollment_ID: FieldRef<"ENROLLMENTS", 'Int'>
    readonly User_ID: FieldRef<"ENROLLMENTS", 'Int'>
    readonly Tutor_ID: FieldRef<"ENROLLMENTS", 'Int'>
    readonly Course_ID: FieldRef<"ENROLLMENTS", 'Int'>
    readonly Total_Enrollment: FieldRef<"ENROLLMENTS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ENROLLMENTS findUnique
   */
  export type ENROLLMENTSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    /**
     * Filter, which ENROLLMENTS to fetch.
     */
    where: ENROLLMENTSWhereUniqueInput
  }

  /**
   * ENROLLMENTS findUniqueOrThrow
   */
  export type ENROLLMENTSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    /**
     * Filter, which ENROLLMENTS to fetch.
     */
    where: ENROLLMENTSWhereUniqueInput
  }

  /**
   * ENROLLMENTS findFirst
   */
  export type ENROLLMENTSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    /**
     * Filter, which ENROLLMENTS to fetch.
     */
    where?: ENROLLMENTSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENROLLMENTS to fetch.
     */
    orderBy?: ENROLLMENTSOrderByWithRelationInput | ENROLLMENTSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ENROLLMENTS.
     */
    cursor?: ENROLLMENTSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENROLLMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENROLLMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ENROLLMENTS.
     */
    distinct?: ENROLLMENTSScalarFieldEnum | ENROLLMENTSScalarFieldEnum[]
  }

  /**
   * ENROLLMENTS findFirstOrThrow
   */
  export type ENROLLMENTSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    /**
     * Filter, which ENROLLMENTS to fetch.
     */
    where?: ENROLLMENTSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENROLLMENTS to fetch.
     */
    orderBy?: ENROLLMENTSOrderByWithRelationInput | ENROLLMENTSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ENROLLMENTS.
     */
    cursor?: ENROLLMENTSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENROLLMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENROLLMENTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ENROLLMENTS.
     */
    distinct?: ENROLLMENTSScalarFieldEnum | ENROLLMENTSScalarFieldEnum[]
  }

  /**
   * ENROLLMENTS findMany
   */
  export type ENROLLMENTSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    /**
     * Filter, which ENROLLMENTS to fetch.
     */
    where?: ENROLLMENTSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ENROLLMENTS to fetch.
     */
    orderBy?: ENROLLMENTSOrderByWithRelationInput | ENROLLMENTSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ENROLLMENTS.
     */
    cursor?: ENROLLMENTSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ENROLLMENTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ENROLLMENTS.
     */
    skip?: number
    distinct?: ENROLLMENTSScalarFieldEnum | ENROLLMENTSScalarFieldEnum[]
  }

  /**
   * ENROLLMENTS create
   */
  export type ENROLLMENTSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    /**
     * The data needed to create a ENROLLMENTS.
     */
    data: XOR<ENROLLMENTSCreateInput, ENROLLMENTSUncheckedCreateInput>
  }

  /**
   * ENROLLMENTS createMany
   */
  export type ENROLLMENTSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ENROLLMENTS.
     */
    data: ENROLLMENTSCreateManyInput | ENROLLMENTSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ENROLLMENTS update
   */
  export type ENROLLMENTSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    /**
     * The data needed to update a ENROLLMENTS.
     */
    data: XOR<ENROLLMENTSUpdateInput, ENROLLMENTSUncheckedUpdateInput>
    /**
     * Choose, which ENROLLMENTS to update.
     */
    where: ENROLLMENTSWhereUniqueInput
  }

  /**
   * ENROLLMENTS updateMany
   */
  export type ENROLLMENTSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ENROLLMENTS.
     */
    data: XOR<ENROLLMENTSUpdateManyMutationInput, ENROLLMENTSUncheckedUpdateManyInput>
    /**
     * Filter which ENROLLMENTS to update
     */
    where?: ENROLLMENTSWhereInput
    /**
     * Limit how many ENROLLMENTS to update.
     */
    limit?: number
  }

  /**
   * ENROLLMENTS upsert
   */
  export type ENROLLMENTSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    /**
     * The filter to search for the ENROLLMENTS to update in case it exists.
     */
    where: ENROLLMENTSWhereUniqueInput
    /**
     * In case the ENROLLMENTS found by the `where` argument doesn't exist, create a new ENROLLMENTS with this data.
     */
    create: XOR<ENROLLMENTSCreateInput, ENROLLMENTSUncheckedCreateInput>
    /**
     * In case the ENROLLMENTS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ENROLLMENTSUpdateInput, ENROLLMENTSUncheckedUpdateInput>
  }

  /**
   * ENROLLMENTS delete
   */
  export type ENROLLMENTSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    /**
     * Filter which ENROLLMENTS to delete.
     */
    where: ENROLLMENTSWhereUniqueInput
  }

  /**
   * ENROLLMENTS deleteMany
   */
  export type ENROLLMENTSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ENROLLMENTS to delete
     */
    where?: ENROLLMENTSWhereInput
    /**
     * Limit how many ENROLLMENTS to delete.
     */
    limit?: number
  }

  /**
   * ENROLLMENTS.Tutor
   */
  export type ENROLLMENTS$TutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    where?: TutorWhereInput
  }

  /**
   * ENROLLMENTS.STUDY_BUDDY_GROUPS
   */
  export type ENROLLMENTS$STUDY_BUDDY_GROUPSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    where?: STUDY_BUDDY_GROUPSWhereInput
    orderBy?: STUDY_BUDDY_GROUPSOrderByWithRelationInput | STUDY_BUDDY_GROUPSOrderByWithRelationInput[]
    cursor?: STUDY_BUDDY_GROUPSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: STUDY_BUDDY_GROUPSScalarFieldEnum | STUDY_BUDDY_GROUPSScalarFieldEnum[]
  }

  /**
   * ENROLLMENTS.TUTORING_SESSION
   */
  export type ENROLLMENTS$TUTORING_SESSIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    where?: TUTORING_SESSIONWhereInput
    orderBy?: TUTORING_SESSIONOrderByWithRelationInput | TUTORING_SESSIONOrderByWithRelationInput[]
    cursor?: TUTORING_SESSIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TUTORING_SESSIONScalarFieldEnum | TUTORING_SESSIONScalarFieldEnum[]
  }

  /**
   * ENROLLMENTS without action
   */
  export type ENROLLMENTSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
  }


  /**
   * Model SCHEDULE
   */

  export type AggregateSCHEDULE = {
    _count: SCHEDULECountAggregateOutputType | null
    _avg: SCHEDULEAvgAggregateOutputType | null
    _sum: SCHEDULESumAggregateOutputType | null
    _min: SCHEDULEMinAggregateOutputType | null
    _max: SCHEDULEMaxAggregateOutputType | null
  }

  export type SCHEDULEAvgAggregateOutputType = {
    Schedule_ID: number | null
    Admin_ID: number | null
    Availability_ID: number | null
  }

  export type SCHEDULESumAggregateOutputType = {
    Schedule_ID: number | null
    Admin_ID: number | null
    Availability_ID: number | null
  }

  export type SCHEDULEMinAggregateOutputType = {
    Schedule_ID: number | null
    Admin_ID: number | null
    Availability_ID: number | null
    Has_Worked: boolean | null
  }

  export type SCHEDULEMaxAggregateOutputType = {
    Schedule_ID: number | null
    Admin_ID: number | null
    Availability_ID: number | null
    Has_Worked: boolean | null
  }

  export type SCHEDULECountAggregateOutputType = {
    Schedule_ID: number
    Admin_ID: number
    Availability_ID: number
    Has_Worked: number
    _all: number
  }


  export type SCHEDULEAvgAggregateInputType = {
    Schedule_ID?: true
    Admin_ID?: true
    Availability_ID?: true
  }

  export type SCHEDULESumAggregateInputType = {
    Schedule_ID?: true
    Admin_ID?: true
    Availability_ID?: true
  }

  export type SCHEDULEMinAggregateInputType = {
    Schedule_ID?: true
    Admin_ID?: true
    Availability_ID?: true
    Has_Worked?: true
  }

  export type SCHEDULEMaxAggregateInputType = {
    Schedule_ID?: true
    Admin_ID?: true
    Availability_ID?: true
    Has_Worked?: true
  }

  export type SCHEDULECountAggregateInputType = {
    Schedule_ID?: true
    Admin_ID?: true
    Availability_ID?: true
    Has_Worked?: true
    _all?: true
  }

  export type SCHEDULEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SCHEDULE to aggregate.
     */
    where?: SCHEDULEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHEDULES to fetch.
     */
    orderBy?: SCHEDULEOrderByWithRelationInput | SCHEDULEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SCHEDULEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHEDULES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHEDULES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SCHEDULES
    **/
    _count?: true | SCHEDULECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SCHEDULEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SCHEDULESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SCHEDULEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SCHEDULEMaxAggregateInputType
  }

  export type GetSCHEDULEAggregateType<T extends SCHEDULEAggregateArgs> = {
        [P in keyof T & keyof AggregateSCHEDULE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSCHEDULE[P]>
      : GetScalarType<T[P], AggregateSCHEDULE[P]>
  }




  export type SCHEDULEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SCHEDULEWhereInput
    orderBy?: SCHEDULEOrderByWithAggregationInput | SCHEDULEOrderByWithAggregationInput[]
    by: SCHEDULEScalarFieldEnum[] | SCHEDULEScalarFieldEnum
    having?: SCHEDULEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SCHEDULECountAggregateInputType | true
    _avg?: SCHEDULEAvgAggregateInputType
    _sum?: SCHEDULESumAggregateInputType
    _min?: SCHEDULEMinAggregateInputType
    _max?: SCHEDULEMaxAggregateInputType
  }

  export type SCHEDULEGroupByOutputType = {
    Schedule_ID: number
    Admin_ID: number
    Availability_ID: number
    Has_Worked: boolean | null
    _count: SCHEDULECountAggregateOutputType | null
    _avg: SCHEDULEAvgAggregateOutputType | null
    _sum: SCHEDULESumAggregateOutputType | null
    _min: SCHEDULEMinAggregateOutputType | null
    _max: SCHEDULEMaxAggregateOutputType | null
  }

  type GetSCHEDULEGroupByPayload<T extends SCHEDULEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SCHEDULEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SCHEDULEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SCHEDULEGroupByOutputType[P]>
            : GetScalarType<T[P], SCHEDULEGroupByOutputType[P]>
        }
      >
    >


  export type SCHEDULESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Schedule_ID?: boolean
    Admin_ID?: boolean
    Availability_ID?: boolean
    Has_Worked?: boolean
    Admin?: boolean | AdminDefaultArgs<ExtArgs>
    TUTOR_AVAILABILITY?: boolean | TUTOR_AVAILABILITYDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sCHEDULE"]>



  export type SCHEDULESelectScalar = {
    Schedule_ID?: boolean
    Admin_ID?: boolean
    Availability_ID?: boolean
    Has_Worked?: boolean
  }

  export type SCHEDULEOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Schedule_ID" | "Admin_ID" | "Availability_ID" | "Has_Worked", ExtArgs["result"]["sCHEDULE"]>
  export type SCHEDULEInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Admin?: boolean | AdminDefaultArgs<ExtArgs>
    TUTOR_AVAILABILITY?: boolean | TUTOR_AVAILABILITYDefaultArgs<ExtArgs>
  }

  export type $SCHEDULEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SCHEDULE"
    objects: {
      Admin: Prisma.$AdminPayload<ExtArgs>
      TUTOR_AVAILABILITY: Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Schedule_ID: number
      Admin_ID: number
      Availability_ID: number
      Has_Worked: boolean | null
    }, ExtArgs["result"]["sCHEDULE"]>
    composites: {}
  }

  type SCHEDULEGetPayload<S extends boolean | null | undefined | SCHEDULEDefaultArgs> = $Result.GetResult<Prisma.$SCHEDULEPayload, S>

  type SCHEDULECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SCHEDULEFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SCHEDULECountAggregateInputType | true
    }

  export interface SCHEDULEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SCHEDULE'], meta: { name: 'SCHEDULE' } }
    /**
     * Find zero or one SCHEDULE that matches the filter.
     * @param {SCHEDULEFindUniqueArgs} args - Arguments to find a SCHEDULE
     * @example
     * // Get one SCHEDULE
     * const sCHEDULE = await prisma.sCHEDULE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SCHEDULEFindUniqueArgs>(args: SelectSubset<T, SCHEDULEFindUniqueArgs<ExtArgs>>): Prisma__SCHEDULEClient<$Result.GetResult<Prisma.$SCHEDULEPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SCHEDULE that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SCHEDULEFindUniqueOrThrowArgs} args - Arguments to find a SCHEDULE
     * @example
     * // Get one SCHEDULE
     * const sCHEDULE = await prisma.sCHEDULE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SCHEDULEFindUniqueOrThrowArgs>(args: SelectSubset<T, SCHEDULEFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SCHEDULEClient<$Result.GetResult<Prisma.$SCHEDULEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SCHEDULE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHEDULEFindFirstArgs} args - Arguments to find a SCHEDULE
     * @example
     * // Get one SCHEDULE
     * const sCHEDULE = await prisma.sCHEDULE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SCHEDULEFindFirstArgs>(args?: SelectSubset<T, SCHEDULEFindFirstArgs<ExtArgs>>): Prisma__SCHEDULEClient<$Result.GetResult<Prisma.$SCHEDULEPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SCHEDULE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHEDULEFindFirstOrThrowArgs} args - Arguments to find a SCHEDULE
     * @example
     * // Get one SCHEDULE
     * const sCHEDULE = await prisma.sCHEDULE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SCHEDULEFindFirstOrThrowArgs>(args?: SelectSubset<T, SCHEDULEFindFirstOrThrowArgs<ExtArgs>>): Prisma__SCHEDULEClient<$Result.GetResult<Prisma.$SCHEDULEPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SCHEDULES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHEDULEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SCHEDULES
     * const sCHEDULES = await prisma.sCHEDULE.findMany()
     * 
     * // Get first 10 SCHEDULES
     * const sCHEDULES = await prisma.sCHEDULE.findMany({ take: 10 })
     * 
     * // Only select the `Schedule_ID`
     * const sCHEDULEWithSchedule_IDOnly = await prisma.sCHEDULE.findMany({ select: { Schedule_ID: true } })
     * 
     */
    findMany<T extends SCHEDULEFindManyArgs>(args?: SelectSubset<T, SCHEDULEFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SCHEDULEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SCHEDULE.
     * @param {SCHEDULECreateArgs} args - Arguments to create a SCHEDULE.
     * @example
     * // Create one SCHEDULE
     * const SCHEDULE = await prisma.sCHEDULE.create({
     *   data: {
     *     // ... data to create a SCHEDULE
     *   }
     * })
     * 
     */
    create<T extends SCHEDULECreateArgs>(args: SelectSubset<T, SCHEDULECreateArgs<ExtArgs>>): Prisma__SCHEDULEClient<$Result.GetResult<Prisma.$SCHEDULEPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SCHEDULES.
     * @param {SCHEDULECreateManyArgs} args - Arguments to create many SCHEDULES.
     * @example
     * // Create many SCHEDULES
     * const sCHEDULE = await prisma.sCHEDULE.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SCHEDULECreateManyArgs>(args?: SelectSubset<T, SCHEDULECreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SCHEDULE.
     * @param {SCHEDULEDeleteArgs} args - Arguments to delete one SCHEDULE.
     * @example
     * // Delete one SCHEDULE
     * const SCHEDULE = await prisma.sCHEDULE.delete({
     *   where: {
     *     // ... filter to delete one SCHEDULE
     *   }
     * })
     * 
     */
    delete<T extends SCHEDULEDeleteArgs>(args: SelectSubset<T, SCHEDULEDeleteArgs<ExtArgs>>): Prisma__SCHEDULEClient<$Result.GetResult<Prisma.$SCHEDULEPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SCHEDULE.
     * @param {SCHEDULEUpdateArgs} args - Arguments to update one SCHEDULE.
     * @example
     * // Update one SCHEDULE
     * const sCHEDULE = await prisma.sCHEDULE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SCHEDULEUpdateArgs>(args: SelectSubset<T, SCHEDULEUpdateArgs<ExtArgs>>): Prisma__SCHEDULEClient<$Result.GetResult<Prisma.$SCHEDULEPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SCHEDULES.
     * @param {SCHEDULEDeleteManyArgs} args - Arguments to filter SCHEDULES to delete.
     * @example
     * // Delete a few SCHEDULES
     * const { count } = await prisma.sCHEDULE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SCHEDULEDeleteManyArgs>(args?: SelectSubset<T, SCHEDULEDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SCHEDULES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHEDULEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SCHEDULES
     * const sCHEDULE = await prisma.sCHEDULE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SCHEDULEUpdateManyArgs>(args: SelectSubset<T, SCHEDULEUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SCHEDULE.
     * @param {SCHEDULEUpsertArgs} args - Arguments to update or create a SCHEDULE.
     * @example
     * // Update or create a SCHEDULE
     * const sCHEDULE = await prisma.sCHEDULE.upsert({
     *   create: {
     *     // ... data to create a SCHEDULE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SCHEDULE we want to update
     *   }
     * })
     */
    upsert<T extends SCHEDULEUpsertArgs>(args: SelectSubset<T, SCHEDULEUpsertArgs<ExtArgs>>): Prisma__SCHEDULEClient<$Result.GetResult<Prisma.$SCHEDULEPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SCHEDULES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHEDULECountArgs} args - Arguments to filter SCHEDULES to count.
     * @example
     * // Count the number of SCHEDULES
     * const count = await prisma.sCHEDULE.count({
     *   where: {
     *     // ... the filter for the SCHEDULES we want to count
     *   }
     * })
    **/
    count<T extends SCHEDULECountArgs>(
      args?: Subset<T, SCHEDULECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SCHEDULECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SCHEDULE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHEDULEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SCHEDULEAggregateArgs>(args: Subset<T, SCHEDULEAggregateArgs>): Prisma.PrismaPromise<GetSCHEDULEAggregateType<T>>

    /**
     * Group by SCHEDULE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SCHEDULEGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SCHEDULEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SCHEDULEGroupByArgs['orderBy'] }
        : { orderBy?: SCHEDULEGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SCHEDULEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSCHEDULEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SCHEDULE model
   */
  readonly fields: SCHEDULEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SCHEDULE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SCHEDULEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TUTOR_AVAILABILITY<T extends TUTOR_AVAILABILITYDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TUTOR_AVAILABILITYDefaultArgs<ExtArgs>>): Prisma__TUTOR_AVAILABILITYClient<$Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SCHEDULE model
   */
  interface SCHEDULEFieldRefs {
    readonly Schedule_ID: FieldRef<"SCHEDULE", 'Int'>
    readonly Admin_ID: FieldRef<"SCHEDULE", 'Int'>
    readonly Availability_ID: FieldRef<"SCHEDULE", 'Int'>
    readonly Has_Worked: FieldRef<"SCHEDULE", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SCHEDULE findUnique
   */
  export type SCHEDULEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
    /**
     * Filter, which SCHEDULE to fetch.
     */
    where: SCHEDULEWhereUniqueInput
  }

  /**
   * SCHEDULE findUniqueOrThrow
   */
  export type SCHEDULEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
    /**
     * Filter, which SCHEDULE to fetch.
     */
    where: SCHEDULEWhereUniqueInput
  }

  /**
   * SCHEDULE findFirst
   */
  export type SCHEDULEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
    /**
     * Filter, which SCHEDULE to fetch.
     */
    where?: SCHEDULEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHEDULES to fetch.
     */
    orderBy?: SCHEDULEOrderByWithRelationInput | SCHEDULEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SCHEDULES.
     */
    cursor?: SCHEDULEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHEDULES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHEDULES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SCHEDULES.
     */
    distinct?: SCHEDULEScalarFieldEnum | SCHEDULEScalarFieldEnum[]
  }

  /**
   * SCHEDULE findFirstOrThrow
   */
  export type SCHEDULEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
    /**
     * Filter, which SCHEDULE to fetch.
     */
    where?: SCHEDULEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHEDULES to fetch.
     */
    orderBy?: SCHEDULEOrderByWithRelationInput | SCHEDULEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SCHEDULES.
     */
    cursor?: SCHEDULEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHEDULES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHEDULES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SCHEDULES.
     */
    distinct?: SCHEDULEScalarFieldEnum | SCHEDULEScalarFieldEnum[]
  }

  /**
   * SCHEDULE findMany
   */
  export type SCHEDULEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
    /**
     * Filter, which SCHEDULES to fetch.
     */
    where?: SCHEDULEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SCHEDULES to fetch.
     */
    orderBy?: SCHEDULEOrderByWithRelationInput | SCHEDULEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SCHEDULES.
     */
    cursor?: SCHEDULEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SCHEDULES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SCHEDULES.
     */
    skip?: number
    distinct?: SCHEDULEScalarFieldEnum | SCHEDULEScalarFieldEnum[]
  }

  /**
   * SCHEDULE create
   */
  export type SCHEDULECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
    /**
     * The data needed to create a SCHEDULE.
     */
    data: XOR<SCHEDULECreateInput, SCHEDULEUncheckedCreateInput>
  }

  /**
   * SCHEDULE createMany
   */
  export type SCHEDULECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SCHEDULES.
     */
    data: SCHEDULECreateManyInput | SCHEDULECreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SCHEDULE update
   */
  export type SCHEDULEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
    /**
     * The data needed to update a SCHEDULE.
     */
    data: XOR<SCHEDULEUpdateInput, SCHEDULEUncheckedUpdateInput>
    /**
     * Choose, which SCHEDULE to update.
     */
    where: SCHEDULEWhereUniqueInput
  }

  /**
   * SCHEDULE updateMany
   */
  export type SCHEDULEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SCHEDULES.
     */
    data: XOR<SCHEDULEUpdateManyMutationInput, SCHEDULEUncheckedUpdateManyInput>
    /**
     * Filter which SCHEDULES to update
     */
    where?: SCHEDULEWhereInput
    /**
     * Limit how many SCHEDULES to update.
     */
    limit?: number
  }

  /**
   * SCHEDULE upsert
   */
  export type SCHEDULEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
    /**
     * The filter to search for the SCHEDULE to update in case it exists.
     */
    where: SCHEDULEWhereUniqueInput
    /**
     * In case the SCHEDULE found by the `where` argument doesn't exist, create a new SCHEDULE with this data.
     */
    create: XOR<SCHEDULECreateInput, SCHEDULEUncheckedCreateInput>
    /**
     * In case the SCHEDULE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SCHEDULEUpdateInput, SCHEDULEUncheckedUpdateInput>
  }

  /**
   * SCHEDULE delete
   */
  export type SCHEDULEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
    /**
     * Filter which SCHEDULE to delete.
     */
    where: SCHEDULEWhereUniqueInput
  }

  /**
   * SCHEDULE deleteMany
   */
  export type SCHEDULEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SCHEDULES to delete
     */
    where?: SCHEDULEWhereInput
    /**
     * Limit how many SCHEDULES to delete.
     */
    limit?: number
  }

  /**
   * SCHEDULE without action
   */
  export type SCHEDULEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
  }


  /**
   * Model STUDY_BUDDY_GROUPS
   */

  export type AggregateSTUDY_BUDDY_GROUPS = {
    _count: STUDY_BUDDY_GROUPSCountAggregateOutputType | null
    _avg: STUDY_BUDDY_GROUPSAvgAggregateOutputType | null
    _sum: STUDY_BUDDY_GROUPSSumAggregateOutputType | null
    _min: STUDY_BUDDY_GROUPSMinAggregateOutputType | null
    _max: STUDY_BUDDY_GROUPSMaxAggregateOutputType | null
  }

  export type STUDY_BUDDY_GROUPSAvgAggregateOutputType = {
    Group_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Enrollment_ID: number | null
    Group_Members: number | null
  }

  export type STUDY_BUDDY_GROUPSSumAggregateOutputType = {
    Group_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Enrollment_ID: number | null
    Group_Members: number | null
  }

  export type STUDY_BUDDY_GROUPSMinAggregateOutputType = {
    Group_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Enrollment_ID: number | null
    Is_Accepted: boolean | null
    Has_Tutor: boolean | null
    Group_Members: number | null
  }

  export type STUDY_BUDDY_GROUPSMaxAggregateOutputType = {
    Group_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Enrollment_ID: number | null
    Is_Accepted: boolean | null
    Has_Tutor: boolean | null
    Group_Members: number | null
  }

  export type STUDY_BUDDY_GROUPSCountAggregateOutputType = {
    Group_ID: number
    User_ID: number
    Tutor_ID: number
    Enrollment_ID: number
    Is_Accepted: number
    Has_Tutor: number
    Group_Members: number
    _all: number
  }


  export type STUDY_BUDDY_GROUPSAvgAggregateInputType = {
    Group_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Enrollment_ID?: true
    Group_Members?: true
  }

  export type STUDY_BUDDY_GROUPSSumAggregateInputType = {
    Group_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Enrollment_ID?: true
    Group_Members?: true
  }

  export type STUDY_BUDDY_GROUPSMinAggregateInputType = {
    Group_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Enrollment_ID?: true
    Is_Accepted?: true
    Has_Tutor?: true
    Group_Members?: true
  }

  export type STUDY_BUDDY_GROUPSMaxAggregateInputType = {
    Group_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Enrollment_ID?: true
    Is_Accepted?: true
    Has_Tutor?: true
    Group_Members?: true
  }

  export type STUDY_BUDDY_GROUPSCountAggregateInputType = {
    Group_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Enrollment_ID?: true
    Is_Accepted?: true
    Has_Tutor?: true
    Group_Members?: true
    _all?: true
  }

  export type STUDY_BUDDY_GROUPSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which STUDY_BUDDY_GROUPS to aggregate.
     */
    where?: STUDY_BUDDY_GROUPSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STUDY_BUDDY_GROUPS to fetch.
     */
    orderBy?: STUDY_BUDDY_GROUPSOrderByWithRelationInput | STUDY_BUDDY_GROUPSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: STUDY_BUDDY_GROUPSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STUDY_BUDDY_GROUPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STUDY_BUDDY_GROUPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned STUDY_BUDDY_GROUPS
    **/
    _count?: true | STUDY_BUDDY_GROUPSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: STUDY_BUDDY_GROUPSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: STUDY_BUDDY_GROUPSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: STUDY_BUDDY_GROUPSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: STUDY_BUDDY_GROUPSMaxAggregateInputType
  }

  export type GetSTUDY_BUDDY_GROUPSAggregateType<T extends STUDY_BUDDY_GROUPSAggregateArgs> = {
        [P in keyof T & keyof AggregateSTUDY_BUDDY_GROUPS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSTUDY_BUDDY_GROUPS[P]>
      : GetScalarType<T[P], AggregateSTUDY_BUDDY_GROUPS[P]>
  }




  export type STUDY_BUDDY_GROUPSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: STUDY_BUDDY_GROUPSWhereInput
    orderBy?: STUDY_BUDDY_GROUPSOrderByWithAggregationInput | STUDY_BUDDY_GROUPSOrderByWithAggregationInput[]
    by: STUDY_BUDDY_GROUPSScalarFieldEnum[] | STUDY_BUDDY_GROUPSScalarFieldEnum
    having?: STUDY_BUDDY_GROUPSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: STUDY_BUDDY_GROUPSCountAggregateInputType | true
    _avg?: STUDY_BUDDY_GROUPSAvgAggregateInputType
    _sum?: STUDY_BUDDY_GROUPSSumAggregateInputType
    _min?: STUDY_BUDDY_GROUPSMinAggregateInputType
    _max?: STUDY_BUDDY_GROUPSMaxAggregateInputType
  }

  export type STUDY_BUDDY_GROUPSGroupByOutputType = {
    Group_ID: number
    User_ID: number
    Tutor_ID: number | null
    Enrollment_ID: number
    Is_Accepted: boolean | null
    Has_Tutor: boolean | null
    Group_Members: number | null
    _count: STUDY_BUDDY_GROUPSCountAggregateOutputType | null
    _avg: STUDY_BUDDY_GROUPSAvgAggregateOutputType | null
    _sum: STUDY_BUDDY_GROUPSSumAggregateOutputType | null
    _min: STUDY_BUDDY_GROUPSMinAggregateOutputType | null
    _max: STUDY_BUDDY_GROUPSMaxAggregateOutputType | null
  }

  type GetSTUDY_BUDDY_GROUPSGroupByPayload<T extends STUDY_BUDDY_GROUPSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<STUDY_BUDDY_GROUPSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof STUDY_BUDDY_GROUPSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], STUDY_BUDDY_GROUPSGroupByOutputType[P]>
            : GetScalarType<T[P], STUDY_BUDDY_GROUPSGroupByOutputType[P]>
        }
      >
    >


  export type STUDY_BUDDY_GROUPSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Group_ID?: boolean
    User_ID?: boolean
    Tutor_ID?: boolean
    Enrollment_ID?: boolean
    Is_Accepted?: boolean
    Has_Tutor?: boolean
    Group_Members?: boolean
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
    Tutor?: boolean | STUDY_BUDDY_GROUPS$TutorArgs<ExtArgs>
    ENROLLMENTS?: boolean | ENROLLMENTSDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sTUDY_BUDDY_GROUPS"]>



  export type STUDY_BUDDY_GROUPSSelectScalar = {
    Group_ID?: boolean
    User_ID?: boolean
    Tutor_ID?: boolean
    Enrollment_ID?: boolean
    Is_Accepted?: boolean
    Has_Tutor?: boolean
    Group_Members?: boolean
  }

  export type STUDY_BUDDY_GROUPSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Group_ID" | "User_ID" | "Tutor_ID" | "Enrollment_ID" | "Is_Accepted" | "Has_Tutor" | "Group_Members", ExtArgs["result"]["sTUDY_BUDDY_GROUPS"]>
  export type STUDY_BUDDY_GROUPSInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
    Tutor?: boolean | STUDY_BUDDY_GROUPS$TutorArgs<ExtArgs>
    ENROLLMENTS?: boolean | ENROLLMENTSDefaultArgs<ExtArgs>
  }

  export type $STUDY_BUDDY_GROUPSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "STUDY_BUDDY_GROUPS"
    objects: {
      USERS: Prisma.$USERSPayload<ExtArgs>
      Tutor: Prisma.$TutorPayload<ExtArgs> | null
      ENROLLMENTS: Prisma.$ENROLLMENTSPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Group_ID: number
      User_ID: number
      Tutor_ID: number | null
      Enrollment_ID: number
      Is_Accepted: boolean | null
      Has_Tutor: boolean | null
      Group_Members: number | null
    }, ExtArgs["result"]["sTUDY_BUDDY_GROUPS"]>
    composites: {}
  }

  type STUDY_BUDDY_GROUPSGetPayload<S extends boolean | null | undefined | STUDY_BUDDY_GROUPSDefaultArgs> = $Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload, S>

  type STUDY_BUDDY_GROUPSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<STUDY_BUDDY_GROUPSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: STUDY_BUDDY_GROUPSCountAggregateInputType | true
    }

  export interface STUDY_BUDDY_GROUPSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['STUDY_BUDDY_GROUPS'], meta: { name: 'STUDY_BUDDY_GROUPS' } }
    /**
     * Find zero or one STUDY_BUDDY_GROUPS that matches the filter.
     * @param {STUDY_BUDDY_GROUPSFindUniqueArgs} args - Arguments to find a STUDY_BUDDY_GROUPS
     * @example
     * // Get one STUDY_BUDDY_GROUPS
     * const sTUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends STUDY_BUDDY_GROUPSFindUniqueArgs>(args: SelectSubset<T, STUDY_BUDDY_GROUPSFindUniqueArgs<ExtArgs>>): Prisma__STUDY_BUDDY_GROUPSClient<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one STUDY_BUDDY_GROUPS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {STUDY_BUDDY_GROUPSFindUniqueOrThrowArgs} args - Arguments to find a STUDY_BUDDY_GROUPS
     * @example
     * // Get one STUDY_BUDDY_GROUPS
     * const sTUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends STUDY_BUDDY_GROUPSFindUniqueOrThrowArgs>(args: SelectSubset<T, STUDY_BUDDY_GROUPSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__STUDY_BUDDY_GROUPSClient<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first STUDY_BUDDY_GROUPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDY_BUDDY_GROUPSFindFirstArgs} args - Arguments to find a STUDY_BUDDY_GROUPS
     * @example
     * // Get one STUDY_BUDDY_GROUPS
     * const sTUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends STUDY_BUDDY_GROUPSFindFirstArgs>(args?: SelectSubset<T, STUDY_BUDDY_GROUPSFindFirstArgs<ExtArgs>>): Prisma__STUDY_BUDDY_GROUPSClient<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first STUDY_BUDDY_GROUPS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDY_BUDDY_GROUPSFindFirstOrThrowArgs} args - Arguments to find a STUDY_BUDDY_GROUPS
     * @example
     * // Get one STUDY_BUDDY_GROUPS
     * const sTUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends STUDY_BUDDY_GROUPSFindFirstOrThrowArgs>(args?: SelectSubset<T, STUDY_BUDDY_GROUPSFindFirstOrThrowArgs<ExtArgs>>): Prisma__STUDY_BUDDY_GROUPSClient<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more STUDY_BUDDY_GROUPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDY_BUDDY_GROUPSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all STUDY_BUDDY_GROUPS
     * const sTUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.findMany()
     * 
     * // Get first 10 STUDY_BUDDY_GROUPS
     * const sTUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.findMany({ take: 10 })
     * 
     * // Only select the `Group_ID`
     * const sTUDY_BUDDY_GROUPSWithGroup_IDOnly = await prisma.sTUDY_BUDDY_GROUPS.findMany({ select: { Group_ID: true } })
     * 
     */
    findMany<T extends STUDY_BUDDY_GROUPSFindManyArgs>(args?: SelectSubset<T, STUDY_BUDDY_GROUPSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a STUDY_BUDDY_GROUPS.
     * @param {STUDY_BUDDY_GROUPSCreateArgs} args - Arguments to create a STUDY_BUDDY_GROUPS.
     * @example
     * // Create one STUDY_BUDDY_GROUPS
     * const STUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.create({
     *   data: {
     *     // ... data to create a STUDY_BUDDY_GROUPS
     *   }
     * })
     * 
     */
    create<T extends STUDY_BUDDY_GROUPSCreateArgs>(args: SelectSubset<T, STUDY_BUDDY_GROUPSCreateArgs<ExtArgs>>): Prisma__STUDY_BUDDY_GROUPSClient<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many STUDY_BUDDY_GROUPS.
     * @param {STUDY_BUDDY_GROUPSCreateManyArgs} args - Arguments to create many STUDY_BUDDY_GROUPS.
     * @example
     * // Create many STUDY_BUDDY_GROUPS
     * const sTUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends STUDY_BUDDY_GROUPSCreateManyArgs>(args?: SelectSubset<T, STUDY_BUDDY_GROUPSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a STUDY_BUDDY_GROUPS.
     * @param {STUDY_BUDDY_GROUPSDeleteArgs} args - Arguments to delete one STUDY_BUDDY_GROUPS.
     * @example
     * // Delete one STUDY_BUDDY_GROUPS
     * const STUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.delete({
     *   where: {
     *     // ... filter to delete one STUDY_BUDDY_GROUPS
     *   }
     * })
     * 
     */
    delete<T extends STUDY_BUDDY_GROUPSDeleteArgs>(args: SelectSubset<T, STUDY_BUDDY_GROUPSDeleteArgs<ExtArgs>>): Prisma__STUDY_BUDDY_GROUPSClient<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one STUDY_BUDDY_GROUPS.
     * @param {STUDY_BUDDY_GROUPSUpdateArgs} args - Arguments to update one STUDY_BUDDY_GROUPS.
     * @example
     * // Update one STUDY_BUDDY_GROUPS
     * const sTUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends STUDY_BUDDY_GROUPSUpdateArgs>(args: SelectSubset<T, STUDY_BUDDY_GROUPSUpdateArgs<ExtArgs>>): Prisma__STUDY_BUDDY_GROUPSClient<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more STUDY_BUDDY_GROUPS.
     * @param {STUDY_BUDDY_GROUPSDeleteManyArgs} args - Arguments to filter STUDY_BUDDY_GROUPS to delete.
     * @example
     * // Delete a few STUDY_BUDDY_GROUPS
     * const { count } = await prisma.sTUDY_BUDDY_GROUPS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends STUDY_BUDDY_GROUPSDeleteManyArgs>(args?: SelectSubset<T, STUDY_BUDDY_GROUPSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more STUDY_BUDDY_GROUPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDY_BUDDY_GROUPSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many STUDY_BUDDY_GROUPS
     * const sTUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends STUDY_BUDDY_GROUPSUpdateManyArgs>(args: SelectSubset<T, STUDY_BUDDY_GROUPSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one STUDY_BUDDY_GROUPS.
     * @param {STUDY_BUDDY_GROUPSUpsertArgs} args - Arguments to update or create a STUDY_BUDDY_GROUPS.
     * @example
     * // Update or create a STUDY_BUDDY_GROUPS
     * const sTUDY_BUDDY_GROUPS = await prisma.sTUDY_BUDDY_GROUPS.upsert({
     *   create: {
     *     // ... data to create a STUDY_BUDDY_GROUPS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the STUDY_BUDDY_GROUPS we want to update
     *   }
     * })
     */
    upsert<T extends STUDY_BUDDY_GROUPSUpsertArgs>(args: SelectSubset<T, STUDY_BUDDY_GROUPSUpsertArgs<ExtArgs>>): Prisma__STUDY_BUDDY_GROUPSClient<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of STUDY_BUDDY_GROUPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDY_BUDDY_GROUPSCountArgs} args - Arguments to filter STUDY_BUDDY_GROUPS to count.
     * @example
     * // Count the number of STUDY_BUDDY_GROUPS
     * const count = await prisma.sTUDY_BUDDY_GROUPS.count({
     *   where: {
     *     // ... the filter for the STUDY_BUDDY_GROUPS we want to count
     *   }
     * })
    **/
    count<T extends STUDY_BUDDY_GROUPSCountArgs>(
      args?: Subset<T, STUDY_BUDDY_GROUPSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], STUDY_BUDDY_GROUPSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a STUDY_BUDDY_GROUPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDY_BUDDY_GROUPSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends STUDY_BUDDY_GROUPSAggregateArgs>(args: Subset<T, STUDY_BUDDY_GROUPSAggregateArgs>): Prisma.PrismaPromise<GetSTUDY_BUDDY_GROUPSAggregateType<T>>

    /**
     * Group by STUDY_BUDDY_GROUPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STUDY_BUDDY_GROUPSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends STUDY_BUDDY_GROUPSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: STUDY_BUDDY_GROUPSGroupByArgs['orderBy'] }
        : { orderBy?: STUDY_BUDDY_GROUPSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, STUDY_BUDDY_GROUPSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSTUDY_BUDDY_GROUPSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the STUDY_BUDDY_GROUPS model
   */
  readonly fields: STUDY_BUDDY_GROUPSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for STUDY_BUDDY_GROUPS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__STUDY_BUDDY_GROUPSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    USERS<T extends USERSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERSDefaultArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Tutor<T extends STUDY_BUDDY_GROUPS$TutorArgs<ExtArgs> = {}>(args?: Subset<T, STUDY_BUDDY_GROUPS$TutorArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ENROLLMENTS<T extends ENROLLMENTSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ENROLLMENTSDefaultArgs<ExtArgs>>): Prisma__ENROLLMENTSClient<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the STUDY_BUDDY_GROUPS model
   */
  interface STUDY_BUDDY_GROUPSFieldRefs {
    readonly Group_ID: FieldRef<"STUDY_BUDDY_GROUPS", 'Int'>
    readonly User_ID: FieldRef<"STUDY_BUDDY_GROUPS", 'Int'>
    readonly Tutor_ID: FieldRef<"STUDY_BUDDY_GROUPS", 'Int'>
    readonly Enrollment_ID: FieldRef<"STUDY_BUDDY_GROUPS", 'Int'>
    readonly Is_Accepted: FieldRef<"STUDY_BUDDY_GROUPS", 'Boolean'>
    readonly Has_Tutor: FieldRef<"STUDY_BUDDY_GROUPS", 'Boolean'>
    readonly Group_Members: FieldRef<"STUDY_BUDDY_GROUPS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * STUDY_BUDDY_GROUPS findUnique
   */
  export type STUDY_BUDDY_GROUPSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    /**
     * Filter, which STUDY_BUDDY_GROUPS to fetch.
     */
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
  }

  /**
   * STUDY_BUDDY_GROUPS findUniqueOrThrow
   */
  export type STUDY_BUDDY_GROUPSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    /**
     * Filter, which STUDY_BUDDY_GROUPS to fetch.
     */
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
  }

  /**
   * STUDY_BUDDY_GROUPS findFirst
   */
  export type STUDY_BUDDY_GROUPSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    /**
     * Filter, which STUDY_BUDDY_GROUPS to fetch.
     */
    where?: STUDY_BUDDY_GROUPSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STUDY_BUDDY_GROUPS to fetch.
     */
    orderBy?: STUDY_BUDDY_GROUPSOrderByWithRelationInput | STUDY_BUDDY_GROUPSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for STUDY_BUDDY_GROUPS.
     */
    cursor?: STUDY_BUDDY_GROUPSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STUDY_BUDDY_GROUPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STUDY_BUDDY_GROUPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of STUDY_BUDDY_GROUPS.
     */
    distinct?: STUDY_BUDDY_GROUPSScalarFieldEnum | STUDY_BUDDY_GROUPSScalarFieldEnum[]
  }

  /**
   * STUDY_BUDDY_GROUPS findFirstOrThrow
   */
  export type STUDY_BUDDY_GROUPSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    /**
     * Filter, which STUDY_BUDDY_GROUPS to fetch.
     */
    where?: STUDY_BUDDY_GROUPSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STUDY_BUDDY_GROUPS to fetch.
     */
    orderBy?: STUDY_BUDDY_GROUPSOrderByWithRelationInput | STUDY_BUDDY_GROUPSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for STUDY_BUDDY_GROUPS.
     */
    cursor?: STUDY_BUDDY_GROUPSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STUDY_BUDDY_GROUPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STUDY_BUDDY_GROUPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of STUDY_BUDDY_GROUPS.
     */
    distinct?: STUDY_BUDDY_GROUPSScalarFieldEnum | STUDY_BUDDY_GROUPSScalarFieldEnum[]
  }

  /**
   * STUDY_BUDDY_GROUPS findMany
   */
  export type STUDY_BUDDY_GROUPSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    /**
     * Filter, which STUDY_BUDDY_GROUPS to fetch.
     */
    where?: STUDY_BUDDY_GROUPSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STUDY_BUDDY_GROUPS to fetch.
     */
    orderBy?: STUDY_BUDDY_GROUPSOrderByWithRelationInput | STUDY_BUDDY_GROUPSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing STUDY_BUDDY_GROUPS.
     */
    cursor?: STUDY_BUDDY_GROUPSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STUDY_BUDDY_GROUPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STUDY_BUDDY_GROUPS.
     */
    skip?: number
    distinct?: STUDY_BUDDY_GROUPSScalarFieldEnum | STUDY_BUDDY_GROUPSScalarFieldEnum[]
  }

  /**
   * STUDY_BUDDY_GROUPS create
   */
  export type STUDY_BUDDY_GROUPSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    /**
     * The data needed to create a STUDY_BUDDY_GROUPS.
     */
    data: XOR<STUDY_BUDDY_GROUPSCreateInput, STUDY_BUDDY_GROUPSUncheckedCreateInput>
  }

  /**
   * STUDY_BUDDY_GROUPS createMany
   */
  export type STUDY_BUDDY_GROUPSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many STUDY_BUDDY_GROUPS.
     */
    data: STUDY_BUDDY_GROUPSCreateManyInput | STUDY_BUDDY_GROUPSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * STUDY_BUDDY_GROUPS update
   */
  export type STUDY_BUDDY_GROUPSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    /**
     * The data needed to update a STUDY_BUDDY_GROUPS.
     */
    data: XOR<STUDY_BUDDY_GROUPSUpdateInput, STUDY_BUDDY_GROUPSUncheckedUpdateInput>
    /**
     * Choose, which STUDY_BUDDY_GROUPS to update.
     */
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
  }

  /**
   * STUDY_BUDDY_GROUPS updateMany
   */
  export type STUDY_BUDDY_GROUPSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update STUDY_BUDDY_GROUPS.
     */
    data: XOR<STUDY_BUDDY_GROUPSUpdateManyMutationInput, STUDY_BUDDY_GROUPSUncheckedUpdateManyInput>
    /**
     * Filter which STUDY_BUDDY_GROUPS to update
     */
    where?: STUDY_BUDDY_GROUPSWhereInput
    /**
     * Limit how many STUDY_BUDDY_GROUPS to update.
     */
    limit?: number
  }

  /**
   * STUDY_BUDDY_GROUPS upsert
   */
  export type STUDY_BUDDY_GROUPSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    /**
     * The filter to search for the STUDY_BUDDY_GROUPS to update in case it exists.
     */
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
    /**
     * In case the STUDY_BUDDY_GROUPS found by the `where` argument doesn't exist, create a new STUDY_BUDDY_GROUPS with this data.
     */
    create: XOR<STUDY_BUDDY_GROUPSCreateInput, STUDY_BUDDY_GROUPSUncheckedCreateInput>
    /**
     * In case the STUDY_BUDDY_GROUPS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<STUDY_BUDDY_GROUPSUpdateInput, STUDY_BUDDY_GROUPSUncheckedUpdateInput>
  }

  /**
   * STUDY_BUDDY_GROUPS delete
   */
  export type STUDY_BUDDY_GROUPSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    /**
     * Filter which STUDY_BUDDY_GROUPS to delete.
     */
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
  }

  /**
   * STUDY_BUDDY_GROUPS deleteMany
   */
  export type STUDY_BUDDY_GROUPSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which STUDY_BUDDY_GROUPS to delete
     */
    where?: STUDY_BUDDY_GROUPSWhereInput
    /**
     * Limit how many STUDY_BUDDY_GROUPS to delete.
     */
    limit?: number
  }

  /**
   * STUDY_BUDDY_GROUPS.Tutor
   */
  export type STUDY_BUDDY_GROUPS$TutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    where?: TutorWhereInput
  }

  /**
   * STUDY_BUDDY_GROUPS without action
   */
  export type STUDY_BUDDY_GROUPSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    User_ID: number | null
    GPA: Decimal | null
  }

  export type StudentSumAggregateOutputType = {
    User_ID: number | null
    GPA: Decimal | null
  }

  export type StudentMinAggregateOutputType = {
    User_ID: number | null
    GPA: Decimal | null
  }

  export type StudentMaxAggregateOutputType = {
    User_ID: number | null
    GPA: Decimal | null
  }

  export type StudentCountAggregateOutputType = {
    User_ID: number
    GPA: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    User_ID?: true
    GPA?: true
  }

  export type StudentSumAggregateInputType = {
    User_ID?: true
    GPA?: true
  }

  export type StudentMinAggregateInputType = {
    User_ID?: true
    GPA?: true
  }

  export type StudentMaxAggregateInputType = {
    User_ID?: true
    GPA?: true
  }

  export type StudentCountAggregateInputType = {
    User_ID?: true
    GPA?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    User_ID: number
    GPA: Decimal | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    User_ID?: boolean
    GPA?: boolean
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    User_ID?: boolean
    GPA?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"User_ID" | "GPA", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      USERS: Prisma.$USERSPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      User_ID: number
      GPA: Prisma.Decimal | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `User_ID`
     * const studentWithUser_IDOnly = await prisma.student.findMany({ select: { User_ID: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    USERS<T extends USERSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERSDefaultArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly User_ID: FieldRef<"Student", 'Int'>
    readonly GPA: FieldRef<"Student", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model TUTORING_SESSION
   */

  export type AggregateTUTORING_SESSION = {
    _count: TUTORING_SESSIONCountAggregateOutputType | null
    _avg: TUTORING_SESSIONAvgAggregateOutputType | null
    _sum: TUTORING_SESSIONSumAggregateOutputType | null
    _min: TUTORING_SESSIONMinAggregateOutputType | null
    _max: TUTORING_SESSIONMaxAggregateOutputType | null
  }

  export type TUTORING_SESSIONAvgAggregateOutputType = {
    Session_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Enrollment_ID: number | null
    Students_Booked: number | null
    Session_Max: number | null
  }

  export type TUTORING_SESSIONSumAggregateOutputType = {
    Session_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Enrollment_ID: number | null
    Students_Booked: number | null
    Session_Max: number | null
  }

  export type TUTORING_SESSIONMinAggregateOutputType = {
    Session_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Enrollment_ID: number | null
    Session_Date: Date | null
    Session_Time: Date | null
    Session_Loc: string | null
    Students_Booked: number | null
    Session_Max: number | null
  }

  export type TUTORING_SESSIONMaxAggregateOutputType = {
    Session_ID: number | null
    User_ID: number | null
    Tutor_ID: number | null
    Enrollment_ID: number | null
    Session_Date: Date | null
    Session_Time: Date | null
    Session_Loc: string | null
    Students_Booked: number | null
    Session_Max: number | null
  }

  export type TUTORING_SESSIONCountAggregateOutputType = {
    Session_ID: number
    User_ID: number
    Tutor_ID: number
    Enrollment_ID: number
    Session_Date: number
    Session_Time: number
    Session_Loc: number
    Students_Booked: number
    Session_Max: number
    _all: number
  }


  export type TUTORING_SESSIONAvgAggregateInputType = {
    Session_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Enrollment_ID?: true
    Students_Booked?: true
    Session_Max?: true
  }

  export type TUTORING_SESSIONSumAggregateInputType = {
    Session_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Enrollment_ID?: true
    Students_Booked?: true
    Session_Max?: true
  }

  export type TUTORING_SESSIONMinAggregateInputType = {
    Session_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Enrollment_ID?: true
    Session_Date?: true
    Session_Time?: true
    Session_Loc?: true
    Students_Booked?: true
    Session_Max?: true
  }

  export type TUTORING_SESSIONMaxAggregateInputType = {
    Session_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Enrollment_ID?: true
    Session_Date?: true
    Session_Time?: true
    Session_Loc?: true
    Students_Booked?: true
    Session_Max?: true
  }

  export type TUTORING_SESSIONCountAggregateInputType = {
    Session_ID?: true
    User_ID?: true
    Tutor_ID?: true
    Enrollment_ID?: true
    Session_Date?: true
    Session_Time?: true
    Session_Loc?: true
    Students_Booked?: true
    Session_Max?: true
    _all?: true
  }

  export type TUTORING_SESSIONAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TUTORING_SESSION to aggregate.
     */
    where?: TUTORING_SESSIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTORING_SESSIONS to fetch.
     */
    orderBy?: TUTORING_SESSIONOrderByWithRelationInput | TUTORING_SESSIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TUTORING_SESSIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTORING_SESSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTORING_SESSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TUTORING_SESSIONS
    **/
    _count?: true | TUTORING_SESSIONCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TUTORING_SESSIONAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TUTORING_SESSIONSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TUTORING_SESSIONMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TUTORING_SESSIONMaxAggregateInputType
  }

  export type GetTUTORING_SESSIONAggregateType<T extends TUTORING_SESSIONAggregateArgs> = {
        [P in keyof T & keyof AggregateTUTORING_SESSION]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTUTORING_SESSION[P]>
      : GetScalarType<T[P], AggregateTUTORING_SESSION[P]>
  }




  export type TUTORING_SESSIONGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TUTORING_SESSIONWhereInput
    orderBy?: TUTORING_SESSIONOrderByWithAggregationInput | TUTORING_SESSIONOrderByWithAggregationInput[]
    by: TUTORING_SESSIONScalarFieldEnum[] | TUTORING_SESSIONScalarFieldEnum
    having?: TUTORING_SESSIONScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TUTORING_SESSIONCountAggregateInputType | true
    _avg?: TUTORING_SESSIONAvgAggregateInputType
    _sum?: TUTORING_SESSIONSumAggregateInputType
    _min?: TUTORING_SESSIONMinAggregateInputType
    _max?: TUTORING_SESSIONMaxAggregateInputType
  }

  export type TUTORING_SESSIONGroupByOutputType = {
    Session_ID: number
    User_ID: number
    Tutor_ID: number
    Enrollment_ID: number
    Session_Date: Date | null
    Session_Time: Date | null
    Session_Loc: string | null
    Students_Booked: number | null
    Session_Max: number | null
    _count: TUTORING_SESSIONCountAggregateOutputType | null
    _avg: TUTORING_SESSIONAvgAggregateOutputType | null
    _sum: TUTORING_SESSIONSumAggregateOutputType | null
    _min: TUTORING_SESSIONMinAggregateOutputType | null
    _max: TUTORING_SESSIONMaxAggregateOutputType | null
  }

  type GetTUTORING_SESSIONGroupByPayload<T extends TUTORING_SESSIONGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TUTORING_SESSIONGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TUTORING_SESSIONGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TUTORING_SESSIONGroupByOutputType[P]>
            : GetScalarType<T[P], TUTORING_SESSIONGroupByOutputType[P]>
        }
      >
    >


  export type TUTORING_SESSIONSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Session_ID?: boolean
    User_ID?: boolean
    Tutor_ID?: boolean
    Enrollment_ID?: boolean
    Session_Date?: boolean
    Session_Time?: boolean
    Session_Loc?: boolean
    Students_Booked?: boolean
    Session_Max?: boolean
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
    Tutor?: boolean | TutorDefaultArgs<ExtArgs>
    ENROLLMENTS?: boolean | ENROLLMENTSDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tUTORING_SESSION"]>



  export type TUTORING_SESSIONSelectScalar = {
    Session_ID?: boolean
    User_ID?: boolean
    Tutor_ID?: boolean
    Enrollment_ID?: boolean
    Session_Date?: boolean
    Session_Time?: boolean
    Session_Loc?: boolean
    Students_Booked?: boolean
    Session_Max?: boolean
  }

  export type TUTORING_SESSIONOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Session_ID" | "User_ID" | "Tutor_ID" | "Enrollment_ID" | "Session_Date" | "Session_Time" | "Session_Loc" | "Students_Booked" | "Session_Max", ExtArgs["result"]["tUTORING_SESSION"]>
  export type TUTORING_SESSIONInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
    Tutor?: boolean | TutorDefaultArgs<ExtArgs>
    ENROLLMENTS?: boolean | ENROLLMENTSDefaultArgs<ExtArgs>
  }

  export type $TUTORING_SESSIONPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TUTORING_SESSION"
    objects: {
      USERS: Prisma.$USERSPayload<ExtArgs>
      Tutor: Prisma.$TutorPayload<ExtArgs>
      ENROLLMENTS: Prisma.$ENROLLMENTSPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Session_ID: number
      User_ID: number
      Tutor_ID: number
      Enrollment_ID: number
      Session_Date: Date | null
      Session_Time: Date | null
      Session_Loc: string | null
      Students_Booked: number | null
      Session_Max: number | null
    }, ExtArgs["result"]["tUTORING_SESSION"]>
    composites: {}
  }

  type TUTORING_SESSIONGetPayload<S extends boolean | null | undefined | TUTORING_SESSIONDefaultArgs> = $Result.GetResult<Prisma.$TUTORING_SESSIONPayload, S>

  type TUTORING_SESSIONCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TUTORING_SESSIONFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TUTORING_SESSIONCountAggregateInputType | true
    }

  export interface TUTORING_SESSIONDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TUTORING_SESSION'], meta: { name: 'TUTORING_SESSION' } }
    /**
     * Find zero or one TUTORING_SESSION that matches the filter.
     * @param {TUTORING_SESSIONFindUniqueArgs} args - Arguments to find a TUTORING_SESSION
     * @example
     * // Get one TUTORING_SESSION
     * const tUTORING_SESSION = await prisma.tUTORING_SESSION.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TUTORING_SESSIONFindUniqueArgs>(args: SelectSubset<T, TUTORING_SESSIONFindUniqueArgs<ExtArgs>>): Prisma__TUTORING_SESSIONClient<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TUTORING_SESSION that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TUTORING_SESSIONFindUniqueOrThrowArgs} args - Arguments to find a TUTORING_SESSION
     * @example
     * // Get one TUTORING_SESSION
     * const tUTORING_SESSION = await prisma.tUTORING_SESSION.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TUTORING_SESSIONFindUniqueOrThrowArgs>(args: SelectSubset<T, TUTORING_SESSIONFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TUTORING_SESSIONClient<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TUTORING_SESSION that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTORING_SESSIONFindFirstArgs} args - Arguments to find a TUTORING_SESSION
     * @example
     * // Get one TUTORING_SESSION
     * const tUTORING_SESSION = await prisma.tUTORING_SESSION.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TUTORING_SESSIONFindFirstArgs>(args?: SelectSubset<T, TUTORING_SESSIONFindFirstArgs<ExtArgs>>): Prisma__TUTORING_SESSIONClient<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TUTORING_SESSION that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTORING_SESSIONFindFirstOrThrowArgs} args - Arguments to find a TUTORING_SESSION
     * @example
     * // Get one TUTORING_SESSION
     * const tUTORING_SESSION = await prisma.tUTORING_SESSION.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TUTORING_SESSIONFindFirstOrThrowArgs>(args?: SelectSubset<T, TUTORING_SESSIONFindFirstOrThrowArgs<ExtArgs>>): Prisma__TUTORING_SESSIONClient<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TUTORING_SESSIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTORING_SESSIONFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TUTORING_SESSIONS
     * const tUTORING_SESSIONS = await prisma.tUTORING_SESSION.findMany()
     * 
     * // Get first 10 TUTORING_SESSIONS
     * const tUTORING_SESSIONS = await prisma.tUTORING_SESSION.findMany({ take: 10 })
     * 
     * // Only select the `Session_ID`
     * const tUTORING_SESSIONWithSession_IDOnly = await prisma.tUTORING_SESSION.findMany({ select: { Session_ID: true } })
     * 
     */
    findMany<T extends TUTORING_SESSIONFindManyArgs>(args?: SelectSubset<T, TUTORING_SESSIONFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TUTORING_SESSION.
     * @param {TUTORING_SESSIONCreateArgs} args - Arguments to create a TUTORING_SESSION.
     * @example
     * // Create one TUTORING_SESSION
     * const TUTORING_SESSION = await prisma.tUTORING_SESSION.create({
     *   data: {
     *     // ... data to create a TUTORING_SESSION
     *   }
     * })
     * 
     */
    create<T extends TUTORING_SESSIONCreateArgs>(args: SelectSubset<T, TUTORING_SESSIONCreateArgs<ExtArgs>>): Prisma__TUTORING_SESSIONClient<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TUTORING_SESSIONS.
     * @param {TUTORING_SESSIONCreateManyArgs} args - Arguments to create many TUTORING_SESSIONS.
     * @example
     * // Create many TUTORING_SESSIONS
     * const tUTORING_SESSION = await prisma.tUTORING_SESSION.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TUTORING_SESSIONCreateManyArgs>(args?: SelectSubset<T, TUTORING_SESSIONCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TUTORING_SESSION.
     * @param {TUTORING_SESSIONDeleteArgs} args - Arguments to delete one TUTORING_SESSION.
     * @example
     * // Delete one TUTORING_SESSION
     * const TUTORING_SESSION = await prisma.tUTORING_SESSION.delete({
     *   where: {
     *     // ... filter to delete one TUTORING_SESSION
     *   }
     * })
     * 
     */
    delete<T extends TUTORING_SESSIONDeleteArgs>(args: SelectSubset<T, TUTORING_SESSIONDeleteArgs<ExtArgs>>): Prisma__TUTORING_SESSIONClient<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TUTORING_SESSION.
     * @param {TUTORING_SESSIONUpdateArgs} args - Arguments to update one TUTORING_SESSION.
     * @example
     * // Update one TUTORING_SESSION
     * const tUTORING_SESSION = await prisma.tUTORING_SESSION.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TUTORING_SESSIONUpdateArgs>(args: SelectSubset<T, TUTORING_SESSIONUpdateArgs<ExtArgs>>): Prisma__TUTORING_SESSIONClient<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TUTORING_SESSIONS.
     * @param {TUTORING_SESSIONDeleteManyArgs} args - Arguments to filter TUTORING_SESSIONS to delete.
     * @example
     * // Delete a few TUTORING_SESSIONS
     * const { count } = await prisma.tUTORING_SESSION.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TUTORING_SESSIONDeleteManyArgs>(args?: SelectSubset<T, TUTORING_SESSIONDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TUTORING_SESSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTORING_SESSIONUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TUTORING_SESSIONS
     * const tUTORING_SESSION = await prisma.tUTORING_SESSION.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TUTORING_SESSIONUpdateManyArgs>(args: SelectSubset<T, TUTORING_SESSIONUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TUTORING_SESSION.
     * @param {TUTORING_SESSIONUpsertArgs} args - Arguments to update or create a TUTORING_SESSION.
     * @example
     * // Update or create a TUTORING_SESSION
     * const tUTORING_SESSION = await prisma.tUTORING_SESSION.upsert({
     *   create: {
     *     // ... data to create a TUTORING_SESSION
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TUTORING_SESSION we want to update
     *   }
     * })
     */
    upsert<T extends TUTORING_SESSIONUpsertArgs>(args: SelectSubset<T, TUTORING_SESSIONUpsertArgs<ExtArgs>>): Prisma__TUTORING_SESSIONClient<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TUTORING_SESSIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTORING_SESSIONCountArgs} args - Arguments to filter TUTORING_SESSIONS to count.
     * @example
     * // Count the number of TUTORING_SESSIONS
     * const count = await prisma.tUTORING_SESSION.count({
     *   where: {
     *     // ... the filter for the TUTORING_SESSIONS we want to count
     *   }
     * })
    **/
    count<T extends TUTORING_SESSIONCountArgs>(
      args?: Subset<T, TUTORING_SESSIONCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TUTORING_SESSIONCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TUTORING_SESSION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTORING_SESSIONAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TUTORING_SESSIONAggregateArgs>(args: Subset<T, TUTORING_SESSIONAggregateArgs>): Prisma.PrismaPromise<GetTUTORING_SESSIONAggregateType<T>>

    /**
     * Group by TUTORING_SESSION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTORING_SESSIONGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TUTORING_SESSIONGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TUTORING_SESSIONGroupByArgs['orderBy'] }
        : { orderBy?: TUTORING_SESSIONGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TUTORING_SESSIONGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTUTORING_SESSIONGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TUTORING_SESSION model
   */
  readonly fields: TUTORING_SESSIONFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TUTORING_SESSION.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TUTORING_SESSIONClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    USERS<T extends USERSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERSDefaultArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Tutor<T extends TutorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorDefaultArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ENROLLMENTS<T extends ENROLLMENTSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ENROLLMENTSDefaultArgs<ExtArgs>>): Prisma__ENROLLMENTSClient<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TUTORING_SESSION model
   */
  interface TUTORING_SESSIONFieldRefs {
    readonly Session_ID: FieldRef<"TUTORING_SESSION", 'Int'>
    readonly User_ID: FieldRef<"TUTORING_SESSION", 'Int'>
    readonly Tutor_ID: FieldRef<"TUTORING_SESSION", 'Int'>
    readonly Enrollment_ID: FieldRef<"TUTORING_SESSION", 'Int'>
    readonly Session_Date: FieldRef<"TUTORING_SESSION", 'DateTime'>
    readonly Session_Time: FieldRef<"TUTORING_SESSION", 'DateTime'>
    readonly Session_Loc: FieldRef<"TUTORING_SESSION", 'String'>
    readonly Students_Booked: FieldRef<"TUTORING_SESSION", 'Int'>
    readonly Session_Max: FieldRef<"TUTORING_SESSION", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TUTORING_SESSION findUnique
   */
  export type TUTORING_SESSIONFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    /**
     * Filter, which TUTORING_SESSION to fetch.
     */
    where: TUTORING_SESSIONWhereUniqueInput
  }

  /**
   * TUTORING_SESSION findUniqueOrThrow
   */
  export type TUTORING_SESSIONFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    /**
     * Filter, which TUTORING_SESSION to fetch.
     */
    where: TUTORING_SESSIONWhereUniqueInput
  }

  /**
   * TUTORING_SESSION findFirst
   */
  export type TUTORING_SESSIONFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    /**
     * Filter, which TUTORING_SESSION to fetch.
     */
    where?: TUTORING_SESSIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTORING_SESSIONS to fetch.
     */
    orderBy?: TUTORING_SESSIONOrderByWithRelationInput | TUTORING_SESSIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TUTORING_SESSIONS.
     */
    cursor?: TUTORING_SESSIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTORING_SESSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTORING_SESSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TUTORING_SESSIONS.
     */
    distinct?: TUTORING_SESSIONScalarFieldEnum | TUTORING_SESSIONScalarFieldEnum[]
  }

  /**
   * TUTORING_SESSION findFirstOrThrow
   */
  export type TUTORING_SESSIONFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    /**
     * Filter, which TUTORING_SESSION to fetch.
     */
    where?: TUTORING_SESSIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTORING_SESSIONS to fetch.
     */
    orderBy?: TUTORING_SESSIONOrderByWithRelationInput | TUTORING_SESSIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TUTORING_SESSIONS.
     */
    cursor?: TUTORING_SESSIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTORING_SESSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTORING_SESSIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TUTORING_SESSIONS.
     */
    distinct?: TUTORING_SESSIONScalarFieldEnum | TUTORING_SESSIONScalarFieldEnum[]
  }

  /**
   * TUTORING_SESSION findMany
   */
  export type TUTORING_SESSIONFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    /**
     * Filter, which TUTORING_SESSIONS to fetch.
     */
    where?: TUTORING_SESSIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTORING_SESSIONS to fetch.
     */
    orderBy?: TUTORING_SESSIONOrderByWithRelationInput | TUTORING_SESSIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TUTORING_SESSIONS.
     */
    cursor?: TUTORING_SESSIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTORING_SESSIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTORING_SESSIONS.
     */
    skip?: number
    distinct?: TUTORING_SESSIONScalarFieldEnum | TUTORING_SESSIONScalarFieldEnum[]
  }

  /**
   * TUTORING_SESSION create
   */
  export type TUTORING_SESSIONCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    /**
     * The data needed to create a TUTORING_SESSION.
     */
    data: XOR<TUTORING_SESSIONCreateInput, TUTORING_SESSIONUncheckedCreateInput>
  }

  /**
   * TUTORING_SESSION createMany
   */
  export type TUTORING_SESSIONCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TUTORING_SESSIONS.
     */
    data: TUTORING_SESSIONCreateManyInput | TUTORING_SESSIONCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TUTORING_SESSION update
   */
  export type TUTORING_SESSIONUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    /**
     * The data needed to update a TUTORING_SESSION.
     */
    data: XOR<TUTORING_SESSIONUpdateInput, TUTORING_SESSIONUncheckedUpdateInput>
    /**
     * Choose, which TUTORING_SESSION to update.
     */
    where: TUTORING_SESSIONWhereUniqueInput
  }

  /**
   * TUTORING_SESSION updateMany
   */
  export type TUTORING_SESSIONUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TUTORING_SESSIONS.
     */
    data: XOR<TUTORING_SESSIONUpdateManyMutationInput, TUTORING_SESSIONUncheckedUpdateManyInput>
    /**
     * Filter which TUTORING_SESSIONS to update
     */
    where?: TUTORING_SESSIONWhereInput
    /**
     * Limit how many TUTORING_SESSIONS to update.
     */
    limit?: number
  }

  /**
   * TUTORING_SESSION upsert
   */
  export type TUTORING_SESSIONUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    /**
     * The filter to search for the TUTORING_SESSION to update in case it exists.
     */
    where: TUTORING_SESSIONWhereUniqueInput
    /**
     * In case the TUTORING_SESSION found by the `where` argument doesn't exist, create a new TUTORING_SESSION with this data.
     */
    create: XOR<TUTORING_SESSIONCreateInput, TUTORING_SESSIONUncheckedCreateInput>
    /**
     * In case the TUTORING_SESSION was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TUTORING_SESSIONUpdateInput, TUTORING_SESSIONUncheckedUpdateInput>
  }

  /**
   * TUTORING_SESSION delete
   */
  export type TUTORING_SESSIONDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    /**
     * Filter which TUTORING_SESSION to delete.
     */
    where: TUTORING_SESSIONWhereUniqueInput
  }

  /**
   * TUTORING_SESSION deleteMany
   */
  export type TUTORING_SESSIONDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TUTORING_SESSIONS to delete
     */
    where?: TUTORING_SESSIONWhereInput
    /**
     * Limit how many TUTORING_SESSIONS to delete.
     */
    limit?: number
  }

  /**
   * TUTORING_SESSION without action
   */
  export type TUTORING_SESSIONDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
  }


  /**
   * Model TUTOR_AVAILABILITY
   */

  export type AggregateTUTOR_AVAILABILITY = {
    _count: TUTOR_AVAILABILITYCountAggregateOutputType | null
    _avg: TUTOR_AVAILABILITYAvgAggregateOutputType | null
    _sum: TUTOR_AVAILABILITYSumAggregateOutputType | null
    _min: TUTOR_AVAILABILITYMinAggregateOutputType | null
    _max: TUTOR_AVAILABILITYMaxAggregateOutputType | null
  }

  export type TUTOR_AVAILABILITYAvgAggregateOutputType = {
    Availability_ID: number | null
    Tutor_ID: number | null
  }

  export type TUTOR_AVAILABILITYSumAggregateOutputType = {
    Availability_ID: number | null
    Tutor_ID: number | null
  }

  export type TUTOR_AVAILABILITYMinAggregateOutputType = {
    Availability_ID: number | null
    Tutor_ID: number | null
    Date_Requested: Date | null
    Times_Requested: Date | null
    Is_Approved: boolean | null
  }

  export type TUTOR_AVAILABILITYMaxAggregateOutputType = {
    Availability_ID: number | null
    Tutor_ID: number | null
    Date_Requested: Date | null
    Times_Requested: Date | null
    Is_Approved: boolean | null
  }

  export type TUTOR_AVAILABILITYCountAggregateOutputType = {
    Availability_ID: number
    Tutor_ID: number
    Date_Requested: number
    Times_Requested: number
    Is_Approved: number
    _all: number
  }


  export type TUTOR_AVAILABILITYAvgAggregateInputType = {
    Availability_ID?: true
    Tutor_ID?: true
  }

  export type TUTOR_AVAILABILITYSumAggregateInputType = {
    Availability_ID?: true
    Tutor_ID?: true
  }

  export type TUTOR_AVAILABILITYMinAggregateInputType = {
    Availability_ID?: true
    Tutor_ID?: true
    Date_Requested?: true
    Times_Requested?: true
    Is_Approved?: true
  }

  export type TUTOR_AVAILABILITYMaxAggregateInputType = {
    Availability_ID?: true
    Tutor_ID?: true
    Date_Requested?: true
    Times_Requested?: true
    Is_Approved?: true
  }

  export type TUTOR_AVAILABILITYCountAggregateInputType = {
    Availability_ID?: true
    Tutor_ID?: true
    Date_Requested?: true
    Times_Requested?: true
    Is_Approved?: true
    _all?: true
  }

  export type TUTOR_AVAILABILITYAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TUTOR_AVAILABILITY to aggregate.
     */
    where?: TUTOR_AVAILABILITYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTOR_AVAILABILITIES to fetch.
     */
    orderBy?: TUTOR_AVAILABILITYOrderByWithRelationInput | TUTOR_AVAILABILITYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TUTOR_AVAILABILITYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTOR_AVAILABILITIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTOR_AVAILABILITIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TUTOR_AVAILABILITIES
    **/
    _count?: true | TUTOR_AVAILABILITYCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TUTOR_AVAILABILITYAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TUTOR_AVAILABILITYSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TUTOR_AVAILABILITYMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TUTOR_AVAILABILITYMaxAggregateInputType
  }

  export type GetTUTOR_AVAILABILITYAggregateType<T extends TUTOR_AVAILABILITYAggregateArgs> = {
        [P in keyof T & keyof AggregateTUTOR_AVAILABILITY]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTUTOR_AVAILABILITY[P]>
      : GetScalarType<T[P], AggregateTUTOR_AVAILABILITY[P]>
  }




  export type TUTOR_AVAILABILITYGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TUTOR_AVAILABILITYWhereInput
    orderBy?: TUTOR_AVAILABILITYOrderByWithAggregationInput | TUTOR_AVAILABILITYOrderByWithAggregationInput[]
    by: TUTOR_AVAILABILITYScalarFieldEnum[] | TUTOR_AVAILABILITYScalarFieldEnum
    having?: TUTOR_AVAILABILITYScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TUTOR_AVAILABILITYCountAggregateInputType | true
    _avg?: TUTOR_AVAILABILITYAvgAggregateInputType
    _sum?: TUTOR_AVAILABILITYSumAggregateInputType
    _min?: TUTOR_AVAILABILITYMinAggregateInputType
    _max?: TUTOR_AVAILABILITYMaxAggregateInputType
  }

  export type TUTOR_AVAILABILITYGroupByOutputType = {
    Availability_ID: number
    Tutor_ID: number
    Date_Requested: Date | null
    Times_Requested: Date | null
    Is_Approved: boolean | null
    _count: TUTOR_AVAILABILITYCountAggregateOutputType | null
    _avg: TUTOR_AVAILABILITYAvgAggregateOutputType | null
    _sum: TUTOR_AVAILABILITYSumAggregateOutputType | null
    _min: TUTOR_AVAILABILITYMinAggregateOutputType | null
    _max: TUTOR_AVAILABILITYMaxAggregateOutputType | null
  }

  type GetTUTOR_AVAILABILITYGroupByPayload<T extends TUTOR_AVAILABILITYGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TUTOR_AVAILABILITYGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TUTOR_AVAILABILITYGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TUTOR_AVAILABILITYGroupByOutputType[P]>
            : GetScalarType<T[P], TUTOR_AVAILABILITYGroupByOutputType[P]>
        }
      >
    >


  export type TUTOR_AVAILABILITYSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Availability_ID?: boolean
    Tutor_ID?: boolean
    Date_Requested?: boolean
    Times_Requested?: boolean
    Is_Approved?: boolean
    SCHEDULE?: boolean | TUTOR_AVAILABILITY$SCHEDULEArgs<ExtArgs>
    Tutor?: boolean | TutorDefaultArgs<ExtArgs>
    _count?: boolean | TUTOR_AVAILABILITYCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tUTOR_AVAILABILITY"]>



  export type TUTOR_AVAILABILITYSelectScalar = {
    Availability_ID?: boolean
    Tutor_ID?: boolean
    Date_Requested?: boolean
    Times_Requested?: boolean
    Is_Approved?: boolean
  }

  export type TUTOR_AVAILABILITYOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Availability_ID" | "Tutor_ID" | "Date_Requested" | "Times_Requested" | "Is_Approved", ExtArgs["result"]["tUTOR_AVAILABILITY"]>
  export type TUTOR_AVAILABILITYInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SCHEDULE?: boolean | TUTOR_AVAILABILITY$SCHEDULEArgs<ExtArgs>
    Tutor?: boolean | TutorDefaultArgs<ExtArgs>
    _count?: boolean | TUTOR_AVAILABILITYCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TUTOR_AVAILABILITYPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TUTOR_AVAILABILITY"
    objects: {
      SCHEDULE: Prisma.$SCHEDULEPayload<ExtArgs>[]
      Tutor: Prisma.$TutorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Availability_ID: number
      Tutor_ID: number
      Date_Requested: Date | null
      Times_Requested: Date | null
      Is_Approved: boolean | null
    }, ExtArgs["result"]["tUTOR_AVAILABILITY"]>
    composites: {}
  }

  type TUTOR_AVAILABILITYGetPayload<S extends boolean | null | undefined | TUTOR_AVAILABILITYDefaultArgs> = $Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload, S>

  type TUTOR_AVAILABILITYCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TUTOR_AVAILABILITYFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TUTOR_AVAILABILITYCountAggregateInputType | true
    }

  export interface TUTOR_AVAILABILITYDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TUTOR_AVAILABILITY'], meta: { name: 'TUTOR_AVAILABILITY' } }
    /**
     * Find zero or one TUTOR_AVAILABILITY that matches the filter.
     * @param {TUTOR_AVAILABILITYFindUniqueArgs} args - Arguments to find a TUTOR_AVAILABILITY
     * @example
     * // Get one TUTOR_AVAILABILITY
     * const tUTOR_AVAILABILITY = await prisma.tUTOR_AVAILABILITY.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TUTOR_AVAILABILITYFindUniqueArgs>(args: SelectSubset<T, TUTOR_AVAILABILITYFindUniqueArgs<ExtArgs>>): Prisma__TUTOR_AVAILABILITYClient<$Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TUTOR_AVAILABILITY that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TUTOR_AVAILABILITYFindUniqueOrThrowArgs} args - Arguments to find a TUTOR_AVAILABILITY
     * @example
     * // Get one TUTOR_AVAILABILITY
     * const tUTOR_AVAILABILITY = await prisma.tUTOR_AVAILABILITY.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TUTOR_AVAILABILITYFindUniqueOrThrowArgs>(args: SelectSubset<T, TUTOR_AVAILABILITYFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TUTOR_AVAILABILITYClient<$Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TUTOR_AVAILABILITY that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_AVAILABILITYFindFirstArgs} args - Arguments to find a TUTOR_AVAILABILITY
     * @example
     * // Get one TUTOR_AVAILABILITY
     * const tUTOR_AVAILABILITY = await prisma.tUTOR_AVAILABILITY.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TUTOR_AVAILABILITYFindFirstArgs>(args?: SelectSubset<T, TUTOR_AVAILABILITYFindFirstArgs<ExtArgs>>): Prisma__TUTOR_AVAILABILITYClient<$Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TUTOR_AVAILABILITY that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_AVAILABILITYFindFirstOrThrowArgs} args - Arguments to find a TUTOR_AVAILABILITY
     * @example
     * // Get one TUTOR_AVAILABILITY
     * const tUTOR_AVAILABILITY = await prisma.tUTOR_AVAILABILITY.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TUTOR_AVAILABILITYFindFirstOrThrowArgs>(args?: SelectSubset<T, TUTOR_AVAILABILITYFindFirstOrThrowArgs<ExtArgs>>): Prisma__TUTOR_AVAILABILITYClient<$Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TUTOR_AVAILABILITIES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_AVAILABILITYFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TUTOR_AVAILABILITIES
     * const tUTOR_AVAILABILITIES = await prisma.tUTOR_AVAILABILITY.findMany()
     * 
     * // Get first 10 TUTOR_AVAILABILITIES
     * const tUTOR_AVAILABILITIES = await prisma.tUTOR_AVAILABILITY.findMany({ take: 10 })
     * 
     * // Only select the `Availability_ID`
     * const tUTOR_AVAILABILITYWithAvailability_IDOnly = await prisma.tUTOR_AVAILABILITY.findMany({ select: { Availability_ID: true } })
     * 
     */
    findMany<T extends TUTOR_AVAILABILITYFindManyArgs>(args?: SelectSubset<T, TUTOR_AVAILABILITYFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TUTOR_AVAILABILITY.
     * @param {TUTOR_AVAILABILITYCreateArgs} args - Arguments to create a TUTOR_AVAILABILITY.
     * @example
     * // Create one TUTOR_AVAILABILITY
     * const TUTOR_AVAILABILITY = await prisma.tUTOR_AVAILABILITY.create({
     *   data: {
     *     // ... data to create a TUTOR_AVAILABILITY
     *   }
     * })
     * 
     */
    create<T extends TUTOR_AVAILABILITYCreateArgs>(args: SelectSubset<T, TUTOR_AVAILABILITYCreateArgs<ExtArgs>>): Prisma__TUTOR_AVAILABILITYClient<$Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TUTOR_AVAILABILITIES.
     * @param {TUTOR_AVAILABILITYCreateManyArgs} args - Arguments to create many TUTOR_AVAILABILITIES.
     * @example
     * // Create many TUTOR_AVAILABILITIES
     * const tUTOR_AVAILABILITY = await prisma.tUTOR_AVAILABILITY.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TUTOR_AVAILABILITYCreateManyArgs>(args?: SelectSubset<T, TUTOR_AVAILABILITYCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TUTOR_AVAILABILITY.
     * @param {TUTOR_AVAILABILITYDeleteArgs} args - Arguments to delete one TUTOR_AVAILABILITY.
     * @example
     * // Delete one TUTOR_AVAILABILITY
     * const TUTOR_AVAILABILITY = await prisma.tUTOR_AVAILABILITY.delete({
     *   where: {
     *     // ... filter to delete one TUTOR_AVAILABILITY
     *   }
     * })
     * 
     */
    delete<T extends TUTOR_AVAILABILITYDeleteArgs>(args: SelectSubset<T, TUTOR_AVAILABILITYDeleteArgs<ExtArgs>>): Prisma__TUTOR_AVAILABILITYClient<$Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TUTOR_AVAILABILITY.
     * @param {TUTOR_AVAILABILITYUpdateArgs} args - Arguments to update one TUTOR_AVAILABILITY.
     * @example
     * // Update one TUTOR_AVAILABILITY
     * const tUTOR_AVAILABILITY = await prisma.tUTOR_AVAILABILITY.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TUTOR_AVAILABILITYUpdateArgs>(args: SelectSubset<T, TUTOR_AVAILABILITYUpdateArgs<ExtArgs>>): Prisma__TUTOR_AVAILABILITYClient<$Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TUTOR_AVAILABILITIES.
     * @param {TUTOR_AVAILABILITYDeleteManyArgs} args - Arguments to filter TUTOR_AVAILABILITIES to delete.
     * @example
     * // Delete a few TUTOR_AVAILABILITIES
     * const { count } = await prisma.tUTOR_AVAILABILITY.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TUTOR_AVAILABILITYDeleteManyArgs>(args?: SelectSubset<T, TUTOR_AVAILABILITYDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TUTOR_AVAILABILITIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_AVAILABILITYUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TUTOR_AVAILABILITIES
     * const tUTOR_AVAILABILITY = await prisma.tUTOR_AVAILABILITY.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TUTOR_AVAILABILITYUpdateManyArgs>(args: SelectSubset<T, TUTOR_AVAILABILITYUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TUTOR_AVAILABILITY.
     * @param {TUTOR_AVAILABILITYUpsertArgs} args - Arguments to update or create a TUTOR_AVAILABILITY.
     * @example
     * // Update or create a TUTOR_AVAILABILITY
     * const tUTOR_AVAILABILITY = await prisma.tUTOR_AVAILABILITY.upsert({
     *   create: {
     *     // ... data to create a TUTOR_AVAILABILITY
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TUTOR_AVAILABILITY we want to update
     *   }
     * })
     */
    upsert<T extends TUTOR_AVAILABILITYUpsertArgs>(args: SelectSubset<T, TUTOR_AVAILABILITYUpsertArgs<ExtArgs>>): Prisma__TUTOR_AVAILABILITYClient<$Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TUTOR_AVAILABILITIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_AVAILABILITYCountArgs} args - Arguments to filter TUTOR_AVAILABILITIES to count.
     * @example
     * // Count the number of TUTOR_AVAILABILITIES
     * const count = await prisma.tUTOR_AVAILABILITY.count({
     *   where: {
     *     // ... the filter for the TUTOR_AVAILABILITIES we want to count
     *   }
     * })
    **/
    count<T extends TUTOR_AVAILABILITYCountArgs>(
      args?: Subset<T, TUTOR_AVAILABILITYCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TUTOR_AVAILABILITYCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TUTOR_AVAILABILITY.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_AVAILABILITYAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TUTOR_AVAILABILITYAggregateArgs>(args: Subset<T, TUTOR_AVAILABILITYAggregateArgs>): Prisma.PrismaPromise<GetTUTOR_AVAILABILITYAggregateType<T>>

    /**
     * Group by TUTOR_AVAILABILITY.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_AVAILABILITYGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TUTOR_AVAILABILITYGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TUTOR_AVAILABILITYGroupByArgs['orderBy'] }
        : { orderBy?: TUTOR_AVAILABILITYGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TUTOR_AVAILABILITYGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTUTOR_AVAILABILITYGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TUTOR_AVAILABILITY model
   */
  readonly fields: TUTOR_AVAILABILITYFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TUTOR_AVAILABILITY.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TUTOR_AVAILABILITYClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SCHEDULE<T extends TUTOR_AVAILABILITY$SCHEDULEArgs<ExtArgs> = {}>(args?: Subset<T, TUTOR_AVAILABILITY$SCHEDULEArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SCHEDULEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Tutor<T extends TutorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorDefaultArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TUTOR_AVAILABILITY model
   */
  interface TUTOR_AVAILABILITYFieldRefs {
    readonly Availability_ID: FieldRef<"TUTOR_AVAILABILITY", 'Int'>
    readonly Tutor_ID: FieldRef<"TUTOR_AVAILABILITY", 'Int'>
    readonly Date_Requested: FieldRef<"TUTOR_AVAILABILITY", 'DateTime'>
    readonly Times_Requested: FieldRef<"TUTOR_AVAILABILITY", 'DateTime'>
    readonly Is_Approved: FieldRef<"TUTOR_AVAILABILITY", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TUTOR_AVAILABILITY findUnique
   */
  export type TUTOR_AVAILABILITYFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITY
     */
    select?: TUTOR_AVAILABILITYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_AVAILABILITY
     */
    omit?: TUTOR_AVAILABILITYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_AVAILABILITYInclude<ExtArgs> | null
    /**
     * Filter, which TUTOR_AVAILABILITY to fetch.
     */
    where: TUTOR_AVAILABILITYWhereUniqueInput
  }

  /**
   * TUTOR_AVAILABILITY findUniqueOrThrow
   */
  export type TUTOR_AVAILABILITYFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITY
     */
    select?: TUTOR_AVAILABILITYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_AVAILABILITY
     */
    omit?: TUTOR_AVAILABILITYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_AVAILABILITYInclude<ExtArgs> | null
    /**
     * Filter, which TUTOR_AVAILABILITY to fetch.
     */
    where: TUTOR_AVAILABILITYWhereUniqueInput
  }

  /**
   * TUTOR_AVAILABILITY findFirst
   */
  export type TUTOR_AVAILABILITYFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITY
     */
    select?: TUTOR_AVAILABILITYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_AVAILABILITY
     */
    omit?: TUTOR_AVAILABILITYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_AVAILABILITYInclude<ExtArgs> | null
    /**
     * Filter, which TUTOR_AVAILABILITY to fetch.
     */
    where?: TUTOR_AVAILABILITYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTOR_AVAILABILITIES to fetch.
     */
    orderBy?: TUTOR_AVAILABILITYOrderByWithRelationInput | TUTOR_AVAILABILITYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TUTOR_AVAILABILITIES.
     */
    cursor?: TUTOR_AVAILABILITYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTOR_AVAILABILITIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTOR_AVAILABILITIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TUTOR_AVAILABILITIES.
     */
    distinct?: TUTOR_AVAILABILITYScalarFieldEnum | TUTOR_AVAILABILITYScalarFieldEnum[]
  }

  /**
   * TUTOR_AVAILABILITY findFirstOrThrow
   */
  export type TUTOR_AVAILABILITYFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITY
     */
    select?: TUTOR_AVAILABILITYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_AVAILABILITY
     */
    omit?: TUTOR_AVAILABILITYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_AVAILABILITYInclude<ExtArgs> | null
    /**
     * Filter, which TUTOR_AVAILABILITY to fetch.
     */
    where?: TUTOR_AVAILABILITYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTOR_AVAILABILITIES to fetch.
     */
    orderBy?: TUTOR_AVAILABILITYOrderByWithRelationInput | TUTOR_AVAILABILITYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TUTOR_AVAILABILITIES.
     */
    cursor?: TUTOR_AVAILABILITYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTOR_AVAILABILITIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTOR_AVAILABILITIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TUTOR_AVAILABILITIES.
     */
    distinct?: TUTOR_AVAILABILITYScalarFieldEnum | TUTOR_AVAILABILITYScalarFieldEnum[]
  }

  /**
   * TUTOR_AVAILABILITY findMany
   */
  export type TUTOR_AVAILABILITYFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITY
     */
    select?: TUTOR_AVAILABILITYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_AVAILABILITY
     */
    omit?: TUTOR_AVAILABILITYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_AVAILABILITYInclude<ExtArgs> | null
    /**
     * Filter, which TUTOR_AVAILABILITIES to fetch.
     */
    where?: TUTOR_AVAILABILITYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTOR_AVAILABILITIES to fetch.
     */
    orderBy?: TUTOR_AVAILABILITYOrderByWithRelationInput | TUTOR_AVAILABILITYOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TUTOR_AVAILABILITIES.
     */
    cursor?: TUTOR_AVAILABILITYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTOR_AVAILABILITIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTOR_AVAILABILITIES.
     */
    skip?: number
    distinct?: TUTOR_AVAILABILITYScalarFieldEnum | TUTOR_AVAILABILITYScalarFieldEnum[]
  }

  /**
   * TUTOR_AVAILABILITY create
   */
  export type TUTOR_AVAILABILITYCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITY
     */
    select?: TUTOR_AVAILABILITYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_AVAILABILITY
     */
    omit?: TUTOR_AVAILABILITYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_AVAILABILITYInclude<ExtArgs> | null
    /**
     * The data needed to create a TUTOR_AVAILABILITY.
     */
    data: XOR<TUTOR_AVAILABILITYCreateInput, TUTOR_AVAILABILITYUncheckedCreateInput>
  }

  /**
   * TUTOR_AVAILABILITY createMany
   */
  export type TUTOR_AVAILABILITYCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TUTOR_AVAILABILITIES.
     */
    data: TUTOR_AVAILABILITYCreateManyInput | TUTOR_AVAILABILITYCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TUTOR_AVAILABILITY update
   */
  export type TUTOR_AVAILABILITYUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITY
     */
    select?: TUTOR_AVAILABILITYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_AVAILABILITY
     */
    omit?: TUTOR_AVAILABILITYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_AVAILABILITYInclude<ExtArgs> | null
    /**
     * The data needed to update a TUTOR_AVAILABILITY.
     */
    data: XOR<TUTOR_AVAILABILITYUpdateInput, TUTOR_AVAILABILITYUncheckedUpdateInput>
    /**
     * Choose, which TUTOR_AVAILABILITY to update.
     */
    where: TUTOR_AVAILABILITYWhereUniqueInput
  }

  /**
   * TUTOR_AVAILABILITY updateMany
   */
  export type TUTOR_AVAILABILITYUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TUTOR_AVAILABILITIES.
     */
    data: XOR<TUTOR_AVAILABILITYUpdateManyMutationInput, TUTOR_AVAILABILITYUncheckedUpdateManyInput>
    /**
     * Filter which TUTOR_AVAILABILITIES to update
     */
    where?: TUTOR_AVAILABILITYWhereInput
    /**
     * Limit how many TUTOR_AVAILABILITIES to update.
     */
    limit?: number
  }

  /**
   * TUTOR_AVAILABILITY upsert
   */
  export type TUTOR_AVAILABILITYUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITY
     */
    select?: TUTOR_AVAILABILITYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_AVAILABILITY
     */
    omit?: TUTOR_AVAILABILITYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_AVAILABILITYInclude<ExtArgs> | null
    /**
     * The filter to search for the TUTOR_AVAILABILITY to update in case it exists.
     */
    where: TUTOR_AVAILABILITYWhereUniqueInput
    /**
     * In case the TUTOR_AVAILABILITY found by the `where` argument doesn't exist, create a new TUTOR_AVAILABILITY with this data.
     */
    create: XOR<TUTOR_AVAILABILITYCreateInput, TUTOR_AVAILABILITYUncheckedCreateInput>
    /**
     * In case the TUTOR_AVAILABILITY was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TUTOR_AVAILABILITYUpdateInput, TUTOR_AVAILABILITYUncheckedUpdateInput>
  }

  /**
   * TUTOR_AVAILABILITY delete
   */
  export type TUTOR_AVAILABILITYDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITY
     */
    select?: TUTOR_AVAILABILITYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_AVAILABILITY
     */
    omit?: TUTOR_AVAILABILITYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_AVAILABILITYInclude<ExtArgs> | null
    /**
     * Filter which TUTOR_AVAILABILITY to delete.
     */
    where: TUTOR_AVAILABILITYWhereUniqueInput
  }

  /**
   * TUTOR_AVAILABILITY deleteMany
   */
  export type TUTOR_AVAILABILITYDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TUTOR_AVAILABILITIES to delete
     */
    where?: TUTOR_AVAILABILITYWhereInput
    /**
     * Limit how many TUTOR_AVAILABILITIES to delete.
     */
    limit?: number
  }

  /**
   * TUTOR_AVAILABILITY.SCHEDULE
   */
  export type TUTOR_AVAILABILITY$SCHEDULEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SCHEDULE
     */
    select?: SCHEDULESelect<ExtArgs> | null
    /**
     * Omit specific fields from the SCHEDULE
     */
    omit?: SCHEDULEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SCHEDULEInclude<ExtArgs> | null
    where?: SCHEDULEWhereInput
    orderBy?: SCHEDULEOrderByWithRelationInput | SCHEDULEOrderByWithRelationInput[]
    cursor?: SCHEDULEWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SCHEDULEScalarFieldEnum | SCHEDULEScalarFieldEnum[]
  }

  /**
   * TUTOR_AVAILABILITY without action
   */
  export type TUTOR_AVAILABILITYDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITY
     */
    select?: TUTOR_AVAILABILITYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_AVAILABILITY
     */
    omit?: TUTOR_AVAILABILITYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_AVAILABILITYInclude<ExtArgs> | null
  }


  /**
   * Model Tutor
   */

  export type AggregateTutor = {
    _count: TutorCountAggregateOutputType | null
    _avg: TutorAvgAggregateOutputType | null
    _sum: TutorSumAggregateOutputType | null
    _min: TutorMinAggregateOutputType | null
    _max: TutorMaxAggregateOutputType | null
  }

  export type TutorAvgAggregateOutputType = {
    Tutor_ID: number | null
    User_ID: number | null
  }

  export type TutorSumAggregateOutputType = {
    Tutor_ID: number | null
    User_ID: number | null
  }

  export type TutorMinAggregateOutputType = {
    Tutor_ID: number | null
    User_ID: number | null
  }

  export type TutorMaxAggregateOutputType = {
    Tutor_ID: number | null
    User_ID: number | null
  }

  export type TutorCountAggregateOutputType = {
    Tutor_ID: number
    User_ID: number
    _all: number
  }


  export type TutorAvgAggregateInputType = {
    Tutor_ID?: true
    User_ID?: true
  }

  export type TutorSumAggregateInputType = {
    Tutor_ID?: true
    User_ID?: true
  }

  export type TutorMinAggregateInputType = {
    Tutor_ID?: true
    User_ID?: true
  }

  export type TutorMaxAggregateInputType = {
    Tutor_ID?: true
    User_ID?: true
  }

  export type TutorCountAggregateInputType = {
    Tutor_ID?: true
    User_ID?: true
    _all?: true
  }

  export type TutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutor to aggregate.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tutors
    **/
    _count?: true | TutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutorMaxAggregateInputType
  }

  export type GetTutorAggregateType<T extends TutorAggregateArgs> = {
        [P in keyof T & keyof AggregateTutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutor[P]>
      : GetScalarType<T[P], AggregateTutor[P]>
  }




  export type TutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutorWhereInput
    orderBy?: TutorOrderByWithAggregationInput | TutorOrderByWithAggregationInput[]
    by: TutorScalarFieldEnum[] | TutorScalarFieldEnum
    having?: TutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutorCountAggregateInputType | true
    _avg?: TutorAvgAggregateInputType
    _sum?: TutorSumAggregateInputType
    _min?: TutorMinAggregateInputType
    _max?: TutorMaxAggregateInputType
  }

  export type TutorGroupByOutputType = {
    Tutor_ID: number
    User_ID: number
    _count: TutorCountAggregateOutputType | null
    _avg: TutorAvgAggregateOutputType | null
    _sum: TutorSumAggregateOutputType | null
    _min: TutorMinAggregateOutputType | null
    _max: TutorMaxAggregateOutputType | null
  }

  type GetTutorGroupByPayload<T extends TutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutorGroupByOutputType[P]>
            : GetScalarType<T[P], TutorGroupByOutputType[P]>
        }
      >
    >


  export type TutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Tutor_ID?: boolean
    User_ID?: boolean
    ENROLLMENTS?: boolean | Tutor$ENROLLMENTSArgs<ExtArgs>
    STUDY_BUDDY_GROUPS?: boolean | Tutor$STUDY_BUDDY_GROUPSArgs<ExtArgs>
    TUTORING_SESSION?: boolean | Tutor$TUTORING_SESSIONArgs<ExtArgs>
    TUTOR_AVAILABILITY?: boolean | Tutor$TUTOR_AVAILABILITYArgs<ExtArgs>
    TUTOR_COURSE?: boolean | Tutor$TUTOR_COURSEArgs<ExtArgs>
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
    _count?: boolean | TutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutor"]>



  export type TutorSelectScalar = {
    Tutor_ID?: boolean
    User_ID?: boolean
  }

  export type TutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Tutor_ID" | "User_ID", ExtArgs["result"]["tutor"]>
  export type TutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ENROLLMENTS?: boolean | Tutor$ENROLLMENTSArgs<ExtArgs>
    STUDY_BUDDY_GROUPS?: boolean | Tutor$STUDY_BUDDY_GROUPSArgs<ExtArgs>
    TUTORING_SESSION?: boolean | Tutor$TUTORING_SESSIONArgs<ExtArgs>
    TUTOR_AVAILABILITY?: boolean | Tutor$TUTOR_AVAILABILITYArgs<ExtArgs>
    TUTOR_COURSE?: boolean | Tutor$TUTOR_COURSEArgs<ExtArgs>
    USERS?: boolean | USERSDefaultArgs<ExtArgs>
    _count?: boolean | TutorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tutor"
    objects: {
      ENROLLMENTS: Prisma.$ENROLLMENTSPayload<ExtArgs>[]
      STUDY_BUDDY_GROUPS: Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>[]
      TUTORING_SESSION: Prisma.$TUTORING_SESSIONPayload<ExtArgs>[]
      TUTOR_AVAILABILITY: Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>[]
      TUTOR_COURSE: Prisma.$TUTOR_COURSEPayload<ExtArgs>[]
      USERS: Prisma.$USERSPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Tutor_ID: number
      User_ID: number
    }, ExtArgs["result"]["tutor"]>
    composites: {}
  }

  type TutorGetPayload<S extends boolean | null | undefined | TutorDefaultArgs> = $Result.GetResult<Prisma.$TutorPayload, S>

  type TutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutorCountAggregateInputType | true
    }

  export interface TutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tutor'], meta: { name: 'Tutor' } }
    /**
     * Find zero or one Tutor that matches the filter.
     * @param {TutorFindUniqueArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutorFindUniqueArgs>(args: SelectSubset<T, TutorFindUniqueArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tutor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutorFindUniqueOrThrowArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutorFindUniqueOrThrowArgs>(args: SelectSubset<T, TutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindFirstArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutorFindFirstArgs>(args?: SelectSubset<T, TutorFindFirstArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tutor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindFirstOrThrowArgs} args - Arguments to find a Tutor
     * @example
     * // Get one Tutor
     * const tutor = await prisma.tutor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutorFindFirstOrThrowArgs>(args?: SelectSubset<T, TutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tutors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tutors
     * const tutors = await prisma.tutor.findMany()
     * 
     * // Get first 10 Tutors
     * const tutors = await prisma.tutor.findMany({ take: 10 })
     * 
     * // Only select the `Tutor_ID`
     * const tutorWithTutor_IDOnly = await prisma.tutor.findMany({ select: { Tutor_ID: true } })
     * 
     */
    findMany<T extends TutorFindManyArgs>(args?: SelectSubset<T, TutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tutor.
     * @param {TutorCreateArgs} args - Arguments to create a Tutor.
     * @example
     * // Create one Tutor
     * const Tutor = await prisma.tutor.create({
     *   data: {
     *     // ... data to create a Tutor
     *   }
     * })
     * 
     */
    create<T extends TutorCreateArgs>(args: SelectSubset<T, TutorCreateArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tutors.
     * @param {TutorCreateManyArgs} args - Arguments to create many Tutors.
     * @example
     * // Create many Tutors
     * const tutor = await prisma.tutor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutorCreateManyArgs>(args?: SelectSubset<T, TutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tutor.
     * @param {TutorDeleteArgs} args - Arguments to delete one Tutor.
     * @example
     * // Delete one Tutor
     * const Tutor = await prisma.tutor.delete({
     *   where: {
     *     // ... filter to delete one Tutor
     *   }
     * })
     * 
     */
    delete<T extends TutorDeleteArgs>(args: SelectSubset<T, TutorDeleteArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tutor.
     * @param {TutorUpdateArgs} args - Arguments to update one Tutor.
     * @example
     * // Update one Tutor
     * const tutor = await prisma.tutor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutorUpdateArgs>(args: SelectSubset<T, TutorUpdateArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tutors.
     * @param {TutorDeleteManyArgs} args - Arguments to filter Tutors to delete.
     * @example
     * // Delete a few Tutors
     * const { count } = await prisma.tutor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutorDeleteManyArgs>(args?: SelectSubset<T, TutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tutors
     * const tutor = await prisma.tutor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutorUpdateManyArgs>(args: SelectSubset<T, TutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tutor.
     * @param {TutorUpsertArgs} args - Arguments to update or create a Tutor.
     * @example
     * // Update or create a Tutor
     * const tutor = await prisma.tutor.upsert({
     *   create: {
     *     // ... data to create a Tutor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tutor we want to update
     *   }
     * })
     */
    upsert<T extends TutorUpsertArgs>(args: SelectSubset<T, TutorUpsertArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tutors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorCountArgs} args - Arguments to filter Tutors to count.
     * @example
     * // Count the number of Tutors
     * const count = await prisma.tutor.count({
     *   where: {
     *     // ... the filter for the Tutors we want to count
     *   }
     * })
    **/
    count<T extends TutorCountArgs>(
      args?: Subset<T, TutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TutorAggregateArgs>(args: Subset<T, TutorAggregateArgs>): Prisma.PrismaPromise<GetTutorAggregateType<T>>

    /**
     * Group by Tutor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutorGroupByArgs['orderBy'] }
        : { orderBy?: TutorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tutor model
   */
  readonly fields: TutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tutor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ENROLLMENTS<T extends Tutor$ENROLLMENTSArgs<ExtArgs> = {}>(args?: Subset<T, Tutor$ENROLLMENTSArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    STUDY_BUDDY_GROUPS<T extends Tutor$STUDY_BUDDY_GROUPSArgs<ExtArgs> = {}>(args?: Subset<T, Tutor$STUDY_BUDDY_GROUPSArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TUTORING_SESSION<T extends Tutor$TUTORING_SESSIONArgs<ExtArgs> = {}>(args?: Subset<T, Tutor$TUTORING_SESSIONArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TUTOR_AVAILABILITY<T extends Tutor$TUTOR_AVAILABILITYArgs<ExtArgs> = {}>(args?: Subset<T, Tutor$TUTOR_AVAILABILITYArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TUTOR_AVAILABILITYPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TUTOR_COURSE<T extends Tutor$TUTOR_COURSEArgs<ExtArgs> = {}>(args?: Subset<T, Tutor$TUTOR_COURSEArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TUTOR_COURSEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    USERS<T extends USERSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERSDefaultArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tutor model
   */
  interface TutorFieldRefs {
    readonly Tutor_ID: FieldRef<"Tutor", 'Int'>
    readonly User_ID: FieldRef<"Tutor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tutor findUnique
   */
  export type TutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor findUniqueOrThrow
   */
  export type TutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor findFirst
   */
  export type TutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutors.
     */
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor findFirstOrThrow
   */
  export type TutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutor to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tutors.
     */
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor findMany
   */
  export type TutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter, which Tutors to fetch.
     */
    where?: TutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tutors to fetch.
     */
    orderBy?: TutorOrderByWithRelationInput | TutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tutors.
     */
    cursor?: TutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tutors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tutors.
     */
    skip?: number
    distinct?: TutorScalarFieldEnum | TutorScalarFieldEnum[]
  }

  /**
   * Tutor create
   */
  export type TutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Tutor.
     */
    data: XOR<TutorCreateInput, TutorUncheckedCreateInput>
  }

  /**
   * Tutor createMany
   */
  export type TutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tutors.
     */
    data: TutorCreateManyInput | TutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tutor update
   */
  export type TutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Tutor.
     */
    data: XOR<TutorUpdateInput, TutorUncheckedUpdateInput>
    /**
     * Choose, which Tutor to update.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor updateMany
   */
  export type TutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tutors.
     */
    data: XOR<TutorUpdateManyMutationInput, TutorUncheckedUpdateManyInput>
    /**
     * Filter which Tutors to update
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to update.
     */
    limit?: number
  }

  /**
   * Tutor upsert
   */
  export type TutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Tutor to update in case it exists.
     */
    where: TutorWhereUniqueInput
    /**
     * In case the Tutor found by the `where` argument doesn't exist, create a new Tutor with this data.
     */
    create: XOR<TutorCreateInput, TutorUncheckedCreateInput>
    /**
     * In case the Tutor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutorUpdateInput, TutorUncheckedUpdateInput>
  }

  /**
   * Tutor delete
   */
  export type TutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    /**
     * Filter which Tutor to delete.
     */
    where: TutorWhereUniqueInput
  }

  /**
   * Tutor deleteMany
   */
  export type TutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tutors to delete
     */
    where?: TutorWhereInput
    /**
     * Limit how many Tutors to delete.
     */
    limit?: number
  }

  /**
   * Tutor.ENROLLMENTS
   */
  export type Tutor$ENROLLMENTSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    where?: ENROLLMENTSWhereInput
    orderBy?: ENROLLMENTSOrderByWithRelationInput | ENROLLMENTSOrderByWithRelationInput[]
    cursor?: ENROLLMENTSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ENROLLMENTSScalarFieldEnum | ENROLLMENTSScalarFieldEnum[]
  }

  /**
   * Tutor.STUDY_BUDDY_GROUPS
   */
  export type Tutor$STUDY_BUDDY_GROUPSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    where?: STUDY_BUDDY_GROUPSWhereInput
    orderBy?: STUDY_BUDDY_GROUPSOrderByWithRelationInput | STUDY_BUDDY_GROUPSOrderByWithRelationInput[]
    cursor?: STUDY_BUDDY_GROUPSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: STUDY_BUDDY_GROUPSScalarFieldEnum | STUDY_BUDDY_GROUPSScalarFieldEnum[]
  }

  /**
   * Tutor.TUTORING_SESSION
   */
  export type Tutor$TUTORING_SESSIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    where?: TUTORING_SESSIONWhereInput
    orderBy?: TUTORING_SESSIONOrderByWithRelationInput | TUTORING_SESSIONOrderByWithRelationInput[]
    cursor?: TUTORING_SESSIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TUTORING_SESSIONScalarFieldEnum | TUTORING_SESSIONScalarFieldEnum[]
  }

  /**
   * Tutor.TUTOR_AVAILABILITY
   */
  export type Tutor$TUTOR_AVAILABILITYArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_AVAILABILITY
     */
    select?: TUTOR_AVAILABILITYSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_AVAILABILITY
     */
    omit?: TUTOR_AVAILABILITYOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_AVAILABILITYInclude<ExtArgs> | null
    where?: TUTOR_AVAILABILITYWhereInput
    orderBy?: TUTOR_AVAILABILITYOrderByWithRelationInput | TUTOR_AVAILABILITYOrderByWithRelationInput[]
    cursor?: TUTOR_AVAILABILITYWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TUTOR_AVAILABILITYScalarFieldEnum | TUTOR_AVAILABILITYScalarFieldEnum[]
  }

  /**
   * Tutor.TUTOR_COURSE
   */
  export type Tutor$TUTOR_COURSEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
    where?: TUTOR_COURSEWhereInput
    orderBy?: TUTOR_COURSEOrderByWithRelationInput | TUTOR_COURSEOrderByWithRelationInput[]
    cursor?: TUTOR_COURSEWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TUTOR_COURSEScalarFieldEnum | TUTOR_COURSEScalarFieldEnum[]
  }

  /**
   * Tutor without action
   */
  export type TutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
  }


  /**
   * Model USERS
   */

  export type AggregateUSERS = {
    _count: USERSCountAggregateOutputType | null
    _avg: USERSAvgAggregateOutputType | null
    _sum: USERSSumAggregateOutputType | null
    _min: USERSMinAggregateOutputType | null
    _max: USERSMaxAggregateOutputType | null
  }

  export type USERSAvgAggregateOutputType = {
    User_ID: number | null
  }

  export type USERSSumAggregateOutputType = {
    User_ID: number | null
  }

  export type USERSMinAggregateOutputType = {
    User_ID: number | null
    Name: string | null
    Email: string | null
    Is_Admin: boolean | null
    Is_Tutor: boolean | null
    Is_Student: boolean | null
  }

  export type USERSMaxAggregateOutputType = {
    User_ID: number | null
    Name: string | null
    Email: string | null
    Is_Admin: boolean | null
    Is_Tutor: boolean | null
    Is_Student: boolean | null
  }

  export type USERSCountAggregateOutputType = {
    User_ID: number
    Name: number
    Email: number
    Is_Admin: number
    Is_Tutor: number
    Is_Student: number
    _all: number
  }


  export type USERSAvgAggregateInputType = {
    User_ID?: true
  }

  export type USERSSumAggregateInputType = {
    User_ID?: true
  }

  export type USERSMinAggregateInputType = {
    User_ID?: true
    Name?: true
    Email?: true
    Is_Admin?: true
    Is_Tutor?: true
    Is_Student?: true
  }

  export type USERSMaxAggregateInputType = {
    User_ID?: true
    Name?: true
    Email?: true
    Is_Admin?: true
    Is_Tutor?: true
    Is_Student?: true
  }

  export type USERSCountAggregateInputType = {
    User_ID?: true
    Name?: true
    Email?: true
    Is_Admin?: true
    Is_Tutor?: true
    Is_Student?: true
    _all?: true
  }

  export type USERSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USERS to aggregate.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USERS
    **/
    _count?: true | USERSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: USERSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: USERSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USERSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USERSMaxAggregateInputType
  }

  export type GetUSERSAggregateType<T extends USERSAggregateArgs> = {
        [P in keyof T & keyof AggregateUSERS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSERS[P]>
      : GetScalarType<T[P], AggregateUSERS[P]>
  }




  export type USERSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USERSWhereInput
    orderBy?: USERSOrderByWithAggregationInput | USERSOrderByWithAggregationInput[]
    by: USERSScalarFieldEnum[] | USERSScalarFieldEnum
    having?: USERSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USERSCountAggregateInputType | true
    _avg?: USERSAvgAggregateInputType
    _sum?: USERSSumAggregateInputType
    _min?: USERSMinAggregateInputType
    _max?: USERSMaxAggregateInputType
  }

  export type USERSGroupByOutputType = {
    User_ID: number
    Name: string
    Email: string
    Is_Admin: boolean | null
    Is_Tutor: boolean | null
    Is_Student: boolean | null
    _count: USERSCountAggregateOutputType | null
    _avg: USERSAvgAggregateOutputType | null
    _sum: USERSSumAggregateOutputType | null
    _min: USERSMinAggregateOutputType | null
    _max: USERSMaxAggregateOutputType | null
  }

  type GetUSERSGroupByPayload<T extends USERSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USERSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USERSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USERSGroupByOutputType[P]>
            : GetScalarType<T[P], USERSGroupByOutputType[P]>
        }
      >
    >


  export type USERSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    User_ID?: boolean
    Name?: boolean
    Email?: boolean
    Is_Admin?: boolean
    Is_Tutor?: boolean
    Is_Student?: boolean
    Admin?: boolean | USERS$AdminArgs<ExtArgs>
    ENROLLMENTS?: boolean | USERS$ENROLLMENTSArgs<ExtArgs>
    STUDY_BUDDY_GROUPS?: boolean | USERS$STUDY_BUDDY_GROUPSArgs<ExtArgs>
    Student?: boolean | USERS$StudentArgs<ExtArgs>
    TUTORING_SESSION?: boolean | USERS$TUTORING_SESSIONArgs<ExtArgs>
    Tutor?: boolean | USERS$TutorArgs<ExtArgs>
    _count?: boolean | USERSCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uSERS"]>



  export type USERSSelectScalar = {
    User_ID?: boolean
    Name?: boolean
    Email?: boolean
    Is_Admin?: boolean
    Is_Tutor?: boolean
    Is_Student?: boolean
  }

  export type USERSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"User_ID" | "Name" | "Email" | "Is_Admin" | "Is_Tutor" | "Is_Student", ExtArgs["result"]["uSERS"]>
  export type USERSInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Admin?: boolean | USERS$AdminArgs<ExtArgs>
    ENROLLMENTS?: boolean | USERS$ENROLLMENTSArgs<ExtArgs>
    STUDY_BUDDY_GROUPS?: boolean | USERS$STUDY_BUDDY_GROUPSArgs<ExtArgs>
    Student?: boolean | USERS$StudentArgs<ExtArgs>
    TUTORING_SESSION?: boolean | USERS$TUTORING_SESSIONArgs<ExtArgs>
    Tutor?: boolean | USERS$TutorArgs<ExtArgs>
    _count?: boolean | USERSCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $USERSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USERS"
    objects: {
      Admin: Prisma.$AdminPayload<ExtArgs> | null
      ENROLLMENTS: Prisma.$ENROLLMENTSPayload<ExtArgs>[]
      STUDY_BUDDY_GROUPS: Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>[]
      Student: Prisma.$StudentPayload<ExtArgs> | null
      TUTORING_SESSION: Prisma.$TUTORING_SESSIONPayload<ExtArgs>[]
      Tutor: Prisma.$TutorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      User_ID: number
      Name: string
      Email: string
      Is_Admin: boolean | null
      Is_Tutor: boolean | null
      Is_Student: boolean | null
    }, ExtArgs["result"]["uSERS"]>
    composites: {}
  }

  type USERSGetPayload<S extends boolean | null | undefined | USERSDefaultArgs> = $Result.GetResult<Prisma.$USERSPayload, S>

  type USERSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<USERSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: USERSCountAggregateInputType | true
    }

  export interface USERSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USERS'], meta: { name: 'USERS' } }
    /**
     * Find zero or one USERS that matches the filter.
     * @param {USERSFindUniqueArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends USERSFindUniqueArgs>(args: SelectSubset<T, USERSFindUniqueArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one USERS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {USERSFindUniqueOrThrowArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends USERSFindUniqueOrThrowArgs>(args: SelectSubset<T, USERSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSFindFirstArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends USERSFindFirstArgs>(args?: SelectSubset<T, USERSFindFirstArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USERS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSFindFirstOrThrowArgs} args - Arguments to find a USERS
     * @example
     * // Get one USERS
     * const uSERS = await prisma.uSERS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends USERSFindFirstOrThrowArgs>(args?: SelectSubset<T, USERSFindFirstOrThrowArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USERS
     * const uSERS = await prisma.uSERS.findMany()
     * 
     * // Get first 10 USERS
     * const uSERS = await prisma.uSERS.findMany({ take: 10 })
     * 
     * // Only select the `User_ID`
     * const uSERSWithUser_IDOnly = await prisma.uSERS.findMany({ select: { User_ID: true } })
     * 
     */
    findMany<T extends USERSFindManyArgs>(args?: SelectSubset<T, USERSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a USERS.
     * @param {USERSCreateArgs} args - Arguments to create a USERS.
     * @example
     * // Create one USERS
     * const USERS = await prisma.uSERS.create({
     *   data: {
     *     // ... data to create a USERS
     *   }
     * })
     * 
     */
    create<T extends USERSCreateArgs>(args: SelectSubset<T, USERSCreateArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many USERS.
     * @param {USERSCreateManyArgs} args - Arguments to create many USERS.
     * @example
     * // Create many USERS
     * const uSERS = await prisma.uSERS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends USERSCreateManyArgs>(args?: SelectSubset<T, USERSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a USERS.
     * @param {USERSDeleteArgs} args - Arguments to delete one USERS.
     * @example
     * // Delete one USERS
     * const USERS = await prisma.uSERS.delete({
     *   where: {
     *     // ... filter to delete one USERS
     *   }
     * })
     * 
     */
    delete<T extends USERSDeleteArgs>(args: SelectSubset<T, USERSDeleteArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one USERS.
     * @param {USERSUpdateArgs} args - Arguments to update one USERS.
     * @example
     * // Update one USERS
     * const uSERS = await prisma.uSERS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends USERSUpdateArgs>(args: SelectSubset<T, USERSUpdateArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more USERS.
     * @param {USERSDeleteManyArgs} args - Arguments to filter USERS to delete.
     * @example
     * // Delete a few USERS
     * const { count } = await prisma.uSERS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends USERSDeleteManyArgs>(args?: SelectSubset<T, USERSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USERS
     * const uSERS = await prisma.uSERS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends USERSUpdateManyArgs>(args: SelectSubset<T, USERSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one USERS.
     * @param {USERSUpsertArgs} args - Arguments to update or create a USERS.
     * @example
     * // Update or create a USERS
     * const uSERS = await prisma.uSERS.upsert({
     *   create: {
     *     // ... data to create a USERS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USERS we want to update
     *   }
     * })
     */
    upsert<T extends USERSUpsertArgs>(args: SelectSubset<T, USERSUpsertArgs<ExtArgs>>): Prisma__USERSClient<$Result.GetResult<Prisma.$USERSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSCountArgs} args - Arguments to filter USERS to count.
     * @example
     * // Count the number of USERS
     * const count = await prisma.uSERS.count({
     *   where: {
     *     // ... the filter for the USERS we want to count
     *   }
     * })
    **/
    count<T extends USERSCountArgs>(
      args?: Subset<T, USERSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USERSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends USERSAggregateArgs>(args: Subset<T, USERSAggregateArgs>): Prisma.PrismaPromise<GetUSERSAggregateType<T>>

    /**
     * Group by USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends USERSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USERSGroupByArgs['orderBy'] }
        : { orderBy?: USERSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, USERSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSERSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USERS model
   */
  readonly fields: USERSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USERS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USERSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Admin<T extends USERS$AdminArgs<ExtArgs> = {}>(args?: Subset<T, USERS$AdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ENROLLMENTS<T extends USERS$ENROLLMENTSArgs<ExtArgs> = {}>(args?: Subset<T, USERS$ENROLLMENTSArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ENROLLMENTSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    STUDY_BUDDY_GROUPS<T extends USERS$STUDY_BUDDY_GROUPSArgs<ExtArgs> = {}>(args?: Subset<T, USERS$STUDY_BUDDY_GROUPSArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$STUDY_BUDDY_GROUPSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Student<T extends USERS$StudentArgs<ExtArgs> = {}>(args?: Subset<T, USERS$StudentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    TUTORING_SESSION<T extends USERS$TUTORING_SESSIONArgs<ExtArgs> = {}>(args?: Subset<T, USERS$TUTORING_SESSIONArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TUTORING_SESSIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Tutor<T extends USERS$TutorArgs<ExtArgs> = {}>(args?: Subset<T, USERS$TutorArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the USERS model
   */
  interface USERSFieldRefs {
    readonly User_ID: FieldRef<"USERS", 'Int'>
    readonly Name: FieldRef<"USERS", 'String'>
    readonly Email: FieldRef<"USERS", 'String'>
    readonly Is_Admin: FieldRef<"USERS", 'Boolean'>
    readonly Is_Tutor: FieldRef<"USERS", 'Boolean'>
    readonly Is_Student: FieldRef<"USERS", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * USERS findUnique
   */
  export type USERSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where: USERSWhereUniqueInput
  }

  /**
   * USERS findUniqueOrThrow
   */
  export type USERSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where: USERSWhereUniqueInput
  }

  /**
   * USERS findFirst
   */
  export type USERSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERSScalarFieldEnum | USERSScalarFieldEnum[]
  }

  /**
   * USERS findFirstOrThrow
   */
  export type USERSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERSScalarFieldEnum | USERSScalarFieldEnum[]
  }

  /**
   * USERS findMany
   */
  export type USERSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USERSOrderByWithRelationInput | USERSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USERS.
     */
    cursor?: USERSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    distinct?: USERSScalarFieldEnum | USERSScalarFieldEnum[]
  }

  /**
   * USERS create
   */
  export type USERSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * The data needed to create a USERS.
     */
    data: XOR<USERSCreateInput, USERSUncheckedCreateInput>
  }

  /**
   * USERS createMany
   */
  export type USERSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USERS.
     */
    data: USERSCreateManyInput | USERSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * USERS update
   */
  export type USERSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * The data needed to update a USERS.
     */
    data: XOR<USERSUpdateInput, USERSUncheckedUpdateInput>
    /**
     * Choose, which USERS to update.
     */
    where: USERSWhereUniqueInput
  }

  /**
   * USERS updateMany
   */
  export type USERSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USERS.
     */
    data: XOR<USERSUpdateManyMutationInput, USERSUncheckedUpdateManyInput>
    /**
     * Filter which USERS to update
     */
    where?: USERSWhereInput
    /**
     * Limit how many USERS to update.
     */
    limit?: number
  }

  /**
   * USERS upsert
   */
  export type USERSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * The filter to search for the USERS to update in case it exists.
     */
    where: USERSWhereUniqueInput
    /**
     * In case the USERS found by the `where` argument doesn't exist, create a new USERS with this data.
     */
    create: XOR<USERSCreateInput, USERSUncheckedCreateInput>
    /**
     * In case the USERS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USERSUpdateInput, USERSUncheckedUpdateInput>
  }

  /**
   * USERS delete
   */
  export type USERSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERSInclude<ExtArgs> | null
    /**
     * Filter which USERS to delete.
     */
    where: USERSWhereUniqueInput
  }

  /**
   * USERS deleteMany
   */
  export type USERSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USERS to delete
     */
    where?: USERSWhereInput
    /**
     * Limit how many USERS to delete.
     */
    limit?: number
  }

  /**
   * USERS.Admin
   */
  export type USERS$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * USERS.ENROLLMENTS
   */
  export type USERS$ENROLLMENTSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ENROLLMENTS
     */
    select?: ENROLLMENTSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ENROLLMENTS
     */
    omit?: ENROLLMENTSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ENROLLMENTSInclude<ExtArgs> | null
    where?: ENROLLMENTSWhereInput
    orderBy?: ENROLLMENTSOrderByWithRelationInput | ENROLLMENTSOrderByWithRelationInput[]
    cursor?: ENROLLMENTSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ENROLLMENTSScalarFieldEnum | ENROLLMENTSScalarFieldEnum[]
  }

  /**
   * USERS.STUDY_BUDDY_GROUPS
   */
  export type USERS$STUDY_BUDDY_GROUPSArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STUDY_BUDDY_GROUPS
     */
    select?: STUDY_BUDDY_GROUPSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the STUDY_BUDDY_GROUPS
     */
    omit?: STUDY_BUDDY_GROUPSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: STUDY_BUDDY_GROUPSInclude<ExtArgs> | null
    where?: STUDY_BUDDY_GROUPSWhereInput
    orderBy?: STUDY_BUDDY_GROUPSOrderByWithRelationInput | STUDY_BUDDY_GROUPSOrderByWithRelationInput[]
    cursor?: STUDY_BUDDY_GROUPSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: STUDY_BUDDY_GROUPSScalarFieldEnum | STUDY_BUDDY_GROUPSScalarFieldEnum[]
  }

  /**
   * USERS.Student
   */
  export type USERS$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * USERS.TUTORING_SESSION
   */
  export type USERS$TUTORING_SESSIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTORING_SESSION
     */
    select?: TUTORING_SESSIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTORING_SESSION
     */
    omit?: TUTORING_SESSIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTORING_SESSIONInclude<ExtArgs> | null
    where?: TUTORING_SESSIONWhereInput
    orderBy?: TUTORING_SESSIONOrderByWithRelationInput | TUTORING_SESSIONOrderByWithRelationInput[]
    cursor?: TUTORING_SESSIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TUTORING_SESSIONScalarFieldEnum | TUTORING_SESSIONScalarFieldEnum[]
  }

  /**
   * USERS.Tutor
   */
  export type USERS$TutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tutor
     */
    select?: TutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tutor
     */
    omit?: TutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutorInclude<ExtArgs> | null
    where?: TutorWhereInput
  }

  /**
   * USERS without action
   */
  export type USERSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERS
     */
    select?: USERSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USERS
     */
    omit?: USERSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERSInclude<ExtArgs> | null
  }


  /**
   * Model TUTOR_COURSE
   */

  export type AggregateTUTOR_COURSE = {
    _count: TUTOR_COURSECountAggregateOutputType | null
    _avg: TUTOR_COURSEAvgAggregateOutputType | null
    _sum: TUTOR_COURSESumAggregateOutputType | null
    _min: TUTOR_COURSEMinAggregateOutputType | null
    _max: TUTOR_COURSEMaxAggregateOutputType | null
  }

  export type TUTOR_COURSEAvgAggregateOutputType = {
    TutorCourseID: number | null
    Tutor_ID: number | null
    Course_ID: number | null
  }

  export type TUTOR_COURSESumAggregateOutputType = {
    TutorCourseID: number | null
    Tutor_ID: number | null
    Course_ID: number | null
  }

  export type TUTOR_COURSEMinAggregateOutputType = {
    TutorCourseID: number | null
    Tutor_ID: number | null
    Course_ID: number | null
  }

  export type TUTOR_COURSEMaxAggregateOutputType = {
    TutorCourseID: number | null
    Tutor_ID: number | null
    Course_ID: number | null
  }

  export type TUTOR_COURSECountAggregateOutputType = {
    TutorCourseID: number
    Tutor_ID: number
    Course_ID: number
    _all: number
  }


  export type TUTOR_COURSEAvgAggregateInputType = {
    TutorCourseID?: true
    Tutor_ID?: true
    Course_ID?: true
  }

  export type TUTOR_COURSESumAggregateInputType = {
    TutorCourseID?: true
    Tutor_ID?: true
    Course_ID?: true
  }

  export type TUTOR_COURSEMinAggregateInputType = {
    TutorCourseID?: true
    Tutor_ID?: true
    Course_ID?: true
  }

  export type TUTOR_COURSEMaxAggregateInputType = {
    TutorCourseID?: true
    Tutor_ID?: true
    Course_ID?: true
  }

  export type TUTOR_COURSECountAggregateInputType = {
    TutorCourseID?: true
    Tutor_ID?: true
    Course_ID?: true
    _all?: true
  }

  export type TUTOR_COURSEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TUTOR_COURSE to aggregate.
     */
    where?: TUTOR_COURSEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTOR_COURSES to fetch.
     */
    orderBy?: TUTOR_COURSEOrderByWithRelationInput | TUTOR_COURSEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TUTOR_COURSEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTOR_COURSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTOR_COURSES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TUTOR_COURSES
    **/
    _count?: true | TUTOR_COURSECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TUTOR_COURSEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TUTOR_COURSESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TUTOR_COURSEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TUTOR_COURSEMaxAggregateInputType
  }

  export type GetTUTOR_COURSEAggregateType<T extends TUTOR_COURSEAggregateArgs> = {
        [P in keyof T & keyof AggregateTUTOR_COURSE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTUTOR_COURSE[P]>
      : GetScalarType<T[P], AggregateTUTOR_COURSE[P]>
  }




  export type TUTOR_COURSEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TUTOR_COURSEWhereInput
    orderBy?: TUTOR_COURSEOrderByWithAggregationInput | TUTOR_COURSEOrderByWithAggregationInput[]
    by: TUTOR_COURSEScalarFieldEnum[] | TUTOR_COURSEScalarFieldEnum
    having?: TUTOR_COURSEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TUTOR_COURSECountAggregateInputType | true
    _avg?: TUTOR_COURSEAvgAggregateInputType
    _sum?: TUTOR_COURSESumAggregateInputType
    _min?: TUTOR_COURSEMinAggregateInputType
    _max?: TUTOR_COURSEMaxAggregateInputType
  }

  export type TUTOR_COURSEGroupByOutputType = {
    TutorCourseID: number
    Tutor_ID: number
    Course_ID: number
    _count: TUTOR_COURSECountAggregateOutputType | null
    _avg: TUTOR_COURSEAvgAggregateOutputType | null
    _sum: TUTOR_COURSESumAggregateOutputType | null
    _min: TUTOR_COURSEMinAggregateOutputType | null
    _max: TUTOR_COURSEMaxAggregateOutputType | null
  }

  type GetTUTOR_COURSEGroupByPayload<T extends TUTOR_COURSEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TUTOR_COURSEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TUTOR_COURSEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TUTOR_COURSEGroupByOutputType[P]>
            : GetScalarType<T[P], TUTOR_COURSEGroupByOutputType[P]>
        }
      >
    >


  export type TUTOR_COURSESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TutorCourseID?: boolean
    Tutor_ID?: boolean
    Course_ID?: boolean
    Tutor?: boolean | TutorDefaultArgs<ExtArgs>
    COURSES?: boolean | COURSESDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tUTOR_COURSE"]>



  export type TUTOR_COURSESelectScalar = {
    TutorCourseID?: boolean
    Tutor_ID?: boolean
    Course_ID?: boolean
  }

  export type TUTOR_COURSEOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TutorCourseID" | "Tutor_ID" | "Course_ID", ExtArgs["result"]["tUTOR_COURSE"]>
  export type TUTOR_COURSEInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tutor?: boolean | TutorDefaultArgs<ExtArgs>
    COURSES?: boolean | COURSESDefaultArgs<ExtArgs>
  }

  export type $TUTOR_COURSEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TUTOR_COURSE"
    objects: {
      Tutor: Prisma.$TutorPayload<ExtArgs>
      COURSES: Prisma.$COURSESPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      TutorCourseID: number
      Tutor_ID: number
      Course_ID: number
    }, ExtArgs["result"]["tUTOR_COURSE"]>
    composites: {}
  }

  type TUTOR_COURSEGetPayload<S extends boolean | null | undefined | TUTOR_COURSEDefaultArgs> = $Result.GetResult<Prisma.$TUTOR_COURSEPayload, S>

  type TUTOR_COURSECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TUTOR_COURSEFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TUTOR_COURSECountAggregateInputType | true
    }

  export interface TUTOR_COURSEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TUTOR_COURSE'], meta: { name: 'TUTOR_COURSE' } }
    /**
     * Find zero or one TUTOR_COURSE that matches the filter.
     * @param {TUTOR_COURSEFindUniqueArgs} args - Arguments to find a TUTOR_COURSE
     * @example
     * // Get one TUTOR_COURSE
     * const tUTOR_COURSE = await prisma.tUTOR_COURSE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TUTOR_COURSEFindUniqueArgs>(args: SelectSubset<T, TUTOR_COURSEFindUniqueArgs<ExtArgs>>): Prisma__TUTOR_COURSEClient<$Result.GetResult<Prisma.$TUTOR_COURSEPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TUTOR_COURSE that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TUTOR_COURSEFindUniqueOrThrowArgs} args - Arguments to find a TUTOR_COURSE
     * @example
     * // Get one TUTOR_COURSE
     * const tUTOR_COURSE = await prisma.tUTOR_COURSE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TUTOR_COURSEFindUniqueOrThrowArgs>(args: SelectSubset<T, TUTOR_COURSEFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TUTOR_COURSEClient<$Result.GetResult<Prisma.$TUTOR_COURSEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TUTOR_COURSE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_COURSEFindFirstArgs} args - Arguments to find a TUTOR_COURSE
     * @example
     * // Get one TUTOR_COURSE
     * const tUTOR_COURSE = await prisma.tUTOR_COURSE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TUTOR_COURSEFindFirstArgs>(args?: SelectSubset<T, TUTOR_COURSEFindFirstArgs<ExtArgs>>): Prisma__TUTOR_COURSEClient<$Result.GetResult<Prisma.$TUTOR_COURSEPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TUTOR_COURSE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_COURSEFindFirstOrThrowArgs} args - Arguments to find a TUTOR_COURSE
     * @example
     * // Get one TUTOR_COURSE
     * const tUTOR_COURSE = await prisma.tUTOR_COURSE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TUTOR_COURSEFindFirstOrThrowArgs>(args?: SelectSubset<T, TUTOR_COURSEFindFirstOrThrowArgs<ExtArgs>>): Prisma__TUTOR_COURSEClient<$Result.GetResult<Prisma.$TUTOR_COURSEPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TUTOR_COURSES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_COURSEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TUTOR_COURSES
     * const tUTOR_COURSES = await prisma.tUTOR_COURSE.findMany()
     * 
     * // Get first 10 TUTOR_COURSES
     * const tUTOR_COURSES = await prisma.tUTOR_COURSE.findMany({ take: 10 })
     * 
     * // Only select the `TutorCourseID`
     * const tUTOR_COURSEWithTutorCourseIDOnly = await prisma.tUTOR_COURSE.findMany({ select: { TutorCourseID: true } })
     * 
     */
    findMany<T extends TUTOR_COURSEFindManyArgs>(args?: SelectSubset<T, TUTOR_COURSEFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TUTOR_COURSEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TUTOR_COURSE.
     * @param {TUTOR_COURSECreateArgs} args - Arguments to create a TUTOR_COURSE.
     * @example
     * // Create one TUTOR_COURSE
     * const TUTOR_COURSE = await prisma.tUTOR_COURSE.create({
     *   data: {
     *     // ... data to create a TUTOR_COURSE
     *   }
     * })
     * 
     */
    create<T extends TUTOR_COURSECreateArgs>(args: SelectSubset<T, TUTOR_COURSECreateArgs<ExtArgs>>): Prisma__TUTOR_COURSEClient<$Result.GetResult<Prisma.$TUTOR_COURSEPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TUTOR_COURSES.
     * @param {TUTOR_COURSECreateManyArgs} args - Arguments to create many TUTOR_COURSES.
     * @example
     * // Create many TUTOR_COURSES
     * const tUTOR_COURSE = await prisma.tUTOR_COURSE.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TUTOR_COURSECreateManyArgs>(args?: SelectSubset<T, TUTOR_COURSECreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TUTOR_COURSE.
     * @param {TUTOR_COURSEDeleteArgs} args - Arguments to delete one TUTOR_COURSE.
     * @example
     * // Delete one TUTOR_COURSE
     * const TUTOR_COURSE = await prisma.tUTOR_COURSE.delete({
     *   where: {
     *     // ... filter to delete one TUTOR_COURSE
     *   }
     * })
     * 
     */
    delete<T extends TUTOR_COURSEDeleteArgs>(args: SelectSubset<T, TUTOR_COURSEDeleteArgs<ExtArgs>>): Prisma__TUTOR_COURSEClient<$Result.GetResult<Prisma.$TUTOR_COURSEPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TUTOR_COURSE.
     * @param {TUTOR_COURSEUpdateArgs} args - Arguments to update one TUTOR_COURSE.
     * @example
     * // Update one TUTOR_COURSE
     * const tUTOR_COURSE = await prisma.tUTOR_COURSE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TUTOR_COURSEUpdateArgs>(args: SelectSubset<T, TUTOR_COURSEUpdateArgs<ExtArgs>>): Prisma__TUTOR_COURSEClient<$Result.GetResult<Prisma.$TUTOR_COURSEPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TUTOR_COURSES.
     * @param {TUTOR_COURSEDeleteManyArgs} args - Arguments to filter TUTOR_COURSES to delete.
     * @example
     * // Delete a few TUTOR_COURSES
     * const { count } = await prisma.tUTOR_COURSE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TUTOR_COURSEDeleteManyArgs>(args?: SelectSubset<T, TUTOR_COURSEDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TUTOR_COURSES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_COURSEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TUTOR_COURSES
     * const tUTOR_COURSE = await prisma.tUTOR_COURSE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TUTOR_COURSEUpdateManyArgs>(args: SelectSubset<T, TUTOR_COURSEUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TUTOR_COURSE.
     * @param {TUTOR_COURSEUpsertArgs} args - Arguments to update or create a TUTOR_COURSE.
     * @example
     * // Update or create a TUTOR_COURSE
     * const tUTOR_COURSE = await prisma.tUTOR_COURSE.upsert({
     *   create: {
     *     // ... data to create a TUTOR_COURSE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TUTOR_COURSE we want to update
     *   }
     * })
     */
    upsert<T extends TUTOR_COURSEUpsertArgs>(args: SelectSubset<T, TUTOR_COURSEUpsertArgs<ExtArgs>>): Prisma__TUTOR_COURSEClient<$Result.GetResult<Prisma.$TUTOR_COURSEPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TUTOR_COURSES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_COURSECountArgs} args - Arguments to filter TUTOR_COURSES to count.
     * @example
     * // Count the number of TUTOR_COURSES
     * const count = await prisma.tUTOR_COURSE.count({
     *   where: {
     *     // ... the filter for the TUTOR_COURSES we want to count
     *   }
     * })
    **/
    count<T extends TUTOR_COURSECountArgs>(
      args?: Subset<T, TUTOR_COURSECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TUTOR_COURSECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TUTOR_COURSE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_COURSEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TUTOR_COURSEAggregateArgs>(args: Subset<T, TUTOR_COURSEAggregateArgs>): Prisma.PrismaPromise<GetTUTOR_COURSEAggregateType<T>>

    /**
     * Group by TUTOR_COURSE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TUTOR_COURSEGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TUTOR_COURSEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TUTOR_COURSEGroupByArgs['orderBy'] }
        : { orderBy?: TUTOR_COURSEGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TUTOR_COURSEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTUTOR_COURSEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TUTOR_COURSE model
   */
  readonly fields: TUTOR_COURSEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TUTOR_COURSE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TUTOR_COURSEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tutor<T extends TutorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TutorDefaultArgs<ExtArgs>>): Prisma__TutorClient<$Result.GetResult<Prisma.$TutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    COURSES<T extends COURSESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, COURSESDefaultArgs<ExtArgs>>): Prisma__COURSESClient<$Result.GetResult<Prisma.$COURSESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TUTOR_COURSE model
   */
  interface TUTOR_COURSEFieldRefs {
    readonly TutorCourseID: FieldRef<"TUTOR_COURSE", 'Int'>
    readonly Tutor_ID: FieldRef<"TUTOR_COURSE", 'Int'>
    readonly Course_ID: FieldRef<"TUTOR_COURSE", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TUTOR_COURSE findUnique
   */
  export type TUTOR_COURSEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
    /**
     * Filter, which TUTOR_COURSE to fetch.
     */
    where: TUTOR_COURSEWhereUniqueInput
  }

  /**
   * TUTOR_COURSE findUniqueOrThrow
   */
  export type TUTOR_COURSEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
    /**
     * Filter, which TUTOR_COURSE to fetch.
     */
    where: TUTOR_COURSEWhereUniqueInput
  }

  /**
   * TUTOR_COURSE findFirst
   */
  export type TUTOR_COURSEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
    /**
     * Filter, which TUTOR_COURSE to fetch.
     */
    where?: TUTOR_COURSEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTOR_COURSES to fetch.
     */
    orderBy?: TUTOR_COURSEOrderByWithRelationInput | TUTOR_COURSEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TUTOR_COURSES.
     */
    cursor?: TUTOR_COURSEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTOR_COURSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTOR_COURSES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TUTOR_COURSES.
     */
    distinct?: TUTOR_COURSEScalarFieldEnum | TUTOR_COURSEScalarFieldEnum[]
  }

  /**
   * TUTOR_COURSE findFirstOrThrow
   */
  export type TUTOR_COURSEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
    /**
     * Filter, which TUTOR_COURSE to fetch.
     */
    where?: TUTOR_COURSEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTOR_COURSES to fetch.
     */
    orderBy?: TUTOR_COURSEOrderByWithRelationInput | TUTOR_COURSEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TUTOR_COURSES.
     */
    cursor?: TUTOR_COURSEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTOR_COURSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTOR_COURSES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TUTOR_COURSES.
     */
    distinct?: TUTOR_COURSEScalarFieldEnum | TUTOR_COURSEScalarFieldEnum[]
  }

  /**
   * TUTOR_COURSE findMany
   */
  export type TUTOR_COURSEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
    /**
     * Filter, which TUTOR_COURSES to fetch.
     */
    where?: TUTOR_COURSEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TUTOR_COURSES to fetch.
     */
    orderBy?: TUTOR_COURSEOrderByWithRelationInput | TUTOR_COURSEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TUTOR_COURSES.
     */
    cursor?: TUTOR_COURSEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TUTOR_COURSES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TUTOR_COURSES.
     */
    skip?: number
    distinct?: TUTOR_COURSEScalarFieldEnum | TUTOR_COURSEScalarFieldEnum[]
  }

  /**
   * TUTOR_COURSE create
   */
  export type TUTOR_COURSECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
    /**
     * The data needed to create a TUTOR_COURSE.
     */
    data: XOR<TUTOR_COURSECreateInput, TUTOR_COURSEUncheckedCreateInput>
  }

  /**
   * TUTOR_COURSE createMany
   */
  export type TUTOR_COURSECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TUTOR_COURSES.
     */
    data: TUTOR_COURSECreateManyInput | TUTOR_COURSECreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TUTOR_COURSE update
   */
  export type TUTOR_COURSEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
    /**
     * The data needed to update a TUTOR_COURSE.
     */
    data: XOR<TUTOR_COURSEUpdateInput, TUTOR_COURSEUncheckedUpdateInput>
    /**
     * Choose, which TUTOR_COURSE to update.
     */
    where: TUTOR_COURSEWhereUniqueInput
  }

  /**
   * TUTOR_COURSE updateMany
   */
  export type TUTOR_COURSEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TUTOR_COURSES.
     */
    data: XOR<TUTOR_COURSEUpdateManyMutationInput, TUTOR_COURSEUncheckedUpdateManyInput>
    /**
     * Filter which TUTOR_COURSES to update
     */
    where?: TUTOR_COURSEWhereInput
    /**
     * Limit how many TUTOR_COURSES to update.
     */
    limit?: number
  }

  /**
   * TUTOR_COURSE upsert
   */
  export type TUTOR_COURSEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
    /**
     * The filter to search for the TUTOR_COURSE to update in case it exists.
     */
    where: TUTOR_COURSEWhereUniqueInput
    /**
     * In case the TUTOR_COURSE found by the `where` argument doesn't exist, create a new TUTOR_COURSE with this data.
     */
    create: XOR<TUTOR_COURSECreateInput, TUTOR_COURSEUncheckedCreateInput>
    /**
     * In case the TUTOR_COURSE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TUTOR_COURSEUpdateInput, TUTOR_COURSEUncheckedUpdateInput>
  }

  /**
   * TUTOR_COURSE delete
   */
  export type TUTOR_COURSEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
    /**
     * Filter which TUTOR_COURSE to delete.
     */
    where: TUTOR_COURSEWhereUniqueInput
  }

  /**
   * TUTOR_COURSE deleteMany
   */
  export type TUTOR_COURSEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TUTOR_COURSES to delete
     */
    where?: TUTOR_COURSEWhereInput
    /**
     * Limit how many TUTOR_COURSES to delete.
     */
    limit?: number
  }

  /**
   * TUTOR_COURSE without action
   */
  export type TUTOR_COURSEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TUTOR_COURSE
     */
    select?: TUTOR_COURSESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TUTOR_COURSE
     */
    omit?: TUTOR_COURSEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TUTOR_COURSEInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    Admin_ID: 'Admin_ID',
    User_ID: 'User_ID'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const COURSESScalarFieldEnum: {
    Course_ID: 'Course_ID',
    Course_Number: 'Course_Number',
    Course_Section: 'Course_Section',
    Course_Title: 'Course_Title',
    Course_Instructor: 'Course_Instructor',
    Enrolled_Count: 'Enrolled_Count'
  };

  export type COURSESScalarFieldEnum = (typeof COURSESScalarFieldEnum)[keyof typeof COURSESScalarFieldEnum]


  export const ENROLLMENTSScalarFieldEnum: {
    Enrollment_ID: 'Enrollment_ID',
    User_ID: 'User_ID',
    Tutor_ID: 'Tutor_ID',
    Course_ID: 'Course_ID',
    Total_Enrollment: 'Total_Enrollment'
  };

  export type ENROLLMENTSScalarFieldEnum = (typeof ENROLLMENTSScalarFieldEnum)[keyof typeof ENROLLMENTSScalarFieldEnum]


  export const SCHEDULEScalarFieldEnum: {
    Schedule_ID: 'Schedule_ID',
    Admin_ID: 'Admin_ID',
    Availability_ID: 'Availability_ID',
    Has_Worked: 'Has_Worked'
  };

  export type SCHEDULEScalarFieldEnum = (typeof SCHEDULEScalarFieldEnum)[keyof typeof SCHEDULEScalarFieldEnum]


  export const STUDY_BUDDY_GROUPSScalarFieldEnum: {
    Group_ID: 'Group_ID',
    User_ID: 'User_ID',
    Tutor_ID: 'Tutor_ID',
    Enrollment_ID: 'Enrollment_ID',
    Is_Accepted: 'Is_Accepted',
    Has_Tutor: 'Has_Tutor',
    Group_Members: 'Group_Members'
  };

  export type STUDY_BUDDY_GROUPSScalarFieldEnum = (typeof STUDY_BUDDY_GROUPSScalarFieldEnum)[keyof typeof STUDY_BUDDY_GROUPSScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    User_ID: 'User_ID',
    GPA: 'GPA'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TUTORING_SESSIONScalarFieldEnum: {
    Session_ID: 'Session_ID',
    User_ID: 'User_ID',
    Tutor_ID: 'Tutor_ID',
    Enrollment_ID: 'Enrollment_ID',
    Session_Date: 'Session_Date',
    Session_Time: 'Session_Time',
    Session_Loc: 'Session_Loc',
    Students_Booked: 'Students_Booked',
    Session_Max: 'Session_Max'
  };

  export type TUTORING_SESSIONScalarFieldEnum = (typeof TUTORING_SESSIONScalarFieldEnum)[keyof typeof TUTORING_SESSIONScalarFieldEnum]


  export const TUTOR_AVAILABILITYScalarFieldEnum: {
    Availability_ID: 'Availability_ID',
    Tutor_ID: 'Tutor_ID',
    Date_Requested: 'Date_Requested',
    Times_Requested: 'Times_Requested',
    Is_Approved: 'Is_Approved'
  };

  export type TUTOR_AVAILABILITYScalarFieldEnum = (typeof TUTOR_AVAILABILITYScalarFieldEnum)[keyof typeof TUTOR_AVAILABILITYScalarFieldEnum]


  export const TutorScalarFieldEnum: {
    Tutor_ID: 'Tutor_ID',
    User_ID: 'User_ID'
  };

  export type TutorScalarFieldEnum = (typeof TutorScalarFieldEnum)[keyof typeof TutorScalarFieldEnum]


  export const USERSScalarFieldEnum: {
    User_ID: 'User_ID',
    Name: 'Name',
    Email: 'Email',
    Is_Admin: 'Is_Admin',
    Is_Tutor: 'Is_Tutor',
    Is_Student: 'Is_Student'
  };

  export type USERSScalarFieldEnum = (typeof USERSScalarFieldEnum)[keyof typeof USERSScalarFieldEnum]


  export const TUTOR_COURSEScalarFieldEnum: {
    TutorCourseID: 'TutorCourseID',
    Tutor_ID: 'Tutor_ID',
    Course_ID: 'Course_ID'
  };

  export type TUTOR_COURSEScalarFieldEnum = (typeof TUTOR_COURSEScalarFieldEnum)[keyof typeof TUTOR_COURSEScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const COURSESOrderByRelevanceFieldEnum: {
    Course_Title: 'Course_Title',
    Course_Instructor: 'Course_Instructor'
  };

  export type COURSESOrderByRelevanceFieldEnum = (typeof COURSESOrderByRelevanceFieldEnum)[keyof typeof COURSESOrderByRelevanceFieldEnum]


  export const TUTORING_SESSIONOrderByRelevanceFieldEnum: {
    Session_Loc: 'Session_Loc'
  };

  export type TUTORING_SESSIONOrderByRelevanceFieldEnum = (typeof TUTORING_SESSIONOrderByRelevanceFieldEnum)[keyof typeof TUTORING_SESSIONOrderByRelevanceFieldEnum]


  export const USERSOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Email: 'Email'
  };

  export type USERSOrderByRelevanceFieldEnum = (typeof USERSOrderByRelevanceFieldEnum)[keyof typeof USERSOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    Admin_ID?: IntFilter<"Admin"> | number
    User_ID?: IntFilter<"Admin"> | number
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
    SCHEDULE?: SCHEDULEListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
    USERS?: USERSOrderByWithRelationInput
    SCHEDULE?: SCHEDULEOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    Admin_ID?: number
    User_ID?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
    SCHEDULE?: SCHEDULEListRelationFilter
  }, "Admin_ID" | "User_ID">

  export type AdminOrderByWithAggregationInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    Admin_ID?: IntWithAggregatesFilter<"Admin"> | number
    User_ID?: IntWithAggregatesFilter<"Admin"> | number
  }

  export type COURSESWhereInput = {
    AND?: COURSESWhereInput | COURSESWhereInput[]
    OR?: COURSESWhereInput[]
    NOT?: COURSESWhereInput | COURSESWhereInput[]
    Course_ID?: IntFilter<"COURSES"> | number
    Course_Number?: IntNullableFilter<"COURSES"> | number | null
    Course_Section?: DecimalNullableFilter<"COURSES"> | Decimal | DecimalJsLike | number | string | null
    Course_Title?: StringNullableFilter<"COURSES"> | string | null
    Course_Instructor?: StringNullableFilter<"COURSES"> | string | null
    Enrolled_Count?: IntNullableFilter<"COURSES"> | number | null
    ENROLLMENTS?: ENROLLMENTSListRelationFilter
    TUTOR_COURSE?: TUTOR_COURSEListRelationFilter
  }

  export type COURSESOrderByWithRelationInput = {
    Course_ID?: SortOrder
    Course_Number?: SortOrderInput | SortOrder
    Course_Section?: SortOrderInput | SortOrder
    Course_Title?: SortOrderInput | SortOrder
    Course_Instructor?: SortOrderInput | SortOrder
    Enrolled_Count?: SortOrderInput | SortOrder
    ENROLLMENTS?: ENROLLMENTSOrderByRelationAggregateInput
    TUTOR_COURSE?: TUTOR_COURSEOrderByRelationAggregateInput
    _relevance?: COURSESOrderByRelevanceInput
  }

  export type COURSESWhereUniqueInput = Prisma.AtLeast<{
    Course_ID?: number
    AND?: COURSESWhereInput | COURSESWhereInput[]
    OR?: COURSESWhereInput[]
    NOT?: COURSESWhereInput | COURSESWhereInput[]
    Course_Number?: IntNullableFilter<"COURSES"> | number | null
    Course_Section?: DecimalNullableFilter<"COURSES"> | Decimal | DecimalJsLike | number | string | null
    Course_Title?: StringNullableFilter<"COURSES"> | string | null
    Course_Instructor?: StringNullableFilter<"COURSES"> | string | null
    Enrolled_Count?: IntNullableFilter<"COURSES"> | number | null
    ENROLLMENTS?: ENROLLMENTSListRelationFilter
    TUTOR_COURSE?: TUTOR_COURSEListRelationFilter
  }, "Course_ID">

  export type COURSESOrderByWithAggregationInput = {
    Course_ID?: SortOrder
    Course_Number?: SortOrderInput | SortOrder
    Course_Section?: SortOrderInput | SortOrder
    Course_Title?: SortOrderInput | SortOrder
    Course_Instructor?: SortOrderInput | SortOrder
    Enrolled_Count?: SortOrderInput | SortOrder
    _count?: COURSESCountOrderByAggregateInput
    _avg?: COURSESAvgOrderByAggregateInput
    _max?: COURSESMaxOrderByAggregateInput
    _min?: COURSESMinOrderByAggregateInput
    _sum?: COURSESSumOrderByAggregateInput
  }

  export type COURSESScalarWhereWithAggregatesInput = {
    AND?: COURSESScalarWhereWithAggregatesInput | COURSESScalarWhereWithAggregatesInput[]
    OR?: COURSESScalarWhereWithAggregatesInput[]
    NOT?: COURSESScalarWhereWithAggregatesInput | COURSESScalarWhereWithAggregatesInput[]
    Course_ID?: IntWithAggregatesFilter<"COURSES"> | number
    Course_Number?: IntNullableWithAggregatesFilter<"COURSES"> | number | null
    Course_Section?: DecimalNullableWithAggregatesFilter<"COURSES"> | Decimal | DecimalJsLike | number | string | null
    Course_Title?: StringNullableWithAggregatesFilter<"COURSES"> | string | null
    Course_Instructor?: StringNullableWithAggregatesFilter<"COURSES"> | string | null
    Enrolled_Count?: IntNullableWithAggregatesFilter<"COURSES"> | number | null
  }

  export type ENROLLMENTSWhereInput = {
    AND?: ENROLLMENTSWhereInput | ENROLLMENTSWhereInput[]
    OR?: ENROLLMENTSWhereInput[]
    NOT?: ENROLLMENTSWhereInput | ENROLLMENTSWhereInput[]
    Enrollment_ID?: IntFilter<"ENROLLMENTS"> | number
    User_ID?: IntFilter<"ENROLLMENTS"> | number
    Tutor_ID?: IntNullableFilter<"ENROLLMENTS"> | number | null
    Course_ID?: IntFilter<"ENROLLMENTS"> | number
    Total_Enrollment?: IntNullableFilter<"ENROLLMENTS"> | number | null
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
    Tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    COURSES?: XOR<COURSESScalarRelationFilter, COURSESWhereInput>
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSListRelationFilter
    TUTORING_SESSION?: TUTORING_SESSIONListRelationFilter
  }

  export type ENROLLMENTSOrderByWithRelationInput = {
    Enrollment_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrderInput | SortOrder
    Course_ID?: SortOrder
    Total_Enrollment?: SortOrderInput | SortOrder
    USERS?: USERSOrderByWithRelationInput
    Tutor?: TutorOrderByWithRelationInput
    COURSES?: COURSESOrderByWithRelationInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSOrderByRelationAggregateInput
    TUTORING_SESSION?: TUTORING_SESSIONOrderByRelationAggregateInput
  }

  export type ENROLLMENTSWhereUniqueInput = Prisma.AtLeast<{
    Enrollment_ID?: number
    AND?: ENROLLMENTSWhereInput | ENROLLMENTSWhereInput[]
    OR?: ENROLLMENTSWhereInput[]
    NOT?: ENROLLMENTSWhereInput | ENROLLMENTSWhereInput[]
    User_ID?: IntFilter<"ENROLLMENTS"> | number
    Tutor_ID?: IntNullableFilter<"ENROLLMENTS"> | number | null
    Course_ID?: IntFilter<"ENROLLMENTS"> | number
    Total_Enrollment?: IntNullableFilter<"ENROLLMENTS"> | number | null
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
    Tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    COURSES?: XOR<COURSESScalarRelationFilter, COURSESWhereInput>
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSListRelationFilter
    TUTORING_SESSION?: TUTORING_SESSIONListRelationFilter
  }, "Enrollment_ID">

  export type ENROLLMENTSOrderByWithAggregationInput = {
    Enrollment_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrderInput | SortOrder
    Course_ID?: SortOrder
    Total_Enrollment?: SortOrderInput | SortOrder
    _count?: ENROLLMENTSCountOrderByAggregateInput
    _avg?: ENROLLMENTSAvgOrderByAggregateInput
    _max?: ENROLLMENTSMaxOrderByAggregateInput
    _min?: ENROLLMENTSMinOrderByAggregateInput
    _sum?: ENROLLMENTSSumOrderByAggregateInput
  }

  export type ENROLLMENTSScalarWhereWithAggregatesInput = {
    AND?: ENROLLMENTSScalarWhereWithAggregatesInput | ENROLLMENTSScalarWhereWithAggregatesInput[]
    OR?: ENROLLMENTSScalarWhereWithAggregatesInput[]
    NOT?: ENROLLMENTSScalarWhereWithAggregatesInput | ENROLLMENTSScalarWhereWithAggregatesInput[]
    Enrollment_ID?: IntWithAggregatesFilter<"ENROLLMENTS"> | number
    User_ID?: IntWithAggregatesFilter<"ENROLLMENTS"> | number
    Tutor_ID?: IntNullableWithAggregatesFilter<"ENROLLMENTS"> | number | null
    Course_ID?: IntWithAggregatesFilter<"ENROLLMENTS"> | number
    Total_Enrollment?: IntNullableWithAggregatesFilter<"ENROLLMENTS"> | number | null
  }

  export type SCHEDULEWhereInput = {
    AND?: SCHEDULEWhereInput | SCHEDULEWhereInput[]
    OR?: SCHEDULEWhereInput[]
    NOT?: SCHEDULEWhereInput | SCHEDULEWhereInput[]
    Schedule_ID?: IntFilter<"SCHEDULE"> | number
    Admin_ID?: IntFilter<"SCHEDULE"> | number
    Availability_ID?: IntFilter<"SCHEDULE"> | number
    Has_Worked?: BoolNullableFilter<"SCHEDULE"> | boolean | null
    Admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    TUTOR_AVAILABILITY?: XOR<TUTOR_AVAILABILITYScalarRelationFilter, TUTOR_AVAILABILITYWhereInput>
  }

  export type SCHEDULEOrderByWithRelationInput = {
    Schedule_ID?: SortOrder
    Admin_ID?: SortOrder
    Availability_ID?: SortOrder
    Has_Worked?: SortOrderInput | SortOrder
    Admin?: AdminOrderByWithRelationInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYOrderByWithRelationInput
  }

  export type SCHEDULEWhereUniqueInput = Prisma.AtLeast<{
    Schedule_ID?: number
    AND?: SCHEDULEWhereInput | SCHEDULEWhereInput[]
    OR?: SCHEDULEWhereInput[]
    NOT?: SCHEDULEWhereInput | SCHEDULEWhereInput[]
    Admin_ID?: IntFilter<"SCHEDULE"> | number
    Availability_ID?: IntFilter<"SCHEDULE"> | number
    Has_Worked?: BoolNullableFilter<"SCHEDULE"> | boolean | null
    Admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    TUTOR_AVAILABILITY?: XOR<TUTOR_AVAILABILITYScalarRelationFilter, TUTOR_AVAILABILITYWhereInput>
  }, "Schedule_ID">

  export type SCHEDULEOrderByWithAggregationInput = {
    Schedule_ID?: SortOrder
    Admin_ID?: SortOrder
    Availability_ID?: SortOrder
    Has_Worked?: SortOrderInput | SortOrder
    _count?: SCHEDULECountOrderByAggregateInput
    _avg?: SCHEDULEAvgOrderByAggregateInput
    _max?: SCHEDULEMaxOrderByAggregateInput
    _min?: SCHEDULEMinOrderByAggregateInput
    _sum?: SCHEDULESumOrderByAggregateInput
  }

  export type SCHEDULEScalarWhereWithAggregatesInput = {
    AND?: SCHEDULEScalarWhereWithAggregatesInput | SCHEDULEScalarWhereWithAggregatesInput[]
    OR?: SCHEDULEScalarWhereWithAggregatesInput[]
    NOT?: SCHEDULEScalarWhereWithAggregatesInput | SCHEDULEScalarWhereWithAggregatesInput[]
    Schedule_ID?: IntWithAggregatesFilter<"SCHEDULE"> | number
    Admin_ID?: IntWithAggregatesFilter<"SCHEDULE"> | number
    Availability_ID?: IntWithAggregatesFilter<"SCHEDULE"> | number
    Has_Worked?: BoolNullableWithAggregatesFilter<"SCHEDULE"> | boolean | null
  }

  export type STUDY_BUDDY_GROUPSWhereInput = {
    AND?: STUDY_BUDDY_GROUPSWhereInput | STUDY_BUDDY_GROUPSWhereInput[]
    OR?: STUDY_BUDDY_GROUPSWhereInput[]
    NOT?: STUDY_BUDDY_GROUPSWhereInput | STUDY_BUDDY_GROUPSWhereInput[]
    Group_ID?: IntFilter<"STUDY_BUDDY_GROUPS"> | number
    User_ID?: IntFilter<"STUDY_BUDDY_GROUPS"> | number
    Tutor_ID?: IntNullableFilter<"STUDY_BUDDY_GROUPS"> | number | null
    Enrollment_ID?: IntFilter<"STUDY_BUDDY_GROUPS"> | number
    Is_Accepted?: BoolNullableFilter<"STUDY_BUDDY_GROUPS"> | boolean | null
    Has_Tutor?: BoolNullableFilter<"STUDY_BUDDY_GROUPS"> | boolean | null
    Group_Members?: IntNullableFilter<"STUDY_BUDDY_GROUPS"> | number | null
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
    Tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    ENROLLMENTS?: XOR<ENROLLMENTSScalarRelationFilter, ENROLLMENTSWhereInput>
  }

  export type STUDY_BUDDY_GROUPSOrderByWithRelationInput = {
    Group_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrderInput | SortOrder
    Enrollment_ID?: SortOrder
    Is_Accepted?: SortOrderInput | SortOrder
    Has_Tutor?: SortOrderInput | SortOrder
    Group_Members?: SortOrderInput | SortOrder
    USERS?: USERSOrderByWithRelationInput
    Tutor?: TutorOrderByWithRelationInput
    ENROLLMENTS?: ENROLLMENTSOrderByWithRelationInput
  }

  export type STUDY_BUDDY_GROUPSWhereUniqueInput = Prisma.AtLeast<{
    Group_ID?: number
    AND?: STUDY_BUDDY_GROUPSWhereInput | STUDY_BUDDY_GROUPSWhereInput[]
    OR?: STUDY_BUDDY_GROUPSWhereInput[]
    NOT?: STUDY_BUDDY_GROUPSWhereInput | STUDY_BUDDY_GROUPSWhereInput[]
    User_ID?: IntFilter<"STUDY_BUDDY_GROUPS"> | number
    Tutor_ID?: IntNullableFilter<"STUDY_BUDDY_GROUPS"> | number | null
    Enrollment_ID?: IntFilter<"STUDY_BUDDY_GROUPS"> | number
    Is_Accepted?: BoolNullableFilter<"STUDY_BUDDY_GROUPS"> | boolean | null
    Has_Tutor?: BoolNullableFilter<"STUDY_BUDDY_GROUPS"> | boolean | null
    Group_Members?: IntNullableFilter<"STUDY_BUDDY_GROUPS"> | number | null
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
    Tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
    ENROLLMENTS?: XOR<ENROLLMENTSScalarRelationFilter, ENROLLMENTSWhereInput>
  }, "Group_ID">

  export type STUDY_BUDDY_GROUPSOrderByWithAggregationInput = {
    Group_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrderInput | SortOrder
    Enrollment_ID?: SortOrder
    Is_Accepted?: SortOrderInput | SortOrder
    Has_Tutor?: SortOrderInput | SortOrder
    Group_Members?: SortOrderInput | SortOrder
    _count?: STUDY_BUDDY_GROUPSCountOrderByAggregateInput
    _avg?: STUDY_BUDDY_GROUPSAvgOrderByAggregateInput
    _max?: STUDY_BUDDY_GROUPSMaxOrderByAggregateInput
    _min?: STUDY_BUDDY_GROUPSMinOrderByAggregateInput
    _sum?: STUDY_BUDDY_GROUPSSumOrderByAggregateInput
  }

  export type STUDY_BUDDY_GROUPSScalarWhereWithAggregatesInput = {
    AND?: STUDY_BUDDY_GROUPSScalarWhereWithAggregatesInput | STUDY_BUDDY_GROUPSScalarWhereWithAggregatesInput[]
    OR?: STUDY_BUDDY_GROUPSScalarWhereWithAggregatesInput[]
    NOT?: STUDY_BUDDY_GROUPSScalarWhereWithAggregatesInput | STUDY_BUDDY_GROUPSScalarWhereWithAggregatesInput[]
    Group_ID?: IntWithAggregatesFilter<"STUDY_BUDDY_GROUPS"> | number
    User_ID?: IntWithAggregatesFilter<"STUDY_BUDDY_GROUPS"> | number
    Tutor_ID?: IntNullableWithAggregatesFilter<"STUDY_BUDDY_GROUPS"> | number | null
    Enrollment_ID?: IntWithAggregatesFilter<"STUDY_BUDDY_GROUPS"> | number
    Is_Accepted?: BoolNullableWithAggregatesFilter<"STUDY_BUDDY_GROUPS"> | boolean | null
    Has_Tutor?: BoolNullableWithAggregatesFilter<"STUDY_BUDDY_GROUPS"> | boolean | null
    Group_Members?: IntNullableWithAggregatesFilter<"STUDY_BUDDY_GROUPS"> | number | null
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    User_ID?: IntFilter<"Student"> | number
    GPA?: DecimalNullableFilter<"Student"> | Decimal | DecimalJsLike | number | string | null
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    User_ID?: SortOrder
    GPA?: SortOrderInput | SortOrder
    USERS?: USERSOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    User_ID?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    GPA?: DecimalNullableFilter<"Student"> | Decimal | DecimalJsLike | number | string | null
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
  }, "User_ID">

  export type StudentOrderByWithAggregationInput = {
    User_ID?: SortOrder
    GPA?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    User_ID?: IntWithAggregatesFilter<"Student"> | number
    GPA?: DecimalNullableWithAggregatesFilter<"Student"> | Decimal | DecimalJsLike | number | string | null
  }

  export type TUTORING_SESSIONWhereInput = {
    AND?: TUTORING_SESSIONWhereInput | TUTORING_SESSIONWhereInput[]
    OR?: TUTORING_SESSIONWhereInput[]
    NOT?: TUTORING_SESSIONWhereInput | TUTORING_SESSIONWhereInput[]
    Session_ID?: IntFilter<"TUTORING_SESSION"> | number
    User_ID?: IntFilter<"TUTORING_SESSION"> | number
    Tutor_ID?: IntFilter<"TUTORING_SESSION"> | number
    Enrollment_ID?: IntFilter<"TUTORING_SESSION"> | number
    Session_Date?: DateTimeNullableFilter<"TUTORING_SESSION"> | Date | string | null
    Session_Time?: DateTimeNullableFilter<"TUTORING_SESSION"> | Date | string | null
    Session_Loc?: StringNullableFilter<"TUTORING_SESSION"> | string | null
    Students_Booked?: IntNullableFilter<"TUTORING_SESSION"> | number | null
    Session_Max?: IntNullableFilter<"TUTORING_SESSION"> | number | null
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
    Tutor?: XOR<TutorScalarRelationFilter, TutorWhereInput>
    ENROLLMENTS?: XOR<ENROLLMENTSScalarRelationFilter, ENROLLMENTSWhereInput>
  }

  export type TUTORING_SESSIONOrderByWithRelationInput = {
    Session_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Session_Date?: SortOrderInput | SortOrder
    Session_Time?: SortOrderInput | SortOrder
    Session_Loc?: SortOrderInput | SortOrder
    Students_Booked?: SortOrderInput | SortOrder
    Session_Max?: SortOrderInput | SortOrder
    USERS?: USERSOrderByWithRelationInput
    Tutor?: TutorOrderByWithRelationInput
    ENROLLMENTS?: ENROLLMENTSOrderByWithRelationInput
    _relevance?: TUTORING_SESSIONOrderByRelevanceInput
  }

  export type TUTORING_SESSIONWhereUniqueInput = Prisma.AtLeast<{
    Session_ID?: number
    AND?: TUTORING_SESSIONWhereInput | TUTORING_SESSIONWhereInput[]
    OR?: TUTORING_SESSIONWhereInput[]
    NOT?: TUTORING_SESSIONWhereInput | TUTORING_SESSIONWhereInput[]
    User_ID?: IntFilter<"TUTORING_SESSION"> | number
    Tutor_ID?: IntFilter<"TUTORING_SESSION"> | number
    Enrollment_ID?: IntFilter<"TUTORING_SESSION"> | number
    Session_Date?: DateTimeNullableFilter<"TUTORING_SESSION"> | Date | string | null
    Session_Time?: DateTimeNullableFilter<"TUTORING_SESSION"> | Date | string | null
    Session_Loc?: StringNullableFilter<"TUTORING_SESSION"> | string | null
    Students_Booked?: IntNullableFilter<"TUTORING_SESSION"> | number | null
    Session_Max?: IntNullableFilter<"TUTORING_SESSION"> | number | null
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
    Tutor?: XOR<TutorScalarRelationFilter, TutorWhereInput>
    ENROLLMENTS?: XOR<ENROLLMENTSScalarRelationFilter, ENROLLMENTSWhereInput>
  }, "Session_ID">

  export type TUTORING_SESSIONOrderByWithAggregationInput = {
    Session_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Session_Date?: SortOrderInput | SortOrder
    Session_Time?: SortOrderInput | SortOrder
    Session_Loc?: SortOrderInput | SortOrder
    Students_Booked?: SortOrderInput | SortOrder
    Session_Max?: SortOrderInput | SortOrder
    _count?: TUTORING_SESSIONCountOrderByAggregateInput
    _avg?: TUTORING_SESSIONAvgOrderByAggregateInput
    _max?: TUTORING_SESSIONMaxOrderByAggregateInput
    _min?: TUTORING_SESSIONMinOrderByAggregateInput
    _sum?: TUTORING_SESSIONSumOrderByAggregateInput
  }

  export type TUTORING_SESSIONScalarWhereWithAggregatesInput = {
    AND?: TUTORING_SESSIONScalarWhereWithAggregatesInput | TUTORING_SESSIONScalarWhereWithAggregatesInput[]
    OR?: TUTORING_SESSIONScalarWhereWithAggregatesInput[]
    NOT?: TUTORING_SESSIONScalarWhereWithAggregatesInput | TUTORING_SESSIONScalarWhereWithAggregatesInput[]
    Session_ID?: IntWithAggregatesFilter<"TUTORING_SESSION"> | number
    User_ID?: IntWithAggregatesFilter<"TUTORING_SESSION"> | number
    Tutor_ID?: IntWithAggregatesFilter<"TUTORING_SESSION"> | number
    Enrollment_ID?: IntWithAggregatesFilter<"TUTORING_SESSION"> | number
    Session_Date?: DateTimeNullableWithAggregatesFilter<"TUTORING_SESSION"> | Date | string | null
    Session_Time?: DateTimeNullableWithAggregatesFilter<"TUTORING_SESSION"> | Date | string | null
    Session_Loc?: StringNullableWithAggregatesFilter<"TUTORING_SESSION"> | string | null
    Students_Booked?: IntNullableWithAggregatesFilter<"TUTORING_SESSION"> | number | null
    Session_Max?: IntNullableWithAggregatesFilter<"TUTORING_SESSION"> | number | null
  }

  export type TUTOR_AVAILABILITYWhereInput = {
    AND?: TUTOR_AVAILABILITYWhereInput | TUTOR_AVAILABILITYWhereInput[]
    OR?: TUTOR_AVAILABILITYWhereInput[]
    NOT?: TUTOR_AVAILABILITYWhereInput | TUTOR_AVAILABILITYWhereInput[]
    Availability_ID?: IntFilter<"TUTOR_AVAILABILITY"> | number
    Tutor_ID?: IntFilter<"TUTOR_AVAILABILITY"> | number
    Date_Requested?: DateTimeNullableFilter<"TUTOR_AVAILABILITY"> | Date | string | null
    Times_Requested?: DateTimeNullableFilter<"TUTOR_AVAILABILITY"> | Date | string | null
    Is_Approved?: BoolNullableFilter<"TUTOR_AVAILABILITY"> | boolean | null
    SCHEDULE?: SCHEDULEListRelationFilter
    Tutor?: XOR<TutorScalarRelationFilter, TutorWhereInput>
  }

  export type TUTOR_AVAILABILITYOrderByWithRelationInput = {
    Availability_ID?: SortOrder
    Tutor_ID?: SortOrder
    Date_Requested?: SortOrderInput | SortOrder
    Times_Requested?: SortOrderInput | SortOrder
    Is_Approved?: SortOrderInput | SortOrder
    SCHEDULE?: SCHEDULEOrderByRelationAggregateInput
    Tutor?: TutorOrderByWithRelationInput
  }

  export type TUTOR_AVAILABILITYWhereUniqueInput = Prisma.AtLeast<{
    Availability_ID?: number
    AND?: TUTOR_AVAILABILITYWhereInput | TUTOR_AVAILABILITYWhereInput[]
    OR?: TUTOR_AVAILABILITYWhereInput[]
    NOT?: TUTOR_AVAILABILITYWhereInput | TUTOR_AVAILABILITYWhereInput[]
    Tutor_ID?: IntFilter<"TUTOR_AVAILABILITY"> | number
    Date_Requested?: DateTimeNullableFilter<"TUTOR_AVAILABILITY"> | Date | string | null
    Times_Requested?: DateTimeNullableFilter<"TUTOR_AVAILABILITY"> | Date | string | null
    Is_Approved?: BoolNullableFilter<"TUTOR_AVAILABILITY"> | boolean | null
    SCHEDULE?: SCHEDULEListRelationFilter
    Tutor?: XOR<TutorScalarRelationFilter, TutorWhereInput>
  }, "Availability_ID">

  export type TUTOR_AVAILABILITYOrderByWithAggregationInput = {
    Availability_ID?: SortOrder
    Tutor_ID?: SortOrder
    Date_Requested?: SortOrderInput | SortOrder
    Times_Requested?: SortOrderInput | SortOrder
    Is_Approved?: SortOrderInput | SortOrder
    _count?: TUTOR_AVAILABILITYCountOrderByAggregateInput
    _avg?: TUTOR_AVAILABILITYAvgOrderByAggregateInput
    _max?: TUTOR_AVAILABILITYMaxOrderByAggregateInput
    _min?: TUTOR_AVAILABILITYMinOrderByAggregateInput
    _sum?: TUTOR_AVAILABILITYSumOrderByAggregateInput
  }

  export type TUTOR_AVAILABILITYScalarWhereWithAggregatesInput = {
    AND?: TUTOR_AVAILABILITYScalarWhereWithAggregatesInput | TUTOR_AVAILABILITYScalarWhereWithAggregatesInput[]
    OR?: TUTOR_AVAILABILITYScalarWhereWithAggregatesInput[]
    NOT?: TUTOR_AVAILABILITYScalarWhereWithAggregatesInput | TUTOR_AVAILABILITYScalarWhereWithAggregatesInput[]
    Availability_ID?: IntWithAggregatesFilter<"TUTOR_AVAILABILITY"> | number
    Tutor_ID?: IntWithAggregatesFilter<"TUTOR_AVAILABILITY"> | number
    Date_Requested?: DateTimeNullableWithAggregatesFilter<"TUTOR_AVAILABILITY"> | Date | string | null
    Times_Requested?: DateTimeNullableWithAggregatesFilter<"TUTOR_AVAILABILITY"> | Date | string | null
    Is_Approved?: BoolNullableWithAggregatesFilter<"TUTOR_AVAILABILITY"> | boolean | null
  }

  export type TutorWhereInput = {
    AND?: TutorWhereInput | TutorWhereInput[]
    OR?: TutorWhereInput[]
    NOT?: TutorWhereInput | TutorWhereInput[]
    Tutor_ID?: IntFilter<"Tutor"> | number
    User_ID?: IntFilter<"Tutor"> | number
    ENROLLMENTS?: ENROLLMENTSListRelationFilter
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSListRelationFilter
    TUTORING_SESSION?: TUTORING_SESSIONListRelationFilter
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYListRelationFilter
    TUTOR_COURSE?: TUTOR_COURSEListRelationFilter
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
  }

  export type TutorOrderByWithRelationInput = {
    Tutor_ID?: SortOrder
    User_ID?: SortOrder
    ENROLLMENTS?: ENROLLMENTSOrderByRelationAggregateInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSOrderByRelationAggregateInput
    TUTORING_SESSION?: TUTORING_SESSIONOrderByRelationAggregateInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYOrderByRelationAggregateInput
    TUTOR_COURSE?: TUTOR_COURSEOrderByRelationAggregateInput
    USERS?: USERSOrderByWithRelationInput
  }

  export type TutorWhereUniqueInput = Prisma.AtLeast<{
    Tutor_ID?: number
    User_ID?: number
    AND?: TutorWhereInput | TutorWhereInput[]
    OR?: TutorWhereInput[]
    NOT?: TutorWhereInput | TutorWhereInput[]
    ENROLLMENTS?: ENROLLMENTSListRelationFilter
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSListRelationFilter
    TUTORING_SESSION?: TUTORING_SESSIONListRelationFilter
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYListRelationFilter
    TUTOR_COURSE?: TUTOR_COURSEListRelationFilter
    USERS?: XOR<USERSScalarRelationFilter, USERSWhereInput>
  }, "Tutor_ID" | "User_ID">

  export type TutorOrderByWithAggregationInput = {
    Tutor_ID?: SortOrder
    User_ID?: SortOrder
    _count?: TutorCountOrderByAggregateInput
    _avg?: TutorAvgOrderByAggregateInput
    _max?: TutorMaxOrderByAggregateInput
    _min?: TutorMinOrderByAggregateInput
    _sum?: TutorSumOrderByAggregateInput
  }

  export type TutorScalarWhereWithAggregatesInput = {
    AND?: TutorScalarWhereWithAggregatesInput | TutorScalarWhereWithAggregatesInput[]
    OR?: TutorScalarWhereWithAggregatesInput[]
    NOT?: TutorScalarWhereWithAggregatesInput | TutorScalarWhereWithAggregatesInput[]
    Tutor_ID?: IntWithAggregatesFilter<"Tutor"> | number
    User_ID?: IntWithAggregatesFilter<"Tutor"> | number
  }

  export type USERSWhereInput = {
    AND?: USERSWhereInput | USERSWhereInput[]
    OR?: USERSWhereInput[]
    NOT?: USERSWhereInput | USERSWhereInput[]
    User_ID?: IntFilter<"USERS"> | number
    Name?: StringFilter<"USERS"> | string
    Email?: StringFilter<"USERS"> | string
    Is_Admin?: BoolNullableFilter<"USERS"> | boolean | null
    Is_Tutor?: BoolNullableFilter<"USERS"> | boolean | null
    Is_Student?: BoolNullableFilter<"USERS"> | boolean | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    ENROLLMENTS?: ENROLLMENTSListRelationFilter
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSListRelationFilter
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    TUTORING_SESSION?: TUTORING_SESSIONListRelationFilter
    Tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
  }

  export type USERSOrderByWithRelationInput = {
    User_ID?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Is_Admin?: SortOrderInput | SortOrder
    Is_Tutor?: SortOrderInput | SortOrder
    Is_Student?: SortOrderInput | SortOrder
    Admin?: AdminOrderByWithRelationInput
    ENROLLMENTS?: ENROLLMENTSOrderByRelationAggregateInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSOrderByRelationAggregateInput
    Student?: StudentOrderByWithRelationInput
    TUTORING_SESSION?: TUTORING_SESSIONOrderByRelationAggregateInput
    Tutor?: TutorOrderByWithRelationInput
    _relevance?: USERSOrderByRelevanceInput
  }

  export type USERSWhereUniqueInput = Prisma.AtLeast<{
    User_ID?: number
    Email?: string
    AND?: USERSWhereInput | USERSWhereInput[]
    OR?: USERSWhereInput[]
    NOT?: USERSWhereInput | USERSWhereInput[]
    Name?: StringFilter<"USERS"> | string
    Is_Admin?: BoolNullableFilter<"USERS"> | boolean | null
    Is_Tutor?: BoolNullableFilter<"USERS"> | boolean | null
    Is_Student?: BoolNullableFilter<"USERS"> | boolean | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    ENROLLMENTS?: ENROLLMENTSListRelationFilter
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSListRelationFilter
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    TUTORING_SESSION?: TUTORING_SESSIONListRelationFilter
    Tutor?: XOR<TutorNullableScalarRelationFilter, TutorWhereInput> | null
  }, "User_ID" | "Email">

  export type USERSOrderByWithAggregationInput = {
    User_ID?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Is_Admin?: SortOrderInput | SortOrder
    Is_Tutor?: SortOrderInput | SortOrder
    Is_Student?: SortOrderInput | SortOrder
    _count?: USERSCountOrderByAggregateInput
    _avg?: USERSAvgOrderByAggregateInput
    _max?: USERSMaxOrderByAggregateInput
    _min?: USERSMinOrderByAggregateInput
    _sum?: USERSSumOrderByAggregateInput
  }

  export type USERSScalarWhereWithAggregatesInput = {
    AND?: USERSScalarWhereWithAggregatesInput | USERSScalarWhereWithAggregatesInput[]
    OR?: USERSScalarWhereWithAggregatesInput[]
    NOT?: USERSScalarWhereWithAggregatesInput | USERSScalarWhereWithAggregatesInput[]
    User_ID?: IntWithAggregatesFilter<"USERS"> | number
    Name?: StringWithAggregatesFilter<"USERS"> | string
    Email?: StringWithAggregatesFilter<"USERS"> | string
    Is_Admin?: BoolNullableWithAggregatesFilter<"USERS"> | boolean | null
    Is_Tutor?: BoolNullableWithAggregatesFilter<"USERS"> | boolean | null
    Is_Student?: BoolNullableWithAggregatesFilter<"USERS"> | boolean | null
  }

  export type TUTOR_COURSEWhereInput = {
    AND?: TUTOR_COURSEWhereInput | TUTOR_COURSEWhereInput[]
    OR?: TUTOR_COURSEWhereInput[]
    NOT?: TUTOR_COURSEWhereInput | TUTOR_COURSEWhereInput[]
    TutorCourseID?: IntFilter<"TUTOR_COURSE"> | number
    Tutor_ID?: IntFilter<"TUTOR_COURSE"> | number
    Course_ID?: IntFilter<"TUTOR_COURSE"> | number
    Tutor?: XOR<TutorScalarRelationFilter, TutorWhereInput>
    COURSES?: XOR<COURSESScalarRelationFilter, COURSESWhereInput>
  }

  export type TUTOR_COURSEOrderByWithRelationInput = {
    TutorCourseID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
    Tutor?: TutorOrderByWithRelationInput
    COURSES?: COURSESOrderByWithRelationInput
  }

  export type TUTOR_COURSEWhereUniqueInput = Prisma.AtLeast<{
    TutorCourseID?: number
    AND?: TUTOR_COURSEWhereInput | TUTOR_COURSEWhereInput[]
    OR?: TUTOR_COURSEWhereInput[]
    NOT?: TUTOR_COURSEWhereInput | TUTOR_COURSEWhereInput[]
    Tutor_ID?: IntFilter<"TUTOR_COURSE"> | number
    Course_ID?: IntFilter<"TUTOR_COURSE"> | number
    Tutor?: XOR<TutorScalarRelationFilter, TutorWhereInput>
    COURSES?: XOR<COURSESScalarRelationFilter, COURSESWhereInput>
  }, "TutorCourseID">

  export type TUTOR_COURSEOrderByWithAggregationInput = {
    TutorCourseID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
    _count?: TUTOR_COURSECountOrderByAggregateInput
    _avg?: TUTOR_COURSEAvgOrderByAggregateInput
    _max?: TUTOR_COURSEMaxOrderByAggregateInput
    _min?: TUTOR_COURSEMinOrderByAggregateInput
    _sum?: TUTOR_COURSESumOrderByAggregateInput
  }

  export type TUTOR_COURSEScalarWhereWithAggregatesInput = {
    AND?: TUTOR_COURSEScalarWhereWithAggregatesInput | TUTOR_COURSEScalarWhereWithAggregatesInput[]
    OR?: TUTOR_COURSEScalarWhereWithAggregatesInput[]
    NOT?: TUTOR_COURSEScalarWhereWithAggregatesInput | TUTOR_COURSEScalarWhereWithAggregatesInput[]
    TutorCourseID?: IntWithAggregatesFilter<"TUTOR_COURSE"> | number
    Tutor_ID?: IntWithAggregatesFilter<"TUTOR_COURSE"> | number
    Course_ID?: IntWithAggregatesFilter<"TUTOR_COURSE"> | number
  }

  export type AdminCreateInput = {
    USERS: USERSCreateNestedOneWithoutAdminInput
    SCHEDULE?: SCHEDULECreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    Admin_ID?: number
    User_ID: number
    SCHEDULE?: SCHEDULEUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    USERS?: USERSUpdateOneRequiredWithoutAdminNestedInput
    SCHEDULE?: SCHEDULEUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    Admin_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    SCHEDULE?: SCHEDULEUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    Admin_ID?: number
    User_ID: number
  }

  export type AdminUpdateManyMutationInput = {

  }

  export type AdminUncheckedUpdateManyInput = {
    Admin_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
  }

  export type COURSESCreateInput = {
    Course_Number?: number | null
    Course_Section?: Decimal | DecimalJsLike | number | string | null
    Course_Title?: string | null
    Course_Instructor?: string | null
    Enrolled_Count?: number | null
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutCOURSESInput
    TUTOR_COURSE?: TUTOR_COURSECreateNestedManyWithoutCOURSESInput
  }

  export type COURSESUncheckedCreateInput = {
    Course_ID?: number
    Course_Number?: number | null
    Course_Section?: Decimal | DecimalJsLike | number | string | null
    Course_Title?: string | null
    Course_Instructor?: string | null
    Enrolled_Count?: number | null
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutCOURSESInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedCreateNestedManyWithoutCOURSESInput
  }

  export type COURSESUpdateInput = {
    Course_Number?: NullableIntFieldUpdateOperationsInput | number | null
    Course_Section?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Course_Title?: NullableStringFieldUpdateOperationsInput | string | null
    Course_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Enrolled_Count?: NullableIntFieldUpdateOperationsInput | number | null
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutCOURSESNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUpdateManyWithoutCOURSESNestedInput
  }

  export type COURSESUncheckedUpdateInput = {
    Course_ID?: IntFieldUpdateOperationsInput | number
    Course_Number?: NullableIntFieldUpdateOperationsInput | number | null
    Course_Section?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Course_Title?: NullableStringFieldUpdateOperationsInput | string | null
    Course_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Enrolled_Count?: NullableIntFieldUpdateOperationsInput | number | null
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutCOURSESNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedUpdateManyWithoutCOURSESNestedInput
  }

  export type COURSESCreateManyInput = {
    Course_ID?: number
    Course_Number?: number | null
    Course_Section?: Decimal | DecimalJsLike | number | string | null
    Course_Title?: string | null
    Course_Instructor?: string | null
    Enrolled_Count?: number | null
  }

  export type COURSESUpdateManyMutationInput = {
    Course_Number?: NullableIntFieldUpdateOperationsInput | number | null
    Course_Section?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Course_Title?: NullableStringFieldUpdateOperationsInput | string | null
    Course_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Enrolled_Count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type COURSESUncheckedUpdateManyInput = {
    Course_ID?: IntFieldUpdateOperationsInput | number
    Course_Number?: NullableIntFieldUpdateOperationsInput | number | null
    Course_Section?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Course_Title?: NullableStringFieldUpdateOperationsInput | string | null
    Course_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Enrolled_Count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ENROLLMENTSCreateInput = {
    Total_Enrollment?: number | null
    USERS: USERSCreateNestedOneWithoutENROLLMENTSInput
    Tutor?: TutorCreateNestedOneWithoutENROLLMENTSInput
    COURSES: COURSESCreateNestedOneWithoutENROLLMENTSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutENROLLMENTSInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSUncheckedCreateInput = {
    Enrollment_ID?: number
    User_ID: number
    Tutor_ID?: number | null
    Course_ID: number
    Total_Enrollment?: number | null
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutENROLLMENTSInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSUpdateInput = {
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneRequiredWithoutENROLLMENTSNestedInput
    Tutor?: TutorUpdateOneWithoutENROLLMENTSNestedInput
    COURSES?: COURSESUpdateOneRequiredWithoutENROLLMENTSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutENROLLMENTSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type ENROLLMENTSUncheckedUpdateInput = {
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Course_ID?: IntFieldUpdateOperationsInput | number
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutENROLLMENTSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type ENROLLMENTSCreateManyInput = {
    Enrollment_ID?: number
    User_ID: number
    Tutor_ID?: number | null
    Course_ID: number
    Total_Enrollment?: number | null
  }

  export type ENROLLMENTSUpdateManyMutationInput = {
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ENROLLMENTSUncheckedUpdateManyInput = {
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Course_ID?: IntFieldUpdateOperationsInput | number
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SCHEDULECreateInput = {
    Has_Worked?: boolean | null
    Admin: AdminCreateNestedOneWithoutSCHEDULEInput
    TUTOR_AVAILABILITY: TUTOR_AVAILABILITYCreateNestedOneWithoutSCHEDULEInput
  }

  export type SCHEDULEUncheckedCreateInput = {
    Schedule_ID?: number
    Admin_ID: number
    Availability_ID: number
    Has_Worked?: boolean | null
  }

  export type SCHEDULEUpdateInput = {
    Has_Worked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateOneRequiredWithoutSCHEDULENestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUpdateOneRequiredWithoutSCHEDULENestedInput
  }

  export type SCHEDULEUncheckedUpdateInput = {
    Schedule_ID?: IntFieldUpdateOperationsInput | number
    Admin_ID?: IntFieldUpdateOperationsInput | number
    Availability_ID?: IntFieldUpdateOperationsInput | number
    Has_Worked?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SCHEDULECreateManyInput = {
    Schedule_ID?: number
    Admin_ID: number
    Availability_ID: number
    Has_Worked?: boolean | null
  }

  export type SCHEDULEUpdateManyMutationInput = {
    Has_Worked?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SCHEDULEUncheckedUpdateManyInput = {
    Schedule_ID?: IntFieldUpdateOperationsInput | number
    Admin_ID?: IntFieldUpdateOperationsInput | number
    Availability_ID?: IntFieldUpdateOperationsInput | number
    Has_Worked?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type STUDY_BUDDY_GROUPSCreateInput = {
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
    USERS: USERSCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput
    Tutor?: TutorCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput
    ENROLLMENTS: ENROLLMENTSCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput
  }

  export type STUDY_BUDDY_GROUPSUncheckedCreateInput = {
    Group_ID?: number
    User_ID: number
    Tutor_ID?: number | null
    Enrollment_ID: number
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
  }

  export type STUDY_BUDDY_GROUPSUpdateInput = {
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneRequiredWithoutSTUDY_BUDDY_GROUPSNestedInput
    Tutor?: TutorUpdateOneWithoutSTUDY_BUDDY_GROUPSNestedInput
    ENROLLMENTS?: ENROLLMENTSUpdateOneRequiredWithoutSTUDY_BUDDY_GROUPSNestedInput
  }

  export type STUDY_BUDDY_GROUPSUncheckedUpdateInput = {
    Group_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type STUDY_BUDDY_GROUPSCreateManyInput = {
    Group_ID?: number
    User_ID: number
    Tutor_ID?: number | null
    Enrollment_ID: number
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
  }

  export type STUDY_BUDDY_GROUPSUpdateManyMutationInput = {
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type STUDY_BUDDY_GROUPSUncheckedUpdateManyInput = {
    Group_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentCreateInput = {
    GPA?: Decimal | DecimalJsLike | number | string | null
    USERS: USERSCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    User_ID: number
    GPA?: Decimal | DecimalJsLike | number | string | null
  }

  export type StudentUpdateInput = {
    GPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    USERS?: USERSUpdateOneRequiredWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    GPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type StudentCreateManyInput = {
    User_ID: number
    GPA?: Decimal | DecimalJsLike | number | string | null
  }

  export type StudentUpdateManyMutationInput = {
    GPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    GPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TUTORING_SESSIONCreateInput = {
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
    USERS: USERSCreateNestedOneWithoutTUTORING_SESSIONInput
    Tutor: TutorCreateNestedOneWithoutTUTORING_SESSIONInput
    ENROLLMENTS: ENROLLMENTSCreateNestedOneWithoutTUTORING_SESSIONInput
  }

  export type TUTORING_SESSIONUncheckedCreateInput = {
    Session_ID?: number
    User_ID: number
    Tutor_ID: number
    Enrollment_ID: number
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
  }

  export type TUTORING_SESSIONUpdateInput = {
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput
    Tutor?: TutorUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput
    ENROLLMENTS?: ENROLLMENTSUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput
  }

  export type TUTORING_SESSIONUncheckedUpdateInput = {
    Session_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TUTORING_SESSIONCreateManyInput = {
    Session_ID?: number
    User_ID: number
    Tutor_ID: number
    Enrollment_ID: number
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
  }

  export type TUTORING_SESSIONUpdateManyMutationInput = {
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TUTORING_SESSIONUncheckedUpdateManyInput = {
    Session_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TUTOR_AVAILABILITYCreateInput = {
    Date_Requested?: Date | string | null
    Times_Requested?: Date | string | null
    Is_Approved?: boolean | null
    SCHEDULE?: SCHEDULECreateNestedManyWithoutTUTOR_AVAILABILITYInput
    Tutor: TutorCreateNestedOneWithoutTUTOR_AVAILABILITYInput
  }

  export type TUTOR_AVAILABILITYUncheckedCreateInput = {
    Availability_ID?: number
    Tutor_ID: number
    Date_Requested?: Date | string | null
    Times_Requested?: Date | string | null
    Is_Approved?: boolean | null
    SCHEDULE?: SCHEDULEUncheckedCreateNestedManyWithoutTUTOR_AVAILABILITYInput
  }

  export type TUTOR_AVAILABILITYUpdateInput = {
    Date_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Times_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Is_Approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SCHEDULE?: SCHEDULEUpdateManyWithoutTUTOR_AVAILABILITYNestedInput
    Tutor?: TutorUpdateOneRequiredWithoutTUTOR_AVAILABILITYNestedInput
  }

  export type TUTOR_AVAILABILITYUncheckedUpdateInput = {
    Availability_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    Date_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Times_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Is_Approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SCHEDULE?: SCHEDULEUncheckedUpdateManyWithoutTUTOR_AVAILABILITYNestedInput
  }

  export type TUTOR_AVAILABILITYCreateManyInput = {
    Availability_ID?: number
    Tutor_ID: number
    Date_Requested?: Date | string | null
    Times_Requested?: Date | string | null
    Is_Approved?: boolean | null
  }

  export type TUTOR_AVAILABILITYUpdateManyMutationInput = {
    Date_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Times_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Is_Approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TUTOR_AVAILABILITYUncheckedUpdateManyInput = {
    Availability_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    Date_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Times_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Is_Approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TutorCreateInput = {
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutTutorInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSECreateNestedManyWithoutTutorInput
    USERS: USERSCreateNestedOneWithoutTutorInput
  }

  export type TutorUncheckedCreateInput = {
    Tutor_ID?: number
    User_ID: number
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutTutorInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorUpdateInput = {
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutTutorNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUpdateManyWithoutTutorNestedInput
    USERS?: USERSUpdateOneRequiredWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateInput = {
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutTutorNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type TutorCreateManyInput = {
    Tutor_ID?: number
    User_ID: number
  }

  export type TutorUpdateManyMutationInput = {

  }

  export type TutorUncheckedUpdateManyInput = {
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
  }

  export type USERSCreateInput = {
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminCreateNestedOneWithoutUSERSInput
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutUSERSInput
    Student?: StudentCreateNestedOneWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutUSERSInput
    Tutor?: TutorCreateNestedOneWithoutUSERSInput
  }

  export type USERSUncheckedCreateInput = {
    User_ID?: number
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminUncheckedCreateNestedOneWithoutUSERSInput
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutUSERSInput
    Student?: StudentUncheckedCreateNestedOneWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutUSERSInput
    Tutor?: TutorUncheckedCreateNestedOneWithoutUSERSInput
  }

  export type USERSUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateOneWithoutUSERSNestedInput
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutUSERSNestedInput
    Student?: StudentUpdateOneWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutUSERSNestedInput
    Tutor?: TutorUpdateOneWithoutUSERSNestedInput
  }

  export type USERSUncheckedUpdateInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUncheckedUpdateOneWithoutUSERSNestedInput
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutUSERSNestedInput
    Student?: StudentUncheckedUpdateOneWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutUSERSNestedInput
    Tutor?: TutorUncheckedUpdateOneWithoutUSERSNestedInput
  }

  export type USERSCreateManyInput = {
    User_ID?: number
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
  }

  export type USERSUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type USERSUncheckedUpdateManyInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TUTOR_COURSECreateInput = {
    Tutor: TutorCreateNestedOneWithoutTUTOR_COURSEInput
    COURSES: COURSESCreateNestedOneWithoutTUTOR_COURSEInput
  }

  export type TUTOR_COURSEUncheckedCreateInput = {
    TutorCourseID?: number
    Tutor_ID: number
    Course_ID: number
  }

  export type TUTOR_COURSEUpdateInput = {
    Tutor?: TutorUpdateOneRequiredWithoutTUTOR_COURSENestedInput
    COURSES?: COURSESUpdateOneRequiredWithoutTUTOR_COURSENestedInput
  }

  export type TUTOR_COURSEUncheckedUpdateInput = {
    TutorCourseID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    Course_ID?: IntFieldUpdateOperationsInput | number
  }

  export type TUTOR_COURSECreateManyInput = {
    TutorCourseID?: number
    Tutor_ID: number
    Course_ID: number
  }

  export type TUTOR_COURSEUpdateManyMutationInput = {

  }

  export type TUTOR_COURSEUncheckedUpdateManyInput = {
    TutorCourseID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    Course_ID?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type USERSScalarRelationFilter = {
    is?: USERSWhereInput
    isNot?: USERSWhereInput
  }

  export type SCHEDULEListRelationFilter = {
    every?: SCHEDULEWhereInput
    some?: SCHEDULEWhereInput
    none?: SCHEDULEWhereInput
  }

  export type SCHEDULEOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    Admin_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ENROLLMENTSListRelationFilter = {
    every?: ENROLLMENTSWhereInput
    some?: ENROLLMENTSWhereInput
    none?: ENROLLMENTSWhereInput
  }

  export type TUTOR_COURSEListRelationFilter = {
    every?: TUTOR_COURSEWhereInput
    some?: TUTOR_COURSEWhereInput
    none?: TUTOR_COURSEWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ENROLLMENTSOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TUTOR_COURSEOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type COURSESOrderByRelevanceInput = {
    fields: COURSESOrderByRelevanceFieldEnum | COURSESOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type COURSESCountOrderByAggregateInput = {
    Course_ID?: SortOrder
    Course_Number?: SortOrder
    Course_Section?: SortOrder
    Course_Title?: SortOrder
    Course_Instructor?: SortOrder
    Enrolled_Count?: SortOrder
  }

  export type COURSESAvgOrderByAggregateInput = {
    Course_ID?: SortOrder
    Course_Number?: SortOrder
    Course_Section?: SortOrder
    Enrolled_Count?: SortOrder
  }

  export type COURSESMaxOrderByAggregateInput = {
    Course_ID?: SortOrder
    Course_Number?: SortOrder
    Course_Section?: SortOrder
    Course_Title?: SortOrder
    Course_Instructor?: SortOrder
    Enrolled_Count?: SortOrder
  }

  export type COURSESMinOrderByAggregateInput = {
    Course_ID?: SortOrder
    Course_Number?: SortOrder
    Course_Section?: SortOrder
    Course_Title?: SortOrder
    Course_Instructor?: SortOrder
    Enrolled_Count?: SortOrder
  }

  export type COURSESSumOrderByAggregateInput = {
    Course_ID?: SortOrder
    Course_Number?: SortOrder
    Course_Section?: SortOrder
    Enrolled_Count?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TutorNullableScalarRelationFilter = {
    is?: TutorWhereInput | null
    isNot?: TutorWhereInput | null
  }

  export type COURSESScalarRelationFilter = {
    is?: COURSESWhereInput
    isNot?: COURSESWhereInput
  }

  export type STUDY_BUDDY_GROUPSListRelationFilter = {
    every?: STUDY_BUDDY_GROUPSWhereInput
    some?: STUDY_BUDDY_GROUPSWhereInput
    none?: STUDY_BUDDY_GROUPSWhereInput
  }

  export type TUTORING_SESSIONListRelationFilter = {
    every?: TUTORING_SESSIONWhereInput
    some?: TUTORING_SESSIONWhereInput
    none?: TUTORING_SESSIONWhereInput
  }

  export type STUDY_BUDDY_GROUPSOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TUTORING_SESSIONOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ENROLLMENTSCountOrderByAggregateInput = {
    Enrollment_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
    Total_Enrollment?: SortOrder
  }

  export type ENROLLMENTSAvgOrderByAggregateInput = {
    Enrollment_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
    Total_Enrollment?: SortOrder
  }

  export type ENROLLMENTSMaxOrderByAggregateInput = {
    Enrollment_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
    Total_Enrollment?: SortOrder
  }

  export type ENROLLMENTSMinOrderByAggregateInput = {
    Enrollment_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
    Total_Enrollment?: SortOrder
  }

  export type ENROLLMENTSSumOrderByAggregateInput = {
    Enrollment_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
    Total_Enrollment?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type TUTOR_AVAILABILITYScalarRelationFilter = {
    is?: TUTOR_AVAILABILITYWhereInput
    isNot?: TUTOR_AVAILABILITYWhereInput
  }

  export type SCHEDULECountOrderByAggregateInput = {
    Schedule_ID?: SortOrder
    Admin_ID?: SortOrder
    Availability_ID?: SortOrder
    Has_Worked?: SortOrder
  }

  export type SCHEDULEAvgOrderByAggregateInput = {
    Schedule_ID?: SortOrder
    Admin_ID?: SortOrder
    Availability_ID?: SortOrder
  }

  export type SCHEDULEMaxOrderByAggregateInput = {
    Schedule_ID?: SortOrder
    Admin_ID?: SortOrder
    Availability_ID?: SortOrder
    Has_Worked?: SortOrder
  }

  export type SCHEDULEMinOrderByAggregateInput = {
    Schedule_ID?: SortOrder
    Admin_ID?: SortOrder
    Availability_ID?: SortOrder
    Has_Worked?: SortOrder
  }

  export type SCHEDULESumOrderByAggregateInput = {
    Schedule_ID?: SortOrder
    Admin_ID?: SortOrder
    Availability_ID?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ENROLLMENTSScalarRelationFilter = {
    is?: ENROLLMENTSWhereInput
    isNot?: ENROLLMENTSWhereInput
  }

  export type STUDY_BUDDY_GROUPSCountOrderByAggregateInput = {
    Group_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Is_Accepted?: SortOrder
    Has_Tutor?: SortOrder
    Group_Members?: SortOrder
  }

  export type STUDY_BUDDY_GROUPSAvgOrderByAggregateInput = {
    Group_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Group_Members?: SortOrder
  }

  export type STUDY_BUDDY_GROUPSMaxOrderByAggregateInput = {
    Group_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Is_Accepted?: SortOrder
    Has_Tutor?: SortOrder
    Group_Members?: SortOrder
  }

  export type STUDY_BUDDY_GROUPSMinOrderByAggregateInput = {
    Group_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Is_Accepted?: SortOrder
    Has_Tutor?: SortOrder
    Group_Members?: SortOrder
  }

  export type STUDY_BUDDY_GROUPSSumOrderByAggregateInput = {
    Group_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Group_Members?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    User_ID?: SortOrder
    GPA?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    User_ID?: SortOrder
    GPA?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    User_ID?: SortOrder
    GPA?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    User_ID?: SortOrder
    GPA?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    User_ID?: SortOrder
    GPA?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TutorScalarRelationFilter = {
    is?: TutorWhereInput
    isNot?: TutorWhereInput
  }

  export type TUTORING_SESSIONOrderByRelevanceInput = {
    fields: TUTORING_SESSIONOrderByRelevanceFieldEnum | TUTORING_SESSIONOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TUTORING_SESSIONCountOrderByAggregateInput = {
    Session_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Session_Date?: SortOrder
    Session_Time?: SortOrder
    Session_Loc?: SortOrder
    Students_Booked?: SortOrder
    Session_Max?: SortOrder
  }

  export type TUTORING_SESSIONAvgOrderByAggregateInput = {
    Session_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Students_Booked?: SortOrder
    Session_Max?: SortOrder
  }

  export type TUTORING_SESSIONMaxOrderByAggregateInput = {
    Session_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Session_Date?: SortOrder
    Session_Time?: SortOrder
    Session_Loc?: SortOrder
    Students_Booked?: SortOrder
    Session_Max?: SortOrder
  }

  export type TUTORING_SESSIONMinOrderByAggregateInput = {
    Session_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Session_Date?: SortOrder
    Session_Time?: SortOrder
    Session_Loc?: SortOrder
    Students_Booked?: SortOrder
    Session_Max?: SortOrder
  }

  export type TUTORING_SESSIONSumOrderByAggregateInput = {
    Session_ID?: SortOrder
    User_ID?: SortOrder
    Tutor_ID?: SortOrder
    Enrollment_ID?: SortOrder
    Students_Booked?: SortOrder
    Session_Max?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TUTOR_AVAILABILITYCountOrderByAggregateInput = {
    Availability_ID?: SortOrder
    Tutor_ID?: SortOrder
    Date_Requested?: SortOrder
    Times_Requested?: SortOrder
    Is_Approved?: SortOrder
  }

  export type TUTOR_AVAILABILITYAvgOrderByAggregateInput = {
    Availability_ID?: SortOrder
    Tutor_ID?: SortOrder
  }

  export type TUTOR_AVAILABILITYMaxOrderByAggregateInput = {
    Availability_ID?: SortOrder
    Tutor_ID?: SortOrder
    Date_Requested?: SortOrder
    Times_Requested?: SortOrder
    Is_Approved?: SortOrder
  }

  export type TUTOR_AVAILABILITYMinOrderByAggregateInput = {
    Availability_ID?: SortOrder
    Tutor_ID?: SortOrder
    Date_Requested?: SortOrder
    Times_Requested?: SortOrder
    Is_Approved?: SortOrder
  }

  export type TUTOR_AVAILABILITYSumOrderByAggregateInput = {
    Availability_ID?: SortOrder
    Tutor_ID?: SortOrder
  }

  export type TUTOR_AVAILABILITYListRelationFilter = {
    every?: TUTOR_AVAILABILITYWhereInput
    some?: TUTOR_AVAILABILITYWhereInput
    none?: TUTOR_AVAILABILITYWhereInput
  }

  export type TUTOR_AVAILABILITYOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutorCountOrderByAggregateInput = {
    Tutor_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type TutorAvgOrderByAggregateInput = {
    Tutor_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type TutorMaxOrderByAggregateInput = {
    Tutor_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type TutorMinOrderByAggregateInput = {
    Tutor_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type TutorSumOrderByAggregateInput = {
    Tutor_ID?: SortOrder
    User_ID?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type USERSOrderByRelevanceInput = {
    fields: USERSOrderByRelevanceFieldEnum | USERSOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type USERSCountOrderByAggregateInput = {
    User_ID?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Is_Admin?: SortOrder
    Is_Tutor?: SortOrder
    Is_Student?: SortOrder
  }

  export type USERSAvgOrderByAggregateInput = {
    User_ID?: SortOrder
  }

  export type USERSMaxOrderByAggregateInput = {
    User_ID?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Is_Admin?: SortOrder
    Is_Tutor?: SortOrder
    Is_Student?: SortOrder
  }

  export type USERSMinOrderByAggregateInput = {
    User_ID?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Is_Admin?: SortOrder
    Is_Tutor?: SortOrder
    Is_Student?: SortOrder
  }

  export type USERSSumOrderByAggregateInput = {
    User_ID?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TUTOR_COURSECountOrderByAggregateInput = {
    TutorCourseID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
  }

  export type TUTOR_COURSEAvgOrderByAggregateInput = {
    TutorCourseID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
  }

  export type TUTOR_COURSEMaxOrderByAggregateInput = {
    TutorCourseID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
  }

  export type TUTOR_COURSEMinOrderByAggregateInput = {
    TutorCourseID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
  }

  export type TUTOR_COURSESumOrderByAggregateInput = {
    TutorCourseID?: SortOrder
    Tutor_ID?: SortOrder
    Course_ID?: SortOrder
  }

  export type USERSCreateNestedOneWithoutAdminInput = {
    create?: XOR<USERSCreateWithoutAdminInput, USERSUncheckedCreateWithoutAdminInput>
    connectOrCreate?: USERSCreateOrConnectWithoutAdminInput
    connect?: USERSWhereUniqueInput
  }

  export type SCHEDULECreateNestedManyWithoutAdminInput = {
    create?: XOR<SCHEDULECreateWithoutAdminInput, SCHEDULEUncheckedCreateWithoutAdminInput> | SCHEDULECreateWithoutAdminInput[] | SCHEDULEUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SCHEDULECreateOrConnectWithoutAdminInput | SCHEDULECreateOrConnectWithoutAdminInput[]
    createMany?: SCHEDULECreateManyAdminInputEnvelope
    connect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
  }

  export type SCHEDULEUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<SCHEDULECreateWithoutAdminInput, SCHEDULEUncheckedCreateWithoutAdminInput> | SCHEDULECreateWithoutAdminInput[] | SCHEDULEUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SCHEDULECreateOrConnectWithoutAdminInput | SCHEDULECreateOrConnectWithoutAdminInput[]
    createMany?: SCHEDULECreateManyAdminInputEnvelope
    connect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
  }

  export type USERSUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<USERSCreateWithoutAdminInput, USERSUncheckedCreateWithoutAdminInput>
    connectOrCreate?: USERSCreateOrConnectWithoutAdminInput
    upsert?: USERSUpsertWithoutAdminInput
    connect?: USERSWhereUniqueInput
    update?: XOR<XOR<USERSUpdateToOneWithWhereWithoutAdminInput, USERSUpdateWithoutAdminInput>, USERSUncheckedUpdateWithoutAdminInput>
  }

  export type SCHEDULEUpdateManyWithoutAdminNestedInput = {
    create?: XOR<SCHEDULECreateWithoutAdminInput, SCHEDULEUncheckedCreateWithoutAdminInput> | SCHEDULECreateWithoutAdminInput[] | SCHEDULEUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SCHEDULECreateOrConnectWithoutAdminInput | SCHEDULECreateOrConnectWithoutAdminInput[]
    upsert?: SCHEDULEUpsertWithWhereUniqueWithoutAdminInput | SCHEDULEUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: SCHEDULECreateManyAdminInputEnvelope
    set?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    disconnect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    delete?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    connect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    update?: SCHEDULEUpdateWithWhereUniqueWithoutAdminInput | SCHEDULEUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: SCHEDULEUpdateManyWithWhereWithoutAdminInput | SCHEDULEUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: SCHEDULEScalarWhereInput | SCHEDULEScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SCHEDULEUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<SCHEDULECreateWithoutAdminInput, SCHEDULEUncheckedCreateWithoutAdminInput> | SCHEDULECreateWithoutAdminInput[] | SCHEDULEUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: SCHEDULECreateOrConnectWithoutAdminInput | SCHEDULECreateOrConnectWithoutAdminInput[]
    upsert?: SCHEDULEUpsertWithWhereUniqueWithoutAdminInput | SCHEDULEUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: SCHEDULECreateManyAdminInputEnvelope
    set?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    disconnect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    delete?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    connect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    update?: SCHEDULEUpdateWithWhereUniqueWithoutAdminInput | SCHEDULEUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: SCHEDULEUpdateManyWithWhereWithoutAdminInput | SCHEDULEUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: SCHEDULEScalarWhereInput | SCHEDULEScalarWhereInput[]
  }

  export type ENROLLMENTSCreateNestedManyWithoutCOURSESInput = {
    create?: XOR<ENROLLMENTSCreateWithoutCOURSESInput, ENROLLMENTSUncheckedCreateWithoutCOURSESInput> | ENROLLMENTSCreateWithoutCOURSESInput[] | ENROLLMENTSUncheckedCreateWithoutCOURSESInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutCOURSESInput | ENROLLMENTSCreateOrConnectWithoutCOURSESInput[]
    createMany?: ENROLLMENTSCreateManyCOURSESInputEnvelope
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
  }

  export type TUTOR_COURSECreateNestedManyWithoutCOURSESInput = {
    create?: XOR<TUTOR_COURSECreateWithoutCOURSESInput, TUTOR_COURSEUncheckedCreateWithoutCOURSESInput> | TUTOR_COURSECreateWithoutCOURSESInput[] | TUTOR_COURSEUncheckedCreateWithoutCOURSESInput[]
    connectOrCreate?: TUTOR_COURSECreateOrConnectWithoutCOURSESInput | TUTOR_COURSECreateOrConnectWithoutCOURSESInput[]
    createMany?: TUTOR_COURSECreateManyCOURSESInputEnvelope
    connect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
  }

  export type ENROLLMENTSUncheckedCreateNestedManyWithoutCOURSESInput = {
    create?: XOR<ENROLLMENTSCreateWithoutCOURSESInput, ENROLLMENTSUncheckedCreateWithoutCOURSESInput> | ENROLLMENTSCreateWithoutCOURSESInput[] | ENROLLMENTSUncheckedCreateWithoutCOURSESInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutCOURSESInput | ENROLLMENTSCreateOrConnectWithoutCOURSESInput[]
    createMany?: ENROLLMENTSCreateManyCOURSESInputEnvelope
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
  }

  export type TUTOR_COURSEUncheckedCreateNestedManyWithoutCOURSESInput = {
    create?: XOR<TUTOR_COURSECreateWithoutCOURSESInput, TUTOR_COURSEUncheckedCreateWithoutCOURSESInput> | TUTOR_COURSECreateWithoutCOURSESInput[] | TUTOR_COURSEUncheckedCreateWithoutCOURSESInput[]
    connectOrCreate?: TUTOR_COURSECreateOrConnectWithoutCOURSESInput | TUTOR_COURSECreateOrConnectWithoutCOURSESInput[]
    createMany?: TUTOR_COURSECreateManyCOURSESInputEnvelope
    connect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ENROLLMENTSUpdateManyWithoutCOURSESNestedInput = {
    create?: XOR<ENROLLMENTSCreateWithoutCOURSESInput, ENROLLMENTSUncheckedCreateWithoutCOURSESInput> | ENROLLMENTSCreateWithoutCOURSESInput[] | ENROLLMENTSUncheckedCreateWithoutCOURSESInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutCOURSESInput | ENROLLMENTSCreateOrConnectWithoutCOURSESInput[]
    upsert?: ENROLLMENTSUpsertWithWhereUniqueWithoutCOURSESInput | ENROLLMENTSUpsertWithWhereUniqueWithoutCOURSESInput[]
    createMany?: ENROLLMENTSCreateManyCOURSESInputEnvelope
    set?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    disconnect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    delete?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    update?: ENROLLMENTSUpdateWithWhereUniqueWithoutCOURSESInput | ENROLLMENTSUpdateWithWhereUniqueWithoutCOURSESInput[]
    updateMany?: ENROLLMENTSUpdateManyWithWhereWithoutCOURSESInput | ENROLLMENTSUpdateManyWithWhereWithoutCOURSESInput[]
    deleteMany?: ENROLLMENTSScalarWhereInput | ENROLLMENTSScalarWhereInput[]
  }

  export type TUTOR_COURSEUpdateManyWithoutCOURSESNestedInput = {
    create?: XOR<TUTOR_COURSECreateWithoutCOURSESInput, TUTOR_COURSEUncheckedCreateWithoutCOURSESInput> | TUTOR_COURSECreateWithoutCOURSESInput[] | TUTOR_COURSEUncheckedCreateWithoutCOURSESInput[]
    connectOrCreate?: TUTOR_COURSECreateOrConnectWithoutCOURSESInput | TUTOR_COURSECreateOrConnectWithoutCOURSESInput[]
    upsert?: TUTOR_COURSEUpsertWithWhereUniqueWithoutCOURSESInput | TUTOR_COURSEUpsertWithWhereUniqueWithoutCOURSESInput[]
    createMany?: TUTOR_COURSECreateManyCOURSESInputEnvelope
    set?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    disconnect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    delete?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    connect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    update?: TUTOR_COURSEUpdateWithWhereUniqueWithoutCOURSESInput | TUTOR_COURSEUpdateWithWhereUniqueWithoutCOURSESInput[]
    updateMany?: TUTOR_COURSEUpdateManyWithWhereWithoutCOURSESInput | TUTOR_COURSEUpdateManyWithWhereWithoutCOURSESInput[]
    deleteMany?: TUTOR_COURSEScalarWhereInput | TUTOR_COURSEScalarWhereInput[]
  }

  export type ENROLLMENTSUncheckedUpdateManyWithoutCOURSESNestedInput = {
    create?: XOR<ENROLLMENTSCreateWithoutCOURSESInput, ENROLLMENTSUncheckedCreateWithoutCOURSESInput> | ENROLLMENTSCreateWithoutCOURSESInput[] | ENROLLMENTSUncheckedCreateWithoutCOURSESInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutCOURSESInput | ENROLLMENTSCreateOrConnectWithoutCOURSESInput[]
    upsert?: ENROLLMENTSUpsertWithWhereUniqueWithoutCOURSESInput | ENROLLMENTSUpsertWithWhereUniqueWithoutCOURSESInput[]
    createMany?: ENROLLMENTSCreateManyCOURSESInputEnvelope
    set?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    disconnect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    delete?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    update?: ENROLLMENTSUpdateWithWhereUniqueWithoutCOURSESInput | ENROLLMENTSUpdateWithWhereUniqueWithoutCOURSESInput[]
    updateMany?: ENROLLMENTSUpdateManyWithWhereWithoutCOURSESInput | ENROLLMENTSUpdateManyWithWhereWithoutCOURSESInput[]
    deleteMany?: ENROLLMENTSScalarWhereInput | ENROLLMENTSScalarWhereInput[]
  }

  export type TUTOR_COURSEUncheckedUpdateManyWithoutCOURSESNestedInput = {
    create?: XOR<TUTOR_COURSECreateWithoutCOURSESInput, TUTOR_COURSEUncheckedCreateWithoutCOURSESInput> | TUTOR_COURSECreateWithoutCOURSESInput[] | TUTOR_COURSEUncheckedCreateWithoutCOURSESInput[]
    connectOrCreate?: TUTOR_COURSECreateOrConnectWithoutCOURSESInput | TUTOR_COURSECreateOrConnectWithoutCOURSESInput[]
    upsert?: TUTOR_COURSEUpsertWithWhereUniqueWithoutCOURSESInput | TUTOR_COURSEUpsertWithWhereUniqueWithoutCOURSESInput[]
    createMany?: TUTOR_COURSECreateManyCOURSESInputEnvelope
    set?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    disconnect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    delete?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    connect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    update?: TUTOR_COURSEUpdateWithWhereUniqueWithoutCOURSESInput | TUTOR_COURSEUpdateWithWhereUniqueWithoutCOURSESInput[]
    updateMany?: TUTOR_COURSEUpdateManyWithWhereWithoutCOURSESInput | TUTOR_COURSEUpdateManyWithWhereWithoutCOURSESInput[]
    deleteMany?: TUTOR_COURSEScalarWhereInput | TUTOR_COURSEScalarWhereInput[]
  }

  export type USERSCreateNestedOneWithoutENROLLMENTSInput = {
    create?: XOR<USERSCreateWithoutENROLLMENTSInput, USERSUncheckedCreateWithoutENROLLMENTSInput>
    connectOrCreate?: USERSCreateOrConnectWithoutENROLLMENTSInput
    connect?: USERSWhereUniqueInput
  }

  export type TutorCreateNestedOneWithoutENROLLMENTSInput = {
    create?: XOR<TutorCreateWithoutENROLLMENTSInput, TutorUncheckedCreateWithoutENROLLMENTSInput>
    connectOrCreate?: TutorCreateOrConnectWithoutENROLLMENTSInput
    connect?: TutorWhereUniqueInput
  }

  export type COURSESCreateNestedOneWithoutENROLLMENTSInput = {
    create?: XOR<COURSESCreateWithoutENROLLMENTSInput, COURSESUncheckedCreateWithoutENROLLMENTSInput>
    connectOrCreate?: COURSESCreateOrConnectWithoutENROLLMENTSInput
    connect?: COURSESWhereUniqueInput
  }

  export type STUDY_BUDDY_GROUPSCreateNestedManyWithoutENROLLMENTSInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutENROLLMENTSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutENROLLMENTSInput> | STUDY_BUDDY_GROUPSCreateWithoutENROLLMENTSInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutENROLLMENTSInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutENROLLMENTSInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutENROLLMENTSInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyENROLLMENTSInputEnvelope
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
  }

  export type TUTORING_SESSIONCreateNestedManyWithoutENROLLMENTSInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutENROLLMENTSInput, TUTORING_SESSIONUncheckedCreateWithoutENROLLMENTSInput> | TUTORING_SESSIONCreateWithoutENROLLMENTSInput[] | TUTORING_SESSIONUncheckedCreateWithoutENROLLMENTSInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutENROLLMENTSInput | TUTORING_SESSIONCreateOrConnectWithoutENROLLMENTSInput[]
    createMany?: TUTORING_SESSIONCreateManyENROLLMENTSInputEnvelope
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
  }

  export type STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutENROLLMENTSInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutENROLLMENTSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutENROLLMENTSInput> | STUDY_BUDDY_GROUPSCreateWithoutENROLLMENTSInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutENROLLMENTSInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutENROLLMENTSInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutENROLLMENTSInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyENROLLMENTSInputEnvelope
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
  }

  export type TUTORING_SESSIONUncheckedCreateNestedManyWithoutENROLLMENTSInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutENROLLMENTSInput, TUTORING_SESSIONUncheckedCreateWithoutENROLLMENTSInput> | TUTORING_SESSIONCreateWithoutENROLLMENTSInput[] | TUTORING_SESSIONUncheckedCreateWithoutENROLLMENTSInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutENROLLMENTSInput | TUTORING_SESSIONCreateOrConnectWithoutENROLLMENTSInput[]
    createMany?: TUTORING_SESSIONCreateManyENROLLMENTSInputEnvelope
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
  }

  export type USERSUpdateOneRequiredWithoutENROLLMENTSNestedInput = {
    create?: XOR<USERSCreateWithoutENROLLMENTSInput, USERSUncheckedCreateWithoutENROLLMENTSInput>
    connectOrCreate?: USERSCreateOrConnectWithoutENROLLMENTSInput
    upsert?: USERSUpsertWithoutENROLLMENTSInput
    connect?: USERSWhereUniqueInput
    update?: XOR<XOR<USERSUpdateToOneWithWhereWithoutENROLLMENTSInput, USERSUpdateWithoutENROLLMENTSInput>, USERSUncheckedUpdateWithoutENROLLMENTSInput>
  }

  export type TutorUpdateOneWithoutENROLLMENTSNestedInput = {
    create?: XOR<TutorCreateWithoutENROLLMENTSInput, TutorUncheckedCreateWithoutENROLLMENTSInput>
    connectOrCreate?: TutorCreateOrConnectWithoutENROLLMENTSInput
    upsert?: TutorUpsertWithoutENROLLMENTSInput
    disconnect?: TutorWhereInput | boolean
    delete?: TutorWhereInput | boolean
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutENROLLMENTSInput, TutorUpdateWithoutENROLLMENTSInput>, TutorUncheckedUpdateWithoutENROLLMENTSInput>
  }

  export type COURSESUpdateOneRequiredWithoutENROLLMENTSNestedInput = {
    create?: XOR<COURSESCreateWithoutENROLLMENTSInput, COURSESUncheckedCreateWithoutENROLLMENTSInput>
    connectOrCreate?: COURSESCreateOrConnectWithoutENROLLMENTSInput
    upsert?: COURSESUpsertWithoutENROLLMENTSInput
    connect?: COURSESWhereUniqueInput
    update?: XOR<XOR<COURSESUpdateToOneWithWhereWithoutENROLLMENTSInput, COURSESUpdateWithoutENROLLMENTSInput>, COURSESUncheckedUpdateWithoutENROLLMENTSInput>
  }

  export type STUDY_BUDDY_GROUPSUpdateManyWithoutENROLLMENTSNestedInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutENROLLMENTSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutENROLLMENTSInput> | STUDY_BUDDY_GROUPSCreateWithoutENROLLMENTSInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutENROLLMENTSInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutENROLLMENTSInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutENROLLMENTSInput[]
    upsert?: STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutENROLLMENTSInput | STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutENROLLMENTSInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyENROLLMENTSInputEnvelope
    set?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    disconnect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    delete?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    update?: STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutENROLLMENTSInput | STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutENROLLMENTSInput[]
    updateMany?: STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutENROLLMENTSInput | STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutENROLLMENTSInput[]
    deleteMany?: STUDY_BUDDY_GROUPSScalarWhereInput | STUDY_BUDDY_GROUPSScalarWhereInput[]
  }

  export type TUTORING_SESSIONUpdateManyWithoutENROLLMENTSNestedInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutENROLLMENTSInput, TUTORING_SESSIONUncheckedCreateWithoutENROLLMENTSInput> | TUTORING_SESSIONCreateWithoutENROLLMENTSInput[] | TUTORING_SESSIONUncheckedCreateWithoutENROLLMENTSInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutENROLLMENTSInput | TUTORING_SESSIONCreateOrConnectWithoutENROLLMENTSInput[]
    upsert?: TUTORING_SESSIONUpsertWithWhereUniqueWithoutENROLLMENTSInput | TUTORING_SESSIONUpsertWithWhereUniqueWithoutENROLLMENTSInput[]
    createMany?: TUTORING_SESSIONCreateManyENROLLMENTSInputEnvelope
    set?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    disconnect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    delete?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    update?: TUTORING_SESSIONUpdateWithWhereUniqueWithoutENROLLMENTSInput | TUTORING_SESSIONUpdateWithWhereUniqueWithoutENROLLMENTSInput[]
    updateMany?: TUTORING_SESSIONUpdateManyWithWhereWithoutENROLLMENTSInput | TUTORING_SESSIONUpdateManyWithWhereWithoutENROLLMENTSInput[]
    deleteMany?: TUTORING_SESSIONScalarWhereInput | TUTORING_SESSIONScalarWhereInput[]
  }

  export type STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutENROLLMENTSNestedInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutENROLLMENTSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutENROLLMENTSInput> | STUDY_BUDDY_GROUPSCreateWithoutENROLLMENTSInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutENROLLMENTSInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutENROLLMENTSInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutENROLLMENTSInput[]
    upsert?: STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutENROLLMENTSInput | STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutENROLLMENTSInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyENROLLMENTSInputEnvelope
    set?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    disconnect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    delete?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    update?: STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutENROLLMENTSInput | STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutENROLLMENTSInput[]
    updateMany?: STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutENROLLMENTSInput | STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutENROLLMENTSInput[]
    deleteMany?: STUDY_BUDDY_GROUPSScalarWhereInput | STUDY_BUDDY_GROUPSScalarWhereInput[]
  }

  export type TUTORING_SESSIONUncheckedUpdateManyWithoutENROLLMENTSNestedInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutENROLLMENTSInput, TUTORING_SESSIONUncheckedCreateWithoutENROLLMENTSInput> | TUTORING_SESSIONCreateWithoutENROLLMENTSInput[] | TUTORING_SESSIONUncheckedCreateWithoutENROLLMENTSInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutENROLLMENTSInput | TUTORING_SESSIONCreateOrConnectWithoutENROLLMENTSInput[]
    upsert?: TUTORING_SESSIONUpsertWithWhereUniqueWithoutENROLLMENTSInput | TUTORING_SESSIONUpsertWithWhereUniqueWithoutENROLLMENTSInput[]
    createMany?: TUTORING_SESSIONCreateManyENROLLMENTSInputEnvelope
    set?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    disconnect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    delete?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    update?: TUTORING_SESSIONUpdateWithWhereUniqueWithoutENROLLMENTSInput | TUTORING_SESSIONUpdateWithWhereUniqueWithoutENROLLMENTSInput[]
    updateMany?: TUTORING_SESSIONUpdateManyWithWhereWithoutENROLLMENTSInput | TUTORING_SESSIONUpdateManyWithWhereWithoutENROLLMENTSInput[]
    deleteMany?: TUTORING_SESSIONScalarWhereInput | TUTORING_SESSIONScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutSCHEDULEInput = {
    create?: XOR<AdminCreateWithoutSCHEDULEInput, AdminUncheckedCreateWithoutSCHEDULEInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSCHEDULEInput
    connect?: AdminWhereUniqueInput
  }

  export type TUTOR_AVAILABILITYCreateNestedOneWithoutSCHEDULEInput = {
    create?: XOR<TUTOR_AVAILABILITYCreateWithoutSCHEDULEInput, TUTOR_AVAILABILITYUncheckedCreateWithoutSCHEDULEInput>
    connectOrCreate?: TUTOR_AVAILABILITYCreateOrConnectWithoutSCHEDULEInput
    connect?: TUTOR_AVAILABILITYWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AdminUpdateOneRequiredWithoutSCHEDULENestedInput = {
    create?: XOR<AdminCreateWithoutSCHEDULEInput, AdminUncheckedCreateWithoutSCHEDULEInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSCHEDULEInput
    upsert?: AdminUpsertWithoutSCHEDULEInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutSCHEDULEInput, AdminUpdateWithoutSCHEDULEInput>, AdminUncheckedUpdateWithoutSCHEDULEInput>
  }

  export type TUTOR_AVAILABILITYUpdateOneRequiredWithoutSCHEDULENestedInput = {
    create?: XOR<TUTOR_AVAILABILITYCreateWithoutSCHEDULEInput, TUTOR_AVAILABILITYUncheckedCreateWithoutSCHEDULEInput>
    connectOrCreate?: TUTOR_AVAILABILITYCreateOrConnectWithoutSCHEDULEInput
    upsert?: TUTOR_AVAILABILITYUpsertWithoutSCHEDULEInput
    connect?: TUTOR_AVAILABILITYWhereUniqueInput
    update?: XOR<XOR<TUTOR_AVAILABILITYUpdateToOneWithWhereWithoutSCHEDULEInput, TUTOR_AVAILABILITYUpdateWithoutSCHEDULEInput>, TUTOR_AVAILABILITYUncheckedUpdateWithoutSCHEDULEInput>
  }

  export type USERSCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput = {
    create?: XOR<USERSCreateWithoutSTUDY_BUDDY_GROUPSInput, USERSUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
    connectOrCreate?: USERSCreateOrConnectWithoutSTUDY_BUDDY_GROUPSInput
    connect?: USERSWhereUniqueInput
  }

  export type TutorCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput = {
    create?: XOR<TutorCreateWithoutSTUDY_BUDDY_GROUPSInput, TutorUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
    connectOrCreate?: TutorCreateOrConnectWithoutSTUDY_BUDDY_GROUPSInput
    connect?: TutorWhereUniqueInput
  }

  export type ENROLLMENTSCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput = {
    create?: XOR<ENROLLMENTSCreateWithoutSTUDY_BUDDY_GROUPSInput, ENROLLMENTSUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutSTUDY_BUDDY_GROUPSInput
    connect?: ENROLLMENTSWhereUniqueInput
  }

  export type USERSUpdateOneRequiredWithoutSTUDY_BUDDY_GROUPSNestedInput = {
    create?: XOR<USERSCreateWithoutSTUDY_BUDDY_GROUPSInput, USERSUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
    connectOrCreate?: USERSCreateOrConnectWithoutSTUDY_BUDDY_GROUPSInput
    upsert?: USERSUpsertWithoutSTUDY_BUDDY_GROUPSInput
    connect?: USERSWhereUniqueInput
    update?: XOR<XOR<USERSUpdateToOneWithWhereWithoutSTUDY_BUDDY_GROUPSInput, USERSUpdateWithoutSTUDY_BUDDY_GROUPSInput>, USERSUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput>
  }

  export type TutorUpdateOneWithoutSTUDY_BUDDY_GROUPSNestedInput = {
    create?: XOR<TutorCreateWithoutSTUDY_BUDDY_GROUPSInput, TutorUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
    connectOrCreate?: TutorCreateOrConnectWithoutSTUDY_BUDDY_GROUPSInput
    upsert?: TutorUpsertWithoutSTUDY_BUDDY_GROUPSInput
    disconnect?: TutorWhereInput | boolean
    delete?: TutorWhereInput | boolean
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutSTUDY_BUDDY_GROUPSInput, TutorUpdateWithoutSTUDY_BUDDY_GROUPSInput>, TutorUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput>
  }

  export type ENROLLMENTSUpdateOneRequiredWithoutSTUDY_BUDDY_GROUPSNestedInput = {
    create?: XOR<ENROLLMENTSCreateWithoutSTUDY_BUDDY_GROUPSInput, ENROLLMENTSUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutSTUDY_BUDDY_GROUPSInput
    upsert?: ENROLLMENTSUpsertWithoutSTUDY_BUDDY_GROUPSInput
    connect?: ENROLLMENTSWhereUniqueInput
    update?: XOR<XOR<ENROLLMENTSUpdateToOneWithWhereWithoutSTUDY_BUDDY_GROUPSInput, ENROLLMENTSUpdateWithoutSTUDY_BUDDY_GROUPSInput>, ENROLLMENTSUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput>
  }

  export type USERSCreateNestedOneWithoutStudentInput = {
    create?: XOR<USERSCreateWithoutStudentInput, USERSUncheckedCreateWithoutStudentInput>
    connectOrCreate?: USERSCreateOrConnectWithoutStudentInput
    connect?: USERSWhereUniqueInput
  }

  export type USERSUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<USERSCreateWithoutStudentInput, USERSUncheckedCreateWithoutStudentInput>
    connectOrCreate?: USERSCreateOrConnectWithoutStudentInput
    upsert?: USERSUpsertWithoutStudentInput
    connect?: USERSWhereUniqueInput
    update?: XOR<XOR<USERSUpdateToOneWithWhereWithoutStudentInput, USERSUpdateWithoutStudentInput>, USERSUncheckedUpdateWithoutStudentInput>
  }

  export type USERSCreateNestedOneWithoutTUTORING_SESSIONInput = {
    create?: XOR<USERSCreateWithoutTUTORING_SESSIONInput, USERSUncheckedCreateWithoutTUTORING_SESSIONInput>
    connectOrCreate?: USERSCreateOrConnectWithoutTUTORING_SESSIONInput
    connect?: USERSWhereUniqueInput
  }

  export type TutorCreateNestedOneWithoutTUTORING_SESSIONInput = {
    create?: XOR<TutorCreateWithoutTUTORING_SESSIONInput, TutorUncheckedCreateWithoutTUTORING_SESSIONInput>
    connectOrCreate?: TutorCreateOrConnectWithoutTUTORING_SESSIONInput
    connect?: TutorWhereUniqueInput
  }

  export type ENROLLMENTSCreateNestedOneWithoutTUTORING_SESSIONInput = {
    create?: XOR<ENROLLMENTSCreateWithoutTUTORING_SESSIONInput, ENROLLMENTSUncheckedCreateWithoutTUTORING_SESSIONInput>
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutTUTORING_SESSIONInput
    connect?: ENROLLMENTSWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type USERSUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput = {
    create?: XOR<USERSCreateWithoutTUTORING_SESSIONInput, USERSUncheckedCreateWithoutTUTORING_SESSIONInput>
    connectOrCreate?: USERSCreateOrConnectWithoutTUTORING_SESSIONInput
    upsert?: USERSUpsertWithoutTUTORING_SESSIONInput
    connect?: USERSWhereUniqueInput
    update?: XOR<XOR<USERSUpdateToOneWithWhereWithoutTUTORING_SESSIONInput, USERSUpdateWithoutTUTORING_SESSIONInput>, USERSUncheckedUpdateWithoutTUTORING_SESSIONInput>
  }

  export type TutorUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput = {
    create?: XOR<TutorCreateWithoutTUTORING_SESSIONInput, TutorUncheckedCreateWithoutTUTORING_SESSIONInput>
    connectOrCreate?: TutorCreateOrConnectWithoutTUTORING_SESSIONInput
    upsert?: TutorUpsertWithoutTUTORING_SESSIONInput
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutTUTORING_SESSIONInput, TutorUpdateWithoutTUTORING_SESSIONInput>, TutorUncheckedUpdateWithoutTUTORING_SESSIONInput>
  }

  export type ENROLLMENTSUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput = {
    create?: XOR<ENROLLMENTSCreateWithoutTUTORING_SESSIONInput, ENROLLMENTSUncheckedCreateWithoutTUTORING_SESSIONInput>
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutTUTORING_SESSIONInput
    upsert?: ENROLLMENTSUpsertWithoutTUTORING_SESSIONInput
    connect?: ENROLLMENTSWhereUniqueInput
    update?: XOR<XOR<ENROLLMENTSUpdateToOneWithWhereWithoutTUTORING_SESSIONInput, ENROLLMENTSUpdateWithoutTUTORING_SESSIONInput>, ENROLLMENTSUncheckedUpdateWithoutTUTORING_SESSIONInput>
  }

  export type SCHEDULECreateNestedManyWithoutTUTOR_AVAILABILITYInput = {
    create?: XOR<SCHEDULECreateWithoutTUTOR_AVAILABILITYInput, SCHEDULEUncheckedCreateWithoutTUTOR_AVAILABILITYInput> | SCHEDULECreateWithoutTUTOR_AVAILABILITYInput[] | SCHEDULEUncheckedCreateWithoutTUTOR_AVAILABILITYInput[]
    connectOrCreate?: SCHEDULECreateOrConnectWithoutTUTOR_AVAILABILITYInput | SCHEDULECreateOrConnectWithoutTUTOR_AVAILABILITYInput[]
    createMany?: SCHEDULECreateManyTUTOR_AVAILABILITYInputEnvelope
    connect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
  }

  export type TutorCreateNestedOneWithoutTUTOR_AVAILABILITYInput = {
    create?: XOR<TutorCreateWithoutTUTOR_AVAILABILITYInput, TutorUncheckedCreateWithoutTUTOR_AVAILABILITYInput>
    connectOrCreate?: TutorCreateOrConnectWithoutTUTOR_AVAILABILITYInput
    connect?: TutorWhereUniqueInput
  }

  export type SCHEDULEUncheckedCreateNestedManyWithoutTUTOR_AVAILABILITYInput = {
    create?: XOR<SCHEDULECreateWithoutTUTOR_AVAILABILITYInput, SCHEDULEUncheckedCreateWithoutTUTOR_AVAILABILITYInput> | SCHEDULECreateWithoutTUTOR_AVAILABILITYInput[] | SCHEDULEUncheckedCreateWithoutTUTOR_AVAILABILITYInput[]
    connectOrCreate?: SCHEDULECreateOrConnectWithoutTUTOR_AVAILABILITYInput | SCHEDULECreateOrConnectWithoutTUTOR_AVAILABILITYInput[]
    createMany?: SCHEDULECreateManyTUTOR_AVAILABILITYInputEnvelope
    connect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
  }

  export type SCHEDULEUpdateManyWithoutTUTOR_AVAILABILITYNestedInput = {
    create?: XOR<SCHEDULECreateWithoutTUTOR_AVAILABILITYInput, SCHEDULEUncheckedCreateWithoutTUTOR_AVAILABILITYInput> | SCHEDULECreateWithoutTUTOR_AVAILABILITYInput[] | SCHEDULEUncheckedCreateWithoutTUTOR_AVAILABILITYInput[]
    connectOrCreate?: SCHEDULECreateOrConnectWithoutTUTOR_AVAILABILITYInput | SCHEDULECreateOrConnectWithoutTUTOR_AVAILABILITYInput[]
    upsert?: SCHEDULEUpsertWithWhereUniqueWithoutTUTOR_AVAILABILITYInput | SCHEDULEUpsertWithWhereUniqueWithoutTUTOR_AVAILABILITYInput[]
    createMany?: SCHEDULECreateManyTUTOR_AVAILABILITYInputEnvelope
    set?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    disconnect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    delete?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    connect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    update?: SCHEDULEUpdateWithWhereUniqueWithoutTUTOR_AVAILABILITYInput | SCHEDULEUpdateWithWhereUniqueWithoutTUTOR_AVAILABILITYInput[]
    updateMany?: SCHEDULEUpdateManyWithWhereWithoutTUTOR_AVAILABILITYInput | SCHEDULEUpdateManyWithWhereWithoutTUTOR_AVAILABILITYInput[]
    deleteMany?: SCHEDULEScalarWhereInput | SCHEDULEScalarWhereInput[]
  }

  export type TutorUpdateOneRequiredWithoutTUTOR_AVAILABILITYNestedInput = {
    create?: XOR<TutorCreateWithoutTUTOR_AVAILABILITYInput, TutorUncheckedCreateWithoutTUTOR_AVAILABILITYInput>
    connectOrCreate?: TutorCreateOrConnectWithoutTUTOR_AVAILABILITYInput
    upsert?: TutorUpsertWithoutTUTOR_AVAILABILITYInput
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutTUTOR_AVAILABILITYInput, TutorUpdateWithoutTUTOR_AVAILABILITYInput>, TutorUncheckedUpdateWithoutTUTOR_AVAILABILITYInput>
  }

  export type SCHEDULEUncheckedUpdateManyWithoutTUTOR_AVAILABILITYNestedInput = {
    create?: XOR<SCHEDULECreateWithoutTUTOR_AVAILABILITYInput, SCHEDULEUncheckedCreateWithoutTUTOR_AVAILABILITYInput> | SCHEDULECreateWithoutTUTOR_AVAILABILITYInput[] | SCHEDULEUncheckedCreateWithoutTUTOR_AVAILABILITYInput[]
    connectOrCreate?: SCHEDULECreateOrConnectWithoutTUTOR_AVAILABILITYInput | SCHEDULECreateOrConnectWithoutTUTOR_AVAILABILITYInput[]
    upsert?: SCHEDULEUpsertWithWhereUniqueWithoutTUTOR_AVAILABILITYInput | SCHEDULEUpsertWithWhereUniqueWithoutTUTOR_AVAILABILITYInput[]
    createMany?: SCHEDULECreateManyTUTOR_AVAILABILITYInputEnvelope
    set?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    disconnect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    delete?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    connect?: SCHEDULEWhereUniqueInput | SCHEDULEWhereUniqueInput[]
    update?: SCHEDULEUpdateWithWhereUniqueWithoutTUTOR_AVAILABILITYInput | SCHEDULEUpdateWithWhereUniqueWithoutTUTOR_AVAILABILITYInput[]
    updateMany?: SCHEDULEUpdateManyWithWhereWithoutTUTOR_AVAILABILITYInput | SCHEDULEUpdateManyWithWhereWithoutTUTOR_AVAILABILITYInput[]
    deleteMany?: SCHEDULEScalarWhereInput | SCHEDULEScalarWhereInput[]
  }

  export type ENROLLMENTSCreateNestedManyWithoutTutorInput = {
    create?: XOR<ENROLLMENTSCreateWithoutTutorInput, ENROLLMENTSUncheckedCreateWithoutTutorInput> | ENROLLMENTSCreateWithoutTutorInput[] | ENROLLMENTSUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutTutorInput | ENROLLMENTSCreateOrConnectWithoutTutorInput[]
    createMany?: ENROLLMENTSCreateManyTutorInputEnvelope
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
  }

  export type STUDY_BUDDY_GROUPSCreateNestedManyWithoutTutorInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutTutorInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutTutorInput> | STUDY_BUDDY_GROUPSCreateWithoutTutorInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutTutorInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutTutorInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyTutorInputEnvelope
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
  }

  export type TUTORING_SESSIONCreateNestedManyWithoutTutorInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutTutorInput, TUTORING_SESSIONUncheckedCreateWithoutTutorInput> | TUTORING_SESSIONCreateWithoutTutorInput[] | TUTORING_SESSIONUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutTutorInput | TUTORING_SESSIONCreateOrConnectWithoutTutorInput[]
    createMany?: TUTORING_SESSIONCreateManyTutorInputEnvelope
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
  }

  export type TUTOR_AVAILABILITYCreateNestedManyWithoutTutorInput = {
    create?: XOR<TUTOR_AVAILABILITYCreateWithoutTutorInput, TUTOR_AVAILABILITYUncheckedCreateWithoutTutorInput> | TUTOR_AVAILABILITYCreateWithoutTutorInput[] | TUTOR_AVAILABILITYUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTOR_AVAILABILITYCreateOrConnectWithoutTutorInput | TUTOR_AVAILABILITYCreateOrConnectWithoutTutorInput[]
    createMany?: TUTOR_AVAILABILITYCreateManyTutorInputEnvelope
    connect?: TUTOR_AVAILABILITYWhereUniqueInput | TUTOR_AVAILABILITYWhereUniqueInput[]
  }

  export type TUTOR_COURSECreateNestedManyWithoutTutorInput = {
    create?: XOR<TUTOR_COURSECreateWithoutTutorInput, TUTOR_COURSEUncheckedCreateWithoutTutorInput> | TUTOR_COURSECreateWithoutTutorInput[] | TUTOR_COURSEUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTOR_COURSECreateOrConnectWithoutTutorInput | TUTOR_COURSECreateOrConnectWithoutTutorInput[]
    createMany?: TUTOR_COURSECreateManyTutorInputEnvelope
    connect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
  }

  export type USERSCreateNestedOneWithoutTutorInput = {
    create?: XOR<USERSCreateWithoutTutorInput, USERSUncheckedCreateWithoutTutorInput>
    connectOrCreate?: USERSCreateOrConnectWithoutTutorInput
    connect?: USERSWhereUniqueInput
  }

  export type ENROLLMENTSUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<ENROLLMENTSCreateWithoutTutorInput, ENROLLMENTSUncheckedCreateWithoutTutorInput> | ENROLLMENTSCreateWithoutTutorInput[] | ENROLLMENTSUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutTutorInput | ENROLLMENTSCreateOrConnectWithoutTutorInput[]
    createMany?: ENROLLMENTSCreateManyTutorInputEnvelope
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
  }

  export type STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutTutorInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutTutorInput> | STUDY_BUDDY_GROUPSCreateWithoutTutorInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutTutorInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutTutorInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyTutorInputEnvelope
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
  }

  export type TUTORING_SESSIONUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutTutorInput, TUTORING_SESSIONUncheckedCreateWithoutTutorInput> | TUTORING_SESSIONCreateWithoutTutorInput[] | TUTORING_SESSIONUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutTutorInput | TUTORING_SESSIONCreateOrConnectWithoutTutorInput[]
    createMany?: TUTORING_SESSIONCreateManyTutorInputEnvelope
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
  }

  export type TUTOR_AVAILABILITYUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<TUTOR_AVAILABILITYCreateWithoutTutorInput, TUTOR_AVAILABILITYUncheckedCreateWithoutTutorInput> | TUTOR_AVAILABILITYCreateWithoutTutorInput[] | TUTOR_AVAILABILITYUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTOR_AVAILABILITYCreateOrConnectWithoutTutorInput | TUTOR_AVAILABILITYCreateOrConnectWithoutTutorInput[]
    createMany?: TUTOR_AVAILABILITYCreateManyTutorInputEnvelope
    connect?: TUTOR_AVAILABILITYWhereUniqueInput | TUTOR_AVAILABILITYWhereUniqueInput[]
  }

  export type TUTOR_COURSEUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<TUTOR_COURSECreateWithoutTutorInput, TUTOR_COURSEUncheckedCreateWithoutTutorInput> | TUTOR_COURSECreateWithoutTutorInput[] | TUTOR_COURSEUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTOR_COURSECreateOrConnectWithoutTutorInput | TUTOR_COURSECreateOrConnectWithoutTutorInput[]
    createMany?: TUTOR_COURSECreateManyTutorInputEnvelope
    connect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
  }

  export type ENROLLMENTSUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ENROLLMENTSCreateWithoutTutorInput, ENROLLMENTSUncheckedCreateWithoutTutorInput> | ENROLLMENTSCreateWithoutTutorInput[] | ENROLLMENTSUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutTutorInput | ENROLLMENTSCreateOrConnectWithoutTutorInput[]
    upsert?: ENROLLMENTSUpsertWithWhereUniqueWithoutTutorInput | ENROLLMENTSUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ENROLLMENTSCreateManyTutorInputEnvelope
    set?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    disconnect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    delete?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    update?: ENROLLMENTSUpdateWithWhereUniqueWithoutTutorInput | ENROLLMENTSUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ENROLLMENTSUpdateManyWithWhereWithoutTutorInput | ENROLLMENTSUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ENROLLMENTSScalarWhereInput | ENROLLMENTSScalarWhereInput[]
  }

  export type STUDY_BUDDY_GROUPSUpdateManyWithoutTutorNestedInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutTutorInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutTutorInput> | STUDY_BUDDY_GROUPSCreateWithoutTutorInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutTutorInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutTutorInput[]
    upsert?: STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutTutorInput | STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyTutorInputEnvelope
    set?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    disconnect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    delete?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    update?: STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutTutorInput | STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutTutorInput | STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: STUDY_BUDDY_GROUPSScalarWhereInput | STUDY_BUDDY_GROUPSScalarWhereInput[]
  }

  export type TUTORING_SESSIONUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutTutorInput, TUTORING_SESSIONUncheckedCreateWithoutTutorInput> | TUTORING_SESSIONCreateWithoutTutorInput[] | TUTORING_SESSIONUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutTutorInput | TUTORING_SESSIONCreateOrConnectWithoutTutorInput[]
    upsert?: TUTORING_SESSIONUpsertWithWhereUniqueWithoutTutorInput | TUTORING_SESSIONUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TUTORING_SESSIONCreateManyTutorInputEnvelope
    set?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    disconnect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    delete?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    update?: TUTORING_SESSIONUpdateWithWhereUniqueWithoutTutorInput | TUTORING_SESSIONUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TUTORING_SESSIONUpdateManyWithWhereWithoutTutorInput | TUTORING_SESSIONUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TUTORING_SESSIONScalarWhereInput | TUTORING_SESSIONScalarWhereInput[]
  }

  export type TUTOR_AVAILABILITYUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TUTOR_AVAILABILITYCreateWithoutTutorInput, TUTOR_AVAILABILITYUncheckedCreateWithoutTutorInput> | TUTOR_AVAILABILITYCreateWithoutTutorInput[] | TUTOR_AVAILABILITYUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTOR_AVAILABILITYCreateOrConnectWithoutTutorInput | TUTOR_AVAILABILITYCreateOrConnectWithoutTutorInput[]
    upsert?: TUTOR_AVAILABILITYUpsertWithWhereUniqueWithoutTutorInput | TUTOR_AVAILABILITYUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TUTOR_AVAILABILITYCreateManyTutorInputEnvelope
    set?: TUTOR_AVAILABILITYWhereUniqueInput | TUTOR_AVAILABILITYWhereUniqueInput[]
    disconnect?: TUTOR_AVAILABILITYWhereUniqueInput | TUTOR_AVAILABILITYWhereUniqueInput[]
    delete?: TUTOR_AVAILABILITYWhereUniqueInput | TUTOR_AVAILABILITYWhereUniqueInput[]
    connect?: TUTOR_AVAILABILITYWhereUniqueInput | TUTOR_AVAILABILITYWhereUniqueInput[]
    update?: TUTOR_AVAILABILITYUpdateWithWhereUniqueWithoutTutorInput | TUTOR_AVAILABILITYUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TUTOR_AVAILABILITYUpdateManyWithWhereWithoutTutorInput | TUTOR_AVAILABILITYUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TUTOR_AVAILABILITYScalarWhereInput | TUTOR_AVAILABILITYScalarWhereInput[]
  }

  export type TUTOR_COURSEUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TUTOR_COURSECreateWithoutTutorInput, TUTOR_COURSEUncheckedCreateWithoutTutorInput> | TUTOR_COURSECreateWithoutTutorInput[] | TUTOR_COURSEUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTOR_COURSECreateOrConnectWithoutTutorInput | TUTOR_COURSECreateOrConnectWithoutTutorInput[]
    upsert?: TUTOR_COURSEUpsertWithWhereUniqueWithoutTutorInput | TUTOR_COURSEUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TUTOR_COURSECreateManyTutorInputEnvelope
    set?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    disconnect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    delete?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    connect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    update?: TUTOR_COURSEUpdateWithWhereUniqueWithoutTutorInput | TUTOR_COURSEUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TUTOR_COURSEUpdateManyWithWhereWithoutTutorInput | TUTOR_COURSEUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TUTOR_COURSEScalarWhereInput | TUTOR_COURSEScalarWhereInput[]
  }

  export type USERSUpdateOneRequiredWithoutTutorNestedInput = {
    create?: XOR<USERSCreateWithoutTutorInput, USERSUncheckedCreateWithoutTutorInput>
    connectOrCreate?: USERSCreateOrConnectWithoutTutorInput
    upsert?: USERSUpsertWithoutTutorInput
    connect?: USERSWhereUniqueInput
    update?: XOR<XOR<USERSUpdateToOneWithWhereWithoutTutorInput, USERSUpdateWithoutTutorInput>, USERSUncheckedUpdateWithoutTutorInput>
  }

  export type ENROLLMENTSUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ENROLLMENTSCreateWithoutTutorInput, ENROLLMENTSUncheckedCreateWithoutTutorInput> | ENROLLMENTSCreateWithoutTutorInput[] | ENROLLMENTSUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutTutorInput | ENROLLMENTSCreateOrConnectWithoutTutorInput[]
    upsert?: ENROLLMENTSUpsertWithWhereUniqueWithoutTutorInput | ENROLLMENTSUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ENROLLMENTSCreateManyTutorInputEnvelope
    set?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    disconnect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    delete?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    update?: ENROLLMENTSUpdateWithWhereUniqueWithoutTutorInput | ENROLLMENTSUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ENROLLMENTSUpdateManyWithWhereWithoutTutorInput | ENROLLMENTSUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ENROLLMENTSScalarWhereInput | ENROLLMENTSScalarWhereInput[]
  }

  export type STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutTutorInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutTutorInput> | STUDY_BUDDY_GROUPSCreateWithoutTutorInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutTutorInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutTutorInput[]
    upsert?: STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutTutorInput | STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyTutorInputEnvelope
    set?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    disconnect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    delete?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    update?: STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutTutorInput | STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutTutorInput | STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: STUDY_BUDDY_GROUPSScalarWhereInput | STUDY_BUDDY_GROUPSScalarWhereInput[]
  }

  export type TUTORING_SESSIONUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutTutorInput, TUTORING_SESSIONUncheckedCreateWithoutTutorInput> | TUTORING_SESSIONCreateWithoutTutorInput[] | TUTORING_SESSIONUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutTutorInput | TUTORING_SESSIONCreateOrConnectWithoutTutorInput[]
    upsert?: TUTORING_SESSIONUpsertWithWhereUniqueWithoutTutorInput | TUTORING_SESSIONUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TUTORING_SESSIONCreateManyTutorInputEnvelope
    set?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    disconnect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    delete?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    update?: TUTORING_SESSIONUpdateWithWhereUniqueWithoutTutorInput | TUTORING_SESSIONUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TUTORING_SESSIONUpdateManyWithWhereWithoutTutorInput | TUTORING_SESSIONUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TUTORING_SESSIONScalarWhereInput | TUTORING_SESSIONScalarWhereInput[]
  }

  export type TUTOR_AVAILABILITYUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TUTOR_AVAILABILITYCreateWithoutTutorInput, TUTOR_AVAILABILITYUncheckedCreateWithoutTutorInput> | TUTOR_AVAILABILITYCreateWithoutTutorInput[] | TUTOR_AVAILABILITYUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTOR_AVAILABILITYCreateOrConnectWithoutTutorInput | TUTOR_AVAILABILITYCreateOrConnectWithoutTutorInput[]
    upsert?: TUTOR_AVAILABILITYUpsertWithWhereUniqueWithoutTutorInput | TUTOR_AVAILABILITYUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TUTOR_AVAILABILITYCreateManyTutorInputEnvelope
    set?: TUTOR_AVAILABILITYWhereUniqueInput | TUTOR_AVAILABILITYWhereUniqueInput[]
    disconnect?: TUTOR_AVAILABILITYWhereUniqueInput | TUTOR_AVAILABILITYWhereUniqueInput[]
    delete?: TUTOR_AVAILABILITYWhereUniqueInput | TUTOR_AVAILABILITYWhereUniqueInput[]
    connect?: TUTOR_AVAILABILITYWhereUniqueInput | TUTOR_AVAILABILITYWhereUniqueInput[]
    update?: TUTOR_AVAILABILITYUpdateWithWhereUniqueWithoutTutorInput | TUTOR_AVAILABILITYUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TUTOR_AVAILABILITYUpdateManyWithWhereWithoutTutorInput | TUTOR_AVAILABILITYUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TUTOR_AVAILABILITYScalarWhereInput | TUTOR_AVAILABILITYScalarWhereInput[]
  }

  export type TUTOR_COURSEUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TUTOR_COURSECreateWithoutTutorInput, TUTOR_COURSEUncheckedCreateWithoutTutorInput> | TUTOR_COURSECreateWithoutTutorInput[] | TUTOR_COURSEUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TUTOR_COURSECreateOrConnectWithoutTutorInput | TUTOR_COURSECreateOrConnectWithoutTutorInput[]
    upsert?: TUTOR_COURSEUpsertWithWhereUniqueWithoutTutorInput | TUTOR_COURSEUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TUTOR_COURSECreateManyTutorInputEnvelope
    set?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    disconnect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    delete?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    connect?: TUTOR_COURSEWhereUniqueInput | TUTOR_COURSEWhereUniqueInput[]
    update?: TUTOR_COURSEUpdateWithWhereUniqueWithoutTutorInput | TUTOR_COURSEUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TUTOR_COURSEUpdateManyWithWhereWithoutTutorInput | TUTOR_COURSEUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TUTOR_COURSEScalarWhereInput | TUTOR_COURSEScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutUSERSInput = {
    create?: XOR<AdminCreateWithoutUSERSInput, AdminUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUSERSInput
    connect?: AdminWhereUniqueInput
  }

  export type ENROLLMENTSCreateNestedManyWithoutUSERSInput = {
    create?: XOR<ENROLLMENTSCreateWithoutUSERSInput, ENROLLMENTSUncheckedCreateWithoutUSERSInput> | ENROLLMENTSCreateWithoutUSERSInput[] | ENROLLMENTSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutUSERSInput | ENROLLMENTSCreateOrConnectWithoutUSERSInput[]
    createMany?: ENROLLMENTSCreateManyUSERSInputEnvelope
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
  }

  export type STUDY_BUDDY_GROUPSCreateNestedManyWithoutUSERSInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutUSERSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutUSERSInput> | STUDY_BUDDY_GROUPSCreateWithoutUSERSInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutUSERSInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutUSERSInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyUSERSInputEnvelope
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
  }

  export type StudentCreateNestedOneWithoutUSERSInput = {
    create?: XOR<StudentCreateWithoutUSERSInput, StudentUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUSERSInput
    connect?: StudentWhereUniqueInput
  }

  export type TUTORING_SESSIONCreateNestedManyWithoutUSERSInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutUSERSInput, TUTORING_SESSIONUncheckedCreateWithoutUSERSInput> | TUTORING_SESSIONCreateWithoutUSERSInput[] | TUTORING_SESSIONUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutUSERSInput | TUTORING_SESSIONCreateOrConnectWithoutUSERSInput[]
    createMany?: TUTORING_SESSIONCreateManyUSERSInputEnvelope
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
  }

  export type TutorCreateNestedOneWithoutUSERSInput = {
    create?: XOR<TutorCreateWithoutUSERSInput, TutorUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: TutorCreateOrConnectWithoutUSERSInput
    connect?: TutorWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUSERSInput = {
    create?: XOR<AdminCreateWithoutUSERSInput, AdminUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUSERSInput
    connect?: AdminWhereUniqueInput
  }

  export type ENROLLMENTSUncheckedCreateNestedManyWithoutUSERSInput = {
    create?: XOR<ENROLLMENTSCreateWithoutUSERSInput, ENROLLMENTSUncheckedCreateWithoutUSERSInput> | ENROLLMENTSCreateWithoutUSERSInput[] | ENROLLMENTSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutUSERSInput | ENROLLMENTSCreateOrConnectWithoutUSERSInput[]
    createMany?: ENROLLMENTSCreateManyUSERSInputEnvelope
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
  }

  export type STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutUSERSInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutUSERSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutUSERSInput> | STUDY_BUDDY_GROUPSCreateWithoutUSERSInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutUSERSInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutUSERSInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyUSERSInputEnvelope
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedOneWithoutUSERSInput = {
    create?: XOR<StudentCreateWithoutUSERSInput, StudentUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUSERSInput
    connect?: StudentWhereUniqueInput
  }

  export type TUTORING_SESSIONUncheckedCreateNestedManyWithoutUSERSInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutUSERSInput, TUTORING_SESSIONUncheckedCreateWithoutUSERSInput> | TUTORING_SESSIONCreateWithoutUSERSInput[] | TUTORING_SESSIONUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutUSERSInput | TUTORING_SESSIONCreateOrConnectWithoutUSERSInput[]
    createMany?: TUTORING_SESSIONCreateManyUSERSInputEnvelope
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
  }

  export type TutorUncheckedCreateNestedOneWithoutUSERSInput = {
    create?: XOR<TutorCreateWithoutUSERSInput, TutorUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: TutorCreateOrConnectWithoutUSERSInput
    connect?: TutorWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AdminUpdateOneWithoutUSERSNestedInput = {
    create?: XOR<AdminCreateWithoutUSERSInput, AdminUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUSERSInput
    upsert?: AdminUpsertWithoutUSERSInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUSERSInput, AdminUpdateWithoutUSERSInput>, AdminUncheckedUpdateWithoutUSERSInput>
  }

  export type ENROLLMENTSUpdateManyWithoutUSERSNestedInput = {
    create?: XOR<ENROLLMENTSCreateWithoutUSERSInput, ENROLLMENTSUncheckedCreateWithoutUSERSInput> | ENROLLMENTSCreateWithoutUSERSInput[] | ENROLLMENTSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutUSERSInput | ENROLLMENTSCreateOrConnectWithoutUSERSInput[]
    upsert?: ENROLLMENTSUpsertWithWhereUniqueWithoutUSERSInput | ENROLLMENTSUpsertWithWhereUniqueWithoutUSERSInput[]
    createMany?: ENROLLMENTSCreateManyUSERSInputEnvelope
    set?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    disconnect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    delete?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    update?: ENROLLMENTSUpdateWithWhereUniqueWithoutUSERSInput | ENROLLMENTSUpdateWithWhereUniqueWithoutUSERSInput[]
    updateMany?: ENROLLMENTSUpdateManyWithWhereWithoutUSERSInput | ENROLLMENTSUpdateManyWithWhereWithoutUSERSInput[]
    deleteMany?: ENROLLMENTSScalarWhereInput | ENROLLMENTSScalarWhereInput[]
  }

  export type STUDY_BUDDY_GROUPSUpdateManyWithoutUSERSNestedInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutUSERSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutUSERSInput> | STUDY_BUDDY_GROUPSCreateWithoutUSERSInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutUSERSInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutUSERSInput[]
    upsert?: STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutUSERSInput | STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutUSERSInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyUSERSInputEnvelope
    set?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    disconnect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    delete?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    update?: STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutUSERSInput | STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutUSERSInput[]
    updateMany?: STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutUSERSInput | STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutUSERSInput[]
    deleteMany?: STUDY_BUDDY_GROUPSScalarWhereInput | STUDY_BUDDY_GROUPSScalarWhereInput[]
  }

  export type StudentUpdateOneWithoutUSERSNestedInput = {
    create?: XOR<StudentCreateWithoutUSERSInput, StudentUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUSERSInput
    upsert?: StudentUpsertWithoutUSERSInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUSERSInput, StudentUpdateWithoutUSERSInput>, StudentUncheckedUpdateWithoutUSERSInput>
  }

  export type TUTORING_SESSIONUpdateManyWithoutUSERSNestedInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutUSERSInput, TUTORING_SESSIONUncheckedCreateWithoutUSERSInput> | TUTORING_SESSIONCreateWithoutUSERSInput[] | TUTORING_SESSIONUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutUSERSInput | TUTORING_SESSIONCreateOrConnectWithoutUSERSInput[]
    upsert?: TUTORING_SESSIONUpsertWithWhereUniqueWithoutUSERSInput | TUTORING_SESSIONUpsertWithWhereUniqueWithoutUSERSInput[]
    createMany?: TUTORING_SESSIONCreateManyUSERSInputEnvelope
    set?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    disconnect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    delete?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    update?: TUTORING_SESSIONUpdateWithWhereUniqueWithoutUSERSInput | TUTORING_SESSIONUpdateWithWhereUniqueWithoutUSERSInput[]
    updateMany?: TUTORING_SESSIONUpdateManyWithWhereWithoutUSERSInput | TUTORING_SESSIONUpdateManyWithWhereWithoutUSERSInput[]
    deleteMany?: TUTORING_SESSIONScalarWhereInput | TUTORING_SESSIONScalarWhereInput[]
  }

  export type TutorUpdateOneWithoutUSERSNestedInput = {
    create?: XOR<TutorCreateWithoutUSERSInput, TutorUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: TutorCreateOrConnectWithoutUSERSInput
    upsert?: TutorUpsertWithoutUSERSInput
    disconnect?: TutorWhereInput | boolean
    delete?: TutorWhereInput | boolean
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutUSERSInput, TutorUpdateWithoutUSERSInput>, TutorUncheckedUpdateWithoutUSERSInput>
  }

  export type AdminUncheckedUpdateOneWithoutUSERSNestedInput = {
    create?: XOR<AdminCreateWithoutUSERSInput, AdminUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUSERSInput
    upsert?: AdminUpsertWithoutUSERSInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUSERSInput, AdminUpdateWithoutUSERSInput>, AdminUncheckedUpdateWithoutUSERSInput>
  }

  export type ENROLLMENTSUncheckedUpdateManyWithoutUSERSNestedInput = {
    create?: XOR<ENROLLMENTSCreateWithoutUSERSInput, ENROLLMENTSUncheckedCreateWithoutUSERSInput> | ENROLLMENTSCreateWithoutUSERSInput[] | ENROLLMENTSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: ENROLLMENTSCreateOrConnectWithoutUSERSInput | ENROLLMENTSCreateOrConnectWithoutUSERSInput[]
    upsert?: ENROLLMENTSUpsertWithWhereUniqueWithoutUSERSInput | ENROLLMENTSUpsertWithWhereUniqueWithoutUSERSInput[]
    createMany?: ENROLLMENTSCreateManyUSERSInputEnvelope
    set?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    disconnect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    delete?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    connect?: ENROLLMENTSWhereUniqueInput | ENROLLMENTSWhereUniqueInput[]
    update?: ENROLLMENTSUpdateWithWhereUniqueWithoutUSERSInput | ENROLLMENTSUpdateWithWhereUniqueWithoutUSERSInput[]
    updateMany?: ENROLLMENTSUpdateManyWithWhereWithoutUSERSInput | ENROLLMENTSUpdateManyWithWhereWithoutUSERSInput[]
    deleteMany?: ENROLLMENTSScalarWhereInput | ENROLLMENTSScalarWhereInput[]
  }

  export type STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutUSERSNestedInput = {
    create?: XOR<STUDY_BUDDY_GROUPSCreateWithoutUSERSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutUSERSInput> | STUDY_BUDDY_GROUPSCreateWithoutUSERSInput[] | STUDY_BUDDY_GROUPSUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: STUDY_BUDDY_GROUPSCreateOrConnectWithoutUSERSInput | STUDY_BUDDY_GROUPSCreateOrConnectWithoutUSERSInput[]
    upsert?: STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutUSERSInput | STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutUSERSInput[]
    createMany?: STUDY_BUDDY_GROUPSCreateManyUSERSInputEnvelope
    set?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    disconnect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    delete?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    connect?: STUDY_BUDDY_GROUPSWhereUniqueInput | STUDY_BUDDY_GROUPSWhereUniqueInput[]
    update?: STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutUSERSInput | STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutUSERSInput[]
    updateMany?: STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutUSERSInput | STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutUSERSInput[]
    deleteMany?: STUDY_BUDDY_GROUPSScalarWhereInput | STUDY_BUDDY_GROUPSScalarWhereInput[]
  }

  export type StudentUncheckedUpdateOneWithoutUSERSNestedInput = {
    create?: XOR<StudentCreateWithoutUSERSInput, StudentUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUSERSInput
    upsert?: StudentUpsertWithoutUSERSInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUSERSInput, StudentUpdateWithoutUSERSInput>, StudentUncheckedUpdateWithoutUSERSInput>
  }

  export type TUTORING_SESSIONUncheckedUpdateManyWithoutUSERSNestedInput = {
    create?: XOR<TUTORING_SESSIONCreateWithoutUSERSInput, TUTORING_SESSIONUncheckedCreateWithoutUSERSInput> | TUTORING_SESSIONCreateWithoutUSERSInput[] | TUTORING_SESSIONUncheckedCreateWithoutUSERSInput[]
    connectOrCreate?: TUTORING_SESSIONCreateOrConnectWithoutUSERSInput | TUTORING_SESSIONCreateOrConnectWithoutUSERSInput[]
    upsert?: TUTORING_SESSIONUpsertWithWhereUniqueWithoutUSERSInput | TUTORING_SESSIONUpsertWithWhereUniqueWithoutUSERSInput[]
    createMany?: TUTORING_SESSIONCreateManyUSERSInputEnvelope
    set?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    disconnect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    delete?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    connect?: TUTORING_SESSIONWhereUniqueInput | TUTORING_SESSIONWhereUniqueInput[]
    update?: TUTORING_SESSIONUpdateWithWhereUniqueWithoutUSERSInput | TUTORING_SESSIONUpdateWithWhereUniqueWithoutUSERSInput[]
    updateMany?: TUTORING_SESSIONUpdateManyWithWhereWithoutUSERSInput | TUTORING_SESSIONUpdateManyWithWhereWithoutUSERSInput[]
    deleteMany?: TUTORING_SESSIONScalarWhereInput | TUTORING_SESSIONScalarWhereInput[]
  }

  export type TutorUncheckedUpdateOneWithoutUSERSNestedInput = {
    create?: XOR<TutorCreateWithoutUSERSInput, TutorUncheckedCreateWithoutUSERSInput>
    connectOrCreate?: TutorCreateOrConnectWithoutUSERSInput
    upsert?: TutorUpsertWithoutUSERSInput
    disconnect?: TutorWhereInput | boolean
    delete?: TutorWhereInput | boolean
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutUSERSInput, TutorUpdateWithoutUSERSInput>, TutorUncheckedUpdateWithoutUSERSInput>
  }

  export type TutorCreateNestedOneWithoutTUTOR_COURSEInput = {
    create?: XOR<TutorCreateWithoutTUTOR_COURSEInput, TutorUncheckedCreateWithoutTUTOR_COURSEInput>
    connectOrCreate?: TutorCreateOrConnectWithoutTUTOR_COURSEInput
    connect?: TutorWhereUniqueInput
  }

  export type COURSESCreateNestedOneWithoutTUTOR_COURSEInput = {
    create?: XOR<COURSESCreateWithoutTUTOR_COURSEInput, COURSESUncheckedCreateWithoutTUTOR_COURSEInput>
    connectOrCreate?: COURSESCreateOrConnectWithoutTUTOR_COURSEInput
    connect?: COURSESWhereUniqueInput
  }

  export type TutorUpdateOneRequiredWithoutTUTOR_COURSENestedInput = {
    create?: XOR<TutorCreateWithoutTUTOR_COURSEInput, TutorUncheckedCreateWithoutTUTOR_COURSEInput>
    connectOrCreate?: TutorCreateOrConnectWithoutTUTOR_COURSEInput
    upsert?: TutorUpsertWithoutTUTOR_COURSEInput
    connect?: TutorWhereUniqueInput
    update?: XOR<XOR<TutorUpdateToOneWithWhereWithoutTUTOR_COURSEInput, TutorUpdateWithoutTUTOR_COURSEInput>, TutorUncheckedUpdateWithoutTUTOR_COURSEInput>
  }

  export type COURSESUpdateOneRequiredWithoutTUTOR_COURSENestedInput = {
    create?: XOR<COURSESCreateWithoutTUTOR_COURSEInput, COURSESUncheckedCreateWithoutTUTOR_COURSEInput>
    connectOrCreate?: COURSESCreateOrConnectWithoutTUTOR_COURSEInput
    upsert?: COURSESUpsertWithoutTUTOR_COURSEInput
    connect?: COURSESWhereUniqueInput
    update?: XOR<XOR<COURSESUpdateToOneWithWhereWithoutTUTOR_COURSEInput, COURSESUpdateWithoutTUTOR_COURSEInput>, COURSESUncheckedUpdateWithoutTUTOR_COURSEInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type USERSCreateWithoutAdminInput = {
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutUSERSInput
    Student?: StudentCreateNestedOneWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutUSERSInput
    Tutor?: TutorCreateNestedOneWithoutUSERSInput
  }

  export type USERSUncheckedCreateWithoutAdminInput = {
    User_ID?: number
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutUSERSInput
    Student?: StudentUncheckedCreateNestedOneWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutUSERSInput
    Tutor?: TutorUncheckedCreateNestedOneWithoutUSERSInput
  }

  export type USERSCreateOrConnectWithoutAdminInput = {
    where: USERSWhereUniqueInput
    create: XOR<USERSCreateWithoutAdminInput, USERSUncheckedCreateWithoutAdminInput>
  }

  export type SCHEDULECreateWithoutAdminInput = {
    Has_Worked?: boolean | null
    TUTOR_AVAILABILITY: TUTOR_AVAILABILITYCreateNestedOneWithoutSCHEDULEInput
  }

  export type SCHEDULEUncheckedCreateWithoutAdminInput = {
    Schedule_ID?: number
    Availability_ID: number
    Has_Worked?: boolean | null
  }

  export type SCHEDULECreateOrConnectWithoutAdminInput = {
    where: SCHEDULEWhereUniqueInput
    create: XOR<SCHEDULECreateWithoutAdminInput, SCHEDULEUncheckedCreateWithoutAdminInput>
  }

  export type SCHEDULECreateManyAdminInputEnvelope = {
    data: SCHEDULECreateManyAdminInput | SCHEDULECreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type USERSUpsertWithoutAdminInput = {
    update: XOR<USERSUpdateWithoutAdminInput, USERSUncheckedUpdateWithoutAdminInput>
    create: XOR<USERSCreateWithoutAdminInput, USERSUncheckedCreateWithoutAdminInput>
    where?: USERSWhereInput
  }

  export type USERSUpdateToOneWithWhereWithoutAdminInput = {
    where?: USERSWhereInput
    data: XOR<USERSUpdateWithoutAdminInput, USERSUncheckedUpdateWithoutAdminInput>
  }

  export type USERSUpdateWithoutAdminInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutUSERSNestedInput
    Student?: StudentUpdateOneWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutUSERSNestedInput
    Tutor?: TutorUpdateOneWithoutUSERSNestedInput
  }

  export type USERSUncheckedUpdateWithoutAdminInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutUSERSNestedInput
    Student?: StudentUncheckedUpdateOneWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutUSERSNestedInput
    Tutor?: TutorUncheckedUpdateOneWithoutUSERSNestedInput
  }

  export type SCHEDULEUpsertWithWhereUniqueWithoutAdminInput = {
    where: SCHEDULEWhereUniqueInput
    update: XOR<SCHEDULEUpdateWithoutAdminInput, SCHEDULEUncheckedUpdateWithoutAdminInput>
    create: XOR<SCHEDULECreateWithoutAdminInput, SCHEDULEUncheckedCreateWithoutAdminInput>
  }

  export type SCHEDULEUpdateWithWhereUniqueWithoutAdminInput = {
    where: SCHEDULEWhereUniqueInput
    data: XOR<SCHEDULEUpdateWithoutAdminInput, SCHEDULEUncheckedUpdateWithoutAdminInput>
  }

  export type SCHEDULEUpdateManyWithWhereWithoutAdminInput = {
    where: SCHEDULEScalarWhereInput
    data: XOR<SCHEDULEUpdateManyMutationInput, SCHEDULEUncheckedUpdateManyWithoutAdminInput>
  }

  export type SCHEDULEScalarWhereInput = {
    AND?: SCHEDULEScalarWhereInput | SCHEDULEScalarWhereInput[]
    OR?: SCHEDULEScalarWhereInput[]
    NOT?: SCHEDULEScalarWhereInput | SCHEDULEScalarWhereInput[]
    Schedule_ID?: IntFilter<"SCHEDULE"> | number
    Admin_ID?: IntFilter<"SCHEDULE"> | number
    Availability_ID?: IntFilter<"SCHEDULE"> | number
    Has_Worked?: BoolNullableFilter<"SCHEDULE"> | boolean | null
  }

  export type ENROLLMENTSCreateWithoutCOURSESInput = {
    Total_Enrollment?: number | null
    USERS: USERSCreateNestedOneWithoutENROLLMENTSInput
    Tutor?: TutorCreateNestedOneWithoutENROLLMENTSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutENROLLMENTSInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSUncheckedCreateWithoutCOURSESInput = {
    Enrollment_ID?: number
    User_ID: number
    Tutor_ID?: number | null
    Total_Enrollment?: number | null
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutENROLLMENTSInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSCreateOrConnectWithoutCOURSESInput = {
    where: ENROLLMENTSWhereUniqueInput
    create: XOR<ENROLLMENTSCreateWithoutCOURSESInput, ENROLLMENTSUncheckedCreateWithoutCOURSESInput>
  }

  export type ENROLLMENTSCreateManyCOURSESInputEnvelope = {
    data: ENROLLMENTSCreateManyCOURSESInput | ENROLLMENTSCreateManyCOURSESInput[]
    skipDuplicates?: boolean
  }

  export type TUTOR_COURSECreateWithoutCOURSESInput = {
    Tutor: TutorCreateNestedOneWithoutTUTOR_COURSEInput
  }

  export type TUTOR_COURSEUncheckedCreateWithoutCOURSESInput = {
    TutorCourseID?: number
    Tutor_ID: number
  }

  export type TUTOR_COURSECreateOrConnectWithoutCOURSESInput = {
    where: TUTOR_COURSEWhereUniqueInput
    create: XOR<TUTOR_COURSECreateWithoutCOURSESInput, TUTOR_COURSEUncheckedCreateWithoutCOURSESInput>
  }

  export type TUTOR_COURSECreateManyCOURSESInputEnvelope = {
    data: TUTOR_COURSECreateManyCOURSESInput | TUTOR_COURSECreateManyCOURSESInput[]
    skipDuplicates?: boolean
  }

  export type ENROLLMENTSUpsertWithWhereUniqueWithoutCOURSESInput = {
    where: ENROLLMENTSWhereUniqueInput
    update: XOR<ENROLLMENTSUpdateWithoutCOURSESInput, ENROLLMENTSUncheckedUpdateWithoutCOURSESInput>
    create: XOR<ENROLLMENTSCreateWithoutCOURSESInput, ENROLLMENTSUncheckedCreateWithoutCOURSESInput>
  }

  export type ENROLLMENTSUpdateWithWhereUniqueWithoutCOURSESInput = {
    where: ENROLLMENTSWhereUniqueInput
    data: XOR<ENROLLMENTSUpdateWithoutCOURSESInput, ENROLLMENTSUncheckedUpdateWithoutCOURSESInput>
  }

  export type ENROLLMENTSUpdateManyWithWhereWithoutCOURSESInput = {
    where: ENROLLMENTSScalarWhereInput
    data: XOR<ENROLLMENTSUpdateManyMutationInput, ENROLLMENTSUncheckedUpdateManyWithoutCOURSESInput>
  }

  export type ENROLLMENTSScalarWhereInput = {
    AND?: ENROLLMENTSScalarWhereInput | ENROLLMENTSScalarWhereInput[]
    OR?: ENROLLMENTSScalarWhereInput[]
    NOT?: ENROLLMENTSScalarWhereInput | ENROLLMENTSScalarWhereInput[]
    Enrollment_ID?: IntFilter<"ENROLLMENTS"> | number
    User_ID?: IntFilter<"ENROLLMENTS"> | number
    Tutor_ID?: IntNullableFilter<"ENROLLMENTS"> | number | null
    Course_ID?: IntFilter<"ENROLLMENTS"> | number
    Total_Enrollment?: IntNullableFilter<"ENROLLMENTS"> | number | null
  }

  export type TUTOR_COURSEUpsertWithWhereUniqueWithoutCOURSESInput = {
    where: TUTOR_COURSEWhereUniqueInput
    update: XOR<TUTOR_COURSEUpdateWithoutCOURSESInput, TUTOR_COURSEUncheckedUpdateWithoutCOURSESInput>
    create: XOR<TUTOR_COURSECreateWithoutCOURSESInput, TUTOR_COURSEUncheckedCreateWithoutCOURSESInput>
  }

  export type TUTOR_COURSEUpdateWithWhereUniqueWithoutCOURSESInput = {
    where: TUTOR_COURSEWhereUniqueInput
    data: XOR<TUTOR_COURSEUpdateWithoutCOURSESInput, TUTOR_COURSEUncheckedUpdateWithoutCOURSESInput>
  }

  export type TUTOR_COURSEUpdateManyWithWhereWithoutCOURSESInput = {
    where: TUTOR_COURSEScalarWhereInput
    data: XOR<TUTOR_COURSEUpdateManyMutationInput, TUTOR_COURSEUncheckedUpdateManyWithoutCOURSESInput>
  }

  export type TUTOR_COURSEScalarWhereInput = {
    AND?: TUTOR_COURSEScalarWhereInput | TUTOR_COURSEScalarWhereInput[]
    OR?: TUTOR_COURSEScalarWhereInput[]
    NOT?: TUTOR_COURSEScalarWhereInput | TUTOR_COURSEScalarWhereInput[]
    TutorCourseID?: IntFilter<"TUTOR_COURSE"> | number
    Tutor_ID?: IntFilter<"TUTOR_COURSE"> | number
    Course_ID?: IntFilter<"TUTOR_COURSE"> | number
  }

  export type USERSCreateWithoutENROLLMENTSInput = {
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminCreateNestedOneWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutUSERSInput
    Student?: StudentCreateNestedOneWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutUSERSInput
    Tutor?: TutorCreateNestedOneWithoutUSERSInput
  }

  export type USERSUncheckedCreateWithoutENROLLMENTSInput = {
    User_ID?: number
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminUncheckedCreateNestedOneWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutUSERSInput
    Student?: StudentUncheckedCreateNestedOneWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutUSERSInput
    Tutor?: TutorUncheckedCreateNestedOneWithoutUSERSInput
  }

  export type USERSCreateOrConnectWithoutENROLLMENTSInput = {
    where: USERSWhereUniqueInput
    create: XOR<USERSCreateWithoutENROLLMENTSInput, USERSUncheckedCreateWithoutENROLLMENTSInput>
  }

  export type TutorCreateWithoutENROLLMENTSInput = {
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSECreateNestedManyWithoutTutorInput
    USERS: USERSCreateNestedOneWithoutTutorInput
  }

  export type TutorUncheckedCreateWithoutENROLLMENTSInput = {
    Tutor_ID?: number
    User_ID: number
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorCreateOrConnectWithoutENROLLMENTSInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutENROLLMENTSInput, TutorUncheckedCreateWithoutENROLLMENTSInput>
  }

  export type COURSESCreateWithoutENROLLMENTSInput = {
    Course_Number?: number | null
    Course_Section?: Decimal | DecimalJsLike | number | string | null
    Course_Title?: string | null
    Course_Instructor?: string | null
    Enrolled_Count?: number | null
    TUTOR_COURSE?: TUTOR_COURSECreateNestedManyWithoutCOURSESInput
  }

  export type COURSESUncheckedCreateWithoutENROLLMENTSInput = {
    Course_ID?: number
    Course_Number?: number | null
    Course_Section?: Decimal | DecimalJsLike | number | string | null
    Course_Title?: string | null
    Course_Instructor?: string | null
    Enrolled_Count?: number | null
    TUTOR_COURSE?: TUTOR_COURSEUncheckedCreateNestedManyWithoutCOURSESInput
  }

  export type COURSESCreateOrConnectWithoutENROLLMENTSInput = {
    where: COURSESWhereUniqueInput
    create: XOR<COURSESCreateWithoutENROLLMENTSInput, COURSESUncheckedCreateWithoutENROLLMENTSInput>
  }

  export type STUDY_BUDDY_GROUPSCreateWithoutENROLLMENTSInput = {
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
    USERS: USERSCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput
    Tutor?: TutorCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput
  }

  export type STUDY_BUDDY_GROUPSUncheckedCreateWithoutENROLLMENTSInput = {
    Group_ID?: number
    User_ID: number
    Tutor_ID?: number | null
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
  }

  export type STUDY_BUDDY_GROUPSCreateOrConnectWithoutENROLLMENTSInput = {
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
    create: XOR<STUDY_BUDDY_GROUPSCreateWithoutENROLLMENTSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutENROLLMENTSInput>
  }

  export type STUDY_BUDDY_GROUPSCreateManyENROLLMENTSInputEnvelope = {
    data: STUDY_BUDDY_GROUPSCreateManyENROLLMENTSInput | STUDY_BUDDY_GROUPSCreateManyENROLLMENTSInput[]
    skipDuplicates?: boolean
  }

  export type TUTORING_SESSIONCreateWithoutENROLLMENTSInput = {
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
    USERS: USERSCreateNestedOneWithoutTUTORING_SESSIONInput
    Tutor: TutorCreateNestedOneWithoutTUTORING_SESSIONInput
  }

  export type TUTORING_SESSIONUncheckedCreateWithoutENROLLMENTSInput = {
    Session_ID?: number
    User_ID: number
    Tutor_ID: number
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
  }

  export type TUTORING_SESSIONCreateOrConnectWithoutENROLLMENTSInput = {
    where: TUTORING_SESSIONWhereUniqueInput
    create: XOR<TUTORING_SESSIONCreateWithoutENROLLMENTSInput, TUTORING_SESSIONUncheckedCreateWithoutENROLLMENTSInput>
  }

  export type TUTORING_SESSIONCreateManyENROLLMENTSInputEnvelope = {
    data: TUTORING_SESSIONCreateManyENROLLMENTSInput | TUTORING_SESSIONCreateManyENROLLMENTSInput[]
    skipDuplicates?: boolean
  }

  export type USERSUpsertWithoutENROLLMENTSInput = {
    update: XOR<USERSUpdateWithoutENROLLMENTSInput, USERSUncheckedUpdateWithoutENROLLMENTSInput>
    create: XOR<USERSCreateWithoutENROLLMENTSInput, USERSUncheckedCreateWithoutENROLLMENTSInput>
    where?: USERSWhereInput
  }

  export type USERSUpdateToOneWithWhereWithoutENROLLMENTSInput = {
    where?: USERSWhereInput
    data: XOR<USERSUpdateWithoutENROLLMENTSInput, USERSUncheckedUpdateWithoutENROLLMENTSInput>
  }

  export type USERSUpdateWithoutENROLLMENTSInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateOneWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutUSERSNestedInput
    Student?: StudentUpdateOneWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutUSERSNestedInput
    Tutor?: TutorUpdateOneWithoutUSERSNestedInput
  }

  export type USERSUncheckedUpdateWithoutENROLLMENTSInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUncheckedUpdateOneWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutUSERSNestedInput
    Student?: StudentUncheckedUpdateOneWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutUSERSNestedInput
    Tutor?: TutorUncheckedUpdateOneWithoutUSERSNestedInput
  }

  export type TutorUpsertWithoutENROLLMENTSInput = {
    update: XOR<TutorUpdateWithoutENROLLMENTSInput, TutorUncheckedUpdateWithoutENROLLMENTSInput>
    create: XOR<TutorCreateWithoutENROLLMENTSInput, TutorUncheckedCreateWithoutENROLLMENTSInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutENROLLMENTSInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutENROLLMENTSInput, TutorUncheckedUpdateWithoutENROLLMENTSInput>
  }

  export type TutorUpdateWithoutENROLLMENTSInput = {
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUpdateManyWithoutTutorNestedInput
    USERS?: USERSUpdateOneRequiredWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateWithoutENROLLMENTSInput = {
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type COURSESUpsertWithoutENROLLMENTSInput = {
    update: XOR<COURSESUpdateWithoutENROLLMENTSInput, COURSESUncheckedUpdateWithoutENROLLMENTSInput>
    create: XOR<COURSESCreateWithoutENROLLMENTSInput, COURSESUncheckedCreateWithoutENROLLMENTSInput>
    where?: COURSESWhereInput
  }

  export type COURSESUpdateToOneWithWhereWithoutENROLLMENTSInput = {
    where?: COURSESWhereInput
    data: XOR<COURSESUpdateWithoutENROLLMENTSInput, COURSESUncheckedUpdateWithoutENROLLMENTSInput>
  }

  export type COURSESUpdateWithoutENROLLMENTSInput = {
    Course_Number?: NullableIntFieldUpdateOperationsInput | number | null
    Course_Section?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Course_Title?: NullableStringFieldUpdateOperationsInput | string | null
    Course_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Enrolled_Count?: NullableIntFieldUpdateOperationsInput | number | null
    TUTOR_COURSE?: TUTOR_COURSEUpdateManyWithoutCOURSESNestedInput
  }

  export type COURSESUncheckedUpdateWithoutENROLLMENTSInput = {
    Course_ID?: IntFieldUpdateOperationsInput | number
    Course_Number?: NullableIntFieldUpdateOperationsInput | number | null
    Course_Section?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Course_Title?: NullableStringFieldUpdateOperationsInput | string | null
    Course_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Enrolled_Count?: NullableIntFieldUpdateOperationsInput | number | null
    TUTOR_COURSE?: TUTOR_COURSEUncheckedUpdateManyWithoutCOURSESNestedInput
  }

  export type STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutENROLLMENTSInput = {
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
    update: XOR<STUDY_BUDDY_GROUPSUpdateWithoutENROLLMENTSInput, STUDY_BUDDY_GROUPSUncheckedUpdateWithoutENROLLMENTSInput>
    create: XOR<STUDY_BUDDY_GROUPSCreateWithoutENROLLMENTSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutENROLLMENTSInput>
  }

  export type STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutENROLLMENTSInput = {
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
    data: XOR<STUDY_BUDDY_GROUPSUpdateWithoutENROLLMENTSInput, STUDY_BUDDY_GROUPSUncheckedUpdateWithoutENROLLMENTSInput>
  }

  export type STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutENROLLMENTSInput = {
    where: STUDY_BUDDY_GROUPSScalarWhereInput
    data: XOR<STUDY_BUDDY_GROUPSUpdateManyMutationInput, STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutENROLLMENTSInput>
  }

  export type STUDY_BUDDY_GROUPSScalarWhereInput = {
    AND?: STUDY_BUDDY_GROUPSScalarWhereInput | STUDY_BUDDY_GROUPSScalarWhereInput[]
    OR?: STUDY_BUDDY_GROUPSScalarWhereInput[]
    NOT?: STUDY_BUDDY_GROUPSScalarWhereInput | STUDY_BUDDY_GROUPSScalarWhereInput[]
    Group_ID?: IntFilter<"STUDY_BUDDY_GROUPS"> | number
    User_ID?: IntFilter<"STUDY_BUDDY_GROUPS"> | number
    Tutor_ID?: IntNullableFilter<"STUDY_BUDDY_GROUPS"> | number | null
    Enrollment_ID?: IntFilter<"STUDY_BUDDY_GROUPS"> | number
    Is_Accepted?: BoolNullableFilter<"STUDY_BUDDY_GROUPS"> | boolean | null
    Has_Tutor?: BoolNullableFilter<"STUDY_BUDDY_GROUPS"> | boolean | null
    Group_Members?: IntNullableFilter<"STUDY_BUDDY_GROUPS"> | number | null
  }

  export type TUTORING_SESSIONUpsertWithWhereUniqueWithoutENROLLMENTSInput = {
    where: TUTORING_SESSIONWhereUniqueInput
    update: XOR<TUTORING_SESSIONUpdateWithoutENROLLMENTSInput, TUTORING_SESSIONUncheckedUpdateWithoutENROLLMENTSInput>
    create: XOR<TUTORING_SESSIONCreateWithoutENROLLMENTSInput, TUTORING_SESSIONUncheckedCreateWithoutENROLLMENTSInput>
  }

  export type TUTORING_SESSIONUpdateWithWhereUniqueWithoutENROLLMENTSInput = {
    where: TUTORING_SESSIONWhereUniqueInput
    data: XOR<TUTORING_SESSIONUpdateWithoutENROLLMENTSInput, TUTORING_SESSIONUncheckedUpdateWithoutENROLLMENTSInput>
  }

  export type TUTORING_SESSIONUpdateManyWithWhereWithoutENROLLMENTSInput = {
    where: TUTORING_SESSIONScalarWhereInput
    data: XOR<TUTORING_SESSIONUpdateManyMutationInput, TUTORING_SESSIONUncheckedUpdateManyWithoutENROLLMENTSInput>
  }

  export type TUTORING_SESSIONScalarWhereInput = {
    AND?: TUTORING_SESSIONScalarWhereInput | TUTORING_SESSIONScalarWhereInput[]
    OR?: TUTORING_SESSIONScalarWhereInput[]
    NOT?: TUTORING_SESSIONScalarWhereInput | TUTORING_SESSIONScalarWhereInput[]
    Session_ID?: IntFilter<"TUTORING_SESSION"> | number
    User_ID?: IntFilter<"TUTORING_SESSION"> | number
    Tutor_ID?: IntFilter<"TUTORING_SESSION"> | number
    Enrollment_ID?: IntFilter<"TUTORING_SESSION"> | number
    Session_Date?: DateTimeNullableFilter<"TUTORING_SESSION"> | Date | string | null
    Session_Time?: DateTimeNullableFilter<"TUTORING_SESSION"> | Date | string | null
    Session_Loc?: StringNullableFilter<"TUTORING_SESSION"> | string | null
    Students_Booked?: IntNullableFilter<"TUTORING_SESSION"> | number | null
    Session_Max?: IntNullableFilter<"TUTORING_SESSION"> | number | null
  }

  export type AdminCreateWithoutSCHEDULEInput = {
    USERS: USERSCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutSCHEDULEInput = {
    Admin_ID?: number
    User_ID: number
  }

  export type AdminCreateOrConnectWithoutSCHEDULEInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutSCHEDULEInput, AdminUncheckedCreateWithoutSCHEDULEInput>
  }

  export type TUTOR_AVAILABILITYCreateWithoutSCHEDULEInput = {
    Date_Requested?: Date | string | null
    Times_Requested?: Date | string | null
    Is_Approved?: boolean | null
    Tutor: TutorCreateNestedOneWithoutTUTOR_AVAILABILITYInput
  }

  export type TUTOR_AVAILABILITYUncheckedCreateWithoutSCHEDULEInput = {
    Availability_ID?: number
    Tutor_ID: number
    Date_Requested?: Date | string | null
    Times_Requested?: Date | string | null
    Is_Approved?: boolean | null
  }

  export type TUTOR_AVAILABILITYCreateOrConnectWithoutSCHEDULEInput = {
    where: TUTOR_AVAILABILITYWhereUniqueInput
    create: XOR<TUTOR_AVAILABILITYCreateWithoutSCHEDULEInput, TUTOR_AVAILABILITYUncheckedCreateWithoutSCHEDULEInput>
  }

  export type AdminUpsertWithoutSCHEDULEInput = {
    update: XOR<AdminUpdateWithoutSCHEDULEInput, AdminUncheckedUpdateWithoutSCHEDULEInput>
    create: XOR<AdminCreateWithoutSCHEDULEInput, AdminUncheckedCreateWithoutSCHEDULEInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutSCHEDULEInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutSCHEDULEInput, AdminUncheckedUpdateWithoutSCHEDULEInput>
  }

  export type AdminUpdateWithoutSCHEDULEInput = {
    USERS?: USERSUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutSCHEDULEInput = {
    Admin_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
  }

  export type TUTOR_AVAILABILITYUpsertWithoutSCHEDULEInput = {
    update: XOR<TUTOR_AVAILABILITYUpdateWithoutSCHEDULEInput, TUTOR_AVAILABILITYUncheckedUpdateWithoutSCHEDULEInput>
    create: XOR<TUTOR_AVAILABILITYCreateWithoutSCHEDULEInput, TUTOR_AVAILABILITYUncheckedCreateWithoutSCHEDULEInput>
    where?: TUTOR_AVAILABILITYWhereInput
  }

  export type TUTOR_AVAILABILITYUpdateToOneWithWhereWithoutSCHEDULEInput = {
    where?: TUTOR_AVAILABILITYWhereInput
    data: XOR<TUTOR_AVAILABILITYUpdateWithoutSCHEDULEInput, TUTOR_AVAILABILITYUncheckedUpdateWithoutSCHEDULEInput>
  }

  export type TUTOR_AVAILABILITYUpdateWithoutSCHEDULEInput = {
    Date_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Times_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Is_Approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tutor?: TutorUpdateOneRequiredWithoutTUTOR_AVAILABILITYNestedInput
  }

  export type TUTOR_AVAILABILITYUncheckedUpdateWithoutSCHEDULEInput = {
    Availability_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    Date_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Times_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Is_Approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type USERSCreateWithoutSTUDY_BUDDY_GROUPSInput = {
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminCreateNestedOneWithoutUSERSInput
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutUSERSInput
    Student?: StudentCreateNestedOneWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutUSERSInput
    Tutor?: TutorCreateNestedOneWithoutUSERSInput
  }

  export type USERSUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput = {
    User_ID?: number
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminUncheckedCreateNestedOneWithoutUSERSInput
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutUSERSInput
    Student?: StudentUncheckedCreateNestedOneWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutUSERSInput
    Tutor?: TutorUncheckedCreateNestedOneWithoutUSERSInput
  }

  export type USERSCreateOrConnectWithoutSTUDY_BUDDY_GROUPSInput = {
    where: USERSWhereUniqueInput
    create: XOR<USERSCreateWithoutSTUDY_BUDDY_GROUPSInput, USERSUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
  }

  export type TutorCreateWithoutSTUDY_BUDDY_GROUPSInput = {
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSECreateNestedManyWithoutTutorInput
    USERS: USERSCreateNestedOneWithoutTutorInput
  }

  export type TutorUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput = {
    Tutor_ID?: number
    User_ID: number
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorCreateOrConnectWithoutSTUDY_BUDDY_GROUPSInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutSTUDY_BUDDY_GROUPSInput, TutorUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
  }

  export type ENROLLMENTSCreateWithoutSTUDY_BUDDY_GROUPSInput = {
    Total_Enrollment?: number | null
    USERS: USERSCreateNestedOneWithoutENROLLMENTSInput
    Tutor?: TutorCreateNestedOneWithoutENROLLMENTSInput
    COURSES: COURSESCreateNestedOneWithoutENROLLMENTSInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput = {
    Enrollment_ID?: number
    User_ID: number
    Tutor_ID?: number | null
    Course_ID: number
    Total_Enrollment?: number | null
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSCreateOrConnectWithoutSTUDY_BUDDY_GROUPSInput = {
    where: ENROLLMENTSWhereUniqueInput
    create: XOR<ENROLLMENTSCreateWithoutSTUDY_BUDDY_GROUPSInput, ENROLLMENTSUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
  }

  export type USERSUpsertWithoutSTUDY_BUDDY_GROUPSInput = {
    update: XOR<USERSUpdateWithoutSTUDY_BUDDY_GROUPSInput, USERSUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput>
    create: XOR<USERSCreateWithoutSTUDY_BUDDY_GROUPSInput, USERSUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
    where?: USERSWhereInput
  }

  export type USERSUpdateToOneWithWhereWithoutSTUDY_BUDDY_GROUPSInput = {
    where?: USERSWhereInput
    data: XOR<USERSUpdateWithoutSTUDY_BUDDY_GROUPSInput, USERSUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput>
  }

  export type USERSUpdateWithoutSTUDY_BUDDY_GROUPSInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateOneWithoutUSERSNestedInput
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutUSERSNestedInput
    Student?: StudentUpdateOneWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutUSERSNestedInput
    Tutor?: TutorUpdateOneWithoutUSERSNestedInput
  }

  export type USERSUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUncheckedUpdateOneWithoutUSERSNestedInput
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutUSERSNestedInput
    Student?: StudentUncheckedUpdateOneWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutUSERSNestedInput
    Tutor?: TutorUncheckedUpdateOneWithoutUSERSNestedInput
  }

  export type TutorUpsertWithoutSTUDY_BUDDY_GROUPSInput = {
    update: XOR<TutorUpdateWithoutSTUDY_BUDDY_GROUPSInput, TutorUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput>
    create: XOR<TutorCreateWithoutSTUDY_BUDDY_GROUPSInput, TutorUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutSTUDY_BUDDY_GROUPSInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutSTUDY_BUDDY_GROUPSInput, TutorUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput>
  }

  export type TutorUpdateWithoutSTUDY_BUDDY_GROUPSInput = {
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUpdateManyWithoutTutorNestedInput
    USERS?: USERSUpdateOneRequiredWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput = {
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type ENROLLMENTSUpsertWithoutSTUDY_BUDDY_GROUPSInput = {
    update: XOR<ENROLLMENTSUpdateWithoutSTUDY_BUDDY_GROUPSInput, ENROLLMENTSUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput>
    create: XOR<ENROLLMENTSCreateWithoutSTUDY_BUDDY_GROUPSInput, ENROLLMENTSUncheckedCreateWithoutSTUDY_BUDDY_GROUPSInput>
    where?: ENROLLMENTSWhereInput
  }

  export type ENROLLMENTSUpdateToOneWithWhereWithoutSTUDY_BUDDY_GROUPSInput = {
    where?: ENROLLMENTSWhereInput
    data: XOR<ENROLLMENTSUpdateWithoutSTUDY_BUDDY_GROUPSInput, ENROLLMENTSUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput>
  }

  export type ENROLLMENTSUpdateWithoutSTUDY_BUDDY_GROUPSInput = {
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneRequiredWithoutENROLLMENTSNestedInput
    Tutor?: TutorUpdateOneWithoutENROLLMENTSNestedInput
    COURSES?: COURSESUpdateOneRequiredWithoutENROLLMENTSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type ENROLLMENTSUncheckedUpdateWithoutSTUDY_BUDDY_GROUPSInput = {
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Course_ID?: IntFieldUpdateOperationsInput | number
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type USERSCreateWithoutStudentInput = {
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminCreateNestedOneWithoutUSERSInput
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutUSERSInput
    Tutor?: TutorCreateNestedOneWithoutUSERSInput
  }

  export type USERSUncheckedCreateWithoutStudentInput = {
    User_ID?: number
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminUncheckedCreateNestedOneWithoutUSERSInput
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutUSERSInput
    Tutor?: TutorUncheckedCreateNestedOneWithoutUSERSInput
  }

  export type USERSCreateOrConnectWithoutStudentInput = {
    where: USERSWhereUniqueInput
    create: XOR<USERSCreateWithoutStudentInput, USERSUncheckedCreateWithoutStudentInput>
  }

  export type USERSUpsertWithoutStudentInput = {
    update: XOR<USERSUpdateWithoutStudentInput, USERSUncheckedUpdateWithoutStudentInput>
    create: XOR<USERSCreateWithoutStudentInput, USERSUncheckedCreateWithoutStudentInput>
    where?: USERSWhereInput
  }

  export type USERSUpdateToOneWithWhereWithoutStudentInput = {
    where?: USERSWhereInput
    data: XOR<USERSUpdateWithoutStudentInput, USERSUncheckedUpdateWithoutStudentInput>
  }

  export type USERSUpdateWithoutStudentInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateOneWithoutUSERSNestedInput
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutUSERSNestedInput
    Tutor?: TutorUpdateOneWithoutUSERSNestedInput
  }

  export type USERSUncheckedUpdateWithoutStudentInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUncheckedUpdateOneWithoutUSERSNestedInput
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutUSERSNestedInput
    Tutor?: TutorUncheckedUpdateOneWithoutUSERSNestedInput
  }

  export type USERSCreateWithoutTUTORING_SESSIONInput = {
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminCreateNestedOneWithoutUSERSInput
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutUSERSInput
    Student?: StudentCreateNestedOneWithoutUSERSInput
    Tutor?: TutorCreateNestedOneWithoutUSERSInput
  }

  export type USERSUncheckedCreateWithoutTUTORING_SESSIONInput = {
    User_ID?: number
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminUncheckedCreateNestedOneWithoutUSERSInput
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutUSERSInput
    Student?: StudentUncheckedCreateNestedOneWithoutUSERSInput
    Tutor?: TutorUncheckedCreateNestedOneWithoutUSERSInput
  }

  export type USERSCreateOrConnectWithoutTUTORING_SESSIONInput = {
    where: USERSWhereUniqueInput
    create: XOR<USERSCreateWithoutTUTORING_SESSIONInput, USERSUncheckedCreateWithoutTUTORING_SESSIONInput>
  }

  export type TutorCreateWithoutTUTORING_SESSIONInput = {
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutTutorInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSECreateNestedManyWithoutTutorInput
    USERS: USERSCreateNestedOneWithoutTutorInput
  }

  export type TutorUncheckedCreateWithoutTUTORING_SESSIONInput = {
    Tutor_ID?: number
    User_ID: number
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutTutorInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorCreateOrConnectWithoutTUTORING_SESSIONInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutTUTORING_SESSIONInput, TutorUncheckedCreateWithoutTUTORING_SESSIONInput>
  }

  export type ENROLLMENTSCreateWithoutTUTORING_SESSIONInput = {
    Total_Enrollment?: number | null
    USERS: USERSCreateNestedOneWithoutENROLLMENTSInput
    Tutor?: TutorCreateNestedOneWithoutENROLLMENTSInput
    COURSES: COURSESCreateNestedOneWithoutENROLLMENTSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSUncheckedCreateWithoutTUTORING_SESSIONInput = {
    Enrollment_ID?: number
    User_ID: number
    Tutor_ID?: number | null
    Course_ID: number
    Total_Enrollment?: number | null
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSCreateOrConnectWithoutTUTORING_SESSIONInput = {
    where: ENROLLMENTSWhereUniqueInput
    create: XOR<ENROLLMENTSCreateWithoutTUTORING_SESSIONInput, ENROLLMENTSUncheckedCreateWithoutTUTORING_SESSIONInput>
  }

  export type USERSUpsertWithoutTUTORING_SESSIONInput = {
    update: XOR<USERSUpdateWithoutTUTORING_SESSIONInput, USERSUncheckedUpdateWithoutTUTORING_SESSIONInput>
    create: XOR<USERSCreateWithoutTUTORING_SESSIONInput, USERSUncheckedCreateWithoutTUTORING_SESSIONInput>
    where?: USERSWhereInput
  }

  export type USERSUpdateToOneWithWhereWithoutTUTORING_SESSIONInput = {
    where?: USERSWhereInput
    data: XOR<USERSUpdateWithoutTUTORING_SESSIONInput, USERSUncheckedUpdateWithoutTUTORING_SESSIONInput>
  }

  export type USERSUpdateWithoutTUTORING_SESSIONInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateOneWithoutUSERSNestedInput
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutUSERSNestedInput
    Student?: StudentUpdateOneWithoutUSERSNestedInput
    Tutor?: TutorUpdateOneWithoutUSERSNestedInput
  }

  export type USERSUncheckedUpdateWithoutTUTORING_SESSIONInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUncheckedUpdateOneWithoutUSERSNestedInput
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutUSERSNestedInput
    Student?: StudentUncheckedUpdateOneWithoutUSERSNestedInput
    Tutor?: TutorUncheckedUpdateOneWithoutUSERSNestedInput
  }

  export type TutorUpsertWithoutTUTORING_SESSIONInput = {
    update: XOR<TutorUpdateWithoutTUTORING_SESSIONInput, TutorUncheckedUpdateWithoutTUTORING_SESSIONInput>
    create: XOR<TutorCreateWithoutTUTORING_SESSIONInput, TutorUncheckedCreateWithoutTUTORING_SESSIONInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutTUTORING_SESSIONInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutTUTORING_SESSIONInput, TutorUncheckedUpdateWithoutTUTORING_SESSIONInput>
  }

  export type TutorUpdateWithoutTUTORING_SESSIONInput = {
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutTutorNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUpdateManyWithoutTutorNestedInput
    USERS?: USERSUpdateOneRequiredWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateWithoutTUTORING_SESSIONInput = {
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutTutorNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type ENROLLMENTSUpsertWithoutTUTORING_SESSIONInput = {
    update: XOR<ENROLLMENTSUpdateWithoutTUTORING_SESSIONInput, ENROLLMENTSUncheckedUpdateWithoutTUTORING_SESSIONInput>
    create: XOR<ENROLLMENTSCreateWithoutTUTORING_SESSIONInput, ENROLLMENTSUncheckedCreateWithoutTUTORING_SESSIONInput>
    where?: ENROLLMENTSWhereInput
  }

  export type ENROLLMENTSUpdateToOneWithWhereWithoutTUTORING_SESSIONInput = {
    where?: ENROLLMENTSWhereInput
    data: XOR<ENROLLMENTSUpdateWithoutTUTORING_SESSIONInput, ENROLLMENTSUncheckedUpdateWithoutTUTORING_SESSIONInput>
  }

  export type ENROLLMENTSUpdateWithoutTUTORING_SESSIONInput = {
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneRequiredWithoutENROLLMENTSNestedInput
    Tutor?: TutorUpdateOneWithoutENROLLMENTSNestedInput
    COURSES?: COURSESUpdateOneRequiredWithoutENROLLMENTSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type ENROLLMENTSUncheckedUpdateWithoutTUTORING_SESSIONInput = {
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Course_ID?: IntFieldUpdateOperationsInput | number
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type SCHEDULECreateWithoutTUTOR_AVAILABILITYInput = {
    Has_Worked?: boolean | null
    Admin: AdminCreateNestedOneWithoutSCHEDULEInput
  }

  export type SCHEDULEUncheckedCreateWithoutTUTOR_AVAILABILITYInput = {
    Schedule_ID?: number
    Admin_ID: number
    Has_Worked?: boolean | null
  }

  export type SCHEDULECreateOrConnectWithoutTUTOR_AVAILABILITYInput = {
    where: SCHEDULEWhereUniqueInput
    create: XOR<SCHEDULECreateWithoutTUTOR_AVAILABILITYInput, SCHEDULEUncheckedCreateWithoutTUTOR_AVAILABILITYInput>
  }

  export type SCHEDULECreateManyTUTOR_AVAILABILITYInputEnvelope = {
    data: SCHEDULECreateManyTUTOR_AVAILABILITYInput | SCHEDULECreateManyTUTOR_AVAILABILITYInput[]
    skipDuplicates?: boolean
  }

  export type TutorCreateWithoutTUTOR_AVAILABILITYInput = {
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutTutorInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSECreateNestedManyWithoutTutorInput
    USERS: USERSCreateNestedOneWithoutTutorInput
  }

  export type TutorUncheckedCreateWithoutTUTOR_AVAILABILITYInput = {
    Tutor_ID?: number
    User_ID: number
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutTutorInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorCreateOrConnectWithoutTUTOR_AVAILABILITYInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutTUTOR_AVAILABILITYInput, TutorUncheckedCreateWithoutTUTOR_AVAILABILITYInput>
  }

  export type SCHEDULEUpsertWithWhereUniqueWithoutTUTOR_AVAILABILITYInput = {
    where: SCHEDULEWhereUniqueInput
    update: XOR<SCHEDULEUpdateWithoutTUTOR_AVAILABILITYInput, SCHEDULEUncheckedUpdateWithoutTUTOR_AVAILABILITYInput>
    create: XOR<SCHEDULECreateWithoutTUTOR_AVAILABILITYInput, SCHEDULEUncheckedCreateWithoutTUTOR_AVAILABILITYInput>
  }

  export type SCHEDULEUpdateWithWhereUniqueWithoutTUTOR_AVAILABILITYInput = {
    where: SCHEDULEWhereUniqueInput
    data: XOR<SCHEDULEUpdateWithoutTUTOR_AVAILABILITYInput, SCHEDULEUncheckedUpdateWithoutTUTOR_AVAILABILITYInput>
  }

  export type SCHEDULEUpdateManyWithWhereWithoutTUTOR_AVAILABILITYInput = {
    where: SCHEDULEScalarWhereInput
    data: XOR<SCHEDULEUpdateManyMutationInput, SCHEDULEUncheckedUpdateManyWithoutTUTOR_AVAILABILITYInput>
  }

  export type TutorUpsertWithoutTUTOR_AVAILABILITYInput = {
    update: XOR<TutorUpdateWithoutTUTOR_AVAILABILITYInput, TutorUncheckedUpdateWithoutTUTOR_AVAILABILITYInput>
    create: XOR<TutorCreateWithoutTUTOR_AVAILABILITYInput, TutorUncheckedCreateWithoutTUTOR_AVAILABILITYInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutTUTOR_AVAILABILITYInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutTUTOR_AVAILABILITYInput, TutorUncheckedUpdateWithoutTUTOR_AVAILABILITYInput>
  }

  export type TutorUpdateWithoutTUTOR_AVAILABILITYInput = {
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutTutorNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUpdateManyWithoutTutorNestedInput
    USERS?: USERSUpdateOneRequiredWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateWithoutTUTOR_AVAILABILITYInput = {
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutTutorNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type ENROLLMENTSCreateWithoutTutorInput = {
    Total_Enrollment?: number | null
    USERS: USERSCreateNestedOneWithoutENROLLMENTSInput
    COURSES: COURSESCreateNestedOneWithoutENROLLMENTSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutENROLLMENTSInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSUncheckedCreateWithoutTutorInput = {
    Enrollment_ID?: number
    User_ID: number
    Course_ID: number
    Total_Enrollment?: number | null
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutENROLLMENTSInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSCreateOrConnectWithoutTutorInput = {
    where: ENROLLMENTSWhereUniqueInput
    create: XOR<ENROLLMENTSCreateWithoutTutorInput, ENROLLMENTSUncheckedCreateWithoutTutorInput>
  }

  export type ENROLLMENTSCreateManyTutorInputEnvelope = {
    data: ENROLLMENTSCreateManyTutorInput | ENROLLMENTSCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type STUDY_BUDDY_GROUPSCreateWithoutTutorInput = {
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
    USERS: USERSCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput
    ENROLLMENTS: ENROLLMENTSCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput
  }

  export type STUDY_BUDDY_GROUPSUncheckedCreateWithoutTutorInput = {
    Group_ID?: number
    User_ID: number
    Enrollment_ID: number
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
  }

  export type STUDY_BUDDY_GROUPSCreateOrConnectWithoutTutorInput = {
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
    create: XOR<STUDY_BUDDY_GROUPSCreateWithoutTutorInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutTutorInput>
  }

  export type STUDY_BUDDY_GROUPSCreateManyTutorInputEnvelope = {
    data: STUDY_BUDDY_GROUPSCreateManyTutorInput | STUDY_BUDDY_GROUPSCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type TUTORING_SESSIONCreateWithoutTutorInput = {
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
    USERS: USERSCreateNestedOneWithoutTUTORING_SESSIONInput
    ENROLLMENTS: ENROLLMENTSCreateNestedOneWithoutTUTORING_SESSIONInput
  }

  export type TUTORING_SESSIONUncheckedCreateWithoutTutorInput = {
    Session_ID?: number
    User_ID: number
    Enrollment_ID: number
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
  }

  export type TUTORING_SESSIONCreateOrConnectWithoutTutorInput = {
    where: TUTORING_SESSIONWhereUniqueInput
    create: XOR<TUTORING_SESSIONCreateWithoutTutorInput, TUTORING_SESSIONUncheckedCreateWithoutTutorInput>
  }

  export type TUTORING_SESSIONCreateManyTutorInputEnvelope = {
    data: TUTORING_SESSIONCreateManyTutorInput | TUTORING_SESSIONCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type TUTOR_AVAILABILITYCreateWithoutTutorInput = {
    Date_Requested?: Date | string | null
    Times_Requested?: Date | string | null
    Is_Approved?: boolean | null
    SCHEDULE?: SCHEDULECreateNestedManyWithoutTUTOR_AVAILABILITYInput
  }

  export type TUTOR_AVAILABILITYUncheckedCreateWithoutTutorInput = {
    Availability_ID?: number
    Date_Requested?: Date | string | null
    Times_Requested?: Date | string | null
    Is_Approved?: boolean | null
    SCHEDULE?: SCHEDULEUncheckedCreateNestedManyWithoutTUTOR_AVAILABILITYInput
  }

  export type TUTOR_AVAILABILITYCreateOrConnectWithoutTutorInput = {
    where: TUTOR_AVAILABILITYWhereUniqueInput
    create: XOR<TUTOR_AVAILABILITYCreateWithoutTutorInput, TUTOR_AVAILABILITYUncheckedCreateWithoutTutorInput>
  }

  export type TUTOR_AVAILABILITYCreateManyTutorInputEnvelope = {
    data: TUTOR_AVAILABILITYCreateManyTutorInput | TUTOR_AVAILABILITYCreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type TUTOR_COURSECreateWithoutTutorInput = {
    COURSES: COURSESCreateNestedOneWithoutTUTOR_COURSEInput
  }

  export type TUTOR_COURSEUncheckedCreateWithoutTutorInput = {
    TutorCourseID?: number
    Course_ID: number
  }

  export type TUTOR_COURSECreateOrConnectWithoutTutorInput = {
    where: TUTOR_COURSEWhereUniqueInput
    create: XOR<TUTOR_COURSECreateWithoutTutorInput, TUTOR_COURSEUncheckedCreateWithoutTutorInput>
  }

  export type TUTOR_COURSECreateManyTutorInputEnvelope = {
    data: TUTOR_COURSECreateManyTutorInput | TUTOR_COURSECreateManyTutorInput[]
    skipDuplicates?: boolean
  }

  export type USERSCreateWithoutTutorInput = {
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminCreateNestedOneWithoutUSERSInput
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutUSERSInput
    Student?: StudentCreateNestedOneWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutUSERSInput
  }

  export type USERSUncheckedCreateWithoutTutorInput = {
    User_ID?: number
    Name: string
    Email: string
    Is_Admin?: boolean | null
    Is_Tutor?: boolean | null
    Is_Student?: boolean | null
    Admin?: AdminUncheckedCreateNestedOneWithoutUSERSInput
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutUSERSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutUSERSInput
    Student?: StudentUncheckedCreateNestedOneWithoutUSERSInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutUSERSInput
  }

  export type USERSCreateOrConnectWithoutTutorInput = {
    where: USERSWhereUniqueInput
    create: XOR<USERSCreateWithoutTutorInput, USERSUncheckedCreateWithoutTutorInput>
  }

  export type ENROLLMENTSUpsertWithWhereUniqueWithoutTutorInput = {
    where: ENROLLMENTSWhereUniqueInput
    update: XOR<ENROLLMENTSUpdateWithoutTutorInput, ENROLLMENTSUncheckedUpdateWithoutTutorInput>
    create: XOR<ENROLLMENTSCreateWithoutTutorInput, ENROLLMENTSUncheckedCreateWithoutTutorInput>
  }

  export type ENROLLMENTSUpdateWithWhereUniqueWithoutTutorInput = {
    where: ENROLLMENTSWhereUniqueInput
    data: XOR<ENROLLMENTSUpdateWithoutTutorInput, ENROLLMENTSUncheckedUpdateWithoutTutorInput>
  }

  export type ENROLLMENTSUpdateManyWithWhereWithoutTutorInput = {
    where: ENROLLMENTSScalarWhereInput
    data: XOR<ENROLLMENTSUpdateManyMutationInput, ENROLLMENTSUncheckedUpdateManyWithoutTutorInput>
  }

  export type STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutTutorInput = {
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
    update: XOR<STUDY_BUDDY_GROUPSUpdateWithoutTutorInput, STUDY_BUDDY_GROUPSUncheckedUpdateWithoutTutorInput>
    create: XOR<STUDY_BUDDY_GROUPSCreateWithoutTutorInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutTutorInput>
  }

  export type STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutTutorInput = {
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
    data: XOR<STUDY_BUDDY_GROUPSUpdateWithoutTutorInput, STUDY_BUDDY_GROUPSUncheckedUpdateWithoutTutorInput>
  }

  export type STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutTutorInput = {
    where: STUDY_BUDDY_GROUPSScalarWhereInput
    data: XOR<STUDY_BUDDY_GROUPSUpdateManyMutationInput, STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutTutorInput>
  }

  export type TUTORING_SESSIONUpsertWithWhereUniqueWithoutTutorInput = {
    where: TUTORING_SESSIONWhereUniqueInput
    update: XOR<TUTORING_SESSIONUpdateWithoutTutorInput, TUTORING_SESSIONUncheckedUpdateWithoutTutorInput>
    create: XOR<TUTORING_SESSIONCreateWithoutTutorInput, TUTORING_SESSIONUncheckedCreateWithoutTutorInput>
  }

  export type TUTORING_SESSIONUpdateWithWhereUniqueWithoutTutorInput = {
    where: TUTORING_SESSIONWhereUniqueInput
    data: XOR<TUTORING_SESSIONUpdateWithoutTutorInput, TUTORING_SESSIONUncheckedUpdateWithoutTutorInput>
  }

  export type TUTORING_SESSIONUpdateManyWithWhereWithoutTutorInput = {
    where: TUTORING_SESSIONScalarWhereInput
    data: XOR<TUTORING_SESSIONUpdateManyMutationInput, TUTORING_SESSIONUncheckedUpdateManyWithoutTutorInput>
  }

  export type TUTOR_AVAILABILITYUpsertWithWhereUniqueWithoutTutorInput = {
    where: TUTOR_AVAILABILITYWhereUniqueInput
    update: XOR<TUTOR_AVAILABILITYUpdateWithoutTutorInput, TUTOR_AVAILABILITYUncheckedUpdateWithoutTutorInput>
    create: XOR<TUTOR_AVAILABILITYCreateWithoutTutorInput, TUTOR_AVAILABILITYUncheckedCreateWithoutTutorInput>
  }

  export type TUTOR_AVAILABILITYUpdateWithWhereUniqueWithoutTutorInput = {
    where: TUTOR_AVAILABILITYWhereUniqueInput
    data: XOR<TUTOR_AVAILABILITYUpdateWithoutTutorInput, TUTOR_AVAILABILITYUncheckedUpdateWithoutTutorInput>
  }

  export type TUTOR_AVAILABILITYUpdateManyWithWhereWithoutTutorInput = {
    where: TUTOR_AVAILABILITYScalarWhereInput
    data: XOR<TUTOR_AVAILABILITYUpdateManyMutationInput, TUTOR_AVAILABILITYUncheckedUpdateManyWithoutTutorInput>
  }

  export type TUTOR_AVAILABILITYScalarWhereInput = {
    AND?: TUTOR_AVAILABILITYScalarWhereInput | TUTOR_AVAILABILITYScalarWhereInput[]
    OR?: TUTOR_AVAILABILITYScalarWhereInput[]
    NOT?: TUTOR_AVAILABILITYScalarWhereInput | TUTOR_AVAILABILITYScalarWhereInput[]
    Availability_ID?: IntFilter<"TUTOR_AVAILABILITY"> | number
    Tutor_ID?: IntFilter<"TUTOR_AVAILABILITY"> | number
    Date_Requested?: DateTimeNullableFilter<"TUTOR_AVAILABILITY"> | Date | string | null
    Times_Requested?: DateTimeNullableFilter<"TUTOR_AVAILABILITY"> | Date | string | null
    Is_Approved?: BoolNullableFilter<"TUTOR_AVAILABILITY"> | boolean | null
  }

  export type TUTOR_COURSEUpsertWithWhereUniqueWithoutTutorInput = {
    where: TUTOR_COURSEWhereUniqueInput
    update: XOR<TUTOR_COURSEUpdateWithoutTutorInput, TUTOR_COURSEUncheckedUpdateWithoutTutorInput>
    create: XOR<TUTOR_COURSECreateWithoutTutorInput, TUTOR_COURSEUncheckedCreateWithoutTutorInput>
  }

  export type TUTOR_COURSEUpdateWithWhereUniqueWithoutTutorInput = {
    where: TUTOR_COURSEWhereUniqueInput
    data: XOR<TUTOR_COURSEUpdateWithoutTutorInput, TUTOR_COURSEUncheckedUpdateWithoutTutorInput>
  }

  export type TUTOR_COURSEUpdateManyWithWhereWithoutTutorInput = {
    where: TUTOR_COURSEScalarWhereInput
    data: XOR<TUTOR_COURSEUpdateManyMutationInput, TUTOR_COURSEUncheckedUpdateManyWithoutTutorInput>
  }

  export type USERSUpsertWithoutTutorInput = {
    update: XOR<USERSUpdateWithoutTutorInput, USERSUncheckedUpdateWithoutTutorInput>
    create: XOR<USERSCreateWithoutTutorInput, USERSUncheckedCreateWithoutTutorInput>
    where?: USERSWhereInput
  }

  export type USERSUpdateToOneWithWhereWithoutTutorInput = {
    where?: USERSWhereInput
    data: XOR<USERSUpdateWithoutTutorInput, USERSUncheckedUpdateWithoutTutorInput>
  }

  export type USERSUpdateWithoutTutorInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateOneWithoutUSERSNestedInput
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutUSERSNestedInput
    Student?: StudentUpdateOneWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutUSERSNestedInput
  }

  export type USERSUncheckedUpdateWithoutTutorInput = {
    User_ID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Is_Admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Is_Student?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUncheckedUpdateOneWithoutUSERSNestedInput
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutUSERSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutUSERSNestedInput
    Student?: StudentUncheckedUpdateOneWithoutUSERSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutUSERSNestedInput
  }

  export type AdminCreateWithoutUSERSInput = {
    SCHEDULE?: SCHEDULECreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutUSERSInput = {
    Admin_ID?: number
    SCHEDULE?: SCHEDULEUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutUSERSInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUSERSInput, AdminUncheckedCreateWithoutUSERSInput>
  }

  export type ENROLLMENTSCreateWithoutUSERSInput = {
    Total_Enrollment?: number | null
    Tutor?: TutorCreateNestedOneWithoutENROLLMENTSInput
    COURSES: COURSESCreateNestedOneWithoutENROLLMENTSInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutENROLLMENTSInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSUncheckedCreateWithoutUSERSInput = {
    Enrollment_ID?: number
    Tutor_ID?: number | null
    Course_ID: number
    Total_Enrollment?: number | null
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutENROLLMENTSInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutENROLLMENTSInput
  }

  export type ENROLLMENTSCreateOrConnectWithoutUSERSInput = {
    where: ENROLLMENTSWhereUniqueInput
    create: XOR<ENROLLMENTSCreateWithoutUSERSInput, ENROLLMENTSUncheckedCreateWithoutUSERSInput>
  }

  export type ENROLLMENTSCreateManyUSERSInputEnvelope = {
    data: ENROLLMENTSCreateManyUSERSInput | ENROLLMENTSCreateManyUSERSInput[]
    skipDuplicates?: boolean
  }

  export type STUDY_BUDDY_GROUPSCreateWithoutUSERSInput = {
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
    Tutor?: TutorCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput
    ENROLLMENTS: ENROLLMENTSCreateNestedOneWithoutSTUDY_BUDDY_GROUPSInput
  }

  export type STUDY_BUDDY_GROUPSUncheckedCreateWithoutUSERSInput = {
    Group_ID?: number
    Tutor_ID?: number | null
    Enrollment_ID: number
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
  }

  export type STUDY_BUDDY_GROUPSCreateOrConnectWithoutUSERSInput = {
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
    create: XOR<STUDY_BUDDY_GROUPSCreateWithoutUSERSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutUSERSInput>
  }

  export type STUDY_BUDDY_GROUPSCreateManyUSERSInputEnvelope = {
    data: STUDY_BUDDY_GROUPSCreateManyUSERSInput | STUDY_BUDDY_GROUPSCreateManyUSERSInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutUSERSInput = {
    GPA?: Decimal | DecimalJsLike | number | string | null
  }

  export type StudentUncheckedCreateWithoutUSERSInput = {
    GPA?: Decimal | DecimalJsLike | number | string | null
  }

  export type StudentCreateOrConnectWithoutUSERSInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUSERSInput, StudentUncheckedCreateWithoutUSERSInput>
  }

  export type TUTORING_SESSIONCreateWithoutUSERSInput = {
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
    Tutor: TutorCreateNestedOneWithoutTUTORING_SESSIONInput
    ENROLLMENTS: ENROLLMENTSCreateNestedOneWithoutTUTORING_SESSIONInput
  }

  export type TUTORING_SESSIONUncheckedCreateWithoutUSERSInput = {
    Session_ID?: number
    Tutor_ID: number
    Enrollment_ID: number
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
  }

  export type TUTORING_SESSIONCreateOrConnectWithoutUSERSInput = {
    where: TUTORING_SESSIONWhereUniqueInput
    create: XOR<TUTORING_SESSIONCreateWithoutUSERSInput, TUTORING_SESSIONUncheckedCreateWithoutUSERSInput>
  }

  export type TUTORING_SESSIONCreateManyUSERSInputEnvelope = {
    data: TUTORING_SESSIONCreateManyUSERSInput | TUTORING_SESSIONCreateManyUSERSInput[]
    skipDuplicates?: boolean
  }

  export type TutorCreateWithoutUSERSInput = {
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutTutorInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSECreateNestedManyWithoutTutorInput
  }

  export type TutorUncheckedCreateWithoutUSERSInput = {
    Tutor_ID?: number
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutTutorInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorCreateOrConnectWithoutUSERSInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutUSERSInput, TutorUncheckedCreateWithoutUSERSInput>
  }

  export type AdminUpsertWithoutUSERSInput = {
    update: XOR<AdminUpdateWithoutUSERSInput, AdminUncheckedUpdateWithoutUSERSInput>
    create: XOR<AdminCreateWithoutUSERSInput, AdminUncheckedCreateWithoutUSERSInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUSERSInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUSERSInput, AdminUncheckedUpdateWithoutUSERSInput>
  }

  export type AdminUpdateWithoutUSERSInput = {
    SCHEDULE?: SCHEDULEUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutUSERSInput = {
    Admin_ID?: IntFieldUpdateOperationsInput | number
    SCHEDULE?: SCHEDULEUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ENROLLMENTSUpsertWithWhereUniqueWithoutUSERSInput = {
    where: ENROLLMENTSWhereUniqueInput
    update: XOR<ENROLLMENTSUpdateWithoutUSERSInput, ENROLLMENTSUncheckedUpdateWithoutUSERSInput>
    create: XOR<ENROLLMENTSCreateWithoutUSERSInput, ENROLLMENTSUncheckedCreateWithoutUSERSInput>
  }

  export type ENROLLMENTSUpdateWithWhereUniqueWithoutUSERSInput = {
    where: ENROLLMENTSWhereUniqueInput
    data: XOR<ENROLLMENTSUpdateWithoutUSERSInput, ENROLLMENTSUncheckedUpdateWithoutUSERSInput>
  }

  export type ENROLLMENTSUpdateManyWithWhereWithoutUSERSInput = {
    where: ENROLLMENTSScalarWhereInput
    data: XOR<ENROLLMENTSUpdateManyMutationInput, ENROLLMENTSUncheckedUpdateManyWithoutUSERSInput>
  }

  export type STUDY_BUDDY_GROUPSUpsertWithWhereUniqueWithoutUSERSInput = {
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
    update: XOR<STUDY_BUDDY_GROUPSUpdateWithoutUSERSInput, STUDY_BUDDY_GROUPSUncheckedUpdateWithoutUSERSInput>
    create: XOR<STUDY_BUDDY_GROUPSCreateWithoutUSERSInput, STUDY_BUDDY_GROUPSUncheckedCreateWithoutUSERSInput>
  }

  export type STUDY_BUDDY_GROUPSUpdateWithWhereUniqueWithoutUSERSInput = {
    where: STUDY_BUDDY_GROUPSWhereUniqueInput
    data: XOR<STUDY_BUDDY_GROUPSUpdateWithoutUSERSInput, STUDY_BUDDY_GROUPSUncheckedUpdateWithoutUSERSInput>
  }

  export type STUDY_BUDDY_GROUPSUpdateManyWithWhereWithoutUSERSInput = {
    where: STUDY_BUDDY_GROUPSScalarWhereInput
    data: XOR<STUDY_BUDDY_GROUPSUpdateManyMutationInput, STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutUSERSInput>
  }

  export type StudentUpsertWithoutUSERSInput = {
    update: XOR<StudentUpdateWithoutUSERSInput, StudentUncheckedUpdateWithoutUSERSInput>
    create: XOR<StudentCreateWithoutUSERSInput, StudentUncheckedCreateWithoutUSERSInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUSERSInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUSERSInput, StudentUncheckedUpdateWithoutUSERSInput>
  }

  export type StudentUpdateWithoutUSERSInput = {
    GPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type StudentUncheckedUpdateWithoutUSERSInput = {
    GPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TUTORING_SESSIONUpsertWithWhereUniqueWithoutUSERSInput = {
    where: TUTORING_SESSIONWhereUniqueInput
    update: XOR<TUTORING_SESSIONUpdateWithoutUSERSInput, TUTORING_SESSIONUncheckedUpdateWithoutUSERSInput>
    create: XOR<TUTORING_SESSIONCreateWithoutUSERSInput, TUTORING_SESSIONUncheckedCreateWithoutUSERSInput>
  }

  export type TUTORING_SESSIONUpdateWithWhereUniqueWithoutUSERSInput = {
    where: TUTORING_SESSIONWhereUniqueInput
    data: XOR<TUTORING_SESSIONUpdateWithoutUSERSInput, TUTORING_SESSIONUncheckedUpdateWithoutUSERSInput>
  }

  export type TUTORING_SESSIONUpdateManyWithWhereWithoutUSERSInput = {
    where: TUTORING_SESSIONScalarWhereInput
    data: XOR<TUTORING_SESSIONUpdateManyMutationInput, TUTORING_SESSIONUncheckedUpdateManyWithoutUSERSInput>
  }

  export type TutorUpsertWithoutUSERSInput = {
    update: XOR<TutorUpdateWithoutUSERSInput, TutorUncheckedUpdateWithoutUSERSInput>
    create: XOR<TutorCreateWithoutUSERSInput, TutorUncheckedCreateWithoutUSERSInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutUSERSInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutUSERSInput, TutorUncheckedUpdateWithoutUSERSInput>
  }

  export type TutorUpdateWithoutUSERSInput = {
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutTutorNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUpdateManyWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateWithoutUSERSInput = {
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutTutorNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_COURSE?: TUTOR_COURSEUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type TutorCreateWithoutTUTOR_COURSEInput = {
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutTutorInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYCreateNestedManyWithoutTutorInput
    USERS: USERSCreateNestedOneWithoutTutorInput
  }

  export type TutorUncheckedCreateWithoutTUTOR_COURSEInput = {
    Tutor_ID?: number
    User_ID: number
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutTutorInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedCreateNestedManyWithoutTutorInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedCreateNestedManyWithoutTutorInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedCreateNestedManyWithoutTutorInput
  }

  export type TutorCreateOrConnectWithoutTUTOR_COURSEInput = {
    where: TutorWhereUniqueInput
    create: XOR<TutorCreateWithoutTUTOR_COURSEInput, TutorUncheckedCreateWithoutTUTOR_COURSEInput>
  }

  export type COURSESCreateWithoutTUTOR_COURSEInput = {
    Course_Number?: number | null
    Course_Section?: Decimal | DecimalJsLike | number | string | null
    Course_Title?: string | null
    Course_Instructor?: string | null
    Enrolled_Count?: number | null
    ENROLLMENTS?: ENROLLMENTSCreateNestedManyWithoutCOURSESInput
  }

  export type COURSESUncheckedCreateWithoutTUTOR_COURSEInput = {
    Course_ID?: number
    Course_Number?: number | null
    Course_Section?: Decimal | DecimalJsLike | number | string | null
    Course_Title?: string | null
    Course_Instructor?: string | null
    Enrolled_Count?: number | null
    ENROLLMENTS?: ENROLLMENTSUncheckedCreateNestedManyWithoutCOURSESInput
  }

  export type COURSESCreateOrConnectWithoutTUTOR_COURSEInput = {
    where: COURSESWhereUniqueInput
    create: XOR<COURSESCreateWithoutTUTOR_COURSEInput, COURSESUncheckedCreateWithoutTUTOR_COURSEInput>
  }

  export type TutorUpsertWithoutTUTOR_COURSEInput = {
    update: XOR<TutorUpdateWithoutTUTOR_COURSEInput, TutorUncheckedUpdateWithoutTUTOR_COURSEInput>
    create: XOR<TutorCreateWithoutTUTOR_COURSEInput, TutorUncheckedCreateWithoutTUTOR_COURSEInput>
    where?: TutorWhereInput
  }

  export type TutorUpdateToOneWithWhereWithoutTUTOR_COURSEInput = {
    where?: TutorWhereInput
    data: XOR<TutorUpdateWithoutTUTOR_COURSEInput, TutorUncheckedUpdateWithoutTUTOR_COURSEInput>
  }

  export type TutorUpdateWithoutTUTOR_COURSEInput = {
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutTutorNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUpdateManyWithoutTutorNestedInput
    USERS?: USERSUpdateOneRequiredWithoutTutorNestedInput
  }

  export type TutorUncheckedUpdateWithoutTUTOR_COURSEInput = {
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutTutorNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutTutorNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutTutorNestedInput
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUncheckedUpdateManyWithoutTutorNestedInput
  }

  export type COURSESUpsertWithoutTUTOR_COURSEInput = {
    update: XOR<COURSESUpdateWithoutTUTOR_COURSEInput, COURSESUncheckedUpdateWithoutTUTOR_COURSEInput>
    create: XOR<COURSESCreateWithoutTUTOR_COURSEInput, COURSESUncheckedCreateWithoutTUTOR_COURSEInput>
    where?: COURSESWhereInput
  }

  export type COURSESUpdateToOneWithWhereWithoutTUTOR_COURSEInput = {
    where?: COURSESWhereInput
    data: XOR<COURSESUpdateWithoutTUTOR_COURSEInput, COURSESUncheckedUpdateWithoutTUTOR_COURSEInput>
  }

  export type COURSESUpdateWithoutTUTOR_COURSEInput = {
    Course_Number?: NullableIntFieldUpdateOperationsInput | number | null
    Course_Section?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Course_Title?: NullableStringFieldUpdateOperationsInput | string | null
    Course_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Enrolled_Count?: NullableIntFieldUpdateOperationsInput | number | null
    ENROLLMENTS?: ENROLLMENTSUpdateManyWithoutCOURSESNestedInput
  }

  export type COURSESUncheckedUpdateWithoutTUTOR_COURSEInput = {
    Course_ID?: IntFieldUpdateOperationsInput | number
    Course_Number?: NullableIntFieldUpdateOperationsInput | number | null
    Course_Section?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Course_Title?: NullableStringFieldUpdateOperationsInput | string | null
    Course_Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Enrolled_Count?: NullableIntFieldUpdateOperationsInput | number | null
    ENROLLMENTS?: ENROLLMENTSUncheckedUpdateManyWithoutCOURSESNestedInput
  }

  export type SCHEDULECreateManyAdminInput = {
    Schedule_ID?: number
    Availability_ID: number
    Has_Worked?: boolean | null
  }

  export type SCHEDULEUpdateWithoutAdminInput = {
    Has_Worked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TUTOR_AVAILABILITY?: TUTOR_AVAILABILITYUpdateOneRequiredWithoutSCHEDULENestedInput
  }

  export type SCHEDULEUncheckedUpdateWithoutAdminInput = {
    Schedule_ID?: IntFieldUpdateOperationsInput | number
    Availability_ID?: IntFieldUpdateOperationsInput | number
    Has_Worked?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SCHEDULEUncheckedUpdateManyWithoutAdminInput = {
    Schedule_ID?: IntFieldUpdateOperationsInput | number
    Availability_ID?: IntFieldUpdateOperationsInput | number
    Has_Worked?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ENROLLMENTSCreateManyCOURSESInput = {
    Enrollment_ID?: number
    User_ID: number
    Tutor_ID?: number | null
    Total_Enrollment?: number | null
  }

  export type TUTOR_COURSECreateManyCOURSESInput = {
    TutorCourseID?: number
    Tutor_ID: number
  }

  export type ENROLLMENTSUpdateWithoutCOURSESInput = {
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneRequiredWithoutENROLLMENTSNestedInput
    Tutor?: TutorUpdateOneWithoutENROLLMENTSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutENROLLMENTSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type ENROLLMENTSUncheckedUpdateWithoutCOURSESInput = {
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutENROLLMENTSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type ENROLLMENTSUncheckedUpdateManyWithoutCOURSESInput = {
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TUTOR_COURSEUpdateWithoutCOURSESInput = {
    Tutor?: TutorUpdateOneRequiredWithoutTUTOR_COURSENestedInput
  }

  export type TUTOR_COURSEUncheckedUpdateWithoutCOURSESInput = {
    TutorCourseID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
  }

  export type TUTOR_COURSEUncheckedUpdateManyWithoutCOURSESInput = {
    TutorCourseID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
  }

  export type STUDY_BUDDY_GROUPSCreateManyENROLLMENTSInput = {
    Group_ID?: number
    User_ID: number
    Tutor_ID?: number | null
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
  }

  export type TUTORING_SESSIONCreateManyENROLLMENTSInput = {
    Session_ID?: number
    User_ID: number
    Tutor_ID: number
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
  }

  export type STUDY_BUDDY_GROUPSUpdateWithoutENROLLMENTSInput = {
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneRequiredWithoutSTUDY_BUDDY_GROUPSNestedInput
    Tutor?: TutorUpdateOneWithoutSTUDY_BUDDY_GROUPSNestedInput
  }

  export type STUDY_BUDDY_GROUPSUncheckedUpdateWithoutENROLLMENTSInput = {
    Group_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutENROLLMENTSInput = {
    Group_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TUTORING_SESSIONUpdateWithoutENROLLMENTSInput = {
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput
    Tutor?: TutorUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput
  }

  export type TUTORING_SESSIONUncheckedUpdateWithoutENROLLMENTSInput = {
    Session_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TUTORING_SESSIONUncheckedUpdateManyWithoutENROLLMENTSInput = {
    Session_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SCHEDULECreateManyTUTOR_AVAILABILITYInput = {
    Schedule_ID?: number
    Admin_ID: number
    Has_Worked?: boolean | null
  }

  export type SCHEDULEUpdateWithoutTUTOR_AVAILABILITYInput = {
    Has_Worked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Admin?: AdminUpdateOneRequiredWithoutSCHEDULENestedInput
  }

  export type SCHEDULEUncheckedUpdateWithoutTUTOR_AVAILABILITYInput = {
    Schedule_ID?: IntFieldUpdateOperationsInput | number
    Admin_ID?: IntFieldUpdateOperationsInput | number
    Has_Worked?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SCHEDULEUncheckedUpdateManyWithoutTUTOR_AVAILABILITYInput = {
    Schedule_ID?: IntFieldUpdateOperationsInput | number
    Admin_ID?: IntFieldUpdateOperationsInput | number
    Has_Worked?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ENROLLMENTSCreateManyTutorInput = {
    Enrollment_ID?: number
    User_ID: number
    Course_ID: number
    Total_Enrollment?: number | null
  }

  export type STUDY_BUDDY_GROUPSCreateManyTutorInput = {
    Group_ID?: number
    User_ID: number
    Enrollment_ID: number
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
  }

  export type TUTORING_SESSIONCreateManyTutorInput = {
    Session_ID?: number
    User_ID: number
    Enrollment_ID: number
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
  }

  export type TUTOR_AVAILABILITYCreateManyTutorInput = {
    Availability_ID?: number
    Date_Requested?: Date | string | null
    Times_Requested?: Date | string | null
    Is_Approved?: boolean | null
  }

  export type TUTOR_COURSECreateManyTutorInput = {
    TutorCourseID?: number
    Course_ID: number
  }

  export type ENROLLMENTSUpdateWithoutTutorInput = {
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneRequiredWithoutENROLLMENTSNestedInput
    COURSES?: COURSESUpdateOneRequiredWithoutENROLLMENTSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutENROLLMENTSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type ENROLLMENTSUncheckedUpdateWithoutTutorInput = {
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Course_ID?: IntFieldUpdateOperationsInput | number
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutENROLLMENTSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type ENROLLMENTSUncheckedUpdateManyWithoutTutorInput = {
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Course_ID?: IntFieldUpdateOperationsInput | number
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type STUDY_BUDDY_GROUPSUpdateWithoutTutorInput = {
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneRequiredWithoutSTUDY_BUDDY_GROUPSNestedInput
    ENROLLMENTS?: ENROLLMENTSUpdateOneRequiredWithoutSTUDY_BUDDY_GROUPSNestedInput
  }

  export type STUDY_BUDDY_GROUPSUncheckedUpdateWithoutTutorInput = {
    Group_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutTutorInput = {
    Group_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TUTORING_SESSIONUpdateWithoutTutorInput = {
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
    USERS?: USERSUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput
    ENROLLMENTS?: ENROLLMENTSUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput
  }

  export type TUTORING_SESSIONUncheckedUpdateWithoutTutorInput = {
    Session_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TUTORING_SESSIONUncheckedUpdateManyWithoutTutorInput = {
    Session_ID?: IntFieldUpdateOperationsInput | number
    User_ID?: IntFieldUpdateOperationsInput | number
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TUTOR_AVAILABILITYUpdateWithoutTutorInput = {
    Date_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Times_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Is_Approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SCHEDULE?: SCHEDULEUpdateManyWithoutTUTOR_AVAILABILITYNestedInput
  }

  export type TUTOR_AVAILABILITYUncheckedUpdateWithoutTutorInput = {
    Availability_ID?: IntFieldUpdateOperationsInput | number
    Date_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Times_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Is_Approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SCHEDULE?: SCHEDULEUncheckedUpdateManyWithoutTUTOR_AVAILABILITYNestedInput
  }

  export type TUTOR_AVAILABILITYUncheckedUpdateManyWithoutTutorInput = {
    Availability_ID?: IntFieldUpdateOperationsInput | number
    Date_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Times_Requested?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Is_Approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TUTOR_COURSEUpdateWithoutTutorInput = {
    COURSES?: COURSESUpdateOneRequiredWithoutTUTOR_COURSENestedInput
  }

  export type TUTOR_COURSEUncheckedUpdateWithoutTutorInput = {
    TutorCourseID?: IntFieldUpdateOperationsInput | number
    Course_ID?: IntFieldUpdateOperationsInput | number
  }

  export type TUTOR_COURSEUncheckedUpdateManyWithoutTutorInput = {
    TutorCourseID?: IntFieldUpdateOperationsInput | number
    Course_ID?: IntFieldUpdateOperationsInput | number
  }

  export type ENROLLMENTSCreateManyUSERSInput = {
    Enrollment_ID?: number
    Tutor_ID?: number | null
    Course_ID: number
    Total_Enrollment?: number | null
  }

  export type STUDY_BUDDY_GROUPSCreateManyUSERSInput = {
    Group_ID?: number
    Tutor_ID?: number | null
    Enrollment_ID: number
    Is_Accepted?: boolean | null
    Has_Tutor?: boolean | null
    Group_Members?: number | null
  }

  export type TUTORING_SESSIONCreateManyUSERSInput = {
    Session_ID?: number
    Tutor_ID: number
    Enrollment_ID: number
    Session_Date?: Date | string | null
    Session_Time?: Date | string | null
    Session_Loc?: string | null
    Students_Booked?: number | null
    Session_Max?: number | null
  }

  export type ENROLLMENTSUpdateWithoutUSERSInput = {
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    Tutor?: TutorUpdateOneWithoutENROLLMENTSNestedInput
    COURSES?: COURSESUpdateOneRequiredWithoutENROLLMENTSNestedInput
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUpdateManyWithoutENROLLMENTSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type ENROLLMENTSUncheckedUpdateWithoutUSERSInput = {
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Course_ID?: IntFieldUpdateOperationsInput | number
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
    STUDY_BUDDY_GROUPS?: STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutENROLLMENTSNestedInput
    TUTORING_SESSION?: TUTORING_SESSIONUncheckedUpdateManyWithoutENROLLMENTSNestedInput
  }

  export type ENROLLMENTSUncheckedUpdateManyWithoutUSERSInput = {
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Course_ID?: IntFieldUpdateOperationsInput | number
    Total_Enrollment?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type STUDY_BUDDY_GROUPSUpdateWithoutUSERSInput = {
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
    Tutor?: TutorUpdateOneWithoutSTUDY_BUDDY_GROUPSNestedInput
    ENROLLMENTS?: ENROLLMENTSUpdateOneRequiredWithoutSTUDY_BUDDY_GROUPSNestedInput
  }

  export type STUDY_BUDDY_GROUPSUncheckedUpdateWithoutUSERSInput = {
    Group_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type STUDY_BUDDY_GROUPSUncheckedUpdateManyWithoutUSERSInput = {
    Group_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: NullableIntFieldUpdateOperationsInput | number | null
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Is_Accepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Has_Tutor?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Group_Members?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TUTORING_SESSIONUpdateWithoutUSERSInput = {
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
    Tutor?: TutorUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput
    ENROLLMENTS?: ENROLLMENTSUpdateOneRequiredWithoutTUTORING_SESSIONNestedInput
  }

  export type TUTORING_SESSIONUncheckedUpdateWithoutUSERSInput = {
    Session_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TUTORING_SESSIONUncheckedUpdateManyWithoutUSERSInput = {
    Session_ID?: IntFieldUpdateOperationsInput | number
    Tutor_ID?: IntFieldUpdateOperationsInput | number
    Enrollment_ID?: IntFieldUpdateOperationsInput | number
    Session_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Session_Loc?: NullableStringFieldUpdateOperationsInput | string | null
    Students_Booked?: NullableIntFieldUpdateOperationsInput | number | null
    Session_Max?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}