export async function POST(request) {
  try {
    // Get the form data from the request
    const formData = await request.json();
    
    // Simulate API processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'tourInterest', 'message'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return new Response(
          JSON.stringify({
            success: false,
            message: `El campo ${field} es requerido`
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      }
    }

    // Simulate successful submission
    return new Response(
      JSON.stringify({
        success: true,
        message: '[SIMULACIÓN] ¡Gracias por contactarnos! Este es un mensaje de demostración. En una aplicación real, los datos se enviarían a un servidor. Tu número de referencia simulado es: ' + `INQ-${Date.now().toString().slice(-6)}`,
        data: {
          referenceNumber: `INQ-${Date.now().toString().slice(-6)}`,
          submittedAt: new Date().toISOString(),
          ...formData,
          note: 'Esta es una respuesta simulada para fines de demostración'
        }
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    
  } catch (error) {
    // Handle any errors
    return new Response(
      JSON.stringify({
        success: false,
        message: '[SIMULACIÓN] Error simulado: El servidor no está procesando solicitudes reales en este momento.'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 