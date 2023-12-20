-- Criação do esquema students
CREATE SCHEMA IF NOT EXISTS students;

-- Altera para o esquema students
SET search_path TO students;

-- Criação da tabela students
CREATE TABLE IF NOT EXISTS students (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INTEGER,
    dob DATE
);
