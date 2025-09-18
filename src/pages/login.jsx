import LoginForm from '../components/loginform.jsx';

export default function Login() {
    return (
        <div className="container">
            <div className="auth-page-wrapper">
                <div className="auth-header">
                    <h1>Iniciar Sesión</h1>
                    <p>Accede a tu cuenta para gestionar tus medicamentos</p>
                </div>

                <LoginForm />

                <div className="auth-links">
                    <p>
                        ¿No tienes cuenta?{' '}
                        <a href="/register" className="link-primary">
                            Regístrate aquí
                        </a>
                    </p>
                    <p>
                        <a href="/forgot-password" className="link-secondary">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}