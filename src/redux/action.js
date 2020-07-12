import {LOGIN, LOGOUT} from "./types";

export const login = wax => async dispatch => {
  const user = await wax.login()

  dispatch({
    type: LOGIN,
    payload: user
  })
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}



export const transact = wax => async dispatch => {
  const result = await wax.api.transact({
    actions: [{
      account: 'eosio.token',
      name: 'transfer',
      authorization: [{
        actor: wax.userAccount,
        permission: 'active',
      }],
      data: {
        from: wax.userAccount,
        to: 'eosio',
        quantity: '0.00000001 WAX',
        memo: '',
      },
    }]
  }, {
    blocksBehind: 3,
    expireSeconds: 1200,
  });
}
