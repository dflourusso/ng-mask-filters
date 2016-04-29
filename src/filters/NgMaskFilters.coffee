class NgMaskFilters extends Filter
  constructor: (NgStringMask) ->
    return (input, format) ->
      NgStringMask(format).apply input
