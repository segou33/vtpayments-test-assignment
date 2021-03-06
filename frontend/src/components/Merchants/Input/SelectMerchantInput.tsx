import React, { FC, Fragment, useContext } from 'react'
import Query from 'react-apollo/Query'
import { AuthContext } from '../../../contexts/AuthContext'
import { UserAuthState } from '../../../reducers/auth'
import { SelectInput } from '../../Forms/Inputs/SelectInput'
import { GetAllMerchantsByUser } from '../../../graphql/queries/Merchant/GetAllResellersByUser'
import { required } from '../../../helpers/validator'

export const SelectMerchantInput: FC<any> = ({ ...props }) => {
  const { user } = useContext(AuthContext) as UserAuthState
  let userId = user.id

  return (
    <Query query={GetAllMerchantsByUser} variables={{ userId }}>
      {({ loading, error, data }) => {
        if (loading || error) return null

        let a: any[] = []

        data.getAllMerchantsByUser.map(e => {
          a.push({
            value: e.id,
            label: e.name,
          })
        })

        return (
          <Fragment>
            <SelectInput
              onMouseUp={props.onMerchantSelected}
              name="id"
              validate={required()}
              initialValue="0"
              placeholder={props.name}
              options={a}
            />
          </Fragment>
        )
      }}
    </Query>
  )
}
