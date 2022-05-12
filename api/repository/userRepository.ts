import { Prisma, PrismaPromise, User } from "@prisma/client";
import UserDto from "../Dto/userDto";
import UserModel from "../models/userModel";

import { prisma } from "../utils/prismaQuery";

export class UserRepository {
    constructor() {}

    async create(obj: UserDto) {
        const response = new UserModel(obj.name, obj.email, obj.cpf, obj.password);

        try {
            const responseAddUser = await prisma.user.create({
                data: {
                    name: response.name,
                    email: response.email,
                    cpf: response.cpf,
                    password: response.password,
                },
            });
            return responseAddUser;
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                return { Error: "code " + e.code };
            }
        }
    }

    async getAll() {
        try {
            const responseGetUsers = await prisma.user.findMany({});
            return responseGetUsers;
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                return { Error: "code " + e.code };
            }
        }
    }

    getById(id: string) {
        throw new Error("Method not implemented.");
    }
}
