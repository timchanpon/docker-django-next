from django.urls import path

from . import views

app_name = 'todos'
urlpatterns = [
	path('create', views.create_todo),
]
