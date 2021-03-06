import React, { FC, Fragment, useContext } from 'react'
import Query from 'react-apollo/Query'
import { AuthContext } from '../../../contexts/AuthContext'
import { UserAuthState } from '../../../reducers/auth'
import { SelectInput } from '../../Forms/Inputs/SelectInput'
import { GetAllResellersByUser } from '../../../graphql/queries/Reseller/GetAllResellersByUser'
import { required } from '../../../helpers/validator'

export const SelectResellerInput: FC<any> = ({ ...props }) => {
  const { user } = useContext(AuthContext) as UserAuthState
  let userId = user.id

  return (
    <Query query={GetAllResellersByUser} variables={{ userId }}>
      {({ loading, error, data }) => {
        if (loading || error) return null

        let a: any[] = []

        data.getAllResellersByUser.map(e => {
          a.push({
            value: e.id,
            label: e.name,
          })
        })

        return (
          <Fragment>
            <SelectInput
              validate={required()}
              initialValue="0"
              name="resellerId"
              placeholder={props.name}
              options={a}
            />
          </Fragment>
        )
      }}
    </Query>
  )
}
