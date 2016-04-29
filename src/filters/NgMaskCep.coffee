class NgMaskCep extends Filter
  constructor: (NgStringMask, FORMATS) ->
    return (input) ->
      NgStringMask(FORMATS.cep).apply input
