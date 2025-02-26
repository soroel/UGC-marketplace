from django.contrib import admin
<<<<<<< HEAD
from django.urls import path,include
from django.views.generic import TemplateView
from django.conf import settings 
from django.conf.urls.static import static  

=======
from django.urls import include, path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", TemplateView.as_view(template_name="index.html"), name="home"),
    path("<path:resource>", TemplateView.as_view(template_name="index.html")),
    # Replace 'yourapp' with your Django app name
]

# Serve media files during development
<<<<<<< HEAD
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
=======
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
>>>>>>> fa3cd0cd77533018a69cdae829c33b506c65fb35
