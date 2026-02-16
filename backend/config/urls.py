from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Admin Panel
    path('admin/', admin.site.urls),

    # All API routes will start with /api/
    path('api/', include('users.urls')),
]
