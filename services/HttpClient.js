
export default function(objectInput,url){
    var postData = async () => {
        var status = false;
        try {
            const data = JSON.stringify(objectInput);
              
              const requestOptions = {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: data
              };
              
              try {
                const response = await fetch(url, requestOptions);
                // Manejar la respuesta de la solicitud POST
                return await response.json();
              } catch (error) {
                // Manejar el error de la solicitud POST
                return null;
              }
            //ToastAndroid.show(`${data.message}`,ToastAndroid.SHORT);

            // Manejar la respuesta exitosa
        } catch (error) {
            return null;
        }
      };
      
}