
from django.urls import path
from .views import *
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('send-sms/', send_sms, name='send_sms'),
   
   
]

