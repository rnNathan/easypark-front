import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/button/button";
import './AdminHome.css';

export function AdminHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica para logout
    navigate('/');
  };

  return (
    <div className="admin-home">
      <h1>Bem-vindo, Administrador!</h1>
      <div className="menu">
        <Button onClick={() => navigate('/configuracao-estacionamento')}>
          Configuração de Estacionamento
        </Button>
        <Button onClick={() => navigate('/configuracao-usuarios')}>
          Configuração de Usuários
        </Button>
      </div>
      <Button className="logout-button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
} 