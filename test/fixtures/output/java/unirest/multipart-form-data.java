//Import unirest libarary (http://unirest.io/java.html) 

HttpResponse<String> response = Unirest.post("http://mockbin.com/har")
  .header("content-type", "multipart/form-data; boundary=---011000010111000001101001")
  .body("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"foo\"\r\n\r\nbar\r\n-----011000010111000001101001--")
  .asString();
