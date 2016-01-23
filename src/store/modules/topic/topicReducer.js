import { createReducer } from '../../../util'
import { message } from 'antd'
import types from '../../types'
import InitState from './orderInitState'

export default createReducer(new InitState, {
  [`${types.GET_TOPICS_LATEST}_SUCCESS`]: (state, data) => {
    return state.set('latest', data)
  },

  [`${types.GET_TOPICS_HOT}_SUCCESS`]: (state, data) => {
    return state.set('hot', data)
  },

  [`${types.GET_TOPIC_BY_ID}_SUCCESS`]: (state, data, params) => {
    return state.setIn(['topics', params.id], data)
  },

  [`${types.GET_TOPIC_BY_NODE}_SUCCESS`]: (state, data, params) => {
    return state.setIn(['nodeTopics', params.node_id], data)
  },

  [`${types.GET_TOPIC_BY_USER}_SUCCESS`]: (state, data, params) => {
    return state.setIn(['nodeTopics', params.username], data)
  }
})
