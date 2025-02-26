from django.urls import path
from .views import send_sms

urlpatterns = [
    path('send_sms/', send_sms, name='send_sms'),
    path('api/', include('UGCBackend.urls')),
]
