const mongooseMessageError = require('mongoose')

mongooseMessageError.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongooseMessageError.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo '{MIN}'. "
mongooseMessageError.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo '{MAx}'. "
mongooseMessageError.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'. "