<<<<<<< HEAD
<<<<<<< HEAD
from django.urls import path
from .views import send_sms

urlpatterns = [
    path('send_sms/', send_sms, name='send_sms'),
    path('api/', include('UGCBackend.urls')),
]
=======
=======
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35
from django.urls import path
from .views import send_sms
from .views import csrf_token_view

urlpatterns = [
    path("api/sms/send-sms/", send_sms),
]
<<<<<<< HEAD
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35
=======
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35
