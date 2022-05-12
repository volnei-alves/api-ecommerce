import UserDto from "../Dto/userDto";
import { UserRepository } from "../repository/userRepository";

export function userAddService(data: UserDto) {

    const response = new UserRepository().create({ ...data });
    return response;
}

export function userAllService() {
    const response = new UserRepository().getAll();
    return response;
}
