class NgMaskCpf extends Filter
  constructor: (NgStringMask) ->
    return (input) ->
      NgStringMask('000.000.000-00').apply input
