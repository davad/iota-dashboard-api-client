# IotaDashboardApi.AdminsApi

All URIs are relative to *https://virtserver.swaggerhub.com/davad/iota-dashboard/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTransaction**](AdminsApi.md#addTransaction) | **POST** /transaction | add a transaction


<a name="addTransaction"></a>
# **addTransaction**
> Transaction addTransaction(opts)

add a transaction

Adds a transaction to the ledger

### Example
```javascript
var IotaDashboardApi = require('iota_dashboard_api');
var defaultClient = IotaDashboardApi.ApiClient.default;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

var apiInstance = new IotaDashboardApi.AdminsApi();

var opts = { 
  'transaction': new IotaDashboardApi.Transaction() // Transaction | Transaction to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTransaction(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction** | [**Transaction**](Transaction.md)| Transaction to add | [optional] 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

