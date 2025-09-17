export default function FormDemo() {
    return (
        <div className="container">
            <h1>Demo de estilos globales</h1>
            <p>Este es un ejemplo para ver todos los componentes que hemos creado.</p>

            {/* Botones */}
            <h2>Botones</h2>
            <button className="btn-filled">Botón Primario</button>
            <button className="btn-outline">Botón Outline</button>

            {/* Formulario */}
            <h2>Formulario</h2>
            <form className="form-background">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder="Escribe tu nombre" />

                <label htmlFor="email">Correo</label>
                <input type="email" id="email" placeholder="correo@ejemplo.com" />

                <label htmlFor="password" className="label-alert">
                    Contraseña (ejemplo con error)
                </label>
                <input type="password" id="password" className="input-error" />

                <label htmlFor="comments">Comentarios</label>
                <textarea id="comments" rows="3"></textarea>

                {/* Select */}
                <label htmlFor="horario">Horario de administración</label>
                <select id="horario"multiple size={3}>
                    <option>Desayuno</option>
                    <option>Almuerzo</option>
                    <option>Cena</option>
                </select>

                {/* Checkbox y Radio */}
                <div>
                    <label>
                        <input type="checkbox" /> Acepto los términos
                    </label>
                </div>

                <div>
                    <label>
                        <input type="radio" name="gender" /> Administrado
                    </label>
                    <label>
                        <input type="radio" name="gender" /> Pendiente
                    </label>
                </div>

                <button type="submit" className="btn-filled">Enviar</button>
            </form>
        </div>
    );
}