import { useState } from 'react';
import authService from '../services/authservice.js';


export default function RegisterForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));


        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }


        if (error) {
            setError('');
        }
    };




    const validateForm = () => {
        const newErrors = {};


        // Validate username
        if (!formData.username.trim()) {
            newErrors.username = 'El nombre de usuario es requerido';
        } else if (formData.username.length < 3) {
            newErrors.username = 'El nombre de usuario debe tener al menos 3 caracteres';
        } else if (!/^[a-zA-Z0-9_-]+$/.test(formData.username)) {
            newErrors.username = 'Solo se permiten letras, números, guiones y guiones bajos';
        }


        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'El correo electrónico es requerido';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Por favor ingresa un correo electrónico válido';
        }


        // Validate password
        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida';
        } else if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }


        // Validate password confirmation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Debes confirmar tu contraseña';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
        }


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    //form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);


        if (!validateForm()) {
            return;
        }


        setLoading(true);


        try {
            const result = await authService.register({
                username: formData.username.trim(),
                email: formData.email.trim().toLowerCase(),
                password: formData.password
            });


            if (result.success) {
                setSuccess(true);
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
               
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            }


        } catch (err) {
            console.error('Error en registro:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <form className="form-background" onSubmit={handleSubmit}>
            {success && (
                <div className="success-message">
                    <p style={{ margin: 0 }}>
                        ¡Registro exitoso! Serás redirigido al login en unos segundos...
                    </p>
                </div>
            )}


            {error && (
                <div className="error-message">
                    <p style={{ color: 'var(--color-alert)', margin: 0 }}>
                        {error}
                    </p>
                </div>
            )}


            {/* Campo username */}
            <div className="input-group">
                <label htmlFor="username" className={errors.username ? 'label-alert' : ''}>
                    Nombre de usuario
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Ej: juan123"
                    value={formData.username}
                    onChange={handleChange}
                    className={errors.username ? 'input-error' : ''}
                    required
                />
                {errors.username && (
                    <p style={{ color: 'var(--color-alert)', fontSize: '0.9rem', margin: '0.3rem 0 0 0' }}>
                        {errors.username}
                    </p>
                )}
            </div>


            {/*Email field  */}
            <div className="input-group">
                <label htmlFor="email" className={errors.email ? 'label-alert' : ''}>
                    Correo electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                    required
                />
                {errors.email && (
                    <p style={{ color: 'var(--color-alert)', fontSize: '0.9rem', margin: '0.3rem 0 0 0' }}>
                        {errors.email}
                    </p>
                )}
            </div>


            {/* Password field*/}
            <div className="input-group">
                <label htmlFor="password" className={errors.password ? 'label-alert' : ''}>
                    Contraseña
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Mínimo 6 caracteres"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'input-error' : ''}
                    required
                />
                {errors.password && (
                    <p style={{ color: 'var(--color-alert)', fontSize: '0.9rem', margin: '0.3rem 0 0 0' }}>
                        {errors.password}
                    </p>
                )}
            </div>


            {/* Confirm password  */}
            <div className="input-group">
                <label htmlFor="confirmPassword" className={errors.confirmPassword ? 'label-alert' : ''}>
                    Confirmar contraseña
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Repite tu contraseña"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'input-error' : ''}
                    required
                />
                {errors.confirmPassword && (
                    <p style={{ color: 'var(--color-alert)', fontSize: '0.9rem', margin: '0.3rem 0 0 0' }}>
                        {errors.confirmPassword}
                    </p>
                )}
            </div>


            <button
                type="submit"
                className="btn-filled"
                disabled={loading}
                style={{
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer'
                }}
            >
                {loading ? 'Registrando...' : 'Crear Cuenta'}
            </button>
        </form>
    );
}