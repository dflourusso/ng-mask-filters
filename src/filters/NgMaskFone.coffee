class NgMaskFone extends Filter
  constructor: (NgStringMask, FORMATS) ->
    return (input) ->
      NgStringMask(FORMATS.fone).apply input
