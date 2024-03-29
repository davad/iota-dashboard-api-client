/**
 * IOTA Dashboard API
 * Example of agreggating IOTA transactions from IoT devices
 *
 * OpenAPI spec version: 1.0.0
 * Contact: david@dmwl.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.IotaDashboardApi) {
      root.IotaDashboardApi = {};
    }
    root.IotaDashboardApi.Transaction = factory(root.IotaDashboardApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Transaction model module.
   * @module model/Transaction
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Transaction</code>.
   * @alias module:model/Transaction
   * @class
   * @param sender {String} 
   * @param recipient {String} 
   * @param value {String} 
   */
  var exports = function(sender, recipient, value) {
    var _this = this;


    _this['sender'] = sender;
    _this['recipient'] = recipient;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transaction} obj Optional instance to populate.
   * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
      if (data.hasOwnProperty('recipient')) {
        obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * This value is not set by the API client
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * @member {String} recipient
   */
  exports.prototype['recipient'] = undefined;
  /**
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


