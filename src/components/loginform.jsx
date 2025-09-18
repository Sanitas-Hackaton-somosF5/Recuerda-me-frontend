import { useState } from 'react';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
         
            console.log('Datos del login:', formData);
            
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Redirigir o mostrar éxito
            alert('Login exitoso!');
            
        } catch (err) {
            setError('Error al iniciar sesión. Verifica tus credenciales.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="form-background" onSubmit={handleSubmit}>
            {/* Mensaje de error */}
            {error && (
                <div className="error-message">
                    <p style={{ color: 'var(--color-alert)', marginBottom: '1rem' }}>
                        {error}
                    </p>
                </div>
            )}

            {/*  email */}
            <div className="input-group">
                <label htmlFor="email">Correo electrónico</label>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
            </div>

            {/* password*/}
            <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required 
                />
            </div>

            {/* Checkbox recordar */}
            <div className="checkbox-group">
                <label>
                    <input 
                        type="checkbox" 
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                    />
                    {' '}Recordar mi sesión
                </label>
            </div>

            {/* Botón submint */}
            <button 
                type="submit" 
                className="btn-filled"
                disabled={loading}
            >
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
        </form>
    );
}