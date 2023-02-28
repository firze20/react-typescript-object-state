//dynamic interface

export interface IProfile {
    [key: string]: string | number | readonly string[] | undefined;
}