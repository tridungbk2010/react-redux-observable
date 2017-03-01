/**
 * Created by Chris Ho on 6/18/2016.
 */
import * as actionType from '../constants/actionTypes';

export function beginAjaxCall() {
  return {type: actionType.BEGIN_AJAX_CALL};
}

export function ajaxCallError() {
  return {type: actionType.AJAX_CALL_ERROR};
}
