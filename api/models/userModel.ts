export default class UserModel {
    public name;
    public email;
    public cpf;
    public password;

    constructor(name: string, email: string, cpf: number, password: string) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.password = password;
    }
}
