from django.shortcuts import render
import africastalking
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Initialize Africa's Talking API
username = "your_username"  # Use 'sandbox' for testing
api_key = "your_api_key"

africastalking.initialize(username, api_key)
sms = africastalking.SMS

@csrf_exempt
def send_sms(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            phone_number = data.get("phone_number")
            message = data.get("message")

            if not phone_number or not message:
                return JsonResponse({"error": "Phone number and message required"}, status=400)

            # Send SMS
            response = sms.send(message, [phone_number])
            return JsonResponse({"message": "SMS sent successfully", "response": response})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    
    return JsonResponse({"error": "Invalid request"}, status=400)