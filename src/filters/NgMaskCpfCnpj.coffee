class NgMaskCpfCnpj extends Filter
  constructor: (NgStringMask, FORMATS) ->
    return (input) ->
      format = "#{input}".replace(/\D/g, '').length is 14 then FORMATS.cnpj else FORMATS.cpf
      NgStringMask(format).apply input
