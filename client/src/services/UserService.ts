import { IUser } from './../models/IUser';
import { AxiosResponse } from 'axios';
import $api from "../http";
import { AuthResponse } from '../models/response/AuthResponse';

export default class UserService{
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }
}