export class User {

constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public mobile: string,
    public address: {
        "city":string,
        "state":string,
        "flaNo":number
    },
    public password: string,
) {  }

}