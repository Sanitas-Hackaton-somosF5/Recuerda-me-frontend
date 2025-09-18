const API_BASE_URL = 'http://localhost:5173';


class AuthService {
    constructor() {
        this.TOKEN_KEY = 'authToken';
        this.USER_KEY = 'user';
    }


    async register(userData) {
        try {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: userData.username,
                    email: userData.email,
                    password: userData.password
                })
            });


            const data = await response.json();


            if (!response.ok) {
                throw new Error(data.message || `Error ${response.status}: ${response.statusText}`);
            }


            return {
                success: true,
                data: data,
                message: data.message || 'Usuario registrado exitosamente'
            };


        } catch (error) {
            console.error('Error en registro:', error);
            throw this._handleError(error, 'Error al registrar usuario');
        }
    }


    async login(credentials) {
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            });


            const data = await response.json();


            if (!response.ok) {
                throw new Error(data.message || `Error ${response.status}: ${response.statusText}`);
            }


            if (data.token) {
                this._setToken(data.token);
                this._setUser(data.user);
            }


            return {
                success: true,
                data: data,
                message: data.message || 'Sesión iniciada exitosamente'
            };


        } catch (error) {
            console.error('Error en login:', error);
            throw this._handleError(error, 'Error al iniciar sesión');
        }
    }


    logout() {
        try {
            this._removeToken();
            this._removeUser();
           
            return {
                success: true,
                message: 'Sesión cerrada exitosamente'
            };
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            return {
                success: false,
                message: 'Error al cerrar sesión'
            };
        }
    }


    getToken() {
        try {
            return localStorage.getItem(this.TOKEN_KEY);
        } catch (error) {
            console.error('Error al obtener token:', error);
            return null;
        }
    }


    getCurrentUser() {
        try {
            const userStr = localStorage.getItem(this.USER_KEY);
            return userStr ? JSON.parse(userStr) : null;
        } catch (error) {
            console.error('Error al obtener usuario:', error);
            return null;
        }
    }


    isAuthenticated() {
        const token = this.getToken();
        return token !== null && token !== undefined && token.trim() !== '';
    }


    getAuthHeaders() {
        const token = this.getToken();
        return {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` })
        };
    }


    isTokenValid() {
        const token = this.getToken();
        if (!token) return false;


        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Math.floor(Date.now() / 1000);
           
            return payload.exp && payload.exp > currentTime;
        } catch (error) {
            console.error('Error al validar token:', error);
            return false;
        }
    }


    _handleError(error, defaultMessage) {
        if (error.name === 'TypeError') {
            return new Error('Error de conexión. Verifica tu conexión a internet.');
        }
        return new Error(error.message || defaultMessage);
    }


    _setToken(token) {
        try {
            localStorage.setItem(this.TOKEN_KEY, token);
        } catch (error) {
            console.error('Error al guardar token:', error);
            throw new Error('Error al guardar token de autenticación');
        }
    }


    _setUser(user) {
        try {
            localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        } catch (error) {
            console.error('Error al guardar usuario:', error);
            throw new Error('Error al guardar datos de usuario');
        }
    }


    _removeToken() {
        try {
            localStorage.removeItem(this.TOKEN_KEY);
        } catch (error) {
            console.error('Error al remover token:', error);
        }
    }


    _removeUser() {
        try {
            localStorage.removeItem(this.USER_KEY);
        } catch (error) {
            console.error('Error al remover usuario:', error);
        }
    }
}


export default new AuthService();
