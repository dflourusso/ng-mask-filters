class NgMaskPlaca extends Filter
  constructor: (NgStringMask, FORMATS) ->
    return (input) ->
      NgStringMask(FORMATS.placa).apply input
