/*
 * Copyright (c) 2020 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Api from '../../../services/Api';

const loginEndPoint = 'instructors/login.php';
const authEndPoint = 'instructors/auth.php';

export default {
  login(data) {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    };
    const config = { headers: headers };
    
    return Api.post(loginEndPoint, data, config);
  },
  authenticate(jwt) {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': `Bearer ${ jwt }`
    };
    const config = { headers: headers };
    const data = new FormData();
    
    return Api.post(authEndPoint, data, config);
  }
};
