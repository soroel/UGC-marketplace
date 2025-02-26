import json
import africastalking
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

sms = africastalking.SMS


@csrf_exempt
def send_sms(request):
    logger.info(f"Incoming request method: {request.method}")
    logger.info(f"Request headers: {request.headers}")

    if request.method == "POST":
        try:
            data = json.loads(request.body)
            phone_number = data.get("phone")
            logger.info(f"Received phone number: {phone_number}")

            if not phone_number:
                return JsonResponse({"error": "Phone number is required"}, status=400)

            message = "Thank you for subscribing to job alerts!"
            response = sms.send(message, [phone_number], settings.AT_SENDER_ID)

            logger.info(f"SMS API Response: {response}")
            return JsonResponse(response, status=200)

        except Exception as e:
            logger.error(f"Error sending SMS: {str(e)}")
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=405)
