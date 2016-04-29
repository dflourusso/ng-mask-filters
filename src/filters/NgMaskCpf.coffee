class NgMaskCpf extends Filter
  constructor: (NgStringMask, FORMATS) ->
    return (input) ->
      NgStringMask(FORMATS.cpf).apply input
