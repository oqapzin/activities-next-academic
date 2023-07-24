const errosData = {
    Salas: {
        "Nome": { 
            required: "Insira um nome válido!", 
            minLength: { value: 3, message: "O nome precisa ter no mínimo 3 letras!" } 
        },
        "Capacidade" :{
            required: "Insira um número válido!", 
            min: { value: 12, message: "A sala precisa ter no mínimo 10 lugares!" }, 
            max: { value: 40, message: "A sala precisa ter no máximo 40 lugares!" } 
        }
    },

    Disciplinas : {
        "Nome": { 
            required: "Insira um nome válido!", 
            minLength: { value: 3, message: "O nome precisa ter no mínimo 3 letras!" },
            maxLength: { value: 20, message: "O nome precisa ter no máximo 20 letras!" } 
        },
    },

    Cursos : {
        "Nome": { 
            required: "Insira um nome válido!", 
            minLength: { value: 3, message: "O nome precisa ter no mínimo 3 letras!" },
            maxLength: { value: 30, message: "O nome precisa ter no máximo 30 letras!" } 
        },
        "Duracao": { 
            required: "Insira uma duração válido!", 
            min: { value: 1, message: "A duração precisa ter no mínimo 1 número!" },
            max: { value: 4, message: "A duração precisa ter no máximo 4 números!" } 
        },
        "Email": { 
            required: "Insira um e-mail válido!", 
            minLength: { value: 3, message: "O nome precisa ter no mínimo 3 letras!" },
            maxLength: { value: 30, message: "O nome precisa ter no máximo 30 letras!" }
        },
    },

    Professores: {
        "Nome": { 
            required: "Insira um nome válido!", 
            minLength: { value: 3, message: "O nome precisa ter no mínimo 3 letras!" },
            pattern: { value: /^[A-Za-z]+$/i, message: "Você precisa usar somente letras!" } 
        },
        "CPF": { 
            required: "Insira um número válido!", 
            minLength: { value: 14, message: "O CPF precisa ter no minimo 14 números!" },
            maxLength: { value: 15, message: "O CPF precisa ter no máximo 8 números!" },
        },
        "Matricula": { 
            required: "Insira uma matrícula válida!", 
            maxLength: { value: 10, message: "A matrícula precisa ter no mínimo 10 caracteres!" },
            maxLength: { value: 16, message: "A matrícula precisa ter no máximo 16 caracteres!" },
        },
        "Salario": { 
            required: "Insira um número válido!", 
            pattern: { value: /[0-9]/, message: "Insira somente números." },
        },
        "Email": { 
            required: "Insira um e-mail válido!", 
            minLength: { value: 3, message: "O nome precisa ter no mínimo 3 letras!" },
            maxLength: { value: 30, message: "O nome precisa ter no máximo 30 letras!" }
        },
        "Telefone": { 
            required: "Insira um número válido!", 
            pattern: { value: /[0-9]/, message: "Insira somente números." },
            maxLength: { value: 20, message: "Máximo de 20 números!" },
            minLength: { value: 11, message: "Mínimo de 11 números!" },
        },
        "Cep": { 
            required: "Insira um número válido!", 
            pattern: { value: /[0-9]/, message: "Insira somente números." },
            maxLength: { value: 11, message: "Máximo de 11 números!" },
            minLength: { value: 8, message: "Mínimo de 8 números!" },
        },
        "Numero": { 
            required: "Insira um número válido!", 
            pattern: { value: /[0-9]/, message: "Insira somente números." },
            maxLength: { value: 6, message: "Máximo de 6 números!" },
            minLength: { value: 1, message: "Mínimo de 1 número!" },
        },
        "Logradouro": { 
            required: "Insira um logradouro válido!", 
            minLength: { value: 1, message: "O logradouro precisa ter no mínimo 1 letras!" },
            pattern: { value: /^[A-Za-z]+$/i, message: "Você precisa usar somente letras!" } 
        },
        "Complemento": { 
            required: "Insira um complemento válido!", 
            minLength: { value: 3, message: "O complemento precisa ter no mínimo 3 letras!" },
        },
        "Bairro": { 
            required: "Insira um bairro válido!", 
            minLength: { value: 3, message: "O bairro precisa ter no mínimo 3 letras!" },
            pattern: { value: /^[A-Za-z]+$/i, message: "Você precisa usar somente letras!" } 
        },

    }
}

export default errosData