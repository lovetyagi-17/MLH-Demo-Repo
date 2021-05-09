export class UserModel {
    public constructor(
        public _id?:string,
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public phone ?: number,
        public password?: string,
        public address?: string,
        public city?: string,
        public state?: string,
        public country?: string,
        public zip?: string
    ) { }
}