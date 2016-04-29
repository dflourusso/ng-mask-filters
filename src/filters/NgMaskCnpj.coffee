class NgMaskCnpj extends Filter
  constructor: (NgStringMask, FORMATS) ->
    return (input) ->
      NgStringMask(FORMATS.cnpj).apply input
