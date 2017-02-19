# IotaDashboardApi.DevelopersApi

All URIs are relative to *https://virtserver.swaggerhub.com/davad/iota-dashboard/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllTransaction**](DevelopersApi.md#getAllTransaction) | **GET** /transaction | retrieve a list of transactions
[**getTransaction**](DevelopersApi.md#getTransaction) | **GET** /transaction/{transactionId} | retrieve a particular transaction


<a name="getAllTransaction"></a>
# **getAllTransaction**
> [Transaction] getAllTransaction()

retrieve a list of transactions

List all transactions 

### Example
```javascript
var IotaDashboardApi = require('iota_dashboard_api');

var apiInstance = new IotaDashboardApi.DevelopersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllTransaction(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Transaction]**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransaction"></a>
# **getTransaction**
> Transaction getTransaction(transactionId)

retrieve a particular transaction

Look up the details of a particular transaction using it&#39;s id (81 tryte hash) 

### Example
```javascript
var IotaDashboardApi = require('iota_dashboard_api');

var apiInstance = new IotaDashboardApi.DevelopersApi();

var transactionId = "transactionId_example"; // String | pass an optional search string for looking up inventory


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransaction(transactionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| pass an optional search string for looking up inventory | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

