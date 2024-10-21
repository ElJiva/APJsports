
function MyComponent() {
    const container = document.createElement('footer');
    container.classList.add('footer-container');

    container.innerHTML = `
        <div>
            <p>©CopyRight - APJsports</p>
        </div>
    `;

    // Aplicar estilos al componente
    const style = document.createElement('style');
    style.textContent = `
        footer {
            background-color: #2D1B3E;
            padding: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            margin-top: 2em;
            min-height: 1em;
        }
    `;

    document.head.appendChild(style);

    return container;
}

export default MyComponent;
