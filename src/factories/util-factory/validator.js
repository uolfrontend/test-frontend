import { Builder } from '../../builder/util-builder'
import { ValidationComposite } from '../../composite/validation-composite'
import {
  emailValidator,
  cpfValidator,
  phoneValidator,
} from '../../util/validator'

export const makeTelaEdicaoValidation = () => {
  return ValidationComposite({
    ...Builder('email', emailValidator()),
    ...Builder('id', cpfValidator()),
    ...Builder('phone', phoneValidator()),
  })
}
