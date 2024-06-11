import React from 'react';
import './App.css'; // Importa el archivo de estilos

function App() {
  return (
    <div className="app">
      {/* Franja Superior */}
      <header className="header">
        <img src="./logo.svg" alt="Logo" className="logo" />
      </header>

      {/* Contenido Principal */}
      <main className="content">
        <div className='form-container'>
          <h2>Iniciar Sesion</h2>
          <form>
            <div className='input-group'>
              <label htmlFor='email'>Correo Electronico</label>
              <input type="email" id='email'name='email' required />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>Constraseña</label>
              <input type='password' id='password' name='password'required />
            </div>
            <button type='submit'>Ingresar</button>
          </form>
        </div>
        {/* Aquí puedes agregar el contenido principal de tu aplicación */}
      </main>

      {/* Pie de Página */}
      <footer className="footer">
        @DTC ESPAÑA
      </footer>
    </div>
  );
}

export default App;

