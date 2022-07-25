import Axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(email: string, password: string)
    {
        return Axios
            .post(API_URL + "login", {
                email, 
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(email: string, password: string) {
        return Axios
            .post(API_URL + "cadastro", {
                email, 
                password
            });
    }
    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);
        return null;
    }
}

export default new AuthService();