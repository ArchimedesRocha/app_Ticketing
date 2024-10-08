"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
const TicketForm = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Falha ao criar o ticket");
    }

    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Não iniciado",
    category: "Problema na rota Checkout",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Crie seu ticket</h3>
        <label htmlFor="">Título</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label htmlFor="">Descrição</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />

        <label htmlFor="">Categoria</label>
        <select
          name="category"
          id=""
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Problema na API">Problema na API</option>
          <option value="Problema no Site">Problema no Site</option>
          <option value="Problema no Domínio">Problema no Domínio</option>
          <option value="Problema na Hospedagem">Problema na Hospedagem</option>
        </select>

        <label htmlFor="">Prioridade</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="">1</label>

          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label htmlFor="">2</label>

          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label htmlFor="">3</label>

          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label htmlFor="">4</label>

          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label htmlFor="">5</label>
        </div>

        <label htmlFor="">Progresso</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label htmlFor="">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          id=""
        >
          <option value="Não iniciado">Não iniciado</option>
          <option value="Iniciado">Iniciado</option>
          <option value="Finalizado">Finalizado</option>
        </select>
        <input type="submit" className="btn" value="Criar ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
