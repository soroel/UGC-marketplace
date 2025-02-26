import africastalking


def send_sms_notification(phone_number, message):
    username = "UGC_Marketplace"
    api_key = (
        "atsk_a2c08cb1bad3ee3e6f43f8ddfeb78161fd2086725714ff5c69ef4da60a0f0bf88ec82d63"
    )
    sender = "AFTKNG"
    africastalking.initialize(username, api_key)
    sms = africastalking.SMS

    try:
        response = sms.send(message, [phone_number], sender)
        print("SMS API Response:", response)  # Log the response for debugging
        return response
    except Exception as e:
        print(f"Error while sending SMS: {str(e)}")
        return None
