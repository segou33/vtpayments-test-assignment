import { FormGroup, Label, Row, Col, Button } from 'reactstrap'
import { Form } from 'informed'
import { required } from '../../../helpers/validator'
import { DisabledFormContext } from '../../../contexts/DisabledFormContext'
import { NameInput } from '../../Forms/Inputs/NameInput'
import { TextInput } from '../../Forms/Inputs/TextInput'
import React, { FC, Fragment, useContext } from 'react'
import { SubmitButton } from '../../Forms/Inputs/SubmitButton'
import { EditMerchantInput } from '../../../../../api/src/types/Api'
import { MerchantErrors } from '../../../types/Errors/MerchantErrors'
import { SelectResellerInput } from '../Input/SelectResellerInput'

interface MerchantFormProps {
  onSubmit: (values: EditMerchantInput) => void
  onCancel?: () => void
  initialValues?: Partial<EditMerchantInput>
  submitting: boolean
  submitText?: string
  error?: MerchantErrors
  data?: any
}

const getErrorMessage = (error: MerchantErrors): string => {
  switch (error) {
    case MerchantErrors.ErrorUpdate:
      return 'Something went wrong during the update of this form'
    default:
      return 'Something went wrong during the validation of this form'
  }
}

export const MerchantEditForm: FC<MerchantFormProps> = ({
  onSubmit,
  onCancel,
  error,
  submitting,
  initialValues,
  data,
  submitText = 'Submit',
}) => {
  const formDisabled = useContext(DisabledFormContext)

  return (
    <Form<EditMerchantInput> onSubmit={onSubmit}>
      {() => (
        <Fragment>
          {error && (
            <span className="text-danger">{getErrorMessage(error)}</span>
          )}
          {data && <span>Merchant Edited successfully</span>}
          <Row>
            <Col sm="12" md="6">
              <FormGroup>
                <Label>Name</Label>
                <NameInput
                  className={'form-control'}
                  name="name"
                  validate={required()}
                  initialValue={initialValues && initialValues.name}
                  placeholder={initialValues && initialValues.name}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6">
              <FormGroup>
                <SelectResellerInput name="Select a reseller" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6">
              <FormGroup>
                <Label>Phone</Label>
                <TextInput
                  name="phone"
                  validate={required()}
                  initialValue={initialValues && initialValues.phone}
                  placeholder={initialValues && initialValues.phone}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6">
              <FormGroup>
                <Label>Country</Label>
                <TextInput
                  name="country"
                  validate={required()}
                  initialValue={initialValues && initialValues.country}
                  placeholder={initialValues && initialValues.country}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6">
              <FormGroup>
                <Label>State</Label>
                <TextInput
                  name="state"
                  validate={required()}
                  initialValue={initialValues && initialValues.state}
                  placeholder={initialValues && initialValues.state}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6">
              <FormGroup>
                <Label>City</Label>
                <TextInput
                  name="city"
                  validate={required()}
                  initialValue={initialValues && initialValues.city}
                  placeholder={initialValues && initialValues.city}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6">
              <FormGroup>
                <Label>Address</Label>
                <TextInput
                  name="address"
                  validate={required()}
                  initialValue={initialValues && initialValues.address}
                  placeholder={initialValues && initialValues.address}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6">
              <FormGroup>
                <Label>ZipCode</Label>
                <TextInput
                  name="zipCode"
                  validate={required()}
                  initialValue={initialValues && initialValues.zipCode}
                  placeholder={initialValues && initialValues.zipCode}
                />
              </FormGroup>
            </Col>
          </Row>

          {!formDisabled && (
            <Fragment>
              <hr />
              <div className="clearfix">
                <SubmitButton submitting={submitting} className="float-right">
                  {submitText}
                </SubmitButton>
                {onCancel && (
                  <Button
                    color="link"
                    className="text-danger float-right"
                    onClick={onCancel}
                    type="button"
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
    </Form>
  )
}
