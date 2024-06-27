/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import Movie from "../types/Movie";
export declare const getMovies: ({ filters, pagination, }: {
    filters: Record<string, string>;
    pagination: {
        pageIndex: number;
        pageSize: number;
    };
}) => Promise<any>;
export declare const insertMovie: (payload: Pick<Movie, "title" | "country" | "year" | "colour">) => Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    year: number;
    movieId: string;
    genre: string[];
    country: string[];
    colour: string[];
    isFavourite: boolean;
    isDeleted: boolean;
    additionalDetails?: {
        overview?: string | null | undefined;
        popularity?: string | null | undefined;
        adult?: boolean | null | undefined;
    } | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    year: number;
    movieId: string;
    genre: string[];
    country: string[];
    colour: string[];
    isFavourite: boolean;
    isDeleted: boolean;
    additionalDetails?: {
        overview?: string | null | undefined;
        popularity?: string | null | undefined;
        adult?: boolean | null | undefined;
    } | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const getMovieById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    year: number;
    movieId: string;
    genre: string[];
    country: string[];
    colour: string[];
    isFavourite: boolean;
    isDeleted: boolean;
    additionalDetails?: {
        overview?: string | null | undefined;
        popularity?: string | null | undefined;
        adult?: boolean | null | undefined;
    } | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    title: string;
    year: number;
    movieId: string;
    genre: string[];
    country: string[];
    colour: string[];
    isFavourite: boolean;
    isDeleted: boolean;
    additionalDetails?: {
        overview?: string | null | undefined;
        popularity?: string | null | undefined;
        adult?: boolean | null | undefined;
    } | null | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export declare const updateMovie: (movieId: string, payload: Partial<Movie>) => Promise<Movie | null>;
export declare const deleteMovie: (movieId: string) => Promise<Movie | null>;
//# sourceMappingURL=movies.d.ts.map