class NgMaskCpfCnpj extends Filter
  constructor: (NgStringMask, FORMATS) ->
    clear = (input) ->
      "#{input}".replace /\D/g, ''

    format = (input) ->
      if clear(input).length is 14 then FORMATS.cnpj else FORMATS.cpf

    return (input) ->
      NgStringMask(format(input)).apply input
