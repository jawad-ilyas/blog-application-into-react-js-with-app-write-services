import { Client, Account, ID } from "appwrite";
import config from "../config/Config";

class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.VITE_APPWRITE_API_URL)
            .setProject(config.VITE_APPWRITE_PROJECT_ID);
        this.account = new Account(this.client)
    }

    async createAccount({ name, email, password }) {
        try {

            const userAccount = await this.account.create(ID.unique(), email, password, name)

            console.log('====================================');
            console.log("new create user into auth js ", userAccount);
            console.log('====================================');


            if (userAccount) {
                await this.login({ email, password })
                // return userAccount;
            }
            else {
                return "new account is not created "
            }


        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {

        try {
            const verifyUser = await this.account.createEmailPasswordSession(
                email,
                password
            );


            console.log('====================================');
            console.log("verifyUser into auth js ", verifyUser);
            console.log('====================================');

        } catch (error) {
            throw error;
        }
    }


    async getCurrentUser() {

        try {
            const result = await this.account.get();
            return result;
        } catch (error) {
            throw error
        }
    }

    async logout() {
        try {
            await this.account.deleteSession('current');
        } catch (error) {
            throw error;
        }
    }



}

const authService = new AuthService();
export default authService 