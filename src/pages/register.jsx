import RegisterForm from '../components/registerform.jsx';

export default function Register() {
    return (
        <div className="container">
            <div className="auth-page-wrapper">
                <div className="auth-header">
                    <h1>Crear Cuenta</h1>
                    <p>Regístrate para comenzar a gestionar tus medicamentos</p>
                </div>


                <RegisterForm />


                {/* Link */}
                <div className="auth-links">
                    <p>
                        ¿Ya tienes una cuenta?{' '}
                        <a href="/login" className="link-primary">
                            Inicia sesión aquí
                        </a>
                    </p>
                   
                </div>
            </div>
        </div>
    );
}

