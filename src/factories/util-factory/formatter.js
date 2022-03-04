import { Builder } from '../../builder/util-builder'
import { FormatterComposite } from '../../composite/formatter-composite'
import { phoneMask, cpfMask } from '../../util/formatter'

export const makeTelaEdicaoFormatter = () => {
  return FormatterComposite({
    ...Builder('phone', phoneMask()),
    ...Builder('id', cpfMask()),
  })
}
