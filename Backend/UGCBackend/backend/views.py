from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import africastalking
import json
import logging
from django.conf import settings

# Set up logging
logger = logging.getLogger(__name__)

# Initialize Africa's Talking API
africastalking.initialize(settings.AFRICASTALKING_USERNAME, settings.AFRICASTALKING_API_KEY)
sms = africastalking.SMS

@csrf_exempt
def send_sms(request):
   
    if request.method == 'POST':
        try:
            # Parse JSON data from request body
            data = json.loads(request.body)
            phone_number = data.get("phone")
            message = data.get("message", """Thank you for subscribing to UGC Connect job alerts!
            You'll now receive updates on the latest job opportunities straight to your phone. 
            Stay tuned for exciting career possibilities, and if you ever need to opt out, 
            simply reply "STOP" to unsubscribe. Welcome aboard!""")

            # Validate input
            if not phone_number:
                logger.warning("Phone number is missing in the request.")
                return JsonResponse({"error": "Phone number is required"}, status=400)
            
            

            # Send SMS via Africa's Talking API
            response = sms.send(message, [phone_number])
            logger.info(f"SMS sent successfully to {phone_number}{message}")
            return JsonResponse({"message": "SMS sent successfully", "response": response})

        except json.JSONDecodeError:
            logger.error("Invalid JSON in request body.")
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

        except Exception as e:
            logger.error(f"Error sending SMS: {str(e)}")
            return JsonResponse({"error": str(e)}, status=500)

    # Handle non-POST requests
    logger.warning("Invalid request method. Only POST is allowed.")
    return JsonResponse({"error": "Invalid request method. Use POST."}, status=400)