import React, { useState } from 'react';
import './estilos.css';
import Relatorio from './relatorio';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    estadoCivil: 'solteiro',
    email: '',
    endereco: '',
    bairro: '',
    cidade: '',
    uf: 'AC',
    cep: '',
    celular: '',
    login: '',
    senha: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    const errors = {};
    const today = new Date();
    const birthDate = new Date(formData.dataNascimento);
    
    if (!formData.dataNascimento || birthDate >= today) {
      errors.dataNascimento = 'A data de nascimento deve ser anterior ao dia atual.';
    }

    const celularRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!celularRegex.test(formData.celular)) {
      errors.celular = 'O número de celular deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.';
    }

    const cepRegex = /^\d{5}-\d{3}$/;
    if (!cepRegex.test(formData.cep)) {
      errors.cep = 'O CEP deve estar no formato XXXXX-XXX.';
    }
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const queryParams = new URLSearchParams(formData).toString();
      navigate(`/cadastro_resultado?${queryParams}`);
    }
  };

  return (
    <div className="App">
      <h1>Formulário de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label>Nome completo:
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
          </label>
          <label>CPF:
            <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />
          </label>
          <label>Data de Nascimento:
            <input 
            type="date" 
            name="dataNascimento" 
            value={formData.dataNascimento} 
            onChange={handleChange} 
            required className={errors.dataNascimento ? 'invalid' : ''} 
            />
            {errors.dataNascimento && <span className="error">{errors.dataNascimento}</span>}
          </label>
          <label>Estado Civil:
            <select name="estadoCivil" value={formData.estadoCivil} onChange={handleChange} required>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="viuvo">Viúvo</option>
              <option value="divorciado">Divorciado</option>
            </select>
          </label>
        </fieldset>

        <fieldset>
          <legend>Dados de Contato</legend>
          <label>Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>Endereço:
            <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
          </label>
          <label>Bairro:
            <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} required />
          </label>
          <label>Cidade:
            <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} required />
          </label>
          <label>UF:
            <select name="uf" value={formData.uf} onChange={handleChange} required>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </label>
          <label>CEP:
            <input 
              type="text" 
              name="cep" 
              value={formData.cep} 
              onChange={handleChange} 
              required
              className={errors.cep ? 'invalid' : ''} 
             />
            {errors.cep && <span className="error">{errors.cep}</span>}
          </label>
          <label>Celular:
            <input 
              type="tel" 
              name="celular" 
              value={formData.celular} 
              onChange={handleChange} 
              required 
              className={errors.celular ? 'invalid' : ''}
            />
            {errors.celular && <span className="error">{errors.celular}</span>}
          </label>
        </fieldset>

        <fieldset>
          <legend>Dados de Cadastro</legend>
          <label>Login:
            <input type="text" name="login" value={formData.login} onChange={handleChange} required />
          </label>
          <label>Senha:
            <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
          </label>
        </fieldset>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/cadastro_resultado" element={<Relatorio />} />
      </Routes>
    </Router>
  );
}

export default App;
