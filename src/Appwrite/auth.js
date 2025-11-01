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
            // console.log('====================================');
            // console.log("name", name);
            // console.log("email", email);
            // console.log("password", password);
            // console.log("D.unique()", ID.unique());
            // console.log('====================================');


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
            console.log('====================================');
            console.log("error into create account method into funation ", error);
            console.log("error into create account method into funation ", error?.message);
            console.log('====================================');
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
            console.log('====================================');
            console.log("error into getCurrentUser function", error);
            console.log("error into getCurrentUser function", error?.message);
            console.log('====================================');
            throw error
        }
    }
    async getCurrentSession() {
        try {
            const session = await this.account.getSession('current');
            console.log('Current session details:', session);
            return session;
        } catch (error) {
            console.log("Error fetching current session:", error.message);
            throw error;
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