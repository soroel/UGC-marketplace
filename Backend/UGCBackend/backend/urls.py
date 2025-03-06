
from django.urls import path
from .views import *
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('sms/send-sms/', csrf_exempt(send_sms), name='send_sms'),
   
   
]

