import mongoose from "mongoose";
declare const _default: mongoose.Model<{
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
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
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
}>> & mongoose.FlatRecord<{
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
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
//# sourceMappingURL=movies.d.ts.map