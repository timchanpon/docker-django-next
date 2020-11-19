from rest_framework_jwt.views import obtain_jwt_token

from django.urls import path

from . import views

app_name = 'users'
urlpatterns = [
	path('login', obtain_jwt_token),

	path('logout', views.logout),
	path('data', views.user_data),
]
