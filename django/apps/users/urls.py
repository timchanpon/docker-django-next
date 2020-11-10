from django.urls import path

from . import views

app_name = 'users'
urlpatterns = [
	path('data', views.UserData.as_view()),
]
