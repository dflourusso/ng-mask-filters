class NgStringMask extends Factory
  constructor: ->
    return (format) ->
      new StringMask format
