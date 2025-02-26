from django.urls import path
from .views import send_sms
from .views import csrf_token_view

urlpatterns = [
    path("api/sms/send-sms/", send_sms),
]
