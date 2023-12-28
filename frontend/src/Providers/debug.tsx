export default function debugResponse(response:Response) {
    console.log('Response Status:', response.status);
    console.log('Response Headers:', response.headers);
  
    return response.text().then((text) => {
      console.log('Response Body:', text);
      return text;
    });
  }
  
  