# Recuerda-me App
Una aplicación web permite registrar medicamentos y ver los medicamentos ya tomados.
Este frontend fue desarrollado en React y se comunica con un backend mediante API REST.


## Tecnologías

- React: biblioteca principal para la interfaz.
- JavaScript / HTML5 / CSS3: desarrollo frontend.
- Vite: build rápido y moderno.
- @vitejs/plugin-react-swc: optimización para React con SWC.
- Testing: Vitest y Testing Library para pruebas de componentes React.
- Fetch API: comunicación con el backend mediante API REST.

## Funcionalidades del Frontend

- Registro de medicamentos: formulario para agregar un medicamento.
- Listado de medicamentos: muestra todos los medicamentos guardados.
- Marcar como tomado: opción para indicar que el medicamento fue tomado.
- Visualización por momento del día: los medicamentos se muestran organizados en desayuno, almuerzo y cena.

## Funcionalidades del Frontend

Medicamentos
- Crear y eliminar medicamentos.
- Listar todos los medicamentos registrados.

Tomas

- Visualizar tomas organizadas en desayuno, almuerzo y cena.
- Marcar una toma como tomada o pendiente.

## Ejecución

1. Clonar el repositorio:

```
git clone https://github.com/Sanitas-Hackaton-somosF5/Recuerda-me-frontend.git
```

2. Entrar en la carpeta del proyecto:
```
cd Recuerda-me-frontend
```

3. Instalar las dependencias:
```
npm install
```

4. Iniciar la aplicación:
```
npm run dev
```

La aplicación se abre en >> http://localhost:5173/

## Pruebas

El proyecto incluye pruebas unitarias con Vitest para garantizar que los componentes de React funcionan correctamente.

Componentes testeados

1. Footer: verifica que se muestran correctamente el título, el icono, las marcas y el copyright.
2. Header: comprueba que el título y el subtítulo se renderizan.
3. MedicineCard:
    - Muestra la información del medicamento correctamente.
    - Ejecuta la función de borrar al hacer clic en el botón.
    - No muestra la descripción si no se proporciona.

4. MedicineForm:

    - Renderiza todos los campos de entrada, checkboxes y botones.
    - Envía los datos correctamente incluyendo los horarios de toma (desayuno, comida, cena).
    - Comprueba que los campos obligatorios tienen el atributo required.

### Ejecución de pruebas
---

Correr todos los tests:
```
npx vitest
```

## Equipo RecuerdaMe

Este proyecto ha sido desarrollado por un equipo comprometido con mejorar la gestión de medicamentos y la salud de las usuarias:

- Alexandra Rojas - Desarrolladora backend
- Jesús Martín - Desarrollador backend
- Lara Pla - Desarrolladora backend
- Mari Carmen Tajuelo - Desarrolladora frontend
- Paula Apse - Desarrolladora frontend
- Mariany de Araujo - Desarrolladora frontend
- Rocío Alondra - Desarrolladora frontend

## Licencia
Este proyecto está bajo la Licencia MIT.