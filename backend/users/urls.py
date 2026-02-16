from django.urls import path
from .views import tournament_list, login_view

urlpatterns = [
    path('tournaments/', tournament_list),
    path('login/', login_view),
]
