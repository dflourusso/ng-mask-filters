class NgMaskCnpj extends Filter
  constructor: (NgStringMask) ->
    return (input) ->
      NgStringMask('00.000.000/0000-00').apply input
